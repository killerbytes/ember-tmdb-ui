import Ember from 'ember';
import DS from 'ember-data';
import ENV from 'tmdb-ember/config/environment';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  url: `${ENV.APP.HOST}`,
  apiKey: `&api_key=${ENV.APP.API_KEY}`,
  genres: null,
  findAll(){   // /genre/movie/list

    return new Promise((resolve)=>{
      if(this.get('genres')){
        resolve(this.get('genres'))
      }else{
        $.get(`${this.url}/genre/movie/list?${this.apiKey}`).then(res=>{
          this.set('genres', res);
          resolve(res);
        })

      }
    })
    // return DS.PromiseObject.create({
    //   promise: $.get(`${this.url}/genre/movie/list?${this.apiKey}`).then(res=>{
    //         this.set('_genres', res);
    //         return res;
    //       })
    // });
  },
  findRecord(genreId, page=1){   // /genre/{genre_id}/movies
    return $.get(`${this.url}/genre/${genreId}/movies?page=${page}${this.apiKey}`)
  },
  toString(arr){
    let genres = this.get('genres') && this.get('genres').genres;
    return arr && arr.map(i=>{
      let genre = genres && genres.find(genre=>{
        return genre.id == i;
      })
      return genre && genre.name;
    })
  }
});
