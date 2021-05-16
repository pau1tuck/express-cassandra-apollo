import argon2 from "argon2";
import { RegisterInput } from "../../types/user.types";
import models from "../../config/cassandra.config";

const register = async (
    parent: void,
    args: RegisterInput,
    context: any
): Promise<boolean> => {
    const encryptedPassword = await argon2.hash(args.password);
    const newUser = new models.instance.UserModel({
        givenName: args.givenName,
        familyName: args.familyName,
        country: args.country,
        email: args.email,
        password: encryptedPassword,
    });
    await newUser.save((error: any) => {
        if (error) {
            console.log(error);
            throw new Error();
        }
    });
    return true;
};

export default register;
