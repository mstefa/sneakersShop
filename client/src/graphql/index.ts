import { ApolloClient,
  NormalizedCacheObject, 
  InMemoryCache, 
  makeVar
} from "@apollo/client";

import {typeDefs} from './typeDef'
import {ProductBasic} from '../types'

export const cache = new InMemoryCache({
  // typePolicies: {
  //   Query: {
  //     fields: {
  //       productForCategory: {
  //         read() {
  //           return loadedProducts();
  //         }
  //       }
  //     }
  //   }
  // }
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  uri: 'http://localhost:3001/graphql',
  // headers: {
  //   authorization: localStorage.getItem('token') || '',
  // },
  credentials: "include",
  typeDefs
});

// Reactive variables. Initialize as an empty array
export const loadedProducts = makeVar<ProductBasic[]>([]);

export default client;