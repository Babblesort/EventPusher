import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel() {
		this.store.createRecord('whatsit', {
			id: '1',
			name: 'foo',
			rating: 3,
			isGood: false,
			isBad: true,
			groupKey: 'A'
		});
		this.store.createRecord('whatsit', {
			id: '2',
			name: 'bar',
			rating: 9,
			isGood: true,
			isBad: false,
			groupKey: 'B'
		});
		this.store.createRecord('whatsit', {
			id: '3',
			name: 'baz',
			rating: 5,
			isGood: false,
			isBad: false,
			groupKey: 'D'
		});
		this.store.createRecord('whatsit', {
			id: '4',
			name: 'qux',
			rating: 9,
			isGood: true,
			isBad: false,
			groupKey: 'C'
		});
		this.store.createRecord('whatsit', {
			id: '5',
			name: 'wiz',
			rating: 2,
			isGood: false,
			isBad: true,
			groupKey: 'C'
		});
	},
	model() {
		return this.store.peekAll('whatsit');
	}
});
