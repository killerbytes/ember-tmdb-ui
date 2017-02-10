import Ember from 'ember';
import ENV from 'tmdb-ember/config/environment';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  url: `${ENV.APP.HOST}`,
  apiKey: `api_key=${ENV.APP.API_KEY}`,
  query(query, page=1){
    // let data = {
    //   sort_by: "popularity.desc",
    //   with_genres: "27",
    //   "release_date.lte": "2002-03-17"
    // }
    let params = Object.keys(query).map(i=>{
      return `${i}=${query[i]}`;
    }).join('&')

    return this.get('ajax').request(`${this.url}/discover/movie?${this.apiKey}&${params}`);
  }
});
