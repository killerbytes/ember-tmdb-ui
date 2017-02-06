import Ember from 'ember';
import ENV from 'tmdb-ember/config/environment';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  url: `${ENV.APP.HOST}`,
  apiKey: `&api_key=${ENV.APP.API_KEY}`,
  query(query, page=1){
    return this.get('ajax').request(`${this.url}/search/movie?query=${query}&page=${page}${this.apiKey}`);
  }
});
