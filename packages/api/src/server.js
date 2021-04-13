const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const { json } = require("body-parser");
const cors = require("cors");

const { config } = require("./config");
const { errorMiddleware, authMiddleware } = require("./middlewares");
const { messageRouter } = require("./routes");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(json());
app.use(
  cors({
    origin: config.client.url,
    methods: "POST",
    allowedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus: 200,
  }),
);

app.post("/ping", (req, res) => {
  const { message } = req.body || {};

  if (message === "ping") {
    return res.status(200).send({
      data: { message: "pong" },
      error: null,
    });
  }

  return res.status(400).send({
    data: null,
    error: "Bad request",
  });
});

app.use(authMiddleware);
app.use(messageRouter);
app.use(errorMiddleware);

module.exports = {
  app: app,
};
