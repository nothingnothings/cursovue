import counterActions from './actions';
import counterMutations from './mutations';
import counterGetters from './getters';

export default counterModule = {
  // ? É ASSIM QUE SPLITTAMOS NOSSO STORE EM MÚLTIPLOS MÓDULOS...
  // ? conceito similar ao dos 'state slices' do redux...

  // namespaced: true, //TODO --> essa opção GARANTE QUE __ O MODULE INTEIRO (state + actions + getters + mutations) DEVERÁ SER DETACHEADO EM RELAÇAÕ AO STORE...
  //mas 'namespaced' é uma feature OPCIONAL....

  state() {
    return {
      counter: 0,
    };
  },

  // mutations: {
  //   increment(state) {
  //     state.counter = state.counter++;
  //   },

  //   incrementCustom(state, payload) {
  //     state.counter = state.counter + payload;
  //   },
  // },

  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetters,

  // actions: {
  //   delayedIncrement(context) {
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

  // increment(context) {
  // ! PODEMOS USAR O MESMO NOME PARA 1 PAR 'MUTATION-ACTION' (como visto com 'increment')...

  //o parâmetro de 'context' contém várias coisas essenciais, como o method de 'commit()', usado para COMMITAR MUTATIONS...

  // context.commit('increment'); //commita 1 mutation...
  // },

  // incrementCustom(context, payload, rootState, rootGetters) {
  // ? rootState e rootGetters são usados QUANDO QUEREMOS GANHAR ACESSO A 1 STATE QUE EXISTE EM OUTRO MODULE de nossa store (mesma coisa com o 'rootGetters')....
  // context.commit('incrementCustom', 25); //25 seria o PAYLOAD da mutation, NESSE CASO...
  //     context.commit('incrementCustom', payload); //25 seria o PAYLOAD da mutation, NESSE CASO...
  //   },
  // },
  // getters: {
  //   finalCounter(state, getters) {
      // ? state é o CURRENT STATE, 'getters' é uma referência aos OUTROS GETTERS (útil em algumas situações)...

    //   return state.counter * 2;
    // },

    // normalizedCounter(state, getters) {
      ///o argumento de 'getters' é usado, aqui..

  //     const finalCounter = getters.finalCounter;
  //     if (getters.finalCounter < 0) {
  //       return 0;
  //     }

  //     if (getters.finalCounter > 100) {
  //       return 100;
  //     }

  //     return finalCounter;
  //   },
  // },
};
