const db = require('../../config/dbConfig');

 module.exports = {
    get
 }

 function get() {
     return db('Cartoon')
 }