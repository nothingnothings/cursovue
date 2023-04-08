import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    // ? similar a 'data', quando definimos LOCAL STATES...
    return {
      counter: 0, ///1 'GLOBAL STATE', no caso...
    };
  },

  getters: {
    // ? QUANDO VOCÊ FOR OUTPUTTAR SEU STATE/USAR SEU STATE EM ALGUM COMPONENT, FAÇA ISSO POR MEIO DE GETTERS, e não DIRETAMENTE (pq os getters são tipo computed properties)..

    finalCounter(state, getters) {
      // ? state é o CURRENT STATE, 'getters' é uma referência aos OUTROS GETTERS (útil em algumas situações)...

      return state.counter * 2;
    },

    normalizedCounter(state, getters) {
      ///o argumento de 'getters' é usado, aqui..

      const finalCounter = getters.finalCounter;
      if (getters.finalCounter < 0) {
        return 0;
      }

      if (getters.finalCounter > 100) {
        return 100;
      }

      return finalCounter;
    },
  },

  mutations: {
    // ? são as 'actions' do vue...
    increment(state) {
      //exemplo de 'action', com o vue...
      state.counter = state.counter++;
    },

    incrementCustom(state, payload) {
      // ? payload é a 'DATA' que pode ser transmitida JUNTO DE SUA ACTION/MUTATION....
      ///esse payload é SEMPRE O SEGUNDO PARÂMETRO...
      state.counter = state.counter + payload;
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
