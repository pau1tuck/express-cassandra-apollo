"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const argon2_1 = tslib_1.__importDefault(require("argon2"));
const cassandra_config_1 = tslib_1.__importDefault(require("../../config/cassandra.config"));
const register = (parent, args, context) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const encryptedPassword = yield argon2_1.default.hash(args.password);
    const newUser = new cassandra_config_1.default.instance.UserModel({
        givenName: args.givenName,
        familyName: args.familyName,
        country: args.country,
        email: args.email,
        password: encryptedPassword,
    });
    yield newUser.save((error) => {
        if (error) {
            console.log(error);
            throw new Error();
        }
    });
    return true;
});
exports.default = register;
