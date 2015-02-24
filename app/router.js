import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('groups', function() { 
  	this.route("index");
    this.route('show',{ path: ':group_id' }); 
    this.route("settings");
  });

  this.route("signin");
  this.route("signout");
});

export default Router;
