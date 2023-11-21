const config = require('config')
const logger = require('../utils/logger')

module.exports =  function(){
    if(!config.get('jwtPrivateKey'))
    {
      logger.error("FATAL ERROR: Can't get envs");
      process.exit(1);
    }
}

