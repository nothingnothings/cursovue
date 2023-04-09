export default {
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
};
