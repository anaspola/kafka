import DS from 'ember-data';

 var Topic = DS.Model.extend({
  name: DS.attr('string'),
  group: DS.belongsTo('group'),
  partitions: DS.hasMany('partitions',{async:true})
});



// Topic.reopenClass({
//  FIXTURES: [
//      {	id: 4, 
//      	name: 'localci.connect.assignment.update', 
//      	partitions:[
//      		8,
//      		9
//      	]
//      },
//      {	id: 5, 
//      	name: 'localci.connect.assignment.update.middleware.fail', 
//      	partitions:[
//      		10,
//      		11
//      	]
//      },
//      {	id: 6, 
//      	name: 'localci.connect.grade.create', 
//      	partitions:[
//      		12,
//      		13
//      	]
//      },
//      {	id: 7, 
//      	name: 'localci.connect.grade.create.middleware.fail', 
//      	partitions:[
//      		14,
//      		15
//      	]
//     }
//   ]
// });



export default Topic;