<template>
  <div class="product-review">
    <h2>レビュー一覧</h2>
    <ul>
      <li v-for="{ id, reviewer, evaluation} in detail.reviews" :key="id">
        <div>
          <div>{{ reviewer }}さんのレビュー</div>
          <div>
            <span v-for="n in evaluation" :key="n">★</span>
          </div>
          <div><router-link :to="`review/${id}`" exact>レビュー詳細</router-link></div>
        </div>
      </li>
    </ul>
    <router-link :to="{ name: 'product-home' }" exact>商品詳細へ</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default{
  computed: {
    ...mapGetters('product', ['detail'])
  }
}
</script>
