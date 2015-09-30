import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('city');
  },

  actions: {
    saveCity(params) {
      var newCity = this.store.createRecord('city', params);
      var newCategory1 = this.store.createRecord('category', {type: 'Food'});
      var newCategory2 = this.store.createRecord('category', {type: 'Nightlife'});
      var newCategory3 = this.store.createRecord('category', {type: 'Restaurants'});
      var newCategory4 = this.store.createRecord('category', {type: 'Shopping'});
      var newCategory5 = this.store.createRecord('category', {type: 'Active Life'});
      var newCategory6 = this.store.createRecord('category', {type: 'Arts and Entertainment'});
      var newCategory7 = this.store.createRecord('category', {type: 'Automotive'});
      var newCategory8 = this.store.createRecord('category', {type: 'Beauty and Spas'});
      var newCategory9 = this.store.createRecord('category', {type: 'Education'});
      var newCategory10 = this.store.createRecord('category', {type: 'Event Planning and Services'});
      var newCategory11 = this.store.createRecord('category', {type: 'Health and Medical'});
      var newCategory12 = this.store.createRecord('category', {type: 'Home Services'});
      var newCategory13 = this.store.createRecord('category', {type: 'Financial Services'});
      var newCategory14 = this.store.createRecord('category', {type: 'Hotels and Travel'});
      var newCategory15 = this.store.createRecord('category', {type: 'Pets'});
      var newCategory16 = this.store.createRecord('category', {type: 'Public Services and Government'});
      var newCategory17 = this.store.createRecord('category', {type: 'Religious Organizations'});
      var newCategory18 = this.store.createRecord('category', {type: 'Real Estate'});


        newCity.save().then(function() {
          newCategory1.save();
          newCategory2.save();
          newCategory3.save();
          newCategory4.save();
          newCategory5.save();
          newCategory6.save();
          newCategory7.save();
          newCategory8.save();
          newCategory9.save();
          newCategory10.save();
          newCategory11.save();
          newCategory12.save();
          newCategory13.save();
          newCategory14.save();
          newCategory15.save();
          newCategory16.save();
          newCategory17.save();
          newCategory18.save();
          newCity.get('categories').addObject(newCategory1);
          newCity.get('categories').addObject(newCategory2);
          newCity.get('categories').addObject(newCategory3);
          newCity.get('categories').addObject(newCategory4);
          newCity.get('categories').addObject(newCategory5);
          newCity.get('categories').addObject(newCategory6);
          newCity.get('categories').addObject(newCategory7);
          newCity.get('categories').addObject(newCategory8);
          newCity.get('categories').addObject(newCategory9);
          newCity.get('categories').addObject(newCategory10);
          newCity.get('categories').addObject(newCategory11);
          newCity.get('categories').addObject(newCategory12);
          newCity.get('categories').addObject(newCategory13);
          newCity.get('categories').addObject(newCategory14);
          newCity.get('categories').addObject(newCategory15);
          newCity.get('categories').addObject(newCategory16);
          newCity.get('categories').addObject(newCategory17);
          newCity.get('categories').addObject(newCategory18);

          // newCategory.save().then(function() {
            return newCity.save();
        // });
        this.transitionTo('index');
      });
    }
  }

});
