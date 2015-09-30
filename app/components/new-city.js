import Ember from 'ember';

export default Ember.Component.extend({
  addCityForm: false,

  actions: {
    showCityForm() {
      this.set('addCityForm', true);
    },

    saveCity() {
      var params = {
      name: this.get('name')
      }
      this.set('name', "");
      this.set("addCityForm", false);
      this.sendAction('saveCity', params);
    }
  }
});
