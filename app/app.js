import Resolver from 'resolver';

var App = Ember.Application.create({
  LOG_ACTIVE_GENERATION: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'appkit', 
  resolver: Resolver
});

import Routes from 'appkit/routes';
App.Router.map(Routes); 

import Store from 'appkit/store';
App.Store = Store;

export default App;
