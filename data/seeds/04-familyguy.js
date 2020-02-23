
exports.seed = function(knex) {
  return knex('FamilyGuy').del()
    .then(function () {
      return knex('FamilyGuy').insert([
        {id: 1, name: 'Stewie Griffin', image: 'https://vignette.wikia.nocookie.net/familyguyfanon/images/0/02/Stewie_Griffin.png/revision/latest/scale-to-width-down/340?cb=20161119043926', clicked: false},
        {id: 2, name: 'Peter Griffin', image: 'https://vignette.wikia.nocookie.net/familyguy/images/5/5d/FGuy_Peter_Gen2012_R3Flat.jpg/revision/latest/top-crop/width/360/height/360?cb=20190415212304', clicked: false},
        {id: 3, name: 'Lois Griffin', image: 'https://vignette.wikia.nocookie.net/family-guy-the-quest-for-stuff/images/c/cf/Facespace_portrait_loisgriffin_default%404x.png/revision/latest/scale-to-width-down/340?cb=20140420142401', clicked: false},
        {id: 4, name: 'Tom Tucker', image: 'https://comicvine1.cbsistatic.com/uploads/scale_small/13/135098/6805214-tom-tucker.jpg', clicked: false},
        {id: 5, name: 'Meg Griffin', image: 'https://i.pinimg.com/originals/e1/7e/c3/e17ec302d9d0e8c9ce4dd2ea33003350.png', clicked: false},
        {id: 6, name: 'Greased Up Deaf Guy', image: 'https://i.ytimg.com/vi/lH-U1BRJ-RE/hqdefault.jpg', clicked: false},
        {id: 7, name: 'Glenn Quagmire', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8NS_dJaNWvScs07P5HpH-JYQAQ6o0j88e4obkmFLHECtYTmTJ', clicked: false},
        {id: 8, name: 'Joe Swanson', image: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-family-guy-Patrick-Warburton.jpg', clicked: false},
        {id: 9, name: 'Cleveland Brown', image: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-11/12/17/enhanced/webdr02/longform-original-22607-1415830117-16.png?crop=800:800;0,21&downsize=400:*&output-format=auto&output-quality=auto', clicked: false},
        {id: 10, name: 'Herbert', image: 'https://vignette.wikia.nocookie.net/familyguy/images/d/d1/Herbert.JPG/revision/latest/top-crop/width/360/height/360?cb=20060929205023', clicked: false},
        {id:11, name: 'Adam West', image: 'https://upload.wikimedia.org/wikipedia/en/a/a3/Adam_West_on_Family_Guy.png', clicked: false},
        {id: 12, name: 'Connie D-Amico', image: 'https://lh5.googleusercontent.com/-Avq1keH2fPI/AAAAAAAAAAI/AAAAAAAAAB0/PDmo14RtJJc/photo.jpg', clicked: false}
      ]);
    });
    
};
