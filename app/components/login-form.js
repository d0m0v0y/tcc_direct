import Ember from 'ember';

export default Ember.Component.extend({
  authData: Ember.inject.service('auth-data'),
  session: Ember.inject.service(),

  actions: {
    submit() {
      this.get('session').authenticate('authenticator:application').catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});
