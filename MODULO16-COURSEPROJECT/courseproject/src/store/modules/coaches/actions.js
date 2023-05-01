import axios from 'axios';

export default {
  loadCoaches(context) {
    axios
      .get(
        'https://vue-coach-project-3c587-default-rtdb.firebaseio.com/coaches.json'
      )
      .then((res) => {
        const coaches = [];
        Object.keys(res.data).forEach((key) => {
          coaches.push(res.data[key]);
        });

        console.log(coaches);
        context.commit('loadCoaches', coaches);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  loadCoach(context, coachId) {
    context.commit('loadCoach', coachId);
  },
  registerCoach(context, coachData) {
    const formattedCoachData = {
      firstName: coachData.first,
      lastName: coachData.last,
      description: coachData.desc,
      hourlyRate: coachData.rate,
      areas: coachData.areas,
      // id: new Date().toISOString() + coachData.first,
      id: context.rootGetters.userId,
    };

    axios
      .post(
        'https://vue-coach-project-3c587-default-rtdb.firebaseio.com/coaches.json',
        formattedCoachData
      )
      .then(() => {
        context.commit('registerCoach', formattedCoachData);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
