<template>
  <div class="review-detail">
    <h2>レビュー詳細</h2>
    <div>商品IDは{{ id }}レビューIDは{{ rid }}</div>
    <dl>
      <dt>投稿者</dt>
      <dd>{{ reviewDetail.reviewer }}</dd>
      <dt>評価</dt>
      <dd>
        <span v-for="n in reviewDetail.evaluation" :key="n">★</span>
      </dd>
      <dt>コメント</dt>
      <dd>{{ reviewDetail.comment }}</dd>
    </dl>
    <div>
      <router-link :to="{ name: 'product-review' }" exact>{{ detail.name }}のレビュー一覧へ</router-link>
    </div>
    <div>
      <router-link :to="{ name: 'product-home' }" exact>{{ detail.name }}の商品詳細へ</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default{
  props: {
    id: Number,
    rid: Number
  },
  computed: {
    isReviewDetailEmpty () {
      return !!Object.keys(this.detail).length
    },
    ...mapGetters('product', ['detail', 'reviewDetail'])
  },
  watch: {
    rid: {
      handler () {
        this.$store.dispatch('product/reviewLoad', {id: this.id, reviewId: this.rid})
      },
      immediate: true
    }
  },
  beforeDestroy () {
    this.$store.dispatch('product/reviewDestroy')
  },
  beforeRouteEnter (to, from, next) {
    setTimeout(next, 1000)
  }
}
</script>
