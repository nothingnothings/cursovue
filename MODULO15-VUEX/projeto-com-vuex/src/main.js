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

  mutations: {
    //são as 'actions' do vue...
    increment(state) {
      //exemplo de 'action' com o vue...
      state.counter = state.counter++;
    },

    incrementCustom(state, payload) {  ///payload é a 'DATA' que pode ser transmitida JUNTO DE SUA ACTION/MUTATION....
      ///esse payload é SEMPRE O SEGUNDO PARÂMETRO...
      state.counter = state.counter + payload;
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
