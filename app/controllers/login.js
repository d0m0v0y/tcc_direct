import Ember from 'ember';

export default Ember.Controller.extend({
  authData: Ember.inject.service('auth-data'),

  isFirstStep: Ember.computed('authData.nonce', function() {
    return Ember.isEmpty(this.get('authData.nonce'));
  })
});
