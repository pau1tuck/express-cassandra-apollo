"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const user_graphql_1 = require("../graphql/user.graphql");
const graphQLSchema = apollo_server_express_1.makeExecutableSchema({
    typeDefs: user_graphql_1.typeDefs,
    resolvers: user_graphql_1.resolvers,
});
exports.default = graphQLSchema;
