import Todo from 'appkit/models/todo';

var TablesRoute = Ember.Route.extend({

  model: function () {
    return Todo.find();
  }

});

export default TablesRoute;