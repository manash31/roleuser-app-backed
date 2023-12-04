import { ApolloServer } from '@apollo/server';
import { User } from './user'

async function createApolloGraphQLServer () {
     //Create GraphQL Server - GQLServer
     const GQLServer = new ApolloServer({
        // Define Schema as String
        typeDefs: `
            type Query {
             Hello: String
            }
            type Mutation {
                ${User.mutations}
                 }
        `, 
         // Actual function that will filter the data
         resolvers: {
            Query: {
                ...User.resolvers.queries
            },
            Mutation: {
               ...User.resolvers.mutations,
            }
         },
      });

    //Start GQLServer Server
    await GQLServer.start();
    
      return GQLServer;
}

export default createApolloGraphQLServer;