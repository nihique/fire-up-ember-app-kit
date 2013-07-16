import Resolver from 'resolver';

var App = Ember.Application.create({
  LOG_ACTIVE_GENERATION: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'appkit', 
  resolver: Resolver
});

init();

// private methods

function init() {
  initRoutes();
  initModels();
  initStore();
}

function initRoutes() {
  import Routes from 'appkit/routes';
  App.Router.map(Routes); 
}

function initModels() {
  import Table from 'appkit/models/table';
  App.Table = Table;

  import Tab from 'appkit/models/tab';
  App.Tab = Tab;

  import TabItem from 'appkit/models/tab_item';
  App.TabItem = TabItem;

  import Food from 'appkit/models/food';
  App.Food = Food;
} 

function initStore() {
  import Store from 'appkit/store';
  App.Store = Store;
}

// export

export default App;
