import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var store = this.get('store');

    var foo = store.createRecord('channel',
      {id: '1', url: 'http://example.com/foo/rss', title: 'Foo Channel'});
    var bar = store.createRecord('channel',
      {id: '2', url: 'http://example.com/bar/rss', title: 'Bar Channel'});

    store.createRecord('item',
      {id: '1', channel: foo, title: 'Fee', link: 'http://example.com/fee', description: 'Feeeee...'});
    store.createRecord('item',
      {id: '2', channel: foo, title: 'Fai', link: 'http://example.com/fai', description: 'Faiiii...'});
    store.createRecord('item',
      {id: '3', channel: foo, title: 'Foe', link: 'http://example.com/foe', description: 'Foooee...'});
    store.createRecord('item',
      {id: '4', channel: bar, title: 'Bee', link: 'http://example.com/bee', description: 'Beeeee...'});
    store.createRecord('item',
      {id: '5', channel: bar, title: 'Bai', link: 'http://example.com/bai', description: 'Baiiii...'});

    return store.all('channel');
  }
});
