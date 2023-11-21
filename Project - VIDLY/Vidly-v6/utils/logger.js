const winston = require('winston');
require('winston-mongodb');

const logger = winston.createLogger({
    level: 'error',
    transports: [new winston.transports.File({ filename:'./log/logFile.log'})],
  });
  logger.add(new winston.transports.MongoDB({db:'mongodb://127.0.0.1:27017/vidly'}))
  logger.add(new winston.transports.Console({ level:'info',colorize:true}))

module.exports = logger;