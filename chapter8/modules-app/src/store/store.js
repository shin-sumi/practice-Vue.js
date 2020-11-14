import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const moduleA = {
  state: {
    count: 1
  },
  getters: {
    countA(state){
      return state.count
    }
  },
  mutations: {
    countUpdate(state){
      state.count += 100
    }
  },
  actions: {
    doCountUpdate({ commit }){
      commit('countUpdate');
    }
  }
}

const moduleB = {
  state: {
    count: 2
  },
  getters: {
    countB(state){
      return state.count
    }
  },
  mutations: {
    countUpdate(state){
      state.count += 200
    }
  },
  action: {
    doCountUpdate({ commit }){
      commit('countUpdate')
    }
  }
}

const moduleC = {
  namespaced: true,
  state: {
    count: 3
  },
  getters: {
    count(state){
      return state.count
    }
  },
  mutations: {
    countUpdate(state){
      state.count += 300
    }
  },
  actions: {
    doCountUpdate({ commit }){
      commit('countUpdate');
    }
  }
}

const moduleD = {
  namespaced: true,
  state: {
    count: 4
  },
  getters: {
    count(state){
      return state.count
    }
  },
  mutations: {
    countUpdate(state){
      state.count += 400
    }
  },
  actions: {
    doCountUpdate({ commit }){
      commit('countUpdate');
    }
  }
}



const moduleE = {
  namespaced: true,
  state: {
    count: 5
  },
  getters: {
    count(state){
      return state.count
    }
  },
  mutations: {
    countUpdate(state){
      state.count += 500;
    }
  },
  actions: {
    doCountUpdate({ commit }){
      commit('countUpdate')
    }
  }
}

const moduleF = {
  namespaced: true,
  //モジュールをネストさせる
  modules: {
    moduleE
  },
  state: {
    count: 6
  },
  getters: {
    count(state){
      return state.count
    }
  },
  mutations: {
    countUpdate(state){
      state.count += 600;
    }
  },
  actions: {
    doCountUpdate({ commit }){
      commit('countUpdate')
    },
    doCountUpdateG({ commit }){
      commit('moduleG/countUpdate')
    }
  }
}

moduleF.modules.moduleG = {
  namespaced: true,
  state: {
    count: 7
  },
  getters: {
    count(state){
      return state.count
    },
    countF(state, getters, rootState, rootGetters){
      return rootGetters['moduleF/count']
    }
  },
  mutations: {
    countUpdate(state){
      state.count += 700;
    }
  },
  actions: {
    doCountUpdate({ commit }){
      commit('countUpdate')
    },
    doCountUpdateF({ dispatch, commit, getters, rootGetters }){
      //ルートから辿ってコミット、ディスパッチを使用する際は第3引数のrootオプションをtrueに設定
      commit('moduleF/countUpdate', null, {root: true})
    }
  }
}

//ファイルを分けたモジュールを読み込み
import moduleH from '@/store/modules/h.js'
//再利用できるモジュールを読み込み
import commonModule from '@/store/modules/commonModule.js'

const store = new Vuex.Store({
  strict: true,
  state: {
    rootMessage: 'Root Store Message'
  },
  getters: {
    rootMessage(state) {
      return state.rootMessage;
    }
  },
  mutations: {
    setrootMessage(state, payload){
      state.rootMessage = payload;
    }
  },
  actions: {
    doSetRootMessage({commit}, message){
      commit('setrootMessage', message);
    }
  },
  modules: {
    moduleA,
    moduleB,
    moduleC,
    moduleD,
    moduleF,
    moduleH,
    //再利用モジュールを登録
    moduleI: commonModule,
    moduleJ: commonModule,
  }
});

//stateを監視
const unwatch = store.watch(
  (state, getters) => {
    return state.rootMessage
  },
  (newVal, oldVal) => {
    console.log('ルートでstateを監視');
    console.log(`newVal: ${newVal}, oldVal: ${oldVal}`);
  }
);

store.subscribeAction((mutation, state) => {
  console.log('ルートでアクションにフック');
  console.log(`mutation.type: ${mutation.type}`);
  console.log(`mutation.payload: ${mutation.payload}`);
  console.log(`state: ${state}`);
});


export default store