import coachActions from './actions';
import coachGetters from './getters';
import coachMutations from './mutations';

export default {
  state() {
    return {
      coaches: [],
      loadedCoach: null,
    };
  },

  actions: coachActions,
  getters: coachGetters,
  mutations: coachMutations,
};
