import { createStore } from 'vuex';

import coaches from './coaches/index';
import requests from './requests/index';

const store = createStore({
  modules: {
    coaches: coaches,
    requests: requests,
  },
});

export default store;
