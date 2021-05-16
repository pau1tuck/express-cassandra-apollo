"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("reflect-metadata");
require("dotenv/config");
const express_1 = tslib_1.__importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const graphql_config_1 = tslib_1.__importDefault(require("./config/graphql.config"));
const { PORT } = process.env;
const server = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const app = express_1.default();
    app.set("trust proxy", 1);
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: graphql_config_1.default,
    });
    app.listen(PORT, () => {
        console.log(`🚀 Node server running on port ${PORT}`);
    });
});
server().catch(error => {
    console.log(error);
});
