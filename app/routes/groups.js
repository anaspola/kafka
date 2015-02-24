import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		// return Ember.RSVP.hash({
  //           group:this.store.find('group')
  //       });
		console.log('entered in groups.index route');

		// return this.store.find('group');
	}
	// renderTemplate: function() {
 //    	this.render({ outlet: 'application_outlet' });
 //  	},
	
});
