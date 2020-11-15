<template>
  <div>
    <div class="product" v-if="isDetailEmpty" key="product">
      <h1>{{ detail.name }}</h1>
      <nav class="nav">
        <router-link :to="{ name: 'product-review' }" exact>レビュー</router-link>
      </nav>
      <router-view />
    </div>
    <div v-else key="loading">商品情報を読み込んでいます。</div>
    <router-link :to="{path: '/product'}" exact>一覧へ</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default{
  props: {
    id: Number
  },
  computed: {
    // detailが空かどうかを返す
    isDetailEmpty () {
      return !!Object.keys(this.detail).length
    },
    ...mapGetters('product', ['detail'])
  },
  watch: {
    id: {
      handler () {
        this.$store.dispatch('product/load', this.id)
      },
      immediate: true
    }
  },
  beforeDestroy () {
    this.$store.dispatch('product/destroy')
  }
}
</script>
