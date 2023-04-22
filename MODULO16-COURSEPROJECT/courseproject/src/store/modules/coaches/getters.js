export default {
  coaches(
    state
    // getters
  ) {
    return state.coaches;
  },

  hasCoaches(state) {
    //determina se a LIST É CARREGADA OU NÃO (retorna true ou false)...

    return state.coaches && state.coaches.length > 0;
  },
};
