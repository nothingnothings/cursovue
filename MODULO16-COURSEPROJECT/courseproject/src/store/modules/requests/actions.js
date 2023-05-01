export default {
  loadRequests(context) {
    context.commit('loadRequests');
  },
  createRequest(context, data) {
    console.log(data, 'DATA DOS GURI');
    const requestData = {
      id: new Date().toISOString() + Math.random().toString(),
      coachId: data.id,
      message: data.message,
      email: data.email,
    };

    context.commit('createRequest', requestData);
  },
};
