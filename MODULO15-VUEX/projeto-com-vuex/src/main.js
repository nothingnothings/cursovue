import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = {
  // ? É ASSIM QUE SPLITTAMOS NOSSO STORE EM MÚLTIPLOS MÓDULOS...
  // ? conceito similar ao dos 'state slices' do redux...



  // namespaced: true, //TODO --> essa opção GARANTE QUE __ O MODULE INTEIRO (state + actions + getters + mutations) DEVERÁ SER DETACHEADO EM RELAÇAÕ AO STORE...
  //mas 'namespaced' é uma feature OPCIONAL....


  state() {
    return {
      counter: 0,
    };
  },

  mutations: {
    increment(state) {
      state.counter = state.counter++;
    },

    incrementCustom(state, payload) {
      state.counter = state.counter + payload;
    },
  },
  actions: {
    delayedIncrement(context) {
      //TODO ---  ACTIONS SÃO CAPAZES DE RODAR CÓDIGO ASYNC
      setTimeout(
        () => {
          context.commit('increment');

          // context.dispatch --> para dispatchar OUTRAS ACTIONS, de dentro de sua action
          // context.getters ---> para GANHAR ACESSO AOS DERIVED VALUES DE OUTROS GETTERS
          // context.state --> PARA GANHAR ACESSO AO VALUE DE SEU STATE (sem o mutar diretamente)...
        },

        2000
      );
    },

    increment(context) {
      // ! PODEMOS USAR O MESMO NOME PARA 1 PAR 'MUTATION-ACTION' (como visto com 'increment')...

      //o parâmetro de 'context' contém várias coisas essenciais, como o method de 'commit()', usado para COMMITAR MUTATIONS...

      context.commit('increment'); //commita 1 mutation...
    },

    incrementCustom(context, payload, rootState, rootGetters) { // ? rootState e rootGetters são usados QUANDO QUEREMOS GANHAR ACESSO A 1 STATE QUE EXISTE EM OUTRO MODULE de nossa store (mesma coisa com o 'rootGetters')....
      // context.commit('incrementCustom', 25); //25 seria o PAYLOAD da mutation, NESSE CASO...
      context.commit('incrementCustom', payload); //25 seria o PAYLOAD da mutation, NESSE CASO...
    },
  },
  getters: {
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
};

const store = createStore({
  modules: {
    counter: counterModule, ///SÃO OS SLICES/MODULES DE NOSSO STATE...
  },
  state() {
    // ? similar a 'data', quando definimos LOCAL STATES...
    return {
      // counter: 0, ///1 'GLOBAL STATE', no caso... /// FIZEMOS OUTSOURCE DISSO, NO MODULE DE 'counterModule'..
      authenticated: false,
    };
  },

  getters: {
    // ? QUANDO VOCÊ FOR OUTPUTTAR SEU STATE/USAR SEU STATE EM ALGUM COMPONENT, FAÇA ISSO POR MEIO DE GETTERS, e não DIRETAMENTE (pq os getters são tipo computed properties)..

    // finalCounter(state, getters) {
    //   // ? state é o CURRENT STATE, 'getters' é uma referência aos OUTROS GETTERS (útil em algumas situações)...

    //   return state.counter * 2;
    // },

    // normalizedCounter(state, getters) {
    //   ///o argumento de 'getters' é usado, aqui..

    //   const finalCounter = getters.finalCounter;
    //   if (getters.finalCounter < 0) {
    //     return 0;
    //   }

    //   if (getters.finalCounter > 100) {
    //     return 100;
    //   }

    //   return finalCounter;
    // },

    authenticated(state, getters) {
      return state.authenticated;
    },
  },

  mutations: {
    //NÃO PODEM CONTER CÓDIGO ASSÍNCRONO...
    // ? SÃO UMA FUSÃO DO 'REDUCER' COM A PARTE __ SÍNCRONA de ACTIONS (sem a parte ASSÍNCRONA, que fica a cargo das ACTIONS, no vue)....
    // increment(state) {
    //   exemplo de 'MUTATION', com o vue...
    //   state.counter = state.counter++;
    // },

    // incrementCustom(state, payload) {
    // ? payload é a 'DATA' que pode ser transmitida JUNTO DE SUA ACTION/MUTATION....
    ///esse payload é SEMPRE O SEGUNDO PARÂMETRO...
    //   state.counter = state.counter + payload;
    // },

    login(state) {
      state.authenticated = true;
    },
    logout(state) {
      state.authenticated = false;
    },
  },

  actions: {
    // ? ACTIONS, POR SUA VEZ, SÃO REALMENTE CAPAZES DE RODAR CÓDIGO ASYNC (ao contrário de MUTATIONS, QUE SÓ EXECUTAM CÓDIGO SYNC NO STATE, atualizam o state de forma SYNC)....

    // increment(context) {
    // ! PODEMOS USAR O MESMO NOME PARA 1 PAR 'MUTATION-ACTION' (como visto com 'increment')...

    //o parâmetro de 'context' contém várias coisas essenciais, como o method de 'commit()', usado para COMMITAR MUTATIONS...

    // context.commit('increment'); //commita 1 mutation...
    // },

    // incrementCustom(context, payload) {
    // context.commit('incrementCustom', 25); //25 seria o PAYLOAD da mutation, NESSE CASO...
    // context.commit('incrementCustom', payload); //25 seria o PAYLOAD da mutation, NESSE CASO...
    // },

    // delayedIncrement(context) {
    //TODO ---  ACTIONS SÃO CAPAZES DE RODAR CÓDIGO ASYNC
    // setTimeout(
    //   () => {
    //     context.commit('increment');

    // context.dispatch --> para dispatchar OUTRAS ACTIONS, de dentro de sua action
    // context.getters ---> para GANHAR ACESSO AOS DERIVED VALUES DE OUTROS GETTERS
    // context.state --> PARA GANHAR ACESSO AO VALUE DE SEU STATE (sem o mutar diretamente)...
    //     },

    //     2000
    //   );
    // },

    login(context) {
      context.commit('login');
    },

    logout(context) {
      context.commit('logout');
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
