import "reflect-metadata";
import "dotenv/config";
import path from "path";
import { v4 } from "uuid";
import express, { Express, Request, Response } from "express";
import session from "express-session";
import { ApolloServer } from "apollo-server-express";
import cassandra from "./config/cassandra.config";
import graphQLSchema from "./config/graphql.config";

const { PORT } = process.env;

const server = async () => {
    const app: Express = express();

    app.set("trust proxy", 1);

    const apolloServer = new ApolloServer({
        schema: graphQLSchema,
    });

    app.listen(PORT, () => {
        console.log(`🚀 Node server running on port ${PORT}`);
    });
};

server().catch(error => {
    console.log(error);
});
