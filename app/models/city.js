import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  business: DS.hasMany('businesses', {async: true}),
  categories: DS.hasMany('category', {async: true})

});
