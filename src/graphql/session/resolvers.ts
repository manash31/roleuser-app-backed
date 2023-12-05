import {prismaClient} from '../../lib/db'

const queries = {

   async getAllRole(){
        const roles = await prismaClient.roles.findMany();
        return roles;
    }

}
const mutations = {

    createSession: async(_: any, {sessionName, sessionId }: 
        {sessionName: string, sessionId: string} ) => {
        await prismaClient.session.create({
            data:{
                sessionName,
                sessionId
            },
        });
        return true;
    },
};

export const resolvers = { queries, mutations };