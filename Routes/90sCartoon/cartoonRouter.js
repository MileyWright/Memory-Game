const express = require('express');
const cartoon = require('./cartoon-model');
const router = express.Router();

// GET /90sCartoon character
router.get('/', (req,res) => {
    cartoon.get()
    .then(cartoon => {
        res.status(200).json(cartoon)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

module.exports = router;