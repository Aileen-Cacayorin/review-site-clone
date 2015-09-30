import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr(),
  business: DS.hasMany('businesses')
});
