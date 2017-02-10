import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'select',
  items: Ember.computed('list', function(){
    return this.get('list').map(i=>{
      let returnValue;
      switch(true){
        case typeof i === 'object':
          returnValue = i;
          break;
        default:
          returnValue = {
            id: i,
            name: i
          }
          break;
      }
      return returnValue;
    })
  }),
  change(e){
    this.set('model', e.currentTarget.value);
  },
  actions: {
    select(){
    }
  }
});
