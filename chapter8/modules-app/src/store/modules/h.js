const moduleH = {
  namespaced: true,
  state: {
    count: 8
  },
  getters: {
    count(state){
      return state.count
    }
  },
  mutations: {
    countUpdate(state){
      state.count += 800;
    }
  },
  actions: {
    doCountUpdate({ commit }){
      commit('countUpdate');
    }
  }
}

export default moduleH