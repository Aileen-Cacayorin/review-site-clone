import DS from 'ember-data';

export default DS.Model.extend({
   name: DS.attr(),
   address: DS.attr(),
   location: DS.attr(),
   rating: DS.attr(),
   contact: DS.attr(),
   hours: DS.attr(),
   price: DS.attr(),
   image: DS.attr(),
   latitude: DS.attr('number'),
   longitude: DS.attr('number'),
   city: DS.belongsTo('city', {async: true}),
   review: DS.hasMany('reviews', {async: true}),
   category: DS.belongsTo('category', {async: true})

});
