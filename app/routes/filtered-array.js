import Ember from 'ember';
import MusicatAlbum from '../models/musicat-album';

const { Route,
        get,
        inject } = Ember;

export default Route.extend({

  ajax : inject.service(),

  model(){
    let url = 'https://api.capitalcityrecords.ca/public/albums/?collection=ca.epl.capitalcityrecords';

    return get(this, 'ajax').request(url)
      .then(response => {
        return response.map(item => {
          return MusicatAlbum.create(item.album);
        }).sortBy('main_artist_name', 'title');
      });
  }

});
