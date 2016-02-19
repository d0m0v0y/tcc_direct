import Ember from 'ember';
import Base from 'ember-simple-auth/authorizers/base';

export default Base.extend({
  authorize(data, block) {
    if (!Ember.isEmpty(data['token'])) {
      block('X-Auth-Token', data['token']);
    }
  }
});
