import Ember from 'ember';

const { Route,
        set } = Ember;

export default Route.extend({

  model(){
    return this.modelFor('long-list');
  },

  setupController(controller, albums){
    set(controller, 'albums', albums);
  }

});
