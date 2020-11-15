var app = new Vue({
  //elはアプリケーションを紐づけるためのセレクタ
  //マウントするとも言う
  el: '#app',
  //アプリケーションで使用するデータ
  data:{
    message: 'Vue.js'
  },
  //算出プロパティ
  computed:{
    /*
      プロパティなので呼ぶときは、
        app.computedMessage
      のように関数実行しないように
    */
    computedMessage: function(){
      //何かを処理した結果をデータとして返す
      return `${this.message}!`;
    }
  },
  //ライフサイクルフック
  //ライフサイクルフックの1つのcreatedは、インスタンスの生成と初期化は終わった直後に呼ばれる
  created: function(){
    console.log(this.computedMessage);
  },
  methods:{
    /*
      こっちはメソッドなので、呼ぶときは
        app.myMethod()
      のように関数実行
    */
    myMethod: function(){
      console.log('myMethod');
    }
  }
});
