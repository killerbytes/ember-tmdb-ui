import Ember from 'ember';

export default Ember.Route.extend({
  actorService: Ember.inject.service(),
  model(params){
    return Ember.RSVP.hash({
      actor: this.get('actorService').findRecord(params.id)
    })
  }
});
