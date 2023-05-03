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
    const token = context.rootGetters.token; // extraído do module de 'auth'....

    console.log(token, coachId, 'TOKEN DOS GURI');
    context.state.requestsLoading = true;

    try {
      const response = await axios.get(
        `https://vue-coach-project-3c587-default-rtdb.firebaseio.com/requests/${coachId}.json?auth=${token}`
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
      throw new Error(error.error || 'Failed to load requests!');
    }
  },
  async createRequest(context, data) {
    const requestData = {
      id: new Date().toISOString() + Math.random().toString(),
      coachId: data.coachId,
      message: data.message,
      email: data.email,
    };

    const token = context.rootGetters.token;

    console.log(token, data.coachId, 'TOKEN DOS GURI');
    try {
      const response = await axios.post(
        `https://vue-coach-project-3c587-default-rtdb.firebaseio.com/requests/${data.coachId}.json?`,
        requestData
      );

      console.log(response);
      context.commit('registerCoach', requestData);
    } catch (error) {
      throw new Error(error.error || 'Failed to add request!');
    }
  },
};
