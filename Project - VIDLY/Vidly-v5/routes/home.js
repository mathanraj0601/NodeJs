const express  = require('express');
const router = express.Router();
const asyncMiddleware = require('../middlewares/async');


router.get("/", asyncMiddleware((req, res) => {
    const name = req.query.name;
    if (!name) return res.send("Enter a name as query paramter");
    res.send(`Hello ${name}`);
  }));


module.exports.home = router;