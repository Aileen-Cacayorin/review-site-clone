import Ember from 'ember';

export default Ember.Component.extend({

  averageReview: Ember.computed('business.@each.review.rating', function() {
    var sum=0;
    var numReviews = this.get('business').get('reviews').get('length');
    for(var i=-0; i<numReviews; i++) {
      var rating = this.get('business').objectAt(i).get('rating');
      ratingAverage += rating; //need to divide by length of loop iterations
    }
    return ratingAverage;
  })

});
