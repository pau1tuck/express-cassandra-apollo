import "reflect-metadata";
import "dotenv/config";
import path from "path";
import { v4 } from "uuid";
import express, { Express, Request, Response } from "express";
import session from "express-session";

const { PORT } = process.env;

const server = async () => {
    const app: Express = express();

    app.set("trust proxy", 1);

    app.listen(PORT, () => {
        console.log(`🚀 Node server running on port ${PORT}`);
    });
};

server().catch(error => {
    console.log(error);
});
