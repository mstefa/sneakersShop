import updatePaymentId from '#root/helpers/updatePaymentId';
import accessEnv from '#root/helpers/accessEnv';
import discountStock from '#root/helpers/discountStock'
const client = accessEnv("CLIENT_ADDRESS")

export default async function stripeCheckout(count:number, price:number, userId:any, stripe:any) {
  let payment =  {
    price_data: {
      currency: 'ars',
      product_data: {
        name: `Este carrito con ${count} productos esta a punto de ser tuyo!!!`,
      },
      unit_amount: price * 100,  // price should be always on cents. 
    },
    quantity: 1,
  }

  try{
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        payment
      ],
      mode: 'payment',
      success_url: `${client}/success`,
      cancel_url: `${client}/cancel`,
    });

    let isPaymentSaved = await updatePaymentId(userId, session.payment_intent)

    let stockStatus = await discountStock(session.payment_intent)
    console.log(`stockStatus: `, stockStatus)

    return session;

  }
  catch(e){
    throw e
  }
}