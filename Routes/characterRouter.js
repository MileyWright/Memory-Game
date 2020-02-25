const express = require('express');
const db = require('./character-model');
const router = express.Router();

// GET /90sCartoon character
router.get('/90sCartoon', (req,res) => {
    db.getCartoon()
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
    db.getAnime()
    .then(anime => {
        res.status(200).json(anime)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

// GET /avengers character
router.get('/avengers', (req,res) => {
    db.getAvenger()
    .then(anime => {
        res.status(200).json(anime)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

// GET /familyguy character
router.get('/familyguy', (req,res) => {
    db.getFamilyGuy()
    .then(anime => {
        res.status(200).json(anime)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

// GET /ricknmorty character
router.get('/ricknmorty', (req,res) => {
    db.getRickMorty()
    .then(anime => {
        res.status(200).json(anime)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

module.exports = router;