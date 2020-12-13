<template>
  <div>
    <div class="product" v-if="isDetailEmpty" key="product">
      <h1>{{ detail.name }}</h1>
      <div class="detail-content-parent">
        <transition name="view">
          <router-view />
        </transition>
        <loading-overlay />
      </div>
    </div>
    <div v-else key="loading">商品情報を読み込んでいます。</div>
    <router-link :to="{path: '/product'}" exact>商品一覧へ</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LoadingOverlay from '@/views/LoadingOverlay.vue'
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
  components: {
    'loading-overlay': LoadingOverlay
  },
  beforeDestroy () {
    this.$store.dispatch('product/destroy')
  },

  beforeRouteEnter (to, from, next) {
    /*
      beforeRouteEnterではコンポーネントのインスタンス（this）にアクセスできない（undefinedになる）
      console.log(this)

      以下のようにnextのコールバックの引数としてアクセスできる
    */
    next((vm) => {
      console.log('component:beforeRouteEnter', vm)
    })
  },
  beforeRouteUpdate (to, from, next) {
    console.log('component:beforeRouteUpdate', this)
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('component:beforeRouteLeave', this)
    next()
  }
}
</script>

<style scoped>
  .detail-content-parent{
    position: relative;
  }
  .detail-content-parent >>> h2{
    margin-top: 0;
  }
  .view-enter-active, .view-leave-active{
    transition: opacity 0.5s;
  }
  .view-leave-active{
    position: absolute;
  }
  .view-enter, .view-leave-to{
    opacity: 0;
  }
</style>
