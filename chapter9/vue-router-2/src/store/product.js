import products from '@/api/products.js'

export default {
  namespaced: true,
  state: {
    list: products.fetch(),
    detail: {},
    reviewDetail: {}
  },
  getters: {
    list: (state) => {
      return state.list
    },
    detail: (state) => {
      return state.detail
    },
    reviewDetail: (state) => {
      return state.reviewDetail
    }
  },
  mutations: {
    set (state, { detail }) {
      state.detail = detail
    },
    clear (state) {
      state.detail = {}
    },
    reviewSet (state, { detail }) {
      state.reviewDetail = detail
    },
    reviewClear (state) {
      state.reviewDetail = {}
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
    },
    reviewLoad ({ commit }, {id, reviewId}) {
      products.asyncFindReview(id, reviewId, detail => {
        commit('reviewSet', { detail })
      })
    },
    reviewDestroy ({ commit }) {
      commit('reviewClear')
    }
  }
}
