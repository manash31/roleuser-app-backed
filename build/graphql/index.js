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
const server_1 = require("@apollo/server");
const user_1 = require("./user");
const role_1 = require("./role");
function createApolloGraphQLServer() {
    return __awaiter(this, void 0, void 0, function* () {
        //Create GraphQL Server - GQLServer
        const GQLServer = new server_1.ApolloServer({
            // Define Schema as String
            typeDefs: `
            type UU{
               firstName: String
            }
            type Query {
               getAllUser: [UU]
            }
            type URole{
               roleName: String
            }
            type Query {
               getAllUser: [UU]
               getAllRole: [URole]
            }

            type Mutation {
                ${user_1.User.mutations}
                ${role_1.Role.mutations}
            }
        `,
            // Actual function that will filter the data
            resolvers: {
                Query: Object.assign(Object.assign({}, user_1.User.resolvers.queries), role_1.Role.resolvers.queries),
                Mutation: Object.assign(Object.assign({}, user_1.User.resolvers.mutations), role_1.Role.resolvers.mutations)
            },
        });
        //Start GQLServer Server
        yield GQLServer.start();
        return GQLServer;
    });
}
exports.default = createApolloGraphQLServer;
