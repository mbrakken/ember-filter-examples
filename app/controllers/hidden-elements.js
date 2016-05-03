import Ember from 'ember';

const { Controller,
        observer,
        get,
        set,
        inject,
        run } = Ember;

export default Controller.extend({

  albums : [],

  search : inject.service(),

  debouncedFilter : observer('search.searchString', function(){

    let searchString  = this.get('search.searchString'),
        defer;

    if (!!searchString) {
      defer = run.debounce(this, this._debouncedFilter, 10);
      set(this, '_currentRun', defer);
    } else {
      defer = get(this, '_currentRun');
      if (defer){
        run.cancel(defer);
        set(this, '_currentRun', null);
      }
      run.once(this, this._showAll);
    }
  }),

  _showAll(){
    get(this, 'albums').forEach(function(album){
      set(album, 'isVisible', true);
    });
  },

  _debouncedFilter(){

    let searchString = get(this, 'search.searchString'),
        albums       = get(this, 'albums');

    if (searchString) {
      let regex = new RegExp('\\b'+ searchString.toLowerCase(), 'i');
      albums.forEach(album => {
        set(album, 'isVisible', regex.test(get(album, 'filterableString')));
      });
    } else {
      this._showAll();
    }
  }

});
