export default {
  addToCart(state, cartItem) {
    const productInCartIndex = state.items.findIndex((ci) => ci.productId === cartItem.id)

    if (productInCartIndex >= 0) {
      state.items[productInCartIndex].qty++
    } else {
      const newItem = {
        productId: cartItem.id,
        title: cartItem.title,
        image: cartItem.image,
        price: cartItem.price,
        qty: 1
      }
      state.items.push(newItem)
    }
    state.qty++
    state.total += cartItem.price

    console.log(state.total)
  },

  removeFromCart(state, prodId) {
    const productInCartIndex = state.items.findIndex((cartIt) => cartIt.productId === prodId)

    const prodData = state.items[productInCartIndex]
    state.items.splice(productInCartIndex, 1)
    state.quantity -= prodData.qty
    state.total -= prodData.price * prodData.qty
  }
}
