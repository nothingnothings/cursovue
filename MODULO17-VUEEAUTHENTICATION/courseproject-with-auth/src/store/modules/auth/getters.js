export default {
  userId(state) {
    return state.userId;
  },

  authIsLoading(state) {
    return state.isLoading;
  },

  authError(state) {
    return state.authError;
  },

  token(state) {
    return state.token;
  },
};
