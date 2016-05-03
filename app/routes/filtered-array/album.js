import Ember from 'ember';

const { Route,
        set } = Ember;

export default Route.extend({

  model(params){
    return this.modelFor('filtered-array').findBy('id', params.slug);
  },

  setupController(controller, model){
    set(controller, 'album', model);
  }

});