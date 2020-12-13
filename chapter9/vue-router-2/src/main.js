// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router.js'
import 'babel-polyfill'
import Vuex from 'vuex'
import product from './store/product.js'
import loading from './store/loading.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    product,
    loading
  }
})

router.beforeEach((to, from, next) => {
  console.log('global:beforeEach')
  store.commit('loading/start')
  next()
})

router.beforeResolve((to, from, next) => {
  console.log('global:beforeResolve')
  next()
})

router.afterEach((to, from, next) => {
  console.log('global:afterEach')
  store.commit('loading/end')
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
