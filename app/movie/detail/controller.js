import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Controller.extend({
  queryParams: ['list'],
  list: 'popular',
  movie: Ember.computed.alias('model.movie'),
  credits: Ember.computed.alias('model.credits'),
  similar: Ember.computed.alias('model.similar'),
  recommendations: Ember.computed.alias('model.recommendations')
});
