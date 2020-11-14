/*
  グローバルに登録
*/
Vue.filter('lowerCase', function(val){
  return val.toLowerCase();
})

var app = new Vue({
  el: '#app',
  data: {
    price: 19800,
    message: 'FILTER',
    foo: 'foo'
  },
  /*
    フィルタテキストベースの変換処理に特化した機能
    ローカル、グローバル両方に登録できるが、ローカルの場合でもthisへのアクセスはできない
  */
  filters: {
    localNum: function(val){
      return val.toLocaleString();
    },
    //フィルタに引数を持たせる
    consoleLog: function(val, foo, num){
        console.log(val, foo, num);
    },
    //小数点第2位で丸め
    round: function(val){
      return Math.round(val * 100) / 100;
    },
    //度からラジアンに変換
    radian: function(val){
      return val * Math.PI / 180;
    }
  }
});