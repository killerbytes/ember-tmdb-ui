import Ember from 'ember';

export function imagePath([src, size=185]/*, hash*/) {
  let url = `https://image.tmdb.org/t/p/w${size}/${src}`;
  return url;
}

export default Ember.Helper.helper(imagePath);
