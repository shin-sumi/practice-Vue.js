var app = new Vue({
  el: '#app',
  data: {
    message: 'Vue.js!',
    //ネストも可能
    messageObj: {
      value: 'Hello Vue.js!'
    },
    list: ['りんご', 'ばなな','いちご'],
    //{{ list[num] }}のようにMastache記法内でプロパティを組み合わせて使用できる
    num: 1,
    scroll: 0,
    svgViewBox: '0, 0, 20, 20',
    count: 0,
    isChild: true,
    isOpen: true,
    isActive: true,
    textColor: 'red',
    bgColor: 'lightgray',
    classObj: {
      child: true,
      'is-active': true
    },
    styleObj: {
      color: 'red',
      backgroundColor: 'lightgray'
    },
    item: {
      id: 1,
      src: 'item.jpg',
      alt: '商品サムネイル',
      width: 200,
      height: 200
    },
    radius: 50

  },
  computed: {
    //次のような長い式はテンプレートに記述せず、例えば以下のように算出プロパティにしたほうがよい
    messageLength: function(){
      return this.message.length >= 10 ? '10文字以上' : '10文字未満';
    }
  },
  //ライフサイクルフックの1つインスタンスがマウントされたときにフック
  mounted: function(){
    this.scroll = 100;
  },
  methods: {
    increment: function(){
      this.count += 1;
    },
    incrementSecond: function(){
      //アロー関数のthisの束縛しない話
      //以下のthisはwindow
      /*        
        setTimeout(function(){
          this.count++;
        }, 100);
      */
      //var self = thisをつかってもいいけど...せっかくならアロー関数を
      setTimeout(() => {
        this.count++;
      });

      //以下のパターンでもOK
      //無名関数をthisに紐付けるパターン
      setTimeout(function(){
        this.count++;
      }.bind(this), 100);

      //無名関数ではなくインスタンスのメソッドを指定
      setTimeout(this.increment, 100);
    },
    //省略記法
    incrementThird(){
      this.count++;
    },
    toggleActiveClass: function(){
      this.isActive = !this.isActive
    }
  }
})