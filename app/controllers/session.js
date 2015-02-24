import Ember from 'ember';

export default Ember.ObjectController.extend({
	user_authentication_token:  "",
    user_id:     "",
  isAuthenticated: function(){
  	console.log('is isAuthenticated outside');
    if(!Ember.isEmpty(this.get('user_authentication_token'))){
  	console.log('is isAuthenticated inside');
      return true;
    }
    return false;
  }.property('user_authentication_token')
});
