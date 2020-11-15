<template>
  <div id="app">
    <nav>
      <router-link to="/" tag="span" class="g-navi-link" exact>Home</router-link>
      <router-link to="/product" tag="span" class="g-navi-link" exact>商品情報</router-link>
      <router-link to="/test" tag="span" class="g-navi-link" exact>テストページ</router-link>
    </nav>
    <router-view />
    <div>
      <hr>
      <h3>現在の$routeプロパティ</h3>
      {{ $route }}
      <div>
        <button @click="consoleRouteObj">$routeプロパティをコンソール出力</button>
      </div>
      <div>
        <button @click="toProduct">プログラムから商品情報ページに遷移</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    methods: {
      consoleRouteObj() {
        console.log(this.$route)
      },
      toProduct() {
        this.$router.push({path: '/product'});
      }
    }
  }
</script>

<style scoped>
  .g-navi-link{
    cursor: pointer;
  }
  .g-navi-link.router-link-active{
    background: #e25193;
    color: white;
  }
</style>