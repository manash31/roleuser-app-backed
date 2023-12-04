import {prismaClient} from '../../lib/db'

const queries = {

   async getAllRole(){
        const roles = await prismaClient.roles.findMany();
        return roles;
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