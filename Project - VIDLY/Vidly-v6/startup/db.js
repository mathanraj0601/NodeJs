const mongoose = require('mongoose');
const logger = require('../utils/logger')

module.exports = function(){
  mongoose
    .connect("mongodb://127.0.0.1:27017/vidly")
    .then(() => logger.info("Connected sucessfully with mongodb"))
}
  
  