import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Controller.extend({
  discoverService: Ember.inject.service(),
  search: {
    genre: 1
  },
  actions: {
    submit(){
      this.get('discoverService').query().then(res=>{
        this.set('movies', res);
      });
    }
  }
});
