<template>
  <div id="app">
    <p>{{ message }}</p>
    <EditForm />
    <CountUp />
    <ExList />
  </div>
</template>

<script>
import EditForm from '@/components/EditForm.vue'
import CountUp from '@/components/CountUp.vue'
import ExList from '@/components/ExList.vue'

export default {
  name: 'App',
  components: {
    EditForm,
    CountUp,
    ExList
  },
  computed: {
    message() {
      return this.$store.getters.message
    }
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
