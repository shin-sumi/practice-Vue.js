var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    list: ['りんご', 'ばなな', 'いちご'],
    count: null,
    show: true
  },
  methods: {
    handleClick: function(e){
      alert(e.target);
    },
    toggle: function(){
      //トグル
      this.show = !this.show;
    }
  }
});
//データにアクセス
console.log(app.message);
//リストに追加
app.list.push('おれんじ');
