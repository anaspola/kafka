import Ember from "ember";

export default Ember.View.extend({
classNameBindings: [':btn','active'],
	active: function() {
        var activeTab = this.get('controller.activeTab');
		return Boolean(activeTab === this.tab);
	}.property('controller.activeTab'),
	click: function() {
		this.set('controller.activeTab', this.tab);
		console.log(this.get('controller.activeTab'));
	},
    didInsertElement: function() {
        this.$().hide().fadeIn();
    }
});