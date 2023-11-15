const http = require('http');

//High level way 
const server = http.createServer((req,res)=>{
    if( req.url === '/' ) 
    {
        res.write("hello world"); //response message
        res.end();
    }

    if( req.url === '/list')
    {
        res.write(JSON.stringify([1,2,3])); // Sendig back an object
        res.end() //end a request otherwise there is no response
    }
});


/*
Low level way of responding to request.
const server = http.createServer();
server.on('connection', (socket)=>{
    console.log(socket);
})
*/


server.listen(3000); //emit an http event when request hit;

/* 
Standard way of doing this is using express framework 
which is built in top of http client
*/