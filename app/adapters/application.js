import DS from 'ember-data';

//export default DS.FixtureAdapter.extend({
//	queryFixtures: function(fixtures, query, type) {
 //           console.log(query);
 //           console.log(type);
 //           return fixtures.filter(function(item) {
 //               for(prop in query) {
 //                   if( item[prop] !== query[prop]) {
 //                       return false;
 //                   }
 //               }
              // return true;
 //           });
  //     }
//});


export default DS.RESTAdapter.extend({
namespace: 'mghmiddleware/restservices/kafkaMonitor'
});
