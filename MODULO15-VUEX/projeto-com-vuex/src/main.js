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
    //NÃO PODEM CONTER CÓDIGO ASSÍNCRONO...
    // ? SÃO UMA FUSÃO DO 'REDUCER' COM A PARTE __ SÍNCRONA de ACTIONS (sem a parte ASSÍNCRONA, que fica a cargo das ACTIONS, no vue)....
    increment(state) {
      //exemplo de 'MUTATION', com o vue...
      state.counter = state.counter++;
    },

    incrementCustom(state, payload) {
      // ? payload é a 'DATA' que pode ser transmitida JUNTO DE SUA ACTION/MUTATION....
      ///esse payload é SEMPRE O SEGUNDO PARÂMETRO...
      state.counter = state.counter + payload;
    },
  },

  actions: {
    // ? ACTIONS, POR SUA VEZ, SÃO REALMENTE CAPAZES DE RODAR CÓDIGO ASYNC (ao contrário de MUTATIONS, QUE SÓ EXECUTAM CÓDIGO SYNC NO STATE, atualizam o state de forma SYNC)....

    increment(context) {
      // ! PODEMOS USAR O MESMO NOME PARA 1 PAR 'MUTATION-ACTION' (como visto com 'increment')...

      //o parâmetro de 'context' contém várias coisas essenciais, como o method de 'commit()', usado para COMMITAR MUTATIONS...

      context.commit('increment'); //commita 1 mutation...
    },

    incrementCustom(context) {
      context.commit('incrementCustom', 25); //25 seria o PAYLOAD da mutation, NESSE CASO...
    },

    delayedIncrement(context) { //TODO ---  ACTIONS SÃO CAPAZES DE RODAR CÓDIGO ASYNC
      setTimeout(
        () => {
          context.commit('increment')
        },

        2000
      );
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
