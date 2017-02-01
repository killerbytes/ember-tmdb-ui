import Ember from 'ember';

export function imagePath([src]/*, hash*/) {
  let url = `https://image.tmdb.org/t/p/w185${src}`;
  return url;
}

export default Ember.Helper.helper(imagePath);
