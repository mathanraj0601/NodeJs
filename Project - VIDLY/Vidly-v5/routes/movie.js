const express = require('express');
const router = express.Router();
const {Movie, validate} = require('../models/movie');
const admin = require('../middlewares/admin');

router.get("/", async(req,res)=>{
    const movies = await Movie.find();
    if(movies.length === 0) return res.status(404).send("No movie found");
    res.send(movies);
})


router.get("/:id", async(req,res)=>{
    const movie = await Movie.findById(req.params.id);
    if(!movie) return res.status(404).send("movie not found");
    res.send(movie);
})

router.delete("/:id",admin, async(req,res)=>{
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if(!movie) return res.status(404).send("movie not found");
    res.send(movie);
})

router.put("/:id",admin, async(req,res)=>{
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.message);
    try{
        await req.body.validate();
        const movie = await Movie.findByIdAndUpdate(req.params.id,{
            title: req.body.title,
            genre: req.body.genre,
            numberInStocks: req.body.numberInStocks,
            dailyRentalRate: req.body.dailyRentalRate,
        },{
            new:true
        });
        if(!movie) return res.status(404).send("movie not found");
        res.send(movie);
    }
    catch(ex)
    {
        for (err in ex.errors)
        {
            console.log(ex.errors[err].message);
        }
    }
})


router.post("/", async(req,res)=>{
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.message);
    try{
        const movie = new Movie({
            title: req.body.title,
            genre: req.body.genre,
            numberInStocks: req.body.numberInStocks,
            dailyRentalRate: req.body.dailyRentalRate,
        });
        const result =  await movie.save();
        res.send(result);
    }
    catch(ex)
    {
        let error;
        for (err in ex.errors){
            error += ex.errors[err].message;
        }
        res.status(400).send(error);
    }
})


module.exports = router;