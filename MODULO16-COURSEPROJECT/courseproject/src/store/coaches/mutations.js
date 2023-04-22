import axios from 'axios';

export default {
  loadCoaches(state) {
    axios.get('dummy').then((res) => {
      state.requests = res.data;
    });
  },

  loadCoach(state) {
    axios.get('dummy').then((res) => {
      state.loadedCoach = res.data;
    });
  },
  registerCoach(state, coachData) {
    axios
      .post('dummy', {
        id: coachData.id,
        message: coachData.message,
        email: coachData.email,
      })
      .then((res) => {
        state.requests = res.data;
      });
  },
};
