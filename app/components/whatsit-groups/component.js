import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Component.extend({
	items: null,
	groups: Ember.computed('items.@each.groupKey', function() {
		let groupedItems = _.groupBy(this.get('items').toArray(), item => item.get('groupKey'));
		return groupedItems;
	}),
	groupKeys: Ember.computed('groups.[]', function() {
		return _.keys(this.get('groups')).sort();
	})
});
