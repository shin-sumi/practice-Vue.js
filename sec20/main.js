var app = new Vue({
  el: '#app',
  data: {
    list: []
  },
  watch: {
    list: function(){
      console.log('通常:', this.$refs.list.offsetHeight);
      this.$nextTick(function(){
        /*
          インスタンスメソッド`this.$nextTick`のコールバック内では、
          インスタンスのスコープが保持されるためthisはインスタンスを指す
        */
        console.log('nextTick:', this.$refs.list.offsetHeight);
      });
    }
  }
});