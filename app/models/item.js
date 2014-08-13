import DS from 'ember-data';

var Item = DS.Model.extend({
  channel: DS.belongsTo('channel'),
  title: DS.attr('string'),
  link: DS.attr('string'),
  description: DS.attr('string')
});

//Item.reopenClass({
  //FIXTURES: [
    //{id: 1, channel_id: 1, title: 'Fee', link: 'http://example.com/fee', description: 'Feeeee...'},
    //{id: 2, channel_id: 1, title: 'Fai', link: 'http://example.com/fai', description: 'Faiiii...'},
    //{id: 3, channel_id: 1, title: 'Foe', link: 'http://example.com/foe', description: 'Foooee...'},
    //{id: 4, channel_id: 2, title: 'See', link: 'http://example.com/see', description: 'Seeeee...'},
    //{id: 5, channel_id: 2, title: 'Sai', link: 'http://example.com/sai', description: 'Saiiii...'}
  //]
//});

export default Item;
