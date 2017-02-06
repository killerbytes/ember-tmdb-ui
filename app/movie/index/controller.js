import Ember from 'ember';
import DS from 'ember-data';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

const list = {
  'now-playing': 'now_playing',
  'top-rated': 'top_rated',
  popular: 'popular',
  upcoming: 'upcoming'

}
export default Ember.Controller.extend({
  movieService: Ember.inject.service(),
  queryParams: ['page'],
  page: 1,
  isOutOfBounds: Ember.computed('movies.total_pages', function(){
    return this.get('page') > this.get('movies.total_pages');
  }),
  params: Ember.computed('movies', function(){
    return {
      page: this.get('page'),
      list: this.get('list')
    }
  }),
  movies: Ember.computed('list','page', function(){
    return DS.PromiseObject.create({
      promise: this.get('movieService').queryAll(list[this.get('list')], this.get('page')).then(res => {
        return res;
      })
    });
  }),
});
