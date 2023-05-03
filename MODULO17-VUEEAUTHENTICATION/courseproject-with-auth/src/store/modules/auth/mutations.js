export default {
  setUser(state, userData) {
    state.token = userData.token;
    state.userId = userData.userId;
    state.tokenExpiration = userData.tokenExpiration;
    state.isLoading = false;
  },

  clearAuthError(state) {
    state.authError = null;
  },
};
