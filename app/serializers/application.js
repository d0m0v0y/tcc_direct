import { ActiveModelSerializer } from 'active-model-adapter';

export default ActiveModelSerializer.extend({
  normalizeSingleResponse (store, primaryModelClass, payload, id, requestType) {
    var namespacedPayload = {};
    namespacedPayload[primaryModelClass.modelName] = payload;
    return this._super(store, primaryModelClass, namespacedPayload, id, requestType)
  },

  extractMeta (store, typeClass, payload) {
    if (payload && payload.hasOwnProperty('pagination')) {
      let meta = payload.pagination;
      delete payload.pagination;
      return meta;
    }
  }
});
