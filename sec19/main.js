//グローバルへの登録
Vue.directive('click', {
  inserted: function(el){
    el.click();
  }
})

var app = new Vue({
  el: '#app',
  data: {
    video1: false,
    video2: false
  },
  //カスタムディレクティブ
  directives: {
    focus: {
      inserted: function(el){
        el.focus();
      }
    },
    example: {
      /*
        利用できるフック
        各フックは、el, binding, vnode, oldVnodeを受け取れる
      */
      bind: function(el, binding){
        console.log(el, binding);
      },
      inserted: function(el, binding){
        console.log(el, binding);
      },
      update: function(el, binding){
        console.log(el, binding);
      },
      componentUpdated: function(el, binding){
        console.log(el, binding);
      },
      unbind: function(el, binding){
        console.log(el, binding);
      }
    },
    /*
      関数を設定すると、bindとupdateにフックする
      グローバルに設定するなら、第2引数に関数を渡す
      Vue.directive('example2', function(el){
  
      });
    */
    example2: function(el, binding, vnode, oldVnode){
      console.log(el, binding, vnode, oldVnode);
    },
    video: function(el, binding){
      /*
        関数を設定しているので、bindとupdateにフックしている。
        updateフックはバインドしているプロパティの変化だけではなく、
        要素を梱包しているコンポーネントの仮想DOMに変化があれば呼び出される。
        ということは、例えばvideo1プロパティが変更されると、
        データの変化をうけてコンポーネントが再描画され、
        video2プロパティをバインドしている要素のディレクティブも無駄に一緒に呼び出されてしまう。
        そこで、bindingオブジェクトの中にoldValueがあるので、
        新旧のバインドデータを比較して、変化があった場合のみ処理を実行するようにする。
      */
      if(binding.value !== binding.oldValue){
        binding.value ? el.play() : el.pause();
      }
    }
  }
});