<template>
  <div id="added">
      <div class="title">追加コンポーネント</div>
      <div class="desc">
        プラグインを利用し、スクロール値をリアクティブデータで、パブリックな値として登録。<br>
        コンポーネントから利用。
      </div>
      <div class="num">
        {{ $window.scrollY }}
      </div>
  </div>
</template>

<script>
export default {
  name: 'Added'
}
</script>

<style scoped>
#added {
  background-color: #efefef;
  height: 2000px;
  text-align: center;
}
.title{
  text-align: center;
  font-weight: bold;
  font-size: 2em;
}
</style>
