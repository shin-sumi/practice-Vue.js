<template>
  <div class="product-home">
    <div>{{ detail.content }}</div>
    <div>{{ detail.price }}円</div>
    <nav class="nav">
        <router-link :to="{ name: 'product-review' }" exact>{{ detail.name }}のレビュー一覧へ</router-link>
      </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('product', ['detail'])
  }
}
</script>
