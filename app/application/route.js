import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel() {
		this.store.createRecord('whatsit', {
			id: '1',
			name: 'foo',
			rating: 3,
			isGood: false,
			isBad: true
		});
		this.store.createRecord('whatsit', {
			id: '2',
			name: 'bar',
			rating: 9,
			isGood: true,
			isBad: false
		});
		this.store.createRecord('whatsit', {
			id: '3',
			name: 'baz',
			rating: 5,
			isGood: false,
			isBad: false
		});
	},
	model() {
		return this.store.findAll('whatsit');
	}
});
