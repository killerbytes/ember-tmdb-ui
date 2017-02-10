import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  // normalizeQueryResponse(store, primaryModelClass, payload, id, requestType) {
  //   payload = { ticketStats: payload };
  //       console.log(payload)
  //   return this.normalizeArrayResponse(store, primaryModelClass, payload, id, requestType);
  // },
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload.data = {};
    switch(requestType){
      case "query": 
        payload = payload.results;
        return this.normalizeArrayResponse(store, primaryModelClass, payload, id, requestType);
        break;
      default: 
        payload.data.attributes = payload;
        return this._super(...arguments);
        break;
    }
    
  }
});
