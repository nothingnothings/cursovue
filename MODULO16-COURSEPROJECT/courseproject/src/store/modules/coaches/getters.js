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

  isCoach(state, otherGetters, rootState, rootGetters) {
    const coaches = otherGetters.coaches;
    const userId = rootGetters.userId;

    return coaches.some((coach) => {
      return userId === coach.id;
    });
  },

  loadedCoach(state) {
    return state.loadedCoach;
  },
};
