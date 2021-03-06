import Ember from 'ember';

export default Ember.Component.extend({
  addBusinessForm: false,

  actions: {
    showBusinessForm() {
      this.set('addBusinessForm', true);
    },

    saveBusiness() {

      debugger;
      var params = {
        name: this.get('name'),
        address: this.get('address'),
        contact: this.get('contact'),
        hours: this.get('hours'),
        price: this.get('price'),
        category: this.get('category'),
        image: this.get('image'),
        city: this.get('city'),
        latitude: this.get('latitude'),
        longitude: this.get('longitude'),
        rating: 5,
        location: 1234
      };
      this.set('addBusinessForm', false);
      this.sendAction('saveBusiness', params);
      this.set('address', "");
      this.set('contact', "");
      this.set('hours', "");
      this.set('price', "");
      this.set('name', "");
      this.set('image', "");
    }
  }

});
