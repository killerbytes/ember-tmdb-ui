import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Controller.extend({
  actor: Ember.computed.alias('model.actor'),
  movieCredits: Ember.computed.alias('model.actor.movie_credits'),
  images: Ember.computed.alias('model.actor.images')
});
