var app = new Vue({
  el: '#app',
  data: {
   toggle: false 
  },
  computed: {
    fill: function(){
      return this.toggle ? 'lightpink' : 'skyblue';
    }
  },
  components: {
    'my-circle': {
      template: '<circle cx="80" cy="75" r="50" v-bind:fill="fill"/>',
      props: {
        fill: String
      }
    }
  }
});