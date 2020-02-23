
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Anime').del()
    .then(function () {
      // Inserts seed entries
      return knex('Anime').insert([
        {id: 1, name: 'Goku', show: 'DragonBall Z', image: 'https://media.interaksyon.com/wp-content/uploads/2020/01/Son-Goku.jpg', clicked: 'false'},
        {id: 2, name: 'Monkey D. Luffy', show: 'One Piece', image: 'https://vignette.wikia.nocookie.net/fourworldwarfare/images/5/5f/Monkey_D._Luffy.png/revision/latest/scale-to-width-down/340?cb=20170210105537', clicked: 'false'},
        {id: 3, name: 'Naruto Uzumaki', show: 'Naruto', image: 'https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/naruto-uzumaki-naruto-shippuden-8.09.jpg', clicked: 'false'},
        {id: 4, name: 'Ichigo Kurosaki', show: 'Bleach', image: 'https://sites.google.com/site/bleach2000yourguidetoitsseries/_/rsrc/1415924189907/home/characters/subcategories/shinigami-captains/ichigo-kurosaki/Ichigo%20Kurosaki.jpg?height=1094&width=1933', clicked: 'false'},
        {id: 5, name: 'Izuku Midoriya', show: 'My Hero Academia', image: 'https://qph.fs.quoracdn.net/main-qimg-d69406383d8106d2b9f257594aaeefb6', clicked: 'false'},
        {id: 6, name: 'Lelouch Lamperouge', show: 'Code Geass', image: 'https://cdn1.i-scmp.com/sites/default/files/styles/768x768/public/images/methode/2018/06/05/5fc60a38-689f-11e8-8f2e-7970b9e180c8_1280x720_180423.jpg?itok=VGeQha8M', clicked: 'false'},
        {id: 7, name: 'Kirito', show: 'Sword Art Online', image: 'https://imgix.ranker.com/user_node_img/50081/1001611251/original/d-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces', clicked: 'false'},
        {id: 8, name: 'Revy', show: 'Black Lagoon', image: 'https://thebiem.com/wp-content/uploads/2019/01/Rebecca-Lee-22Revy22.jpg', clicked: 'false'},
        {id: 9, name: 'Clare', show: 'Claymore', image: 'https://scontent-atl3-1.cdninstagram.com/v/t51.2885-15/e35/c160.0.479.479a/79947868_166632277929036_1541961190781924130_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=100&_nc_ohc=K4fqwcTi8tYAX9O0jfX&oh=7a12c0ff08b9a007f987cd824c7a7c8b&oe=5EA094DC', clicked: 'false'},
        {id: 10, name: 'Ken Kaneki', show: 'Tokyo Ghoul', image: 'https://imgix.ranker.com/user_node_img/50082/1001620426/original/never-trust-anyone-too-much-photo-u2?w=650&q=50&fm=pjpg&fit=crop&crop=faces', clicked: 'false'},
        {id:11, name: 'Spike Spiegel', show: 'Cowboy Bebop', image: 'https://www.coserworld.com/image/cache/catalog/private/products/2720/20180810c99d55e0a5878724f33b43991c4af01e-1500x1500_h.jpg', clicked: 'false'},
        {id: 12, name: 'Shiro', show: 'Deadman Wonderland', image: 'https://vignette.wikia.nocookie.net/deadmanwonderland/images/4/47/Wikia-Visualization-Main%2Cdeadmanwonderland.png/revision/latest/window-crop/width/500/x-offset/227/y-offset/0/window-width/573/window-height/572?cb=20161104093039', clicked: 'false'}
      ]);
    });
};
