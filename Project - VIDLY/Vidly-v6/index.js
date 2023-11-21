const express = require("express");
const logger = require("./utils/logger");
require("express-async-errors");
const app = express();

require("./startup/logging")();
require("./startup/validation")();
require("./startup/config")();
require("./startup/db")();
require("./startup/routes")(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  logger.info(`Listening in port ${port}`);
});
