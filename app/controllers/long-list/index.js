import Ember from 'ember';

const { Controller,
        computed,
        observer,
        get,
        set,
        inject,
        run } = Ember;

export default Controller.extend({

  albums : [],

  search : inject.service(),

  filteredAlbums : computed('search.searchString', function(){

    let searchString = get(this, 'search.searchString'),
        albums       = get(this, 'albums');

    if (searchString) {
      let regex = new RegExp('\\b'+ searchString.toLowerCase(), 'i');
      return albums.filter(album => {
        return regex.test(get(album, 'filterableString'));
      });
    } else {
      return albums;
    }
  })

});
