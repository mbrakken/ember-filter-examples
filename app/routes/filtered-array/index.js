import Ember from 'ember';

const { Route,
        set } = Ember;

export default Route.extend({

  model(){
    return this.modelFor('filtered-array');
  },

  setupController(controller, albums){
    set(controller, 'albums', albums);
  }

});
