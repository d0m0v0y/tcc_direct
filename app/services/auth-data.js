import Ember from 'ember';
import config from '../config/environment';

export default Ember.Service.extend({
  loginId: null,
  nonce: null,
  securityQuestion: null,
  securityCode: null,
  securityAnswer: null,
  password: null,

  routing: Ember.inject.service('-routing'),

  setUserResponse: function(payload){
    this.set('nonce', payload.nonce);
    this.set('securityQuestion', payload.security_question);
    this.set('securityCode', payload.security_code);
  },

  processUserRequest(loginId) {
    this.set('loginId', loginId);
    var request = new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        url: config.apiHost + '/v2/authenticate/user',
        type: 'GET',
        data: {
          login_id: this.loginId
        },
        success: function(response) {
          resolve(response);
        },
        error: function(reason) {
          reject(reason);
        }
      });
    });

    var self = this;

    request.then(function(response) {
      Ember.run(function() {
        self.setUserResponse(response);
      });
      Ember.Logger.info("userResponse:", self);
      //self.get("routing").transitionTo("login");
    }, function(error) {
      Ember.run(function() {
        Ember.Logger.info("userResponse error:", error);
      });
    });
  }
});
