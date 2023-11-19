const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const genres = require('./routes/genres')
const home = require('./routes/home')
const customer = require('./routes/customer')
const movie = require('./routes/movie')
const rental = require('./routes/rental')



mongoose
  .connect("mongodb://127.0.0.1:27017/vidly")
  .then(() => console.log("Connected sucessfully with mongodb"))
  .catch((err) => console.error("Error occured while connecting", err));


app.use(express.json())
app.use('/api/genres',genres);
app.use('/',home.home)
app.use('/api/customers',customer);
app.use('/api/movies',movie);
app.use('/api/rentals',rental);



const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`Listening in port ${port}`);
})