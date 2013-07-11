function Routes() {

  this.resource('ordr', function() {
    this.resource('tables', function () {
      this.resource('table', function () {
      });
    });
  });

}

export default Routes;
