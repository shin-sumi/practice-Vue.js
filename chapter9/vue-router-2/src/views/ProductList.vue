<template>
  <div class="product-list">
    <h1>商品一覧</h1>
    <ul>
      <li v-for="{ id, name } in list" :key="id">
        <router-link :to="`/product/${ id }`">{{ name }}</router-link>
      </li>
    </ul>
    <h2>遷移前にデータ読み込み版</h2>
    <ul>
      <li v-for="{ id, name } in list" :key="id">
        <router-link :to="`/home-load-before/${ id }`">{{ name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('product', ['list'])
  }
}
</script>
