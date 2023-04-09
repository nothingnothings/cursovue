import { createStore } from 'vuex'

import authModule from './modules/auth'
import cartModule from './modules/cart'
import productModule from './modules/products'

import rootActions from './actions'
import rootGetters from './getters'
import rootMutations from './mutations'

const store = createStore({
  modules: {
    auth: authModule,
    cart: cartModule,
    products: productModule
  },

  state() {
    return {}
  },

  actions: rootActions,
  getters: rootGetters,
  mutations: rootMutations
})

export default store
