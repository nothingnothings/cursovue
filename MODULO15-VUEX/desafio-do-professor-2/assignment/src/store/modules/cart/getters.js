export default {
  cartItems(state, getters) {
    return state.items
  },

  totalPrice(state, getters) {
    if (state.items.length > 0) {
      return state.total
    } else {
      return 0
    }
  },

  totalQuantity(state, getters) {
    return state.items.length
  }
}
