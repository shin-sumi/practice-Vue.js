import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    message: '初期メッセージ',
    countLabel: 'カウント',
    count: 0,
    exList: [0,1,2],
    exNumber: null
  },
  getters: {
    message(state){
      return state.message
    },
    countLabel(state){
      return state.countLabel
    },
    count(state){
      return state.count
    },
    exList(state){
      return state.exList
    },
    exNumber(state){
      return state.exNumber
    }
  },
  mutations: {
    setMessage(state, payload){
      state.message = payload.message
    },
    setCountLabel(state, payload){
      state.countLabel = payload.value
    },
    countUp(state){
      state.count++;
    },
    addToExList(state, payload){
      state.exList.push(payload.value);
    },
    removeFromExList(state){
      state.exList.pop();
    },
    setExNumber(state, payload){
      state.exNumber = payload.value
    }
  },
  actions: {
    doUpdate({ commit }, message){
      commit('setMessage', { message });
    },
    doUpdateCountLabel({ commit }, value){
      commit('setCountLabel', { value })
    },
    doCountUp({ commit }){
      commit('countUp');
    },
    doAddToExList({ commit }, value){
      commit('addToExList', { value });
    },
    doRemoveFromExList({ commit }){
      commit('removeFromExList');
    },
    doSetExNumber({ commit }, value){
      commit('setExNumber', { value });
    }
  }
});

export default store