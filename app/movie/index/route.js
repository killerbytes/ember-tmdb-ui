import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      genres: this.modelFor('movie').genres
    })

  },
  setupController(controller, model, transition){
    this._super(...arguments);
    controller.setProperties(transition.params[transition.targetName])
  }
});
