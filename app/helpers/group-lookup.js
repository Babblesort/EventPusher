import Ember from 'ember';

export function groupLookup(params) {
   const [ groupsObject, groupKey ] = params;
   const groupItems = groupsObject[groupKey];
   return groupItems;
}

export default Ember.Helper.helper(groupLookup);

