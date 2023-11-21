const Joi = require('joi');
const mongoose = require('mongoose');
const { genreSchema } = require('./genre');

const movieSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
    numberInStocks:{
        type: Number,
        required: true,
        min: 0
    },
    dailyRentalRate:{
        type: Number,
        required: true,
        min: 0
    },
    genre:{
        type: genreSchema,
        required: true
    }
});

const Movie = mongoose.model('Movie',movieSchema);

function validate(movie)
{
    const schema =  Joi.object({
        title: Joi.string().min(4).max(255).required(),
        numberInStocks: Joi.number().min(0).required(),
        dailyRentalRate: Joi.number().min(0).required(),
        genre: Joi.required()
    });
    return schema.validate(movie);
}

exports.Movie = Movie;
exports.movieSchema = movieSchema;
exports.validate = validate;
