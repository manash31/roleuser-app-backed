import {prismaClient} from '../../lib/db'

const queries = {

   async getAllUser(){
        const user = await prismaClient.user.findMany();
        return user;
    }

}
const mutations = {

    createUser: async(_: any, {firstName, lastName, email, password }: 
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
};

export const resolvers = { queries, mutations };