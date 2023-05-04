import authActions from './actions';
import authGetters from './getters';
import authMutations from './mutations';

export default {
  state() {
    return {
      userId: null,
      token: null,
      authIsLoading: false,
      authError: null,
      didAutoLogout: false
    };
  },

  actions: authActions,
  getters: authGetters,
  mutations: authMutations,
};
