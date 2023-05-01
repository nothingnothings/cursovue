// import axios from 'axios';

export default {
  loadRequests(state, requests) {
    console.log(state);

    // axios.get('dummy').then((res) => {
    //   state.requests = res.data;
    // });

    state.requests = requests;
  },
  createRequest(state, requestData) {
    // axios
    //   .post('dummy', {
    //     id: requestData.id,
    //     message: requestData.message,
    //     email: requestData.email,
    //   })
    //   .then((res) => {
    //     state.requests = res.data;
    //   });

    state.requests.push(requestData);
  },
};
