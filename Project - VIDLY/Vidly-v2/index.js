const express = require('express');
const app = express();
const genres = require('./routes/genres')
const home = require('./routes/home')


app.use('/api/genres',genres);
app.use('/',home.home)

const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`Listening in port ${port}`);
})