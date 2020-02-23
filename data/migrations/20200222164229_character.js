
exports.up = function(knex) {
    return knex.schema
    .createTable('Cartoon', cartoons => {
       cartoons.increments()
       cartoons.string('show', 126)
       .notNullable();
       cartoons.string('image', 255)
       .notNullable()
       .unique();
       cartoons.boolean('clicked')
       .notNullable();
    })
    .createTable('Anime', anime => {
        anime.increments()
        anime.string('name', 126)
        .notNullable()
        .unique();
        anime.string('show', 126)
        .notNullable();
        anime.string('image', 255)
        .notNullable()
        .unique();
        anime.boolean('clicked')
        .notNullable();
    })
    .createTable('Avengers', avengers => {
        avengers.increments()
        avengers.string('name', 126)
        .notNullable()
        .unique();
        avengers.string('image', 255)
        .notNullable()
        .unique();
        avengers.boolean('clicked')
        .notNullable();
    })
    .createTable('FamilyGuy', familyguy => {
        familyguy.increments()
        familyguy.string('name', 126)
        .notNullable()
        .unique();
        familyguy.string('image', 255)
        .notNullable()
        .unique();
        familyguy.boolean('clicked')
        .notNullable();
    })
    .createTable('RicknMorty', rickmorty => {
        rickmorty.increments()
        rickmorty.string('name', 126)
        .notNullable()
        .unique();
        rickmorty.string('image', 255)
        .notNullable()
        .unique();
        rickmorty.boolean('clicked')
        .notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('RicknMorty')
    .dropTableIfExists('FamilyGuy')
    .dropTableIfExists('Avengers')
    .dropTableIfExists('Anime')
    .dropTableIfExists('Cartoon')
};
