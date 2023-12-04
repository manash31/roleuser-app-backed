import { ApolloServer } from '@apollo/server';
import { User } from './user'
import { Role } from './role'
import {typeDefs} from './user/typedefs'

async function createApolloGraphQLServer () {
     //Create GraphQL Server - GQLServer
     const GQLServer = new ApolloServer({
        // Define Schema as String
        typeDefs: `
            type UU{
               firstName: String
            }
            type Query {
               getAllUser: [UU]
            }
            type URole{
               roleName: String
            }
            type Query {
               getAllUser: [UU]
               getAllRole: [URole]
            }

            type Mutation {
                ${User.mutations}
                ${Role.mutations}
            }
        `, 
         // Actual function that will filter the data
         resolvers: {
            Query: {
                ...User.resolvers.queries,
                ...Role.resolvers.queries
            },
            Mutation: {
               ...User.resolvers.mutations,
               ...Role.resolvers.mutations
            }
         },
      });

    //Start GQLServer Server
    await GQLServer.start();
    
      return GQLServer;
}

export default createApolloGraphQLServer;