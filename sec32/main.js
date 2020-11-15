var app = new Vue({
  el: '#app',
  data: {
    show: true
  },
  methods:{
    //各フックでは第1引数でトランジションがおこなわている要素を受け取る
    enter: function(el, done){
      console.log('enter');
      /*
        enterやleaveフックをハンドルしている場合、doneを実行しない限り、
        次のフックに移行しない
      */
      setTimeout(done, 1000);
    },
    afterEnter: function(el){
      console.log('afterEnter');
    },
    leave: function(el, done){
      var style = window.getComputedStyle(el);
      el.style.transition = 'opacity .5s';
      el.style.opacity = '0';
      setTimeout(done, 1000);
    },
    afterLeave: function(el){
      el.style.opacity = '1';
      el.style.transition = '';
    }
  }
})