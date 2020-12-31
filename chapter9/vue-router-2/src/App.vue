<template>
  <div id="app">
    <nav>
      <router-link :to="{path: '/'}" exact>Home</router-link>
      <router-link :to="{path: '/product'}" exact>商品情報</router-link>
      <router-link :to="{path: '/about'}" exact>About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
  .router-link-active {
    background-color: #e25193;
  }
</style>
