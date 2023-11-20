const express = require("express");
const router = express.Router();
const {Genre, validateGenre} = require('../models/genre');
const admin = require('../middlewares/admin');
const auth = require("../middlewares/auth");

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

router.delete("/:id",admin, async (req, res) => {
  try {
    const genre = await Genre.findByIdAndDelete(req.params.id);
    if (!genre) return res.status(404).send("Given ID doesn't have any genres");
    res.send(genre);
  } catch (err) {
    console.log(err);
  }
});

router.post("/",[auth,admin], async (req, res) => {
  const { error } =  validateGenre({ genre: req.body.genre });
  if (error) return res.status(400).send(error.message);
  const genre = new Genre({
    genre: req.body.genre,
  });
  const result = await genre.save();
  res.send(result);
});

router.put("/:id",admin, async (req, res) => {
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

module.exports = router;
