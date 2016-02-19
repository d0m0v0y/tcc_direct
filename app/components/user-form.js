import Ember from 'ember';

export default Ember.Component.extend({
  authData: Ember.inject.service('auth-data'),

  actions: {
    submit() {
      this.get('authData').processUserRequest(this.get('loginId'));
    }
  }
});
