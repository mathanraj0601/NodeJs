const express = require('express');
const router = express.Router();

const genres = [
    { id: 1, genre: "Horror" },
    { id: 2, genre: "Drama" },
    { id: 3, genre: "Thriller" },
  ];

  
router.get("/:id", (req, res) => {
  const genre = genres.find((genre) => genre.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send("Given ID doesn't have any genres");
  res.send(genre);
});

router.delete(":id", (req, res) => {
  const genre = getGenres(parseInt(req.params.id));
  if (!genre) return res.status(404).send("Given ID doesn't have any genres");
  const index = genres.indexOf(genre);
  genres.splice(index, 1);
  res.send(genre);
});

router.post("/", (req, res) => {
  const { error } = validateGenre({ genre: req.body.genre });
  if (error) return res.status(400).send(error.message);
  const genre = {
    id: genres.length + 1,
    genre: req.body.genre,
  };
  genres.push(genre);
  res.send(genre);
});

router.put("/   :id", (req, res) => {
  const genre = getGenres(parseInt(req.params.id));
  if (!genre) return res.status(404).send("Given ID doesn't have any genres");
  const { error } = validateGenre({ genre: req.body.genre });
  if (error) return res.status(400).send(error.message);
  genre.genre = req.body.genre;
  res.send(genre);
});

function getGenres(id) {
  return genres.find((genre) => genre.id === id);
}

function validateGenre(genre) {
  const schema = Joi.object({
    genre: Joi.string().min(3).required(),
  });
  return schema.validate(genre);
}

module.exports = router;