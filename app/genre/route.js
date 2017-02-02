import Ember from 'ember';

export default Ember.Route.extend({
  genreService: Ember.inject.service(),
  model(params){
    return Ember.RSVP.hash({
      genres: this.get('genreService').findAll().then(res=>{
        return res.genres;
      }),
      // items: this.get('genreService').findRecord(params.id)
    })
  }
});
