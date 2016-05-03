import Ember from 'ember';
import MurfieAlbum from '../models/murfie-album';

const { Route,
        get,
        set,
        inject } = Ember;

export default Route.extend({

  ajax : inject.service(),

  model(){
    let url = 'https://api.murfie.com/albums';

    return get(this, 'ajax').request(url)
      .then(response => {
        return response.albums.map(item => {
          return MurfieAlbum.create(item.album);
        }).sortBy('main_artist', 'title');
      });
  },

  setupController(controller, model){
    set(controller, 'albums', model);
  }

});