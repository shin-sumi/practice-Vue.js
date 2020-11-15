import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    message: 'メッセージ',
    list: [
      {
        id: 1,
        price: 200,
        name: 'いちご'
      },
      {
        id: 2,
        price: 500,
        name: 'りんご'
      },
      {
        id: 3,
        price: 1000,
        name: 'メロン'
      },
      {
        id: 4,
        price: 100,
        name: 'みかん'
      },
    ]
  },
  mutations: {
    //ミューテーションは直接呼び出さず、コンポーネントからcommitを使って呼び出す
    increment(state){
      state.count++;
    },
    //payloadはcommitから呼び出した時に渡される引数
    assignmentToCount(state, payload){
      state.count = payload
    },
    assignmentMessage(state, payload){
      state.message = payload
    }
  },
  getters: {
    count(state, getters, rootState, rootGetter){
      return state.count;
    },
    max(state){
      return state.list.reduce((a,b) => {
        return a > b.price ? a : b.price
      }, 0);
    },
    //引数を使用するため、関数を返す
    item(state){
      return id => state.list.find(el => el.id === id)
    },
    //別のゲッターを使用
    name(state, getters){
      return id => getters.item(id).name
    },
    getMessage(state){
      return state.message
    }
  },
  actions: {
    messageUpdate({ commit }, payload){
      commit('assignmentMessage', payload)
    }
  }
});

export default store 