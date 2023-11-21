const express = require('express');
const genres = require('../routes/genres')
const home = require('../routes/home')
const customer = require('../routes/customer')
const movie = require('../routes/movie')
const rental = require('../routes/rental')
const user = require('../routes/user')
const auth = require('../routes/auth')
const error = require('../middlewares/error')

module.exports = function(app)
{
app.use(express.json())
app.use('/api/genres',genres);
app.use('/',home.home)
app.use('/api/customers',customer);
app.use('/api/movies',movie);
app.use('/api/rentals',rental);
app.use('/api/users',user);
app.use('/api/auth',auth);
app.use(error);


}