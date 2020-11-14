var app = new Vue({
  el: '#app',
  data: {
    parentDate: '',
    parentDateSecond: '',
    name: 'スライム',
    hp: 100
  },
  methods: {
    changeParentDate: function(){
      this.parentDate = '1990-12-31'
    },
    changeParentDateSecond: function(){
      this.parentDateSecond = '2040-12-31'
    },
  },
  components: {
    'my-calendar': {
      template: '<div class="my-calendar">\
                  <p>value: {{ value }}</p>\
                  <button v-on:click="emitInput">子側からinputイベント発火</button>\
                </div>',
      /*
        v-modelの現在のプロパティはvalue属性は、親の属性なのでpropsで受け取らないと、
        子で使用できない
        （シンタックスシュガーを使わない場合のv-bind:value）
      */
      props: {value: String},
      methods: {
        emitInput: function(){
          this.$emit('input', '2018-01-01');
        }
      }
    },
    'my-calendar-second': {
      template: '<div class="my-calendar-second">\
                    <p>current: {{ current }}</p>\
                    <button v-on:click="emitChange">子側からchangeイベント発火</button>\
                </div>',
      props: {current: String},
      methods: {
        /*
          modelオプションを用いて、
          value以外のプロパティ、input以外のイベントを使用
        */
        emitChange: function(){
          this.$emit('change', '2000-05-05');
        }
      }
    },
    'my-component': {
      template: '<div class="my-component">\
                  <p>名前.{{ name }} HP.{{ hp }}</p>\
                  <p>名前 <input v-model="localName"></p>\
                  <p>HP <input size="5" v-model.number="localHp"></p>\
                </div>',
      props: {
        name: String,
        hp: Number
      },
      computed: {
        localName: {
          get: function(){ return this.name },
          set: function(val){ this.$emit('update:name', val) }
        },
        localHp: {
          get: function(){ return this.hp },
          set: function(val){ this.$emit('update:hp', val) }
        }
      }
    }
  }
})