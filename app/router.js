import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('movie', function(){
    this.route('index', {path: '/:list'})
    this.route('detail', {path: 'detail/:id'});
  });
  // this.route('movies', {path: 'movies/:category'});
  this.route('genre', {path: 'genre/:genre/movies/'});
  this.route('actor', {path: 'actor/:id'});
  this.route('discover');
  this.route('testing');
});

export default Router;
