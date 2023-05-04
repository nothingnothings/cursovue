export default {
  setUser(state, userData) {
    if (userData) {
      state.token = userData.token;
      state.userId = userData.userId;
      state.didAutoLogout = false;
    } else {
      state.token = null;
      state.userId = null;
      state.didAutoLogout = false;
    }
    state.isLoading = false;
  },

  clearAuthError(state) {
    state.authError = null;
  },

  didAutoLogout(state) {
    state.didLogout = true; //isso é utilizado para REDIRECIONAR NOSSO USER, EM CASOS DE 'AUTO LOGOUT' (em razão de TOKEN EXPIRADA, 1 hora se passou)...
  },

  // logout(state) {  ///basta usar o 'setUser' sem parâmetros, para isso, para conseguir o mesmo efeito...
  //   state.token = null;
  //   state.userId = null;
  //   state.tokenExpiration = null;
  // },
};
