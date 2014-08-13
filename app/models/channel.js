import DS from 'ember-data';

var Channel = DS.Model.extend({
  items: DS.hasMany('item'),
  url: DS.attr('string'),
  title: DS.attr('string')
});

//Channel.reopenClass({
  //FIXTURES: [
    //{ id: "1", url: 'http://example.com/foo/rss' },
    //{ id: "2", url: 'http://example.com/bar/rss' }
  //]
//});

export default Channel;
