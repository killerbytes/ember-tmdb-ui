import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'img',
  attributeBindings: ['src'],
  classNameBindings: ['noImage'],
  noImage: Ember.computed.empty('file'),
  src: Ember.computed('file', function(){
    let file = this.get('file');
    let size = this.get('size');
    return file ? `https://image.tmdb.org/t/p/w${size}/${file}` : `/images/no-image-${size}.jpg`;
  })
});
