import Resolver from 'resolver';

var App = Ember.Application.create({
  LOG_ACTIVE_GENERATION: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'appkit', // TODO: loaded via config
  resolver: Resolver
});

import routes from 'appkit/routes';
App.Router.map(routes); // TODO: just resolve the router

App.Store = DS.Store.extend({
  adapter: DS.FixtureAdapter.create()
});

export default App;
