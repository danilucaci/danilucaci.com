const { Router } = require("express");

const { messageController } = require("../controllers");
const { contactValidationMiddleware } = require("../middlewares");

const messageRouter = Router();

messageRouter.post(
  "/contact",
  contactValidationMiddleware,
  messageController.contact,
);

module.exports = {
  messageRouter: messageRouter,
};
