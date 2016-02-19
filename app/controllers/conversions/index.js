import Ember from 'ember';

export default Ember.Controller.extend({
  total: Ember.computed('model.meta.total_entries', function() {
    return this.get('model.meta.total_entries');
  })
});
