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





averageReview: Ember.computed('business.@each.review.rating', function() {
  var sum=0;
  var numReviews = this.get('business').get('reviews').get('length');
  for(var i=-0; i<numReviews; i++) {
    var rating = this.get('business').objectAt(i).get('rating');
    ratingAverage += rating; //need to divide by length of loop iterations
  }
  return ratingAverage;
})



// averageWaitTime: Ember.computed('tickets.@each.waitTime', function() {
//   var sum=0;
//   for(var i=-0; i<this.get('tickets').get('length'); i++) {
//     var waitTime = this.get('tickets').objectAt(i).get('waitTime');
//     sum += waitTime;
//   return sum;
// })
