import DS from 'ember-data';

 var Partition = DS.Model.extend({
  pid: DS.attr('number'),
  lag: DS.attr('number'),
  topic: DS.belongsTo('topic'),
  offset: DS.attr('number')
});

// Partition.reopenClass({
//   FIXTURES: [
//      {id: 8, pid: 0, lag:0, offset:30},
//      {id: 9, pid: 1,  lag:10, offset:0},
//      {id: 10, pid :0,  lag:0, offset:10},
//      {id: 11, pid:1,  lag:30, offset:20},
//      {id: 12, pid: 0, lag:0, offset:30},
//      {id: 13, pid: 1,  lag:10, offset:0},
//      {id: 14, pid :0,  lag:0, offset:10},
//      {id: 15, pid:1,  lag:30, offset:20}
//   ]
// });


export default Partition;