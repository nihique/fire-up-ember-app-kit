var TabItem = DS.Model.extend({
  food: DS.belongsTo('App.Food'),
  cents: DS.attr('number')
});

TabItem.FIXTURES = [{
  id: 1,
  cents: 1500,
  food: 1
}, {
  id: 2,
  cents: 300,
  food: 2
}, {
  id: 3,
  cents: 700,
  food: 3
}, {
  id: 4,
  cents: 950,
  food: 4
}, {
  id: 5,
  cents: 2000,
  food: 5
}];

export default TabItem;