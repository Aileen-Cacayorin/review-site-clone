export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),

  actions: {
    showMap(business) {
      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(business.get('latitude'), business.get('longitude')),
        //var = map being centered on x and y coordinates.
        zoom: 15
      };

      this.get('map').findMap(container, options);
    }
  }
});
