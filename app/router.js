import Ember from 'ember';

var Router = Ember.Router.extend({
  location: GlanceRssENV.locationType
});

Router.map(function() {
  this.route('about');
  //this.resource('channels');
  this.resource('channel', { path: '/channel/:channel_id' });
});

export default Router;
