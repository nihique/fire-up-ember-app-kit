import Table from 'appkit/models/table';

var TableRoute = Ember.Route.extend({

  model: function (params) {
    return Table.find(params.table_id);
  }

});

export default TableRoute;