Vue.component('my-component' ,{
  template: `<div>
              <p>テンプレート</p>
              <p>テンプレート</p>
            </div>`
});
Vue.component('my-component-second', {
  template: '#child-template'
});
Vue.component('my-component-fourth', {
  template: '<tr>\
              <td>テーブル行テンプレート</td>\
            </tr>'
});
Vue.component('my-component-third', {
  render: function(createElement){
    return createElement('p', this.message)
  },
  data: function(){
    return {
      message: '描画関数'
    }
  }
});

var app = new Vue({
  el: '#app'
});