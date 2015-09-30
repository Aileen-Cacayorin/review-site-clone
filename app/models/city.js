import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  business: DS.hasMany('businesses', {async: true}),
  category: DS.hasMany('categories', {async: true})

});
