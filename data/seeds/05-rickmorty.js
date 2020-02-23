
exports.seed = function(knex) {
  return knex('RicknMorty').del()
    .then(function () {
      return knex('RicknMorty').insert([
        {id: 1, name: 'Rick Sanchez', image: 'https://imgix.ranker.com/user_node_img/50094/1001867671/original/wherever-the-universe-blows-you-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces', clicked: false},
        {id: 2, name: 'Morty Smith', image: 'https://vignette.wikia.nocookie.net/rickandmorty/images/c/c7/Capture.PNG/revision/latest/top-crop/width/360/height/360?cb=20170911225322', clicked: false},
        {id: 3, name: 'Summer Smith', image: 'https://vignette.wikia.nocookie.net/rickandmorty/images/a/ad/Summer_is_cool.jpeg/revision/latest/top-crop/width/360/height/360?cb=20160919183158', clicked: false},
        {id: 4, name: 'Jerry Smith', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Rick_and_Morty_characters_-_Jerry_Smith.jpg/220px-Rick_and_Morty_characters_-_Jerry_Smith.jpg', clicked: false},
        {id: 5, name: 'Squanchy', image: 'https://vignette.wikia.nocookie.net/rickandmorty/images/1/16/Squanchy_.png/revision/latest/top-crop/width/360/height/360?cb=20160830140218', clicked: false},
        {id: 6, name: 'Beth Smith', image: 'https://theawesomer.com/photos/2017/12/rick_and_morty_whos_the_real_beth_t.jpg', clicked: false},
        {id: 7, name: 'Birdperson', image: 'https://vignette.wikia.nocookie.net/jemboy-discord/images/b/b1/Birdperson.png/revision/latest/top-crop/width/220/height/220?cb=20171125001039', clicked: false},
        {id: 8, name: 'Scary Terry', image: 'https://vignette.wikia.nocookie.net/rickandmorty/images/8/83/ScaryTerrytransparent.gif/revision/latest/top-crop/width/360/height/360?cb=20160830143250', clicked: false},
        {id: 9, name: 'Jessica', image: 'https://vignette.wikia.nocookie.net/rickandmorty/images/e/e8/Jessica.png/revision/latest/top-crop/width/360/height/360?cb=20150706222334', clicked: false},
        {id: 10, name: 'Dr. Xenon Bloom', image: 'https://pm1.narvii.com/6471/f47b22fcf875abeab2d96bbf1cd3ceba9388cbb2_00.jpg', clicked: false},
        {id:11, name: 'Mr. Poopybutthole', image: 'https://pm1.narvii.com/6422/133d35d8b3d6c3ba640ef8d41df8701a41b328fb_hq.jpg', clicked: false},
        {id: 12, name: 'Mr. Meeseeks', image: 'https://vignette.wikia.nocookie.net/rickandmorty/images/6/6c/MeeseeksHQ.png/revision/latest/top-crop/width/360/height/360?cb=20150930232412', clicked: false}
      ]);
    });
};
