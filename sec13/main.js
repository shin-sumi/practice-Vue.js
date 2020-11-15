var app = new Vue({
  el: '#app',
  data:{
    count: 0,
    item: 'アイテム',
    show: false,
    message: 'Hello Vue.js!'
  },
  methods: {
    handleClick: function(e, prop){
      alert('クリック');
    },
    handleClickSecond: function(e, prop){
      console.log(`e: ${e.type}, prop:${prop}`);
    },
    handleScroll: function(e){
      console.log(e.type);
    },
    handleMousewheel: function(e){
      console.log(e.type);
    },
    handleDragstart: function(e){
      console.log(e.type);
    },
    handleInput: function(e){
      console.log(e.target.value);
      this.message = e.target.value;
    },
    rightClickHandler: function(e){
      console.log(e.type);
    },
    handler: function(comment){
      console.log(comment);
    }
  }
});