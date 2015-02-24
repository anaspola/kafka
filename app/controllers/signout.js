import Ember from "ember";

export default Ember.Controller.extend({
	signOut:function(){
		this.session.set('user_authentication_token', '');
    	this.session.set('user_id', '');
    	try{
	        this.transitionToRoute('signin');
	    }
	    catch(e){}
	}
});