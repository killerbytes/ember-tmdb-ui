import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['tmdb-pager'],
  page: Ember.computed.alias('params.page'),
  totalPages: Ember.computed.alias('model.total_pages'),
  defaultLinkCount: 10,
  nextPage: Ember.computed('page', function(){
    return this.get('page') + 1;
  }),
  previousPage: Ember.computed('page', function(){
    return this.get('page') - 1;
  }),
  firstTwo: Ember.computed(function(){
    return [1,2];
  }),
  lastTwo: Ember.computed('totalPages', function(){
    let x = this.get('totalPages');
    return this.get('totalPages')? [x-1,x] : [];
  }),
  lastTwoShow: Ember.computed('page', function(){
    return this.get('page') < this.get('totalPages') - 3;
  }),
  firsTwoShow: Ember.computed.gte('page', 7),
  list: Ember.computed('page', 'totalPages', 'linkCount', function(){
    let page = this.get('page');
    let totalPages = this.get('totalPages');
    let linkCount = this.get('defaultLinkCount');
    let p = 1;
    switch(true){
      case totalPages <= linkCount:
        this.set('linkCount', totalPages);
        break;
      case page >= 1 && page < 7:
        this.set('linkCount', 10)
        break;

      case page >= totalPages-3:
        p = this.get('page') - 3;
        this.set('linkCount', 4+ (totalPages - page));
        break;

      case page >= 3 && page <= totalPages:
        p = page > (this.get('totalPages') - 3) ? this.get('totalPages') - 3 : page - 2;
        this.set('linkCount', 5)
        break;
      default:
        break;
    }
    return Array.from({length: this.get('linkCount')})
      .map(function(i, index){
          return p+index;
      });


  })

});
