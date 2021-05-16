import path from "path";
import models from "express-cassandra";

const { NODE_ENV, DB_CONTACT_POINTS, DB_PORT, DB_KEYSPACE } = process.env;

models.setDirectory(path.join(__dirname, "/models")).bind({
    clientOptions: {
        contactPoints: [DB_CONTACT_POINTS],
        protocolOptions: { port: DB_PORT },
        keyspace: DB_KEYSPACE,
        queryOptions: { consistency: models.consistencies.one },
    },
    ormOptions: {
        defaultReplicationStrategy: {
            class: "SimpleStrategy",
            replication_factor: 1,
        },
        migration: NODE_ENV === "production" ? "safe" : "drop",
    },
    function(error: any) {
        if (error) throw error;
    },
});

export default models;
