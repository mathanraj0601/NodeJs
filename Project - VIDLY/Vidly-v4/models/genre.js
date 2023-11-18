const mongoose = require("mongoose");
const Joi = require("joi");


const genreSchema = new mongoose.Schema({
  id: String,
  genre: {
    type: String,
    required: function () {
      return typeof this.genre === String;
    },
    maxlength: 255,
    minlength: 5,
    // match: /^.*genre$/,
    // get: (v) => `This is a ${v}`,
    // set: (v) => ` ${v}.`,
    // trim: true,
    // lowercase: true,
    // validate: {
      // isAsync: true,
      // validator: function (v, callback) {
        // setTimeout(() => {
        // callback(v && v.length > 5);
        // },2000);
        // return v && v.length > 5;
      // },
      // message: "Should be greater than 5",
    // },
  },
});

const Genre = mongoose.model("Genre", genreSchema);

function validateGenre(genre) {
    const schema = Joi.object({
      genre: Joi.string().min(3).required(),
    });
    return schema.validate(genre);
  }
  

exports.Genre = Genre;
exports.validateGenre = validateGenre();