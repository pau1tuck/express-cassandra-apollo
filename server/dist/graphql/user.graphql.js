"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.typeDefs = void 0;
const tslib_1 = require("tslib");
const apollo_server_express_1 = require("apollo-server-express");
const users_resolver_1 = tslib_1.__importDefault(require("../resolvers/user/users.resolver"));
exports.typeDefs = apollo_server_express_1.gql `
    type User {
        id: String!
        facebookId: String
        googleId: String
        twitterId: String
        givenName: String
        familyName: String
        city: String
        region: String
        country: String
        email: String
        password: String
        verified: Boolean
        roles: [String]
        createdAt: String
        updatedAt: String
    }

    type Query {
        users: [User]
    }
`;
exports.resolvers = {
    Query: () => users_resolver_1.default,
};
