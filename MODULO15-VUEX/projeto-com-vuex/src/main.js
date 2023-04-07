import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    //similar a 'data', quando definimos LOCAL STATES...
    return {
      counter: 0, ///1 'GLOBAL STATE', no caso...
    };
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
