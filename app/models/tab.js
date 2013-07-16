var Tab = DS.Model.extend({
  tabItem: DS.hasMany('App.TabItem')
});

Tab.FIXTURES = [{
  id: 1,
  tabItem: []
}, {
  id: 2,
  tabItem: []
}, {
  id: 3,
  tabItem: []
}, {
  id: 4,
  tabItem: [1, 2, 3, 4, 5]
}, {
  id: 5,
  tabItem: []
}];

export default Tab;