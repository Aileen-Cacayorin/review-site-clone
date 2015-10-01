import Ember from 'ember';

export default Ember.Component.extend({
  addReviewForm: false,

  actions: {
    showReviewForm() {
      this.set('addReviewForm', true);
    },

    saveReview() {
      var params = {
        author: this.get('author'),
        date: new Date(),
        rating: this.get('rating'),
        body: this.get('body'),
        repeat: this.get('repeat'),
        business: this.get('business')
      };
      this.sendAction('saveReview', params);
      this.set('rating', "");
      this.set('body', "");
      this.set('repeat', "");
      this.set('author', "");

    }
  }
});
