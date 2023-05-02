import axios from 'axios';

export default {
  loadCoaches(context) {
    axios
      .get(
        'https://vue-coach-project-3c587-default-rtdb.firebaseio.com/coaches.json'
      )
      .then((res) => {
        const coaches = [];

        if (res.data) {
          Object.keys(res.data).forEach((key) => {
            coaches.push(res.data[key]);
          });
        }

        console.log(coaches, res, 'RES DOS GURI');
        context.commit('loadCoaches', coaches);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  loadCoach(context, coachId) {
    context.commit('loadCoach', coachId);
  },

  async registerCoach(context, coachData) {
    const userId = context.rootGetters.userId;
    const formattedCoachData = {
      firstName: coachData.first,
      lastName: coachData.last,
      description: coachData.desc,
      hourlyRate: coachData.rate,
      areas: coachData.areas,
      // id: new Date().toISOString() + coachData.first,
      // id: context.rootGetters.userId,
    };

    const response = await axios.put(
      `https://vue-coach-project-3c587-default-rtdb.firebaseio.com/coaches/${userId}.json`,
      formattedCoachData
    );
    if (!response.ok) {
      console.log('Oops, something went wrong...');
    } else {
      context.commit('registerCoach', {
        ...coachData,
        id: userId,
      });
    }
  },
};
