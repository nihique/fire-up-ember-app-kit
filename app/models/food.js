var Food = DS.Model.extend({
  name: DS.attr('string'),
  cents: DS.attr('number'),
  imageUrl: DS.attr('string')
});

Food.FIXTURES = [{
  id: 1,
  name: 'Pizza',
  imageUrl: 'assets/images/pizza.png',
  cents: 1500
}, {
  id: 2,
  name: 'Pancakes',
  imageUrl: 'assets/images/pancakes.png',
  cents: 300
}, {
  id: 3,
  name: 'Fries',
  imageUrl: 'assets/images/fries.png',
  cents: 700
}, {
  id: 4,
  name: 'Hot Dog',
  imageUrl: 'assets/images/hotdog.png',
  cents: 950
}, {
  id: 5,
  name: 'Birthday Cake',
  imageUrl: 'assets/images/birthdaycake.png',
  cents: 2000
}];

export default Food;
