import { gql } from "apollo-server-express";

export const UserObject = `
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
        roles: String[]
        createdAt: String
        updatedAt: String
    }
`;
