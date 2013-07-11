var ApplicationRoute = Ember.Route.extend({

  model: function () {
    return { 
      appName: "Fire Up Ember"
    };
  }
  
});

export default ApplicationRoute;