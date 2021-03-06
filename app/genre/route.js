import Ember from 'ember';

export default Ember.Route.extend({
  genreService: Ember.inject.service(),
  model(params){
    return Ember.RSVP.hash({
      genres: this.get('genreService').findAll().then(res => {
        return res.genres;
      }),
    })
  },
  setupController(controller, model, transition){
    this._super(...arguments);
    controller.setProperties(transition.params[transition.targetName])
  }
});
