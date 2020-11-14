<template>
  <div id="app">
    <img src="./assets/logo.png">
    <practice/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import practice from './components/practice'

//パス中の@はデフォルトで登録されている、`src`ディレクトリのエイリアス
/*
  ストアのインスタンスをVueアプリケーションのルート（今回ならmain.js）に登録すれば、
  コンポーネントのインスタンスプロパティ$storeとして、どこからでも使用できるようになる
*/
//import store from '@/store.js'

/*
  console.log(store.state.count);
  store.commit('increment');
  console.log(store.state.count);
*/

export default {
  name: 'App',
  components: {
    HelloWorld,
    practice
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
