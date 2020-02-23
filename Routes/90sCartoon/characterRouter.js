const express = require('express');
const cartoon = require('./character-model');
const router = express.Router();

// GET /90sCartoon character
router.get('/90sCartoon', (req,res) => {
    cartoon.getCartoon()
    .then(cartoon => {
        res.status(200).json(cartoon)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

// GET /anime character
router.get('/anime', (req,res) => {
    cartoon.getAnime()
    .then(anime => {
        res.status(200).json(anime)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})
//GET /
 router.get('/', (req,res) => {

 })

module.exports = router;