import { createStore } from 'vuex';

import coaches from './modules/coaches/index';
import requests from './modules/requests/index';

const store = createStore({
  modules: {
    coaches: coaches,
    requests: requests,
  },

  state() {
    return {
      userId: 'c2', // por enquanto, esse value será HARDCODADO, mas não será assim no futuro (aula de authentication)
    };
  },

  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
