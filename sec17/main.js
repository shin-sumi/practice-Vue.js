var app = new Vue({
  el: '#app',
  data: {
    list: [
      {id: 1, name: '太郎'},
      {id: 2, name: '次郎'},
      {id: 3, name: '三郎'}
    ],
    item: {
      name: 'オブジェクト',
      value: 100
    },
    value: 10,
    numberList: [0, 1, 2, 3],
    editedNumberList: false,
    text: 'テキスト',
    width: 200,
    height: 100,
    repositoriesList: [],
    current: '',
    topics: [
      {id: 1, value: 'vue', name: 'Vue.js'},
      {id: 2, value: 'jQuery', name: 'jQuery'}
    ]
  },
  //ウォッチャの登録
  watch: {
    //監視するデータ
    list: {
      /*
        データに変更があったときに呼び出される処理
        第1引数に新しい値、第2引数に古い値を受け取れる
      */
      handler: function(newVal, oldVal){
        console.log(newVal, oldVal);
      },
      /*
        オプション
        deep: ネストされたオブジェクトも監視するか
        immediate: 初期読み込み時も呼び出すか
      */
      deep: true,
      immediate: true
    },
    //オブジェクトのプロパティを監視することもできる
    'item.value': {
      handler: function(newVal, oldVal){
        console.log(newVal, oldVal);
      },
      deep: true,
      immediate: true
    },
    text: {
      /*
        監視対象の変更頻度が高く、呼び出す処理の負荷が高いときは、
        setTimeoutや以下のようにLodashのライブラリを利用して実行頻度を制御する
      */
      handler: _.debounce(function(newVal){
        console.log(newVal);
      }, 500)
    },
    watchTarget: function(){
      console.log('複数データを算出プロパティから返すようにして、それを監視')
    },
    current: function(val){
      /*
        GitHubのAPIでトピックのリポジトリを検索
        ex: https://api.github.com/search/repositories?q=topic:vue
      */
      axios.get('https://api.github.com/search/repositories', {
        params: {q: 'topic:' + val}
      }).then(function(response){
        this.repositoriesList = response.data.items
      }.bind(this));
    }
  },
  methods: {
    appendToList: function(){
      this.list.push({id: 4, name: '花子'})
    },
    changeItemValue: function(){
      this.item.value = 1000
    },
    //配列内のオブジェクトのプロパティ変更時にも呼び出される
    changeListProp: function(){
      this.list[0].name = 'ポチ'
    },
    changeValue: function(){
      this.value = 20;
    },
    appendToNumberList: function(){
      this.numberList.push(4);
    },
    changeText: function(){
      this.text += '?';
    },
    incrementWidth: function(){
      this.width++;
    },
    incrementHeight: function(){
      this.height++;
    },
  },
  created: function(){
    //インスタンスメソッドthis.$watchを使用して各メソッド内でウォッチャを登録できる
    this.$watch('value', function(newVal, oldVal){
      console.log('this.$watchで登録したウォッチャ');
    }, {
      immediate: true
    })

    //インスタンスメソッドで登録した場合、返り値を使用して監視を解除できる
    //それを利用して一度だけ動作するウォッチャを作成
    var unwatch = this.$watch('numberList', function(newVal, oldVal){
      console.log(newVal);
      editedNumberList = true;
      unwatch();
    });

    this.$watch(function(){
      return [this.width, this.height]
    }, function(){
      console.log('インスタンスメソッドを使った複数データの監視')
    })

    /*
      p132[POINT]
      監視対象がオブジェクトの場合、新しい値と古い値は参照が同じ
      以下の例は、配列の要素が増減してもlengthプロパティの値は同じになる
    */
    this.$watch('list', function(newVal, oldVal){
      //immediate: trueを設定しているので、oldValがない時も考慮
      console.log(newVal.length, !!oldVal ? oldVal.length : '');
    }, {
      immediate: true
    });
    //コピーしたり..
    this.$watch(function(){
      return Object.assign([], this.list);
    }, function(newVal, oldVal){
      console.log(newVal.length, !!oldVal ? oldVal.length : '');
    }, {
      immediate: true
    });
    //対象にプロパティを含めるなどして対応
    this.$watch(function(){
      return {value: this.list, length: this.list.length}
    }, function(newVal, oldVal){
      console.log(newVal.length, !!oldVal ? oldVal.length : '');
    }, {
      immediate: true
    })
  },
  computed: {
    watchTarget: function(){
      return [this.width, this.height]
    }
  }
});