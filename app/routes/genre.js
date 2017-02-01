import Ember from 'ember';

export default Ember.Route.extend({
  movieService: Ember.inject.service(),
  model(params){
    return this.get('movieService').genre(params.id);
  }
});
