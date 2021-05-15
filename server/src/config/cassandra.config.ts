import * as cassandra from "express-cassandra";

const { NODE_ENV, DB_CONTACT_POINTS, DB_PORT, DB_KEYSPACE } = process.env;

const models = cassandra.createClient({
    clientOptions: {
        contactPoints: [DB_CONTACT_POINTS],
        protocolOptions: { port: DB_PORT },
        keyspace: DB_KEYSPACE,
        queryOptions: { consistency: cassandra.consistencies.one },
    },
    ormOptions: {
        defaultReplicationStrategy: {
            class: "SimpleStrategy",
            replication_factor: 1,
        },
        migration: NODE_ENV === "production" ? "safe" : "drop",
    },
});

export default models;
