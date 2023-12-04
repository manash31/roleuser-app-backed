"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typedefs_1 = require("./typedefs");
const queries_1 = require("./queries");
const mutation_1 = require("./mutation");
const resolvers_1 = require("./resolvers");
exports.User = { typeDefs: typedefs_1.typeDefs, queries: queries_1.queries, mutations: mutation_1.mutations, resolvers: resolvers_1.resolvers };
