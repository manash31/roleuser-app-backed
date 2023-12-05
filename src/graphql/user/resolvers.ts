import { UUID } from 'crypto';
import {prismaClient} from '../../lib/db'

const queries = {

   async getAllUser(){
        const user = await prismaClient.user.findMany();
        return user;
    },

   /*
    async getUserByID(email: string){
        console.log("id :"+email)
       // id=`143b0183-cc62-40b6-b205-97578ca8e735`;
        console.log("id :"+email)
        const user = await prismaClient.user.findUnique({
            where: {email}
        });
        return user;
    }
    */
    getUserByID: async(_: any, {id }: 
        {id: string} ) => {
            console.log(id)
           const uu =  await prismaClient.user.findUnique({
                where: {id}
            })
            return uu;
        },

        deleteUserByID: async(_: any, {id }: 
            {id: string} ) => {
                console.log(id)
            return await  prismaClient.user.delete({
                    where: {id}
                })
               
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