import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin);

export default Ember.Route.extend({
  authData: Ember.inject.service('auth-data'),

  model() {
    return this.get('authData');
  },
});
