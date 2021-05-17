import "reflect-metadata";
import "dotenv/config";
import path from "path";
import { v4 } from "uuid";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import session from "express-session";
import { ApolloServer } from "apollo-server-express";
import models from "./config/cassandra.config";
import graphQLSchema from "./graphql/schema.graphql";
import { TError } from "./types/error.type";

const { PORT, CORS_ORIGIN } = process.env;

const server = async () => {
    const app: Express = express();

    app.set("trust proxy", 1);

    app.use(cors({ origin: String(CORS_ORIGIN), credentials: true }));

    const apolloServer = new ApolloServer({
        schema: graphQLSchema,
    });

    apolloServer.applyMiddleware({ app, cors: false });

    app.listen(PORT, () => {
        console.log(`🚀 Node server running on port ${PORT}`);
    });
};

server().catch((err: TError) => {
    console.log(err);
});
