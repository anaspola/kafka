import Ember from 'ember';

export default Ember.Route.extend({		
		model: function(params) {
		console.log('entered in topics.show route');
	    return Ember.$.getJSON('topics/'+params.group_id+'/'+params.group_name);
	},
    serialize: function(model) {
   return {group_id: model.get('id'), group_name: model.get('name')};
     }
});
