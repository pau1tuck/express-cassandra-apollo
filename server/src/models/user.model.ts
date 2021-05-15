const UserModel = {
    fields: {
        id: {
            type: "uuid",
            default: { $db_function: "uuid()" },
        },
        facebookId: "text",
        googleId: "text",
        twitterId: "text",
        givenName: "text",
        familyName: "text",
        city: "text",
        region: "text",
        country: "text",
        email: "text",
        password: "text",
        verified: "boolean",
        roles: {
            type: "list",
            typeof: "string",
        },
    },
    key: ["email", "id"],
    options: {
        timestamps: {
            createdAt: "created_at", // defaults to createdAt
            updatedAt: "updated_at", // defaults to updatedAt
        },
    },
};

export default UserModel;
