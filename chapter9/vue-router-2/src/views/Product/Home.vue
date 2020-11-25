<template>
  <div class="product-home">
    <h2>商品Home</h2>
    <nav class="nav">
        <router-link :to="{ name: 'product-review' }" exact>レビュー一覧</router-link>
      </nav>
  </div>
</template>

<script>
export default {}
</script>
