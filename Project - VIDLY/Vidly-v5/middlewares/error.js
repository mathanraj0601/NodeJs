// Error middle ware if error occured in the req pipeline.

module.exports = function (err, req, res, next) {
    console.error(err.message,err);
    return res.status(500).send("Something is failed");
};
