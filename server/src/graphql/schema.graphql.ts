import { merge } from "lodash";
import { makeExecutableSchema } from "apollo-server-express";
import { typeDefs as User, resolvers as userResolvers } from "./user.graphql";

const graphQLSchema = makeExecutableSchema({
    typeDefs: User,
    resolvers: userResolvers,
});

export default graphQLSchema;
