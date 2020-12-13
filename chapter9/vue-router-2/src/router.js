import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import ProductList from '@/views/ProductList'
import Product from '@/views/Product.vue'
import ProductHome from '@/views/Product/Home.vue'
import ProductReview from '@/views/Product/Review.vue'
import ProductReviewDetail from '@/views/Product/ReviewDetail.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      beforeEnter (to, from, next) {
        console.log('route:beforeEnter')
        next()
      }
    },
    {path: '/product', component: ProductList},
    {
      path: '/product/:id(\\d+)',
      component: Product,
      props: (route) => {
        return {
          id: Number(route.params.id)
        }
      },
      children: [
        {
          name: 'product-home',
          path: '',
          component: ProductHome
        },
        {
          name: 'product-review',
          path: 'review',
          component: ProductReview
        },
        {
          name: 'review-detail',
          path: 'review/:rid',
          component: ProductReviewDetail,
          props: (route) => {
            return {
              id: Number(route.params.id),
              rid: Number(route.params.rid)
            }
          }
        }
      ]
    }
  ]
})

export default router
