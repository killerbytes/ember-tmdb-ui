import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.query('genre', {genreid: params.id})
  }
});
