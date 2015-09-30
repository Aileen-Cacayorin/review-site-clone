import DS from 'ember-data';

export default DS.Model.extend({
   name: DS.attr(),
   address: DS.attr(),
   location: DS.attr(),
   rating: DS.attr(),
   contact: DS.attr(),
   hours: DS.attr(),
   price: DS.attr(),
   city: DS.belongsTo('city', {async: true}),
   review: DS.hasMany('reviews', {async: true}),
   category: DS.hasMany('categories', {async: true})

});
