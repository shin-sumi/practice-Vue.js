import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import ProductList from '@/views/ProductList.vue'
import Product from '@/views/Product.vue'
import Test from '@/views/Test.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/test', component: Test},
    {
      path: '/', component: Home
    },
    {
      //IDがついていない時はリストを表示
      path: '/product',
      component: ProductList
    },
    {
      path: '/product/:id',
      component: Product,
      props: route => ({id: Number(route.params.id)})
    }
  ]
});

export default router