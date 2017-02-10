import DS from 'ember-data';

export default DS.Model.extend({
  uid: DS.attr(),
  tmdb_id: DS.attr(),
  title: DS.attr(),
  poster_path: DS.attr(),
  overview: DS.attr(),
  release_date: DS.attr()
});
