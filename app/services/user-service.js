import Ember from 'ember';

export default Ember.Service.extend({
  session: Ember.inject.service(),
  store: Ember.inject.service(),
  getUser(){
    let uid = this.get('session.uid');
    // return this.get('store').findAll('user', {
    //
    // })
    return this.get('store').query('user', {
      orderBy: 'uid',
      equalTo: uid
    })
  },
  getFavorites(){

  },

  addToFavorites(item){
    this.getUser().then(res=>{
      this.set('user', res);
    })
    // let uid = this.get('session.uid');
    // let user = this.get('store').createRecord('user', {
    //   uid: uid,
    //   favorites: ['azidburn']
    // })
    // user.save();
    // let favorite = this.get('store').createRecord('favorite', {
    //   uid: uid,
    //   tmdb_id: item.id,
    //   title: item.title,
    //   poster_path: item.poster_path,
    //   overview: item.overview,
    //   release_date: item.release_date
    //   // genres: item.genres
    // });
    //
    // favorite.save();
    //
  }
});
