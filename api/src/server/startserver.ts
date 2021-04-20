import {ApolloServer } from 'apollo-server-express'
import * as cors from 'cors';
import * as express from 'express';
import * as cookieParser from "cookie-parser";
import { verify } from "jsonwebtoken";
import User from "../db/models/users";
import { createTokens } from "./createTokens"
import Stripe from 'stripe';
import getCartForPayment from '#root/helpers/getCartForPayment';
import restoreStock from '#root/helpers/restoreStock'
import stripeCheckout from '#root/helpers/stripeCheckout';
import setCartPaid from '#root/helpers/setCartPaid';
import bilingPurchase from '#root/helpers/billingPurchase';
import resolvers from '#root/graphql/resolvers';
import typeDefs from '#root/graphql/typeDefs';
import accessEnv from '#root/helpers/accessEnv';

import sendOffersNotification from '#root/helpers/sendOffersNotification'

const bodyParser = require('body-parser');
const apiKey = accessEnv("STRIPE_KEY");
const client = accessEnv("CLIENT_ADDRESS")

const stripe = new Stripe(apiKey, {
  apiVersion: '2020-08-27',  // to ensure compatibility with TS
});

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }: any) => ({ req, res })
  });


  const app = express();

  app.use(
    cors({
      origin: client,
      credentials: true,
    })
  );

  app.use(express.json());  
  app.use(cookieParser());
  
  app.get('/status', async (req, res) => {
    res.json({status:'ok'})
  })
  
  // Stripe fullfil EndPoing
  app.post('/webhook', bodyParser.raw({type: 'application/json'}), async (request, response) => {
    
    const payload = request.body;
    let event = request.body;
    let paymentIntent = event.data.object;
    let stockStatus = { 
      userId: '',
      status: '',
    }

    // Handle the event
    switch (event.type) {
      
      case 'payment_intent.succeeded':
        // console.log(`PaymentIntent for ${paymentIntent.amount} was successful!, ID: ${paymentIntent.id}`);
        let setPaid = await setCartPaid(paymentIntent.id)
        console.log('is cart set to paid:', setPaid)
        let mailSended = bilingPurchase(`${setPaid.userId}`, paymentIntent.id);
        break;

      case 'payment_intent.canceled':
        stockStatus = await restoreStock(paymentIntent.id)
        console.log(`PaymentIntent was finished!, ID: ${paymentIntent.id}. Stock has been restore: ${stockStatus}`);
        // get notification if the session expire, or is ended by payment or rejection
        break;

      case 'payment_intent.payment_failed':
        stockStatus = await restoreStock(paymentIntent.id)
        console.log(`PaymentIntent: sommething went wrong with the card!, ID: ${paymentIntent.id}. Stock has been restore: ${stockStatus}`);
        break;

      default:
        // Unexpected event type
    }

    response.status(200);
  });
  
  // Checkout for stripe EndPoint-------------------------------------
  app.post("/checkout", async (req, res) => {
    let {userId}  = req.body;

    let {count, price, status} = await getCartForPayment(userId)

    if (status === 'ok'){
      try{
      const session = await stripeCheckout(count, price, userId, stripe)
      res.json({ id: session.id });
      }
      catch(e){
        console.error(e)
        res.json({ error: 'something went worng' });
      }

    }else{
      res.json({ error: 'seems that the cart for this user is empty' });
    }

  });

  // Loggin endpoint  --------------------------------------------
  app.use(async (req: any, res, next) => {
    const refreshToken = req.cookies["refresh-token"];
    const accessToken = req.cookies["access-token"];
    if (!refreshToken && !accessToken) {
      return next();
    }

    try {
      const data = verify(accessToken, process.env.ACCESS_TOKEN_SECRET!) as any;
      req.userId = data.id;
      return next();
    } catch {}

    if (!refreshToken) {
      return next();
    }

    let data: any;

    try {
      data = verify(refreshToken, process.env.REFRESH_TOKEN_SECRET!) as any;
    } catch {
      return next();
    }

    const user = await User.findOne({
      where: {id: data.id}});

    if (!user || user.count !== data.count) {
      return next();
    }

    const tokens = createTokens(user);

    res.cookie("refresh-token", tokens.refreshToken,{ domain: 'localhost', path: '/' });
    res.cookie("access-token", tokens.accessToken,{ domain: 'localhost', path: '/' });
    req.userId = user.id;
    next();
  });

  // GraphQL endpoint
  server.applyMiddleware({ app, path: "/graphql", cors: false }); // app is from an existing express app

  app.listen({ port: 3001 }, () =>
    console.log(`Server ready at http://localhost:3001${server.graphqlPath}`)
  );
};

startServer();
