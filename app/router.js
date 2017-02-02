import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('movie', function(){
    this.route('detail', {path: '/:id'});
  });
  // this.route('detail', {path: 'movie/:id'});
  // this.route('movies', {path: 'movies/:category'});
  this.route('genre', {path: 'genre/movies'});
  this.route('actor', {path: 'actor/:id'});
});

export default Router;
