import Table from 'appkit/models/table';

var TablesRoute = Ember.Route.extend({

  model: function () {
    return Table.find();
  }

});

export default TablesRoute;