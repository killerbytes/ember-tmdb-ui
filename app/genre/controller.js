import Ember from 'ember';
import DS from 'ember-data';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.Controller.extend({
  genreService: Ember.inject.service(),
  queryParams: ['page'],
  page: 1,
  params: Ember.computed('movies', function(){
    return {
      page: this.get('page'),
      genre: this.get('genre')
    }
  }),
  movies: Ember.computed('genre', 'page', function(){
    return DS.PromiseObject.create({
      promise: this.get('genreService').findRecord(this.get('genre'), this.get('page')).then(res => {
        return res;
      })
    });
  }),
});
