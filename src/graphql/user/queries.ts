import {typeDefs} from './typedefs.js'
export const queries = `#graphql

type Query {
               getAllUser: [UU],
               getUserByID(id: String): UU,
               deleteUserByID(id: String): UU
            }

`;