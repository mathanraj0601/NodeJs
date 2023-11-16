const express = require('express');
const app = express();
const logger = require('./Middlewares/logger')
const morgan = require('morgan'); // http request logger
const config = require('config'); //Config files
/*
app.use(function(req,res,next){
    console.log("Logging...")
    next(); // Help to handle the request to next function in pipeline.
})
Better way of doing is by having it in seperate file
*/

// Logginng only if application environment is developement
if(app.get('env') === 'development')
{
    app.use(morgan('dev'));
    console.log("Morgan log is enabled")
}

app.use(logger.log) // custom middleware
app.use(express.urlencoded({extended:true})); //  help to convert incoming key-value pair in body to json object
app.use(express.static('files')) // It will serve the static file under the repo named filesl


app.post('/api/middlewares',(req,res)=>{
    console.log(req.body);
    res.end();
})


// Environment variable
const port = process.env.PORT || 3000;

// gives out which environment currently app running.
const portApp = app.get('env');
console.log(portApp);

app.listen(port,()=>{
    console.log(`Listening on Port : ${port}`)
})


// Configuration 

console.log(config.get('name'),"name");
console.log(config.get('info'),"info");
console.log(config.get('mail.password'),"password");

