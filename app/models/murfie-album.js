import Ember from 'ember';

const { computed, get } = Ember;

export default Ember.Object.extend({

  filterableString : computed('title', 'main_artist_name', 'genre', {
    get(){
      return (get(this, 'title') || '') + ' ' + (get(this, 'main_artist') || '') + ' ' + (get(this, 'genre_name') || '');
    }
  }),

  isVisible : true,

  isHidden  : computed.not('isVisible')

});
