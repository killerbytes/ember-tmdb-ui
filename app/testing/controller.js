import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  actions: {
    test(){
      var newPost = this.get('store').createRecord('post', {
        title: 'EmberFire is flaming hot!',
        body: 'You can store and sync data in realtime without a backend.'
      });
      newPost.save();
    }
  }
});
