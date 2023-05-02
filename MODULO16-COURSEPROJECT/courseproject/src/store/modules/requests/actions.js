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
    const coachId = context.rootGetters.userId;

    context.state.requestsLoading = true;

    try {
      const response = await axios.get(
        `https://vue-coach-project-3c587-default-rtdb.firebaseio.com/requests/${coachId}.json`
      );
      const requests = [];
      if (response.data) {
        Object.keys(response.data).forEach((key) => {
          requests.push(response.data[key]);
        });

        context.commit('loadRequests', requests);
      } else {
        console.log('No requests were found!');
        context.commit('loadRequests', requests);
      }
    } catch (error) {
      throw new Error(error.message || 'Failed to add request!');
    }
  },
  async createRequest(context, data) {
    const requestData = {
      id: new Date().toISOString() + Math.random().toString(),
      coachId: data.coachId,
      message: data.message,
      email: data.email,
    };

    try {
      const response = await axios.post(
        `https://vue-coach-project-3c587-default-rtdb.firebaseio.com/requests/${data.coachId}.json`,
        requestData
      );

      console.log(response);
      context.commit('registerCoach', requestData);
    } catch (error) {
      throw new Error(error.message || 'Failed to fetch requests!');
    }
  },
};
