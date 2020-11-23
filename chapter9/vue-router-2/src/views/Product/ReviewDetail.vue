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
    ...mapGetters('product', ['reviewDetail'])
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
  }
}
</script>
