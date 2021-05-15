import { makeExecutableSchema } from "apollo-server-express";
import { UserObject } from "../graphql/user.type";

const graphqlSchema = makeExecutableSchema({
    typeDefs: [UserObject],
});

export default graphqlSchema;
