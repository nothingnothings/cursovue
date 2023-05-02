import axios from 'axios';

export default {
  async loadRequests(context) {
    // axios
    //   .get(
    //     'https://vue-coach-project-3c587-default-rtdb.firebaseio.com/requests.json'
    //   )
    //   .then((res) => {
    //     const requests = [];
    //     Object.keys(res.data).forEach((key) => {
    //       requests.push(res.data[key]);
    //     });

    //     console.log(requests);
    //     context.commit('loadRequests', requests);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    context.state.requestsLoading = true;
    const response = await axios.get(
      'https://vue-coach-project-3c587-default-rtdb.firebaseio.com/requests.json'
    );

    if (response.data) {
      const requests = [];
      Object.keys(response.data).forEach((key) => {
        requests.push(response.data[key]);
      });

      context.commit('loadRequests', requests);
    } else {
      console.log('Oops, something went wrong.');
    }
  },
  createRequest(context, data) {
    const requestData = {
      id: new Date().toISOString() + Math.random().toString(),
      coachId: data.coachId,
      message: data.message,
      email: data.email,
    };

    axios
      .post(
        'https://vue-coach-project-3c587-default-rtdb.firebaseio.com/requests.json',
        requestData
      )
      .then(() => {
        context.commit('registerCoach', requestData);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
