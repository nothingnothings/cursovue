export default {
  // requests(
  //   state
  //getters
  // ) {
  //   return state.requests;
  // },

  // hasRequests(state) { ///RETORNA TRUE OU FALSE, a depender do número de requests...
  //   return state.requests && state.requests.length > 0;
  // },

  hasRequests(state, otherGetters, rootState, rootGetters) {
    //mesma coisa que o 'hasRequests' de cima, mas __ CONTABILIZA APENAS REQUESTS ASSOCIADOS A 1 GIVEN COACH (o coach que está loggado)....
    console.log(rootState, rootGetters);
    return otherGetters.requests && otherGetters.requests.length > 0;
  },

  requests(state, otherGetters, rootState, rootGetters) {
    console.log(otherGetters, rootState);
    return state.requests.filter((request) => {
      console.log(request, rootGetters.userId, 'STORE DOS GURI');
      return request.coachId === rootGetters.userId; //com isso, retrievamos APENAS OS REQUESTS ASSOCIADOS AO NOSSO USER (que é dummy, por enquanto)...
    });
  },
};
