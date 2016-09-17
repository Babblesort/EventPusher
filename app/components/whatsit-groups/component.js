import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Component.extend({
	store: Ember.inject.service(),
	items: null,
	groups: Ember.computed('items.@each.groupKey', function() {
		return _.groupBy(this.get('items').toArray(), item => item.get('groupKey'));
	}),
	groupKeys: Ember.computed('groups.[]', function() {
		return _.keys(this.get('groups')).sort();
	}),
	nextId: 10,
	actions: {
		addOne() {
			this.get('store').createRecord('whatsit', {
				id: this.get('nextId'),
				name: `bar${this.get('nextId')}`,
				rating: 5,
				isGood: false,
				isBad: false,
				groupKey: 'B'
			});
			this.set('nextId', this.get('nextId') + 1);
		}
	}
});
