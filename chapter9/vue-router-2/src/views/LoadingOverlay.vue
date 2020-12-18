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
      return this.$store.state.loading.loading
    }
  }
}
</script>

<style scoped>
  .loading{
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
  .loading-enter-active{
    transition: all 0.25s;
    opacity: 1;
  }
  .loading-leave-active{
    transition: all 0.5s ease 0.5s;
    opacity: 0;
  }
</style>
