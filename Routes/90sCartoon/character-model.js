const db = require('../../config/dbConfig');

 module.exports = {
    getCartoon,
    getAnime
 }

 function getCartoon() {
     return db('Cartoon')
 }

 function getAnime() {
    return db('Anime')
}