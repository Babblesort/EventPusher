import Ember from 'ember';

export default Ember.Controller.extend({
	alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	nextId: 10,
	randomLetter() {
		const letterIndex = Math.floor(Math.random() * this.get('alphabet').length);
		return this.get('alphabet').charAt(letterIndex);
	},
	actions: {
		addOne() {
			this.store.createRecord('whatsit', {
				id: this.get('nextId'),
				name: `bar${this.get('nextId')}`,
				rating: 5,
				isGood: false,
				isBad: false,
				groupKey: this.randomLetter()
			});
			this.set('nextId', this.get('nextId') + 1);
		}
	}
});
