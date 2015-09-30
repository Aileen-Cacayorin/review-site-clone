import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('city');
  this.route('business');
  this.route('review');
  this.route('category');
});

export default Router;
