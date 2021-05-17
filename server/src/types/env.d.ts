declare namespace NodeJS {
    export interface ProcessEnv {
        NODE_ENV: string;
        DEBUG: boolean;
        PORT: string;
        CORS_ORIGIN: string;
        DB_CONTACT_POINTS: string;
        DB_PORT: number;
        DB_KEYSPACE: string;
        REDIS_HOST: string;
        REDIS_PORT: number;
        REDIS_FAMILY: number;
        REDIS_PASS: string;
        SESSION_SECRET: string;
    }
}
