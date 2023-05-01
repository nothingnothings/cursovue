export default {
  loadCoaches(context) {
    context.commit('loadRequests');
  },
  loadCoach(context, coachId) {
    context.commit('loadCoach', coachId);
  },
  registerCoach(context, coachData) {
    const formattedCoachData = {
      firstName: coachData.first,
      lastName: coachData.last,
      description: coachData.desc,
      hourlyRate: coachData.rate,
      areas: coachData.areas,
      // id: new Date().toISOString() + coachData.first,
      id: context.rootGetters.userId
    };
    context.commit('registerCoach', formattedCoachData);
  },
};
