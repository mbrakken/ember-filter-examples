import Ember from 'ember';

const { Route, get, set, inject } = Ember;

export default Route.extend({

  ajax : inject.service(),

  model(){
    let url = 'https://api.capitalcityrecords.ca/public/albums/?collection=ca.epl.capitalcityrecords';

    return get(this, 'ajax').request(url)
      .then(response => {
        return response.map(item => {
          return item.album;
        }).sortBy('main_artist_name', 'title');
      });
  },

  setupController(controller, model){
    this._super(...arguments);
    set(controller, 'albums', model);
  }

});
