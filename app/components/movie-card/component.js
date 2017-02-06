import Ember from 'ember';

export default Ember.Component.extend({
  genreService: Ember.inject.service(),
  classNames: ['movie-card'],
  genres: Ember.computed('item.genre_ids', function(){
    return this.get('genreService').toString(this.get('item.genre_ids'));
  }),
  genresToString: Ember.computed('genres', function(){
    return this.get('genres').join(', ')
  })
});
