var app = new Vue({
  el: '#app',
  data: {
    name: 'キマイラ',
    list: [
      {id: 1, name: 'スライム', hp: 100},
      {id: 2, name: 'ゴブリン', hp: 200},
      {id: 3, name: 'ドラゴン', hp: 500}
    ],
    obj: {
      id: 1,
      name: 'オブジェクトの場合',
      prop: 'テストプロパティ'
    },
    simpleList: ['シンプル1', 'シンプル2', 'シンプル3'],
    text: 'Vue',
    //外部データ格納用に予め空リストを用意
    exList: []
  },
  methods:{
    strengthen: function(){
      this.list.forEach(function(val, i){
        val.hp = 1000;
      })
    },
    doAdd: function(){
      //リスト内で一番大きいIDを取得
      var max = this.list.reduce(function(accumulator, currentValue){
        return accumulator > currentValue.id ? accumulator : currentValue.id;
      }, 0);
      this.list.push({
        id: max+1, //現在の最大のidに+1してユニークIDを作成
        name: this.name,
        hp: 500
      });
    },
    doRemove: function(i){
      //受け取ったインデックスの位置から1つを削除
      this.list.splice(i, 1);
    },
    doChange: function(){
      /*
        以下のようなインデックス指定での配列の更新はVue.jsで検知できない
        this.list[0] = {id: 1, name: 'キングスライム', hp: 500}
      */
      //以下のようにVue.setメソッドを使う（this.$setでも使用できる）
      this.$set(this.list, 0, {id: 1, name: 'キングスライム', hp: 500});
    },
    doAttack: function(i){
      this.list[i].hp -= 10;
    },
    doFilter: function(){
      //filterメソッドなど、配列を直接変更しないメソッドで返り値を使って配列を置き換えることが可能
      this.list = this.list.filter(function(el){
        return el.hp >= 200;
      });
    }
  },
  //this.$setメソッドは、元々持っていないプロパティをリアクティブデータとして追加するためにも使用する
  created: function(){
    this.list.forEach(function(item){
      //item.active = falseではリアクティブにならない
      this.$set(item, 'active', false)
    }, this);
    /*
      forEachの第二引数の話
      Vue.$setメソッド（this.$setメソッド）をforEachの内で呼ぶために、第二引数にthisを渡す
      （この場合コールバック関数内のthisはvue）。
      thisを渡さない場合、コールバック内のthisはWindowになる
    */

    //ajaxライブラリのaxiosを使用して外部のデータを取得
    axios.get('list.json').then(function(response){
      console.log(this);
      this.exList = response.data;
      //.bind(this)に注目 これはthisを束縛している（この場合thisはインスタンスそのもの）
      //当然束縛していないとthisはWindowになる
    }.bind(this)).catch(function(e){
      console.error(e);
    })
  }
})