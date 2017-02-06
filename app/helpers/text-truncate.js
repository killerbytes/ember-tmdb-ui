import Ember from 'ember';

export default Ember.Helper.extend({
  compute([text, size=210]){
    return text && text.length >= size ? `${text.substr(0, size)}...` : text;
  }
});
