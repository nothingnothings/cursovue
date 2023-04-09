export default {
  addToCart(context, cartItem) {
    context.commit('addToCart', cartItem)
  },

  removeFromCart(context, id) {
    context.commit('removeFromCart', id)
  }
}
