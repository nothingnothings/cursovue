import axios from 'axios';

export default {
  async loadCoaches(context, isRefresh = false) {
    // axios
    //   .get(
    //     'https://vue-coach-project-3c587-default-rtdb.firebaseio.com/coaches.json'
    //   )
    //   .then((res) => {
    //     const coaches = [];

    //     if (res.data) {
    //       Object.keys(res.data).forEach((key) => {
    //         coaches.push(res.data[key]);
    //       });
    //     }

    //     console.log(coaches, res, 'RES DOS GURI');
    //     context.commit('loadCoaches', coaches);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    if (!context.getters.coachesShouldUpdate && !isRefresh) {
      ///evita o load repetitivo/desnecessário dos coaches, toda vez que entramos na page... (objetivo: carregar os coaches apenas inicialmente, e então apenas se 1 minuto tiver passado...)
      return;
    }

    context.state.coachesLoading = true;
    const coaches = [];

    try {
      const response = await axios.get(
        'https://vue-coach-project-3c587-default-rtdb.firebaseio.com/coaches.json'
      );
      console.log(response, 'RESPONSE DOS GURi');
      if (response.data) {
        Object.keys(response.data).forEach((key) => {
          const newCoach = response.data[key];

          newCoach.id = key;
          coaches.push(newCoach);
        });
        context.commit('loadCoaches', coaches);
        context.commit('setFetchTimestamp'); //evita carregamentos futuros dos coaches (vão ser carregados apenas 1 vez, ao chegar na page de coaches...)
      } else {
        context.commit('loadCoaches', coaches);
        context.commit('setFetchTimestamp');
        console.log('something went wrong');
      }
    } catch (error) {
      throw new Error(error.response.data.error.message || 'Failed to fetch!');
    }
  },

  loadCoach(context, coachId) {
    context.commit('loadCoach', coachId);
  },

  async registerCoach(context, coachData) {
    const token = context.rootGetters.token; // É ASSIM QUE GANHAMOS ACESSO AO TOKEN DE NOSSO USER, SE ELE TIVER FEITO LOGIN NO NOSSO APP (feito login no firebase, e retrievado 1 token, que agora fica armazenado no state do vuex)...
    const userId = context.rootGetters.userId;

    console.log(userId, 'USER ID DOS GURI');
    const formattedCoachData = {
      firstName: coachData.first,
      lastName: coachData.last,
      description: coachData.desc,
      hourlyRate: coachData.rate,
      areas: coachData.areas,
      // id: new Date().toISOString() + coachData.first,
      // id: context.rootGetters.userId,
    };

    try {
      const response = await axios.put(
        `https://vue-coach-project-3c587-default-rtdb.firebaseio.com/coaches/${userId}.json?` +
          token,
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
    } catch (error) {
      throw new Error(error.response.data.error.message || 'Failed to Register Coach!');
    }
  },
};
