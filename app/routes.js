function Routes() {

  this.resource('tables', function () {
    this.resource('table', { path: ':table_id' }, function () {
    });
  });

}

export default Routes;
