import Ember from 'ember';
import DS from 'ember-data';
import moment from 'moment';

export default Ember.Controller.extend({
  discoverService: Ember.inject.service(),
  queryParams: ['page', 'genre', 'year'],
  page: 1,
  genre: 16,
  year: 2017,
  yearsList: Ember.computed(function(){
    let startYear = 2017;
    return Array.from({length: 60})
      .map(function(i, index){
          return startYear-index;
      });
  }),
  params: Ember.computed('movies', function(){
    return {
      page: this.get('page')
    }
  }),
  paramsObserver: Ember.observer('page','year','genre', function(){
    // console.log(this.get('page'), this.get('year'), this.get('genre'))
    Ember.run.debounce(this, this._query, 500);
    // this._query();
  }),
  _query(){
    let year = this.get('year');
    console.log(year)
    let lte = moment(`${parseInt(year)+1}-01-01`).subtract(1, 'days').format('YYYY-MM-DD');
    let data = {
      sort_by: "release_date.desc",
      with_genres: this.get('genre'),
      "release_date.gte": `${year}-01-01`,
      "release_date.lte": lte
    }

    this.get('discoverService').query(data).then(res=>{
      this.set('movies', res);
    });

  },
  actions: {
    submit(){
      this._query();
    }
  }
});
