import axios from 'axios';

export default {
  loadRequests(state) {
    axios.get('dummy').then((res) => {
      state.requests = res.data;
    });
  },
  createRequest(state, requestData) {
    axios
      .post('dummy', {
        id: requestData.id,
        message: requestData.message,
        email: requestData.email,
      })
      .then((res) => {
        state.requests = res.data;
      });
  },
};
