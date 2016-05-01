import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('filtered-array');
  this.route('hidden-elements');
  this.route('subset');
});

export default Router;
