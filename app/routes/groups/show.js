import Ember from 'ember';

export default Ember.Route.extend({
	groupName:"",
	model: function(params) {
		//var url =  params.group_id+'/'+params.group_name;
        console.log('in groups.show model');
          var gro=this.store.getById('group',params.group_id);
          var a = gro.get('name');
          this.set('groupName',a);
          return this.store.find('topic',{id:params.group_id,name: a});
	},
	setupController: function(controller,model) {
	controller.set('model', model);
    controller.set('Selectedgroup', this.get('groupName'));
  }
});
