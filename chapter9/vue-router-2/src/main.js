// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router.js'
import 'babel-polyfill'
import Vuex from 'vuex'
import product from './store/product.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    product
  }
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
