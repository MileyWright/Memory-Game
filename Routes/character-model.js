const db = require('../config/dbConfig');

 module.exports = {
    getCartoon,
    getAnime,
    getAvenger,
    getFamilyGuy,
    getRickMorty
 }

 function getCartoon() {
     return db('Cartoon')
 }

 function getAnime() {
    return db('Anime')
}

 function getAvenger() {
    return db('Avengers')
}
function getFamilyGuy() {
    return db('FamilyGuy')
}
function getRickMorty() {
    return db('RicknMorty')
}
