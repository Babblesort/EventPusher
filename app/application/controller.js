import Ember from 'ember';

export default Ember.Controller.extend({
	model: null,
	alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	randomRating() {
		return Math.floor(Math.random() * 10);
	},
	randomLetter() {
		const letterIndex = Math.floor(Math.random() * this.get('alphabet').length);
		return this.get('alphabet').charAt(letterIndex);
	},
	allowRun: true,
	perpetualAdds: Ember.on('init', function() {
		setInterval(() => {
			if(this.get('allowRun')) {
				this.send('addOne');
			}
		}, 50)
  }),
	actions: {
		addOne() {
			const nextId = this.get('model.length') + 1;
			this.store.createRecord('whatsit', {
				id: nextId,
				name: `bar${nextId}`,
				rating: this.randomRating(),
				isGood: false,
				isBad: false,
				groupKey: this.randomLetter()
			});
		},
		stop() {
			this.set('allowRun', false);
		},
		start() {
			this.set('allowRun', true);
		}
	}
});
