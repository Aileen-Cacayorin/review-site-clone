import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('city', params.city_id);
  },

  actions: {
    saveBusiness(params) {
      var newBusiness = this.store.createRecord('business', params);
      var city = params.city;
      var category = params.category;
      category.get('business').addObject(newBusiness);
      newBusiness.save().then(function() {
        return category.save();
      });

        // .then(function() {
        //   newBusiness.reload();
        // });
      // });
      this.transitionTo('city', city);
    }
  }
});
