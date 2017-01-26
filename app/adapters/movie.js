import DS from 'ember-data';
import ApplicationAdapter from './application';
import ENV from 'tmdb-ember/config/environment';
import UrlTemplates from "ember-data-url-templates";

export default ApplicationAdapter.extend(UrlTemplates, {
  urlTemplate: '{+host}/{+namespace}/movie{/id}?api_key={apiKey}',
  // queryUrlTemplate: '{+host}/{+namespace}/movie{/category*}?api_key={?apiKey}',
});
