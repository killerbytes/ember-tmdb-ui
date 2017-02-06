import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Controller.extend({
  queryParams: ['list'],
  list: 'popular',
  movie: Ember.computed.alias('model.movie'),
  credits: Ember.computed.alias('model.credits'),
  cast: Ember.computed('credits', function(){
    return this.get('credits.cast').slice(0, 5);
  }),
  similar: Ember.computed('model.similar', function(){
    return this.get('model.similar.results').slice(0,5);
  }),
  recommendations: Ember.computed('model.recommendations', function(){
    return this.get('model.recommendations.results').slice(0, 5);
  })
});
