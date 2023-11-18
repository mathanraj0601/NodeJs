const express = require("express");
const router = express.Router();
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

router.get("/:id", async (req, res) => {
  try {
    const genre = await Genre.findById(req.params.id);
    if (!genre) return res.status(404).send("Given ID doesn't have any genres");
    res.send(genre);
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const genre = await Genre.find();
    if (!genre) return res.status(404).send("Given ID doesn't have any genres");
    res.send(genre);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const genre = await Genre.findByIdAndDelete(req.params.id);
    if (!genre) return res.status(404).send("Given ID doesn't have any genres");
    res.send(genre);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  const { error } = validateGenre({ genre: req.body.genre });
  if (error) return res.status(400).send(error.message);
  const genre = new Genre({
    genre: req.body.genre,
  });
  const result = await genre.save();
  res.send(result);
});

router.put("/:id", async (req, res) => {
  const { error } = validateGenre({ genre: req.body.genre });
  if (error) return res.status(400).send(error.message);
  const genre = await Genre.findByIdAndUpdate(
    req.params.id,
    {
      genre: req.body.genre,
    },
    { new: true }
  );
  if (!genre) return res.status(404).send("Given ID doesn't have any genres");
  res.send(genre);
});

function validateGenre(genre) {
  const schema = Joi.object({
    genre: Joi.string().min(3).required(),
  });
  return schema.validate(genre);
}

module.exports = router;
