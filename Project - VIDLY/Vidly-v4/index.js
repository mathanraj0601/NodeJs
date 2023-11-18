const express = require('express');
const app = express();
const mongoose = require('mongoose');
const genres = require('./routes/genres')
const home = require('./routes/home')
const customer = require('./routes/customer')

mongoose
  .connect("mongodb://127.0.0.1:27017/vidly")
  .then(() => console.log("Connected sucessfully with mongodb"))
  .catch((err) => console.error("Error occured while connecting", err));


app.use(express.json())
app.use('/api/genres',genres);
app.use('/',home.home)
app.use('/api/customers',customer)

const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`Listening in port ${port}`);
})