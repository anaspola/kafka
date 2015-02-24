import Ember from 'ember';

export default Ember.Controller.extend({
	tabs: ['Tab1','Tab2'],
	activeTab: 'Tab1',
    counter: 2,
    needs:["signout"],
    signOutController:Ember.computed.alias('controllers.signout'),
    actions: {
        closeTab: function(tab) {
            var i = this.tabs.indexOf(tab);
            this.tabs.removeAt(i);
            if(tab === this.activeTab) {
                this.set('activeTab',this.tabs.objectAt(0));
            }
        },
        createTab: function() {
        	++this.counter;
            var newTab = 'Tab' + this.counter;
            this.tabs.pushObject(newTab);
            this.set('activeTab',newTab);
        },
        signOut :function() {
            this.get('signOutController').signOut();
        }
    }
});
