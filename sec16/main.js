var app = new Vue({
  el: '#app',
  data: {
    width: 800,
    height: 600,
    budget: 300,
    limit: 2,
    list: [
      {id: 1, name: 'りんご', price: 100},
      {id: 2, name: 'ばなな', price: 200},
      {id: 3, name: 'いちご', price: 400},
      {id: 4, name: 'おれんじ', price: 300},
      {id: 5, name: 'めろん', price: 500}
    ],
    order: false
  },
  methods: {
    /*
      算出プロパティは関数として定義するが、プロパティとして使用できる
      メソッドからの使い方
    */
    consoleHalfWidth: function(){
      alert(this.halfWidth);
    },
    methodsRandom: function(){
      return Math.random();
    }
  },
  computed: {
    halfWidth: function(){
      return this.width / 2;
    },
    halfHeight: function(){
      return this.height / 2;
    },
    halfPoint: function(){
      return {
        x: this.halfWidth,
        y: this.halfHeight,
      }
    },
    halfWidthSec: {
      get: function(){
        return this.halfWidth
      },
      set: function(val){
        this.width = val * 2
      }
    },
    computedRandom: function(){
      return Math.random();
    },

    //limitを変更しても、matchedはキャッシュが使われるためlimitedとfilteredListの処理のみで済むようになる
    matched: function(){
      return this.list.filter(function(el){
        return el.price <= this.budget;
      }, this)
    },

    //ソート機能を追加
    sorted: function(){
      /*
        lodashのorderByを使用
        第1引数に、配列やオブジェクト、第2引数にソートするプロパティ、第3引数に昇順か降順を渡す
      */
      /*
        this.matchedや、this.listなど、元の配列を直接操作しないようにすること
        例えば、lodashを使わず、sortメソッドを使用する場合、配列をコピーするようにして、元の配列に対して非破壊的に使用すること
        x this.list.sort();
        ○ this.list.slice(0).sort(); //sliceメソッドは新しい配列を返す
      */
      return _.orderBy(this.matched, 'price', this.order ? 'desc': 'asc');
    },

    limited: function(){
      /*
        ソートした配列に対してlimit件返すように変更
        元: 
        return this.matched.slice(0, this.limit);
      */
      return this.sorted.slice(0, this.limit);
    },
    filteredList: function(){
      return this.limited;
    }
  }
});