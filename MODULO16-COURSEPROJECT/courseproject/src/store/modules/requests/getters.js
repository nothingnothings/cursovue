export default {
  requests(
    state
    //getters
  ) {
    return state.requests;
  },

  hasRequests(state) {
    return state.requests && state.requests.length > 0;
  },
};
