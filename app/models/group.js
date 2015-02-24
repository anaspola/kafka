import DS from 'ember-data';

 var Group = DS.Model.extend({
  name: DS.attr('string'),
  topics: DS.hasMany('topics',{async:true})

});


// Group.reopenClass({
//  FIXTURES: [
//      {	id: 1, 
//      	name: 'middleware',
//      	 topics:[
//      	 	4,
//      	 	5
//      	 ]
//      },
//      {	id: 2, 
//      	name: 'connect',
//      	 topics:[
// 	      	6,
// 	      	7
//      	 ]
//      }
//   ]
// });


export default Group;