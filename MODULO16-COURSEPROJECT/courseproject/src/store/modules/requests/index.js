import requestActions from './actions';
import requestGetters from './getters';
import requestMutations from './mutations';

export default {
  state() {
    return {
      requests: [],
    };
  },

  actions: requestActions,
  getters: requestGetters,
  mutations: requestMutations,
};
