import Ember from 'ember';

export default Ember.Route.extend({
  movieService: Ember.inject.service(),
  model(params){
    return Ember.RSVP.hash({
      recommendations: this.get('movieService').query(params.id, 'recommendations').then(res => {
        return res;
      }),
      similar: this.get('movieService').query(params.id, 'similar').then(res => {
        return res;
      }),
      credits: this.get('movieService').query(params.id, 'credits').then(res => {
        return res;
      }),
      movie: this.get('movieService').findRecord(params.id).then(res => {
        return res;
      })

    })
  }
});
