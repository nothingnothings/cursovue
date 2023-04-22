export default {
  loadCoaches(context) {
    context.commit('loadRequests');
  },
  loadCoach(context, coachId) {
    context.commit('loadCoach', coachId);
  },
  registerCoach(context, coachData) {
    context.commit('registerCoach', coachData);
  },
};
