var compChild = {
    template: '<p id="child" class="child">{{ val }}</p>',
    /*
      属性をつかったデータの受け渡し
      「props down」というデータフロー
      親->子の単方向
    */
    props: ['val']
}
var myComponent = {
  /*
    テンプレートで他のコンポーネントを使用すると親子関係となる
  */
  //リアクティブなデータも渡せる
  template: `<div id="child" class="child">
              <comp-child val="これは孫A"></comp-child>
              <comp-child val="これは孫B"></comp-child>
              <comp-child v-bind:val="message"></comp-child>
              <p>親から受け取ったmy-data: {{ myData }}</p>
            </div>`,
  data: function(){
    return {
      message: 'message'
    } 
  },
  components: {
    'comp-child': compChild
  },
  props: ['my-data']
}

var bus = new Vue({
  data: {
    count: 0
  }
});

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    list: [
      {id: 1, name: 'スライム', hp: 100},
      {id: 2, name: 'ゴブリン', hp: 200},
      {id: 3, name: 'ドラゴン', hp: 500}
    ],
    example1: {
      propA: 1,
      propB: '文字列',
      propC: '必須',
      propD: 500,
      propE: {message: 'Vue'},
      propF: 100
    },
    example2: {
      propA: '1',
      propB: [1,2,3],
      propF: 5
    },
    parentData: '親のデータ'
  },
  methods: {
    parentMethod: function(){
      alert('イベントをキャッチ');
    },
    handleAttack: function(id){
      var item = this.list.find(function(el){
        return el.id === id
      });
      if(item !== undefined && item.hp > 0){
        item.hp -= 10;
      }
    },
    testHandleClick: function(){
      alert('クリック');
    },
    refsExample: function(){
      //$refsを利用して子コンポーネントを参照
      this.$refs.child.$emit('open');
    },
    parentMethodSecond: function(childArg, parentArg){
      alert('子のデータ:'+childArg.name+'、親のデータ:'+parentArg);
    }
  },
  components: {
    'my-component': myComponent,
    'comp-li': {
      template: '<li>{{ name }} HP. {{ hp }}\
                  <button v-on:click="doAttack">クリック</button>\
                </li>',
      props: ['name', 'hp'],
      methods: {
        doAttack: function(){
          /*
            propsで受け取ったデータは、thisを使用してアクセスできるが、
            上書きしようとするとエラーになる
          */
          this.hp -= 10;
        }
      }
    },
    //propsには型を指定すべき
    'example': {
      template: '<ul>\
                  <li>propA: {{ propA }}</li>\
                  <li>propB: {{ propB }}</li>\
                  <li>propC: {{ propC }}</li>\
                  <li>propD: {{ propD }}</li>\
                  <li>propE: {{ propE }}</li>\
                  <li>propF: {{ propF }}</li>\
                </ul>',
      props: {
        propA: Number,
        //複数の型を指定できる
        propB: [String, Number],
        //必須
        propC: {
          type: String,
          required: true
        },
        //デフォルト値
        propD: {
          type: Number,
          default: 100
        },
        //オブジェクトと配列のデフォルト値は関数から返す
        propE: {
          type: Object,
          default: function(){
            return {message: 'hello'}
          }
        },
        //カスタムバリデータ関数
        propF: {
          validator: function(value){
            return value > 10
          }
        }
      }
    },
    'child-button-comp': {
      template: '<button v-on:click="handleClick">クリック</button>',
      methods: {
        handleClick: function(){
          //$emitで親テンプレートカスタムタグにハンドルしたカスタムイベントを発生させる
          this.$emit('childs-event');
        }
      }
    },
    'comp-enemy': {
      template: '<li>{{ name }} HP. {{ hp }}\
                  <button v-on:click="doAttack">攻撃する</button>\
                </li>',
      props: {id: Number, name: String, hp: Number},
      methods: {
        doAttack: function(){
          /*
            $emitで親のテンプレートタグにハンドルしたattackを発火、引数で自分のidを渡す
            また、親はこのidを知っているので、ここで引数を渡さずに、親のカスタムタグで、
            v-on:attack="handleAttack(item.id)"
            としてもよい
          */
          this.$emit('attack', this.id);
        }
      }
    },
    'test-click': {
      template: '<button>カスタムタグのイベントハンドリング</button>'
    },

    /*
      非親子コンポーネント間でのイベント発火
      ここではさらにデータをイベントバスに持たせている
    */
    'component-a': {
      template: '<button v-on:click="CompBEvent">イベントバスのdata.countを増加</button>',
      methods: {
        CompBEvent: function(){
          //component-bで、バスに紐づけたイベントを発火
          bus.$emit('bus-event');
        }
      }
    },
    'component-b': {
      template: '<p>bus: {{ bus.count }}</p>',
      computed: {
        //busのデータを算出プロパティで使用
        bus: function(){
          return bus.$data;
        }
      },
      created: function(){
        //バスにイベント紐づけ
        bus.$on('bus-event', function(){
          //無名関数内のthisはbusのインスタンス
          this.count++;
        })
      }
    },
    'refs-example': {
      template: '<button>$refsで子コンポーネントを参照</button>',
      created: function(){
        this.$on('open', function(){
          console.log('open');
        })
      }
    },
    'scope-example': {
      template: '<button v-on:click="scopeExChildMethod">親のカスタムタグに紐づけたイベントを発火</button>',
      methods: {
        scopeExChildMethod: function(){
          this.$emit('child-event', {id: 1, name: '新しい名前'});
        }
      }
    }
  }
});