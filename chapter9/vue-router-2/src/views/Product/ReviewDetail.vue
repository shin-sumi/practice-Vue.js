<template>
  <div class="review-detail">
    <h2>レビュー詳細</h2>
    <div>レビューIDは{{ rid }}</div>
  </div>
</template>

<script>
export default {
  props: {
    rid: Number
  }
}
</script>
