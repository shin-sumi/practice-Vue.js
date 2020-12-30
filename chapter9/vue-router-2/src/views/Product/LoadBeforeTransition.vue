<template>
  <div>
    <h1>{{ item.name }}</h1>
    <div>{{ item.content }}</div>
    <div>{{ item.price }}円</div>
  </div>
</template>

<script>
import products from '@/api/products.js'
export default {
  props: {
    id: Number
  },
  data () {
    return {
      item: {}
    }
  },
  beforeRouteEnter (to, from, next) {
    products.asyncFind(Number(to.params.id), item => {
      next(vm => {
        vm.item = item
      })
    })
  },
  beforeRouteUpdate (to, from, next) {
    products.asyncFind(Number(to.params.id), item => {
      this.item = item
    })
  }
}
</script>
