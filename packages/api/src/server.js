const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send({
    data: "hello-dani",
  });
});

module.exports = app;
