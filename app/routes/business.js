import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('business', params.business_id);
  },

  actions: {
    saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      var business = params.business
      business.get('review').addObject(newReview);
      newReview.save().then(function(){
        return business.save();
      });
      this.transitionTo('business');
    }
  }
});
