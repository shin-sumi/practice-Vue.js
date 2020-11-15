var app = new Vue({
  el: '#app',
  data: {
    show: true
  },
  mounted: function(){
    /*
      $elプロパティと$refsプロパティ
      DOMを直接参照するため、ライフサイクルフックのmouted以降じゃないと利用できない
    */
    //ルートの要素へは$elプロパティでアクセスできる
    console.log(this.$el);
    //ルート以外の要素は、要素にref属性を設定して、$refsプロパティを介してアクセスできる
    console.log(this.$refs.hello)
  },
  methods: {
    //$elや$refsは仮想DOMではないため、それらを使用してDOMを操作しても、仮想DOMによって上書きされる
    //以下のように$refsを利用してテキストを変更しても、v-ifを利用して表示を切り替えると、カウントは元に戻る
    handleClick: function(){
      var count = this.$refs.count;
      if(count){
        count.innerText = parseInt(count.innerText, 10) + 1;
      }
    }
  }
});