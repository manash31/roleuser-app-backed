import express from 'express'
import { expressMiddleware } from '@apollo/server/express4';
import createApolloGraphQLServer from "./graphql"


async function init(){

    const app = express();
    const PORT = Number(process.env.PORT) || 8000;
    
    //In case of JSON response system need to parse it
    app.use(express.json());

    app.get('/', (req, res) => {
        res.json({message : "Server is up and running"})
    });
    
    const GQLServer = await createApolloGraphQLServer();
    // Expose graphQL Server
    app.use("/graphql",expressMiddleware(GQLServer) )

    app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`))

}

init()