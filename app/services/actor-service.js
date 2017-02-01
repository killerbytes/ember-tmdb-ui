import Ember from 'ember';
import ENV from 'tmdb-ember/config/environment';

export default Ember.Service.extend({
  url: `${ENV.APP.HOST}/person`,
  apiKey: `&api_key=${ENV.APP.API_KEY}`,
  findRecord(id){
    return $.get(`${this.url}/${id}?append_to_response=videos,images,movie_credits${this.apiKey}`)
  },
  movieCredits(id){
    return $.get(`${this.url}/${id}/movie_credits?api_key=${this.apiKey}`)
  },
  images(id){
    return $.get(`${this.url}/${id}/images?api_key=${this.apiKey}`)
  }
});
