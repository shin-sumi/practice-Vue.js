<template>
  <div class="practice">
    モジュールC以降のモジュールは名前空間を設定
    <dl>
      <dt>モジュールAのcount:</dt>
      <dd>{{ countA }}</dd>
    </dl>
    <dl>
      <dt>モジュールBのcount:</dt>
      <dd>{{ countB }}</dd>
    </dl>
    <dl>
      <dt>モジュールCのcount:</dt>
      <dd>{{ countC }}</dd>
    </dl>
    <dl>
      <dt>モジュールDのcount:</dt>
      <dd>{{ countD }}</dd>
    </dl>
    <dl>
      <dt>モジュールEのcount:</dt>
      <dd>{{ countE }}</dd>
    </dl>
    <dl>
      <dt>モジュールFのcount:</dt>
      <dd>{{ countF }}</dd>
    </dl>
    <dl>
      <dt>モジュールGのcount:</dt>
      <dd>{{ countG }}</dd>
    </dl>
    <dl>
      <dt>モジュールFのcount（モジュールGのゲッターからモジュールFのゲッターを使用）:
      </dt>
      <dd>{{ countFFromG }}</dd>
    </dl>
    <dl>
      <dt>ファイルを分けたモジュールHのcount:</dt>
      <dd>{{ countH }}</dd>
    </dl>
    <div>
      2つのモジュールで同一の名前のアクションを呼ぶ<button @click="commonCcountUpdate">commonCountUpdate</button>
    </div>
    <div>
      ネームスペースを持たせたmoduleCのアクションを呼ぶ<button @click="countUpdateC">countUpdateC</button>
    </div>
    <div>
      ネームスペースを持たせたmoduleDのアクションを呼ぶ<button @click="countUpdateD">countUpdateD</button>
    </div>
    <div>
      moduleFに登録したmoduleEのアクションを呼ぶ<button @click="countUpdateE">countUpdateE</button>
    </div>
    <div>
      moduleFに登録したmoduleGからModuleFのアクションを呼ぶ<button @click="countUpdateFFromG">countUpdateF</button>
    </div>
    <div>
      moduleFから自身にに登録したmoduleGのアクションを呼ぶ<button @click="countUpdateGFromF">countUpdateG</button>
    </div>
    <div>
      ファイルを分けたmoduleHのアクションを呼ぶ<button @click="countUpdateH">countUpdateH</button>
    </div>
    <hr>
    <div>
      再利用可能なモジュールとして定義し、moduleIとして登録
      <div>
        そのmoduleIのstateが返すオブジェクトのプロパティentries: {{ messageI }}
      </div>
      <div>
        ローカルのdata.messageAをv-modelで同期させたフォーム<input v-model.text="localMessageA">
      </div>
      <div>
        そのmoduleIのentriesに値をセットするmutationを呼ぶアクションを呼び、ローカルのdata.localMessageAを引数として渡す。
        <button @click="setMessageI(localMessageA)">moduleIのアクションを呼ぶ</button>
      </div>
    </div>
    <hr>
    <div>
      <div>
        <div>ルートのstoreのstate.rootMessage: {{ rootMessage }}</div>
        ローカルのdata.messageBを同期させたフォーム<input v-model.text="localMessageB">
      </div>
      <div>
        ルートのアクションを呼び、ローカルのdata.localMessageBを引数として渡す。
        <button @click="setRootMessage(localMessageB)">ルートのアクションを呼ぶ</button>
      </div>
    </div>
    <hr>
    <div>
      moduleIと同様に、再利用可能なモジュールをmoduleJとして登録
      <div>
        そのmoduleJのstateが返すオブジェクトのプロパティentries: {{ messageJ }}
      </div>
      <div>
        ローカルのdata.messageCをv-modelで同期させたフォーム<input v-model.text="localMessageC">
      </div>
      <div>
        そのmoduleJのentriesに値をセットするmutationを呼ぶアクションを呼び、ローカルのdata.localMessageJを引数として渡す。
        <button @click="setMessageJ(localMessageC)">moduleIのアクションを呼ぶ</button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'

export default {
  name: 'Practice',
  data() {
    return {
      localMessageA: '',
      localMessageB: '',
      localMessageC: '',
    }
  },
  computed: {
    ...mapGetters({
      countA: 'countA',
      countB: 'countB',
      //ネームスペースを持ったモジュールのゲッターをヘルパーで設定
      countC: 'moduleC/count',
      //ネストさせたモジュールのゲッターを設定
      countE: 'moduleF/moduleE/count',
      countF: 'moduleF/count',
      countG: 'moduleF/moduleG/count',
      countFFromG: 'moduleF/moduleG/countF',
      countH: 'moduleH/count',
      messageI: 'moduleI/entries',  
      //ルートのゲッター
      rootMessage: 'rootMessage',
      messageJ: 'moduleJ/entries'
    }),
    //個別に設定
    countD() {
      return this.$store.getters['moduleD/count']
    }
  },
  methods: {
    ...mapActions({
      commonCcountUpdate: 'doCountUpdate',
      //ネームスペースを持ったモジュールのアクションをヘルパーで設定
      countUpdateC: 'moduleC/doCountUpdate',
      //moduleFに登録されたmoduleEのアクションを呼ぶ
      countUpdateE: 'moduleF/moduleE/doCountUpdate',
      //moduleFに登録されたmoduleGからmoduleFのアクションを呼ぶ
      countUpdateFFromG: 'moduleF/moduleG/doCountUpdateF',
      //moduleFから自身に登録されたmoduleGのアクションを呼ぶ
      countUpdateGFromF: 'moduleF/doCountUpdateG',
      //ファイルを分けたモジュールHのアクションを呼ぶ
      countUpdateH: 'moduleH/doCountUpdate',
      setMessageI: 'moduleI/setData',
      setRootMessage: 'doSetRootMessage',
      setMessageJ: 'moduleJ/setData'
    }),
    //個別に設定
    countUpdateD() {
      this.$store.dispatch('moduleD/doCountUpdate')
    }
  },
  //コンポーネントで
  mounted() {
    this.$store.watch(
      (state, getters) => {
        return this.messageJ
      },
      (newVal, oldVal) => {
        console.log('コンポーネントでstateを監視を定義');
        console.log(`newVal: ${newVal}, oldVal: ${oldVal}`);
      }
    );
    this.$store.subscribeAction((mutation, state) => {
      console.log('コンポーネントでアクションにフック');
      console.log(`mutation.type: ${mutation.type}`);
      console.log(`mutation.payload: ${mutation.payload}`); 
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.practice{
  max-width: 1040px;
  text-align: left;
  margin: 0 auto;
}
dl{
  display: flex;
}
</style>
