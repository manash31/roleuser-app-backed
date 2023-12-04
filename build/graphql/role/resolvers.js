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
    getAllRole() {
        return __awaiter(this, void 0, void 0, function* () {
            const roles = yield db_1.prismaClient.roles.findMany();
            return roles;
        });
    }
};
const mutations = {
    createRole: (_, { roleName, roleId }) => __awaiter(void 0, void 0, void 0, function* () {
        yield db_1.prismaClient.roles.create({
            data: {
                roleName,
                roleId
            },
        });
        return true;
    }),
};
exports.resolvers = { queries, mutations };
