<template>
  <div id="app">
      <div class="added" v-my-plugin>追加要素</div>

      <img src="./assets/logo.png">
      <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    logSelf: function(){
      console.log(this);
    }
  },
  created: function(){
    console.log(this.$myPlugin);
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
