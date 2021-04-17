const { Router } = require("express");

const { messageController } = require("../controllers");
const { contactValidationMiddleware } = require("../middlewares");

const messageRouter = Router();

messageRouter.post("/api/ping", messageController.ping);

messageRouter.post(
  "/api/contact",
  contactValidationMiddleware,
  messageController.contact,
);

module.exports = {
  messageRouter: messageRouter,
};
