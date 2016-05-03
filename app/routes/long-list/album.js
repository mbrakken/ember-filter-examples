import Ember from 'ember';

const { Route,
        set } = Ember;

export default Route.extend({

  model(params){
    return this.modelFor('long-list').findBy('slug', params.slug);
  },

  setupController(controller, model){
    set(controller, 'album', model);
  }

});