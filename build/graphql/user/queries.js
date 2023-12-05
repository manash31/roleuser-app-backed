"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queries = void 0;
exports.queries = `#graphql

type Query {
               getAllUser: [UU],
               getUserByID(id: String): UU,
               deleteUserByID(id: String): UU
            }

`;
