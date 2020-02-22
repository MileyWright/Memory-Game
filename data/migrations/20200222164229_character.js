
exports.up = function(knex) {
    return knex.schema.createTable('Cartoon', cartoons => {
        
    }),
    knex.schema.createTable('Anime', anime => {

    }),
    knex.schema.createTable('Avengers', avengers => {
    
    }),
    knex.schema.createTable('FamilyGuy', familyguy => {

    }),
    knex.schema.createTable('RickMorty', rickmorty => {

    })
};

exports.down = function(knex) {
  
};
