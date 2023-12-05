"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
exports.typeDefs = `#graphql
       type UU{
                id: String,
                firstName: String,
                lastName: String,
                email: String,
                password: String,
                salt: String,
                role: String,
                Session: String
            }
`;
exports.default = exports.typeDefs;
