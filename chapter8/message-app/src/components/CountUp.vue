<template>
  <div class="count-up">
    <p>コンポーネントとストアをバインドするヘルパー</p>
    <div>
      ラベルを変更<input type="text" v-model="label">
    </div>
    <div>
      <label>{{ countLabel }}</label> {{ count }}
      <button @click="doCountUp">増加</button>
    </div>
  </div>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'

export default {
  name: 'CountUp',
  computed: {
    label: {
      get() {
        return this.$store.getters.countLabel
      },
      set(value) {
        return this.$store.dispatch('doUpdateCountLabel', value)
      }
    },
    ...mapGetters([
      'count',
      'countLabel'
    ])
  },
  methods: {
    ...mapActions([
      'doCountUp'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
