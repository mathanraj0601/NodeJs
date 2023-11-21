const Fawn = require('fawn');
const express = require("express");
const router = express.Router();
const {Rental, validate} = require('../models/rental');
const {Customer} = require('../models/customer');
const {Movie} = require('../models/movie');
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');
const asyncMiddleware = require('../middlewares/async');

 
Fawn.init("mongodb://127.0.0.1:27017/testDB");

router.get("/", async (req,res)=>{
    const rentals = await Rental.find();
    if( rentals.length ===0 ) return res.status(404).send("No rental found");
    return res.send(rentals);
})


router.post("/",[auth,admin], async (req,res)=>{
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.message);
    const movie = await Movie.findById(req.body.movieId);
    if(!movie)  return res.status(404).send("Movie not found");
    const customer = await Customer.findById(req.body.customerId);
    if(!customer)  return res.status(404).send("customer not found");
    const rental = new Rental({
        customer: customer,
        movie: {
            _id: movie._id,
            title: movie.title,
            dailyRentalRate: movie.dailyRentalRate
        }
    });


    /* below require transaction as it should be executed as unit 
    in mongodb it is acheived using 2 phase commit.
     We are going to use fawn a npm package which act as transaction built on top of 2 phase commit
    await rental.save();
    movie.numberInStocks--;
    await movie.save();
    */

    try{
    // Fawn require collection name

    new Fawn.Task()
        .save('rentals',rental)
        .update('movies',{_id:movie._id},{
            $inc:{
                numberInStocks : -1
            }
        }).run();
    return res.send(rental);
    }
    catch(ex){
        res.status(500).send("Something failed")
    }
});


module.exports = router;
