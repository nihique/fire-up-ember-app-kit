import Todo from 'appkit/models/todo';

var TableRoute = Ember.Route.extend({

  model: function (params) {
    return Todo.find(params.table_id);
  }

});

export default TableRoute;