export default {
  //NÃO PODEM CONTER CÓDIGO ASSÍNCRONO...
  // ? SÃO UMA FUSÃO DO 'REDUCER' COM A PARTE __ SÍNCRONA de ACTIONS (sem a parte ASSÍNCRONA, que fica a cargo das ACTIONS, no vue)....
  //   increment(state) {
  //     //   exemplo de 'MUTATION', com o vue...
  //     //   state.counter = state.counter++;
  //   },
  //   incrementCustom(state, payload) {
  //     // ? payload é a 'DATA' que pode ser transmitida JUNTO DE SUA ACTION/MUTATION....
  //     ///esse payload é SEMPRE O SEGUNDO PARÂMETRO...
  //     state.counter = state.counter + payload;
  //   },
  login(state) {
    state.authenticated = true;
  },
  logout(state) {
    state.authenticated = false;
  },
};
