export default {
  loadRequests(context) {
    context.commit('loadRequests');
  },
  createRequest(context, requestData) {
    context.commit('createRequest', requestData);
  },
};
