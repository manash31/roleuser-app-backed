import {prismaClient} from '../../lib/db'

const queries = {

   async getAllUser(){
        const user = await prismaClient.user.findMany();
        return user;
    }

}
const mutations = {

    createRole: async(_: any, {roleName, roleId }: 
        {roleName: string, roleId: string} ) => {
        await prismaClient.roles.create({
            data:{
                roleName,
                roleId
            },
        });
        return true;
    },
};

export const resolvers = { queries, mutations };