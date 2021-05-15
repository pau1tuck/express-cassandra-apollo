import { RegisterInput } from "../../types/user.types";

const register = async (
    parent: void,
    args: RegisterInput,
    ctx: any
): Promise<Boolean> => {
    return true;
};
