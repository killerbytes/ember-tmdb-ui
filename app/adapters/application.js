import DS from 'ember-data';
import ENV from 'tmdb-ember/config/environment';
import UrlTemplates from "ember-data-url-templates";

export default DS.JSONAPIAdapter.extend(UrlTemplates, {
  host: ENV['APP'].HOST,
  namespace: '3',
  urlSegments: {
    apiKey(){
      return ENV['APP'].API_KEY;
    }
  }
  
});
