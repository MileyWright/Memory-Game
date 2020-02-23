
exports.seed = function(knex) {
  return knex('Cartoon')
    .truncate()
    .then(function () {
      return knex('Cartoon').insert([
        {id: 1, show: 'Daria', image: 'https://pmctvline2.files.wordpress.com/2018/06/dara-reboot.jpg?w=620', clicked: 'false'},
        {id: 2, show: 'Rugrats', image: 'https://imgix.ranker.com/user_node_img/98/1948756/original/rugrats-photo-u14?w=650&q=50&fm=pjpg&fit=crop&crop=faces', clicked: 'false'},
        {id: 3, show: 'Dexter\'s Laboratory', image: 'https://m.media-amazon.com/images/M/MV5BNjg5MzhlNGItZjRiMy00ZDM1LWE1OWQtMTk4MTgyMTFmOTZkXkEyXkFqcGdeQXVyODQyNDU4OTk@._V1_.jpg', clicked: 'false'},
        {id: 4, show: 'Doug', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRR-1dg7VaqqHOHLb5JcZpe7Gfl0NdV7knHdiHFFjoZK16gEswQ', clicked: 'false'},
        {id: 5, show: 'Recess', image: 'https://i.redd.it/h4fujmn9wfp11.png', clicked: 'false'},
        {id: 6, show: 'Johnny Bravo', image: 'https://www.redwolf.in/image/catalog/artwork-Images/mens/johnny-bravo-beautiful-eyes-t-shirt-artwork.png', clicked: 'false'},
        {id: 7, show: 'Cow & Chicken', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRoZgT7ConB-WjbbkDA3G8VYNEm6bqaW6hCCf1mwGcQyAZA3Xv', clicked: 'false'},
        {id: 8, show: 'Rocket Power', image: 'https://live.staticflickr.com/4228/34394976323_a3e34a0c22.jpg', clicked: 'false'},
        {id: 9, show: 'Ed, Edd n Eddy', image: 'https://m.media-amazon.com/images/M/MV5BMTA2NzM0MDM3NzNeQTJeQWpwZ15BbWU3MDk0NzgwMDM@._V1_SY1000_CR0,0,1365,1000_AL_.jpg', clicked: 'false'},
        {id: 10, show: 'Courage the Cowardly Dog', image: 'https://images-na.ssl-images-amazon.com/images/I/41xgjPGILRL._AC_SX425_.jpg', clicked: 'false'},
        {id:11, show: 'The Angry Beavers', image: 'https://vignette.wikia.nocookie.net/nickelodeon/images/b/bb/AngryBeavers.png/revision/latest/top-crop/width/360/height/360?cb=20180912165748', clicked: 'false'},
        {id: 12, show: 'Aaahh! Real Monsters', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUSL6YikLqPyxmze3l_OZ2TA67ib811jbyDFZ1fSY0LJVL9VY4', clicked: 'false'}
      ]);
    })
};
