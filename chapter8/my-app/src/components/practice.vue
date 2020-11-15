<template>
  <div>
    <div>
      {{ this.$store.state.message }}
    </div>
    <div>
      {{ this.$store.getters.count }}
    </div>
    <div>
      {{ this.$store.getters.max }}
    </div>
    <div>
      {{ this.$store.getters.item(2).price }}
    </div>
    <div>
      {{ this.$store.getters.name(1) }}
    </div>
    <div>
      <input v-model.number="inputNumber">
      <button v-on:click="commitAssignmentToCount(inputNumber)">クリック</button>
    </div>
    <div>
      <!-- 算出プロパティを値にバインド、inputイベントでメソッドを呼び出す -->
      <input v-bind:value="getStoreMessage" v-on:input="updateMessage">
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'practice',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      inputNumber: 0
    }
  },
  created() {
    //ルートに登録してあれば、それぞれの.単一ファイルコンポーネント内から呼び出せるようになる
    console.log(this.$store.state.count);
    this.$store.commit('increment');
    console.log(this.$store.state.count);
    console.log(this.$store.getters.count);
  },
  methods: {
    commitAssignmentToCount: function(countNum){
      //commitで登録されているミューテーションを呼び出す
      this.$store.commit('assignmentToCount', countNum)
    },
    updateMessage: function(){
      //入力された値をもってディスパッチでストアのアクションを呼ぶ
      this.$store.dispatch('messageUpdate', event.target.value)
    }
  },
  computed: {
    //ストアのゲッターと同期
    getStoreMessage(){
      return this.$store.getters.getMessage
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
