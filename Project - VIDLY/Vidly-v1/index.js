const Joi = require("joi");
const express = require("express");
const app = express();
app.use(express.json()); // middleware to convert incoming http body content to json.

const genres = [
  { id: 1, genre: "Horror" },
  { id: 2, genre: "Drama" },
  { id: 3, genre: "Thriller" },
];

app.get("/api/genres", (req, res) => {
  const name = req.query.name;
  if (!name) return res.send("Enter a name as query paramter");
  res.send(`Hello ${name}`);
});

app.get("/api/genres/:id", (req, res) => {
  const genre = genres.find((genre) => genre.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send("Given ID doesn't have any genres");
  res.send(genre);
});

app.delete("/api/genres/:id", (req, res) => {
  const genre = getGenres(parseInt(req.params.id));
  if (!genre) return res.status(404).send("Given ID doesn't have any genres");
  const index = genres.indexOf(genre);
  genres.splice(index, 1);
  res.send(genre);
});

app.post("/api/genres", (req, res) => {
  const { error } = validateGenre({ genre: req.body.genre });
  if (error) return res.status(400).send(error.message);
  const genre = {
    id: genres.length + 1,
    genre: req.body.genre,
  };
  genres.push(genre);
  res.send(genre);
});

app.put("/api/genres/:id", (req, res) => {
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

app.listen(3000, () => {
  console.log("Listening in port 3000");
});
