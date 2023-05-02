export default {
  loadRequests(state, requests) {
    state.requests = requests;
    state.requestsLoading = false;
  },
  createRequest(state, requestData) {
    state.requests.push(requestData);
  },
};
