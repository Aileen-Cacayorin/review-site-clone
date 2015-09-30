import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('city', {path: 'city/:city_id'});
  this.route('business');
  this.route('review');
  this.route('category', {path: 'category/:category_id'});
});

export default Router;
