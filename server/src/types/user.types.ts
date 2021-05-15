export interface UserObject {
    id: string;
    facebookId: string;
    googleId: string;
    twitterId: string;
    givenName: string;
    familyName: string;
    city: string;
    region: string;
    country: string;
    email: string;
    password: string;
    verified: boolean;
    roles: string[];
    createdAt: string;
    updatedAt: string;
}

export interface RegisterInput {
    givenName: string;
    familyName: string;
    country: string;
    email: string;
    password: string;
}
