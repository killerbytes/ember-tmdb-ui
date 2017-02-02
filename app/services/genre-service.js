import Ember from 'ember';
import ENV from 'tmdb-ember/config/environment';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  url: `${ENV.APP.HOST}`,
  apiKey: `&api_key=${ENV.APP.API_KEY}`,
  findAll(){   // /genre/movie/list
    return $.get(`${this.url}/genre/movie/list?${this.apiKey}`)
  },
  findRecord(genreId, page=1){   // /genre/{genre_id}/movies
    return $.get(`${this.url}/genre/${genreId}/movies?page=${page}${this.apiKey}`)
  }
});
