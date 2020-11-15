var scroll = new SmoothScroll();

var app = new Vue({
  el: '#app',
  data: {
    scrollY: 0,
    timer: null
  },
  methods: {
    handleScroll: function(){
      if(this.timer === null){
        this.timer = setTimeout(function(){
          this.scrollY = window.scrollY;
          clearTimeout(this.timer)
          this.timer = null;
        }.bind(this), 200);
      }
    },
    scrollTop: function(){
      /*
        ライブラリを利用したスムーススクロールの実装
        1行目でインスタンスを生成
      */
      scroll.animateScroll(0)
    },
    handleInput: function(e){
      console.log(e.target.value);
    }
  },
  created: function(){
    /*
    マウント要素外のイベントの登録はaddEventlistenerを利用
    */
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDwstroy: function(){
    /*
      マウント要素外の（この場合はwindow）のイベントは不要になったら解除するように
      たとえばインスタンスとセットにするならば、
      このようにライフサイクルフックのbeforedestroyメソッドでインスタンス破棄する前に解除
    */
    window.removeEventListener('scroll', this.handleScroll)
  }
});

/*
  jQueryからの更新
*/
$(document).on('click', '[data-update]', function(){
  /*
    .valはjQueryのイベントなので、
    JavaScriptのdispatchEventでイベントを送る
    これで、v-on:inputに登録したイベントも起こせる
  */
  $('#message').val($(this).attr('data-update'));
  $('#message')[0].dispatchEvent(new Event('input'));
});