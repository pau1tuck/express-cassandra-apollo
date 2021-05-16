"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const cassandra_config_1 = tslib_1.__importDefault(require("../../config/cassandra.config"));
const users = (parent, args, context, info) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield cassandra_config_1.default.instance.UserModel.findAllAsync({}, { raw: "true" });
    return allUsers;
});
exports.default = users;
