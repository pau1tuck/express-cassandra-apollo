"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const path_1 = tslib_1.__importDefault(require("path"));
const express_cassandra_1 = tslib_1.__importDefault(require("express-cassandra"));
const { NODE_ENV, DB_CONTACT_POINTS, DB_PORT, DB_KEYSPACE } = process.env;
express_cassandra_1.default.setDirectory(path_1.default.join(__dirname, "/models")).bind({
    clientOptions: {
        contactPoints: [DB_CONTACT_POINTS],
        protocolOptions: { port: DB_PORT },
        keyspace: DB_KEYSPACE,
        queryOptions: { consistency: express_cassandra_1.default.consistencies.one },
    },
    ormOptions: {
        defaultReplicationStrategy: {
            class: "SimpleStrategy",
            replication_factor: 1,
        },
        migration: NODE_ENV === "production" ? "safe" : "drop",
    },
    function(error) {
        if (error)
            throw error;
    },
});
exports.default = express_cassandra_1.default;
