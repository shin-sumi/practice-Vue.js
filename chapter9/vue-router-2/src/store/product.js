import products from '@/api/products.js'

export default {
  namespaced: true,
  state: {
    list: products.fetch(),
    detail: {}
  },
  getters: {
    list: (state) => {
      return state.list
    },
    detail: (state) => {
      return state.detail
    }
  },
  mutations: {
    set (state, { detail }) {
      state.detail = detail
    },
    clear (state) {
      state.detail = {}
    }
  },
  actions: {
    load ({ commit }, id) {
      products.asyncFind(id, detail => {
        commit('set', { detail })
      })
    },
    destroy ({ commit }) {
      commit('clear')
    }
  }
}