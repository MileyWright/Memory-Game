
exports.seed = function(knex) {
  return knex('RicknMorty').del()
    .then(function () {
      return knex('RicknMorty').insert([
        {id: 1, name: '', show: '', image: '', clicked: ''},
        {id: 2, name: '', show: '', image: '', clicked: ''},
        {id: 3, name: '', show: '', image: '', clicked: ''},
        {id: 4, name: '', show: '', image: '', clicked: ''},
        {id: 5, name: '', show: '', image: '', clicked: ''},
        {id: 6, name: '', show: '', image: '', clicked: ''},
        {id: 7, name: '', show: '', image: '', clicked: ''},
        {id: 8, name: '', show: '', image: '', clicked: ''},
        {id: 9, name: '', show: '', image: '', clicked: ''},
        {id: 10, name: '', show: '', image: '', clicked: ''},
        {id:11, name: '', show: '', image: '', clicked: ''},
        {id: 12, name: '', show: '', image: '', clicked: ''}
      ]);
    });
};
