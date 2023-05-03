import authActions from './actions';
import authGetters from './getters';
import authMutations from './mutations';

export default {
  state() {
    return {
      userId: null,
      tokenExpiration: null,
      token: null,
    };
  },

  actions: authActions,
  getters: authGetters,
  mutations: authMutations,
};
