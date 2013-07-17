import Food from 'appkit/models/food';

var ApplicationRoute = Ember.Route.extend({

  model: function () {
    return { 
      appName: "Fire Up Ember.js"
    };
  },

  setupController: function () {
    var foodController = this.controllerFor('food');
    foodController.set('model', Food.find());
  }
  
});

export default ApplicationRoute;