import DS from 'ember-data';
import Ember from 'ember';

var { attr } = DS;

export default DS.Model.extend({
  rating: attr('number'),
	displayId: Ember.computed('id', function() {
		return `whatsit ${this.get('id')}`;
	}),
	groupKey: attr('string', { defaultValue: 'A'})
});
