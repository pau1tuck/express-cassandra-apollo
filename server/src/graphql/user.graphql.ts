import { gql } from "apollo-server-express";
import users from "../resolvers/user/users.resolver";

export const typeDefs = gql`
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

export const resolvers = {
    Query: () => users,
};
