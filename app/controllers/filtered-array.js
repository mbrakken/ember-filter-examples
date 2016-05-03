import Ember from 'ember';

const { Controller,
        computed,
        get,
        inject } = Ember;

export default Controller.extend({

  albums : [],

  search : inject.service(),

  filteredAlbums : computed('search.searchString', function(){

    console.log('filtering');

    let searchString = get(this, 'search.searchString'),
        albums       = get(this, 'albums');

    if (searchString) {
      console.log('searchString:',searchString);
      searchString = searchString.toLowerCase();
      let regex = new RegExp('\\b'+ searchString, 'i');
      return albums.filter(function(album) {
        let string = get(album, 'filterableString');
        console.log('filterableString',string);
        return regex.test(get(album, 'filterableString'));
      });
    } else {
      return albums;
    }
  }),

});
