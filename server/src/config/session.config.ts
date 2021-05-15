import { v4 } from "uuid";

const sessionConfig = {
    name: "sid",
    genid: () => v4(),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 30,
        httpOnly: false,
        sameSite: process.env.NODE_ENV === "production" ? true : "lax",
        secure: process.env.NODE_ENV === "production",
    },
    secret: process.env.SESSION_SECRET || "secret",
    resave: false,
    saveUninitialized: false,
};

export default sessionConfig;
