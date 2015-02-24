import Ember from 'ember';

export default Ember.Controller.extend({
	// content:this.store.find('group')
     Selectedgroup: null,
	content:[
     {	id: 1, 
     	name: 'middleware',
     	 topics:[
     	 	4,
     	 	5
     	 ]
     },
     {	id: 2, 
     	name: 'connect',
     	 topics:[
	      	6,
	      	7
     	 ]
     }
  ]
});
