import { ApolloServer } from '@apollo/server';
import { User } from './user'
import { Role } from './role'
import { Session } from './session'
import {typeDefs} from './user/typedefs'

async function createApolloGraphQLServer () {
     //Create GraphQL Server - GQLServer
     const GQLServer = new ApolloServer({
        // Define Schema as String
        typeDefs: `
     
            ${User.typeDefs}
            ${Role.typeDefs}
            ${User.queries}
            ${Role.queries}
         

           
            type Mutation {
                ${User.mutations}
                ${Role.mutations}
                ${Session.mutations}
            }
        `,
         // Actual function that will filter the data
         resolvers: {
            Query: {
                ...User.resolvers.queries,
                ...Role.resolvers.queries,
                ...Session.resolvers.queries
            },
            Mutation: {
               ...User.resolvers.mutations,
               ...Role.resolvers.mutations,
               ...Session.resolvers.mutations
            }
         },
      });

    //Start GQLServer Server
    await GQLServer.start();
    
      return GQLServer;
}

export default createApolloGraphQLServer;