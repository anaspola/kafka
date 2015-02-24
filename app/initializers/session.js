import Session from '../controllers/session';


export function initialize(container, application ) {
  // application.inject('route', 'foo', 'service:foo');

   application.register('session:main', Session, { instantiate: true, singleton: true });  
    application.inject('adapter', 'session', 'session:main');  
    application.inject('controller', 'session', 'session:main'); 
    application.inject('route', 'session', 'session:main');  
}

export default {
  name: 'session',
  after: ['store'],
  initialize: initialize
};
