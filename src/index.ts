import express from 'express'
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { prismaClient } from './lib/db';


async function init(){

    const app = express();
    const PORT = Number(process.env.PORT) || 8000;
    
    //In case of JSON response system need to parse it
    app.use(express.json());

    //Create GraphQL Server - GQLServer
    const GQLServer = new ApolloServer({
        // Define Schema as String
        typeDefs: `
            type Query {
                hello: String
                say(name: String): String
            }
            type Mutation {
                createUser(firstName: String!, lastName: String!,  email: String!, password: String!): Boolean
            }
        `, 
         // Actual function that will filter the data
         resolvers: {
            Query: {
                hello: () => `Hey there I am a GraphQL Server`,
                say: (_, {name}: {name: string}) => `Hey ${name}, How are you??`,
            },
            Mutation: {
                createUser: async(_, {firstName, lastName, email, password }: 
                    {firstName: string, lastName: string, email: string, password: string} ) => {
                    await prismaClient.user.create({
                        data:{
                            email,
                            firstName, 
                            lastName,
                            password,
                            salt: 'randon_salt'
                        },
                    });
                    return true;
                },
            }
         },
      });
    
    
    //Start GQLServer Server
    await GQLServer.start();
    
    app.get('/', (req, res) => {
        res.json({message : "Server is up and running"})
    });
    

    // Expose graphQL Server
    app.use("/graphql",expressMiddleware(GQLServer) )

    app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`))

}

init()