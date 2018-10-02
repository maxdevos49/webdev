const express = require('express');
const router = express.Router();
const Points = require("../models/pointsModel.js");

//points route
router.get('/points.html', (req, res) => {
    
    Points.find((err,data) => {
        if (err) throw err;

        res.render("points", { points: data });
    });

});

router.get('/getPoints.html', (req,res) => {

    res.render("getPoints");

});

module.exports = router;