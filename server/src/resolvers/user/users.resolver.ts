import models from "../../config/cassandra.config";

const users = async (
    parent: void,
    args: void,
    context: void,
    info: void
): Promise<any> => {
    const allUsers = await models.instance.UserModel.findAllAsync(
        {},
        { raw: "true" }
    );
    return allUsers;
};

export default users;
