<template>
  <transition name="loading">
    <div class="loading" v-if="loading">
      TODO: Loadingエフェクト入れる
    </div>
  </transition>
</template>

<script>
export default {
  computed: {
    loading () {
      return this.$store.state.loading
    }
  }
}
</script>
