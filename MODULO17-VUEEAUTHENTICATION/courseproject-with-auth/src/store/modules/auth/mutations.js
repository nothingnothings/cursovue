export default {
  setUser(state, userData) {
    if (userData) {
      state.token = userData.token;
      state.userId = userData.userId;
      state.tokenExpiration = userData.tokenExpiration;
    } else {
      state.token = null;
      state.userId = null;
      state.tokenExpiration = null;
    }
    state.isLoading = false;
  },

  clearAuthError(state) {
    state.authError = null;
  },

  // logout(state) {  ///basta usar o 'setUser' sem parâmetros, para isso, para conseguir o mesmo efeito...
  //   state.token = null;
  //   state.userId = null;
  //   state.tokenExpiration = null;
  // },
};
