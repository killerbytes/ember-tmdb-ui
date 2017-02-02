import Ember from 'ember';
import ENV from 'tmdb-ember/config/environment';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  url: `${ENV.APP.HOST}`,
  apiKey: `&api_key=${ENV.APP.API_KEY}`,
  findRecord(id){

    return $.get(`${this.url}/movie/${id}?${this.apiKey}`)
  },
  queryAll(type, page=1){
    return this.get('ajax').request(`${this.url}/movie/${type}?page=${page}${this.apiKey}`);
    // return $.get(`${this.url}/movie/${type}?api_key=${this.apiKey}`);
  },
  query(id, type){
    return $.get(`${this.url}/movie/${id}/${type}?${this.apiKey}`)
  },
});
