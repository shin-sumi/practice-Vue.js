<template>
  <div class="count-up">
    <p>コンポーネントとストアをバインドするヘルパー2</p>
    <div>
      <input type="number" v-model.number="exNumber">
      <button @click="addInputVal">リストに追加</button>
      <button @click="removeFromList">リストから要素を1つ削除</button>
      <p>リストに追加する値: {{ exNumber }}</p>
    </div>
    <div>リスト</div>
    <ul>
      <li v-for="item in exList">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'

export default {
  name: 'ExList',
  computed: {
    exNumber: {
      get() {
        return this.$store.getters.exNumber
      },
      set(value) {
        return this.$store.dispatch('doSetExNumber', value);
      }
    },
    exList() {
      return this.$store.getters.exList
    }
  },
  methods: {
    ...mapActions({
      addToList: 'doAddToExList',
      removeFromList: 'doRemoveFromExList'
    }),
    //ローカルのメソッド
    addInputVal() {
      this.addToList(this.exNumber);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul{
    list-style-type: none;
    padding: 0;
  }
  ul li{
    display: inline-block;
    margin-right: 15px;
    background-color: #efefef;
    padding: 5px;
    box-sizing: border-box;
  }
</style>
