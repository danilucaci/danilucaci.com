const app = require("./server");
// const config = require("./config");
// const connect = require("./db/connect");

// connect().then(async () => {
//   config.logger.info(`DB connected`);

//   app.listen(config.port, () => {
//     config.logger.info(`Server running at http://localhost:${config.app.PORT}`);
//   });
// });

app.listen(4000, () => {
  console.log(`Server running at http://localhost:${4000}`);
});
