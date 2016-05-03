import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('filtered-array', function() {
    this.route('album', { path: '/:slug' });
  });
  this.route('hidden-elements');
  this.route('subset');
  this.route('long-list', function() {
    this.route('album', { path: '/:slug' });
  });
});

export default Router;
