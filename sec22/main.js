//コンポーネントはルートインスタンスが生成される前に定義
//グローバル
Vue.component('my-component-global', {
  template: '<p>myComponentGlobal</p>'
});
//ローカル
var myComponentLocal = {
  //テンプレートのルート要素は単一でなければならない
  template: '<div><span>myComponentLocal</span><div>{{ $data }}</div></div>',
  //componentのdataはオブジェクトを返す関数でなければならない
  data: function(){
    return {
      message: 'Hello Vue.js'
    }
  }
}

var app = new Vue({
  el: '#app',
  components: {
    /*
      カスタムタグの名前となる左辺はケバブケースじゃなくても使用できるが、
      テンプレート内ではケバブケースで記述するように
      <my-component-local></my-component-local>
    */
    'my-component-local': myComponentLocal
  }
})