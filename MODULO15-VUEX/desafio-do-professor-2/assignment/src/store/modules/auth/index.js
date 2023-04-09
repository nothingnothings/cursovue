import authActions from './actions'
import authGetters from './getters'
import authMutations from './mutations'

const authModule = {
  state() {
    return {
      isLoggedIn: false
    }
  },

  actions: authActions,
  getters: authGetters,
  mutations: authMutations
}

export default authModule
