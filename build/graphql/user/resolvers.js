"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const db_1 = require("../../lib/db");
const queries = {
    getAllUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield db_1.prismaClient.user.findMany();
            return user;
        });
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
    getUserByID: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(id);
        const uu = yield db_1.prismaClient.user.findUnique({
            where: { id }
        });
        return uu;
    }),
    deleteUserByID: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(id);
        return yield db_1.prismaClient.user.delete({
            where: { id }
        });
    })
};
const mutations = {
    createUser: (_, { firstName, lastName, email, password }) => __awaiter(void 0, void 0, void 0, function* () {
        yield db_1.prismaClient.user.create({
            data: {
                email,
                firstName,
                lastName,
                password,
                salt: 'randon_salt'
            },
        });
        return true;
    }),
};
exports.resolvers = { queries, mutations };
