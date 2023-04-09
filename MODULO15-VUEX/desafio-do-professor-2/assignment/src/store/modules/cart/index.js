import cartActions from './actions'
import cartGetters from './getters'
import cartMutations from './mutations'

const cartModule = {
  state() {
    return {
      items: [],
      total: 0,
      qty: 0
    }
  },

  actions: cartActions,
  getters: cartGetters,
  mutations: cartMutations
}

export default cartModule
