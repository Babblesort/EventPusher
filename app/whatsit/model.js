import DS from 'ember-data';
import Ember from 'ember';

var { attr } = DS;

export default DS.Model.extend({
	name: attr('string', { defaultValue: '' }),
  note: attr('string', { defaultValue: '' }),
  rating: attr('number'),
  isGood: attr('boolean', { defaultValue: false }),
	isBad: attr('boolean', { defaultValue: false }),
	displayId: Ember.computed('id', function() {
		return `whatsit ${this.get('id')}`;
	}),
	groupKey: attr('string', { defaultValue: 'A'})
});
