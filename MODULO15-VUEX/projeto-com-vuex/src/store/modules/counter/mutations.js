export default {
  increment(state) {
    state.counter = state.counter++;
  },

  incrementCustom(state, payload) {
    state.counter = state.counter + payload;
  },
};
