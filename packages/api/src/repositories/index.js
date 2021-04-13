const { UserRepository } = require("./user-repository");
const { MessageRepository } = require("./message-repository");

module.exports = {
  UserRepo: UserRepository,
  MessageRepo: MessageRepository,
};
