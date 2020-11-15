var app = new Vue({
  el: '#app',
  data: {
    show: true,
    count: 0
  },
  components:{
    'my-label': {
      template: '<div>コンポーネントに対してトランジション使用 count: {{ count }}</div>',
      props: {
        count: Number
      }
    }
  }
});