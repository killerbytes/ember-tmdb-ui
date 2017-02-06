import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['search-bar'],
  searchService: Ember.inject.service(),
  params: Ember.computed('search', function(){
    return {
      page: this.get('page')
    }
  }),
  page: Ember.computed.alias('search.page'),
  _search: function() {
    if(this.get('query')){
      this.get('searchService').query(this.get('query')).then(res=>{
        this.set('search', res);
      })
    }else{
      this.set('search.results', []);
    }
  },
  actions: {
    search(){
      Ember.run.debounce(this, this._search, 500)
    },
    blur(){
      console.log('blur')
    }
  }
});
