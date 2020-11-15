//オプションの外で定義されたデータでもVue.jsのデータとして登録すると、リアクティブデータに変換される
var state = {count: 0};
var app = new Vue({
  el: '#app',
  data: {
    message: 'Vue.js!',
    state: state,
    //data直下のオプションは後から追加できないので、予め初期値や空を定義しておく
    newTodoText: '',
    visitCount: 0,
    hideCompleteTodos: false,
    todos: [],
    error: null
  }
});
state.count++;