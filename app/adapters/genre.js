import ApplicationAdapter from './application';
import DS from 'ember-data';
import ENV from 'tmdb-ember/config/environment';
import UrlTemplates from "ember-data-url-templates";

export default ApplicationAdapter.extend(UrlTemplates, {
  queryUrlTemplate: '{+host}/{+namespace}/genre{/genreid*}/movies?api_key={apiKey}',
  
});
