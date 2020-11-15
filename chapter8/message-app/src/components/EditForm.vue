<template>
  <div class="edit-form">
    <div>
      <P>v-bindとv-onでストアのステートと同期</p>
      <input type="text" :value="message" @input="doUpdate">
    </div>
    <div>
      <P>v-modelでストアのステートと同期</p>
      <input type="text" v-model="modelMessage">
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditForm',
  computed: {
    message() {
      return this.$store.getters.message
    },
    /*
      v-modelを利用する場合、ダイレクトにステートを操作できない
      セッターを利用する
    */
    modelMessage: {
      get() {
        return this.$store.getters.message
      },
      set(value) {
        return this.$store.dispatch('doUpdate', value)
      }
    }
  },
  methods: {
    doUpdate(event) {
      //ストアのアクションを呼ぶ
      this.$store.dispatch('doUpdate', event.target.value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
