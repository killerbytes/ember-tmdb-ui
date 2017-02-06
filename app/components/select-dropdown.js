import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'select',
  change(e){
    this.set('model', e.currentTarget.value);
  },
  actions: {
    select(){
    }
  }
});
