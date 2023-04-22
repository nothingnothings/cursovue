import { createStore } from 'vuex';

import coaches from './modules/coaches/index';
import requests from './modules/requests/index';

const store = createStore({
  modules: {
    coaches: coaches,
    requests: requests,
  },
});

export default store;
