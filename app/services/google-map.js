import Ember from 'ember';

export default Ember.Service.extend({
  googleMaps: window.google.maps,
  findMap(container, options) {
    debugger;
    // return new this.googleMaps.Map(container, options);
    var map = new google.maps.Map(container, options);

    var marker = new google.maps.Marker({
      position: options.center,
    });
    marker.setMap(map);
    return {map: map, marker: marker};
  },
  center(latitude, longitude) {
    return new this.googleMaps.LatLng(latitude, longitude);
  }
});
