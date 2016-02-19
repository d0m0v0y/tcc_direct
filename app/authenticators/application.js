import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
import config from '../config/environment';

export default Base.extend({
  authData: Ember.inject.service('auth-data'),

  restore: function(data) {
      return new Ember.RSVP.Promise(function(resolve, reject) {
          if (!Ember.isEmpty(data.token)) {
              resolve(data);
          } else {
              reject();
          }
      });
  },

  authenticate: function(options) {
    var promise =  new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        url: config.apiHost + '/v2/authenticate/login',
        type: 'POST',
        data: {
          nonce: this.get('authData.nonce'),
          security_answer: this.get('authData.securityAnswer'),
          password: this.get('authData.password')
        }
      }).then(function(response) {
          Ember.run(function() {
              resolve({
                token: response.auth_token
              });
          });
      }, function(xhr, status, error) {
          var response = xhr.responseText;
          Ember.run(function() {
            reject(response);
          });
      });
    });
    return promise;
  },

  invalidate: function() {
      console.log('invalidate...');
      return Ember.RSVP.resolve();
  }
});
