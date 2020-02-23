
exports.seed = function(knex) {
  return knex('Avengers').del()
    .then(function () {
      return knex('Avengers').insert([
        {id: 1, name: 'Iron Man', image: 'https://images.squarespace-cdn.com/content/v1/5456738ce4b08a47305126b6/1522865620906-AX6LEA1S0B617DTX014T/ke17ZwdGBToddI8pDm48kILbYGUCpHNBioOm_NkvEu1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxw-MKrUroSoL2yJuECXbHD-vj50hEU0oPp9VGjXl1g3R9k2c1p9aByqu-ngRABhGc/Avengers-Infinity-War-Iron-Man.jpg', clicked: false},
        {id: 2, name: 'Thor', image: 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/1/13/Thor-EndgameProfile.jpg/revision/latest/top-crop/width/360/height/360?cb=20190423174911', clicked: false},
        {id: 3, name: 'Captain America', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9t9X2beYBUdLsmpx4zomoTVGDpWJaHG2I82TTrTck7EU8S3nn', clicked: false},
        {id: 4, name: 'Black Widow', image: 'https://akns-images.eonline.com/eol_images/Entire_Site/201834/rs_634x939-180404133444-634-scarlett-johansson-infinity-war-poster-040418.jpg', clicked: false},
        {id: 5, name: 'Hulk', image: 'https://i.pinimg.com/originals/41/6a/8d/416a8d16543a34f462332379d6a90188.jpg', clicked: false},
        {id: 6, name: 'Scarlet Witch', image: 'https://akns-images.eonline.com/eol_images/Entire_Site/201834/rs_634x939-180404132427-634-elizabeth-olsen-avengers-infinity-war-poster-040418.jpg?fit=around|600:467&crop=600:467;center,top&output-quality=90', clicked: false},
        {id: 7, name: 'Doctor Strange', image: 'https://marvelnewsdesk.com/wp-content/uploads/2018/04/doctor-strange.jpg', clicked: false},
        {id: 8, name: 'Spider-Man', image: 'https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/spider-man-avengers-poster.jpg', clicked: false},
        {id: 9, name: 'Falcon', image: 'https://c4.wallpaperflare.com/wallpaper/456/538/368/falcon-anthony-mackie-5k-sam-wilson-wallpaper-preview.jpg', clicked: false},
        {id: 10, name: 'Gamora', image: 'https://www.elsetge.cat/myimg/f/167-1676581_ipad-avengers-infinity-war-gamora.jpg', clicked: false},
        {id:11, name: 'Shuri', image: 'https://images.hdqwalls.com/wallpapers/shuri-in-avengers-infinity-war-new-poster-hs.jpg', clicked: false},
        {id: 12, name: 'Black Panther', image: 'https://sfzone1-legalbrandmarket.netdna-ssl.com/wp-content/uploads/2019/05/Black-Panther-Avengers-Infinity-War.jpg', clicked: false}
      ]);
    });
};
