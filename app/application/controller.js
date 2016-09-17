import Ember from 'ember';

export default Ember.Controller.extend({
	model: null,
	alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	randomRating() {
		return Math.floor(Math.random() * 10) + 1;
	},
	randomLetter() {
		const letterIndex = Math.floor(Math.random() * this.get('alphabet').length);
		return this.get('alphabet').charAt(letterIndex);
	},
	allowRun: false,
	perpetualAdds: Ember.on('init', function() {
		setInterval(() => {
			if(this.get('allowRun')) {
				this.send('addOne');
			}
		}, 10)
  }),
  nextId: 100,
	actions: {
		addOne() {
			let next = this.get('nextId');
			this.store.createRecord('whatsit', {
				id: next,
				rating: this.randomRating(),
				groupKey: this.randomLetter()
			});
			this.set('nextId', ++next);
		},
		stop() {
			this.set('allowRun', false);
		},
		start() {
			this.set('allowRun', true);
		}
	}
});
