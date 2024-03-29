import coachActions from './actions';
import coachGetters from './getters';
import coachMutations from './mutations';

export default {
  state() {
    return {
      // coaches: [
      //   {
      //     id: 'c1',
      //     firstName: 'Maximilian',
      //     lastName: 'Schwarzmüller',
      //     areas: ['frontend', 'backend', 'career'],
      //     description:
      //       "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
      //     hourlyRate: 30,
      //   },
      //   {
      //     id: 'c3',
      //     firstName: 'Julie',
      //     lastName: 'Jones',
      //     areas: ['frontend', 'career'],
      //     description:
      //       'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
      //     hourlyRate: 30,
      //   },
      // ],
      lastFetch: null, ///usado para EVITAR O LOAD DE COACHES SEMPRE QUE ENTRAMOS NA PAGE (carrega apenas 1 vez inicial, aí deixa os coaches estáticos)....
      coaches: [],
      loadedCoach: null,
      coachesLoading: false,
    };
  },

  actions: coachActions,
  getters: coachGetters,
  mutations: coachMutations,
};
