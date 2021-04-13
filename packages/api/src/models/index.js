const { UserModel } = require("./user-model");
const { MessageModel } = require("./message-model");

module.exports = {
  User: UserModel,
  Message: MessageModel,
};
