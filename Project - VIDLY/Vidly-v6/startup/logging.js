const winston = require("winston");

module.exports = function () {
  winston.exceptions.handle([
    new winston.transports.File({ filename: "./log/unhandledException.log" }),
    new winston.transports.Console()]
  );

  process.on("unhandledRejection", (ex) => {
    throw ex;
  });
};
