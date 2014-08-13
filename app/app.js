import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'glance-rss', // TODO: loaded via config
  Resolver: Resolver
});

//App.Store = DS.Store.extend({
  //revision: 12
//});


    //{ id: "1", url: 'http://example.com/foo/rss' },

loadInitializers(App, 'glance-rss');

export default App;
