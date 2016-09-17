import Ember from 'ember';

export function groupLookup(params) {
   const [ groupsObject, groupKey ] = params;
   return groupsObject[groupKey];
}

export default Ember.Helper.helper(groupLookup);
