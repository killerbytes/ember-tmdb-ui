import DS from 'ember-data';
import ENV from 'tmdb-ember/config/environment';

export default DS.JSONAPIAdapter.extend({
  pathForType: function(type) {
    return 'movie';
  },
  host: ENV['APP'].HOST,
  buildURL: function(modelName){
    var url = this._super(...arguments);
    return `${url}?api_key=49cfdb743cedde0892fc3dbfb373fe4b`
  }
});
