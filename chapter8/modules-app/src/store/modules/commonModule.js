const commonModule = {
  namespaced: true,
  state() {
    return {
      entries: null
    }
  },
  getters: {
    entries(state){
      return state.entries
    }
  },
  mutations: {
    set(state, payload){
      state.entries = payload
    }
  },
  actions: {
    setData({ commit }, data){
      commit('set', data);
    }
  }
}

export default commonModule