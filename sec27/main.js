Vue.component('functional-component', {
  functional: true,
  render: function(createElement, context){
    return createElement('div', context.props.message)
  },
  props: {
    message: String
  }
});

Vue.component('my-component-a', {
  template: '<div class="my-component-a">component A</div>'
});

Vue.component('my-component-b', {
  template: '<div class="my-component-a">component B</div>'
});

var mixin = {
  created: function(){
    this.hello();
  },
  methods: {
    hello: function(){
      console.log('hello from mixin');
    }
  }
}

Vue.component('my-component-c', {
  mixins: [mixin],
  template: '<div>MyComponentC</div>'
});
Vue.component('my-component-d', {
  mixins: [mixin],
  template: '<div>MyComponentD</div>',
  methods: {
    /*
      ミックスインとコンポーネントで、data, methods,computedが重複する場合、
      コンポーネントが優先される
    */
    hello: function(){
      console.log('hello from component');
    }
  },
  /*
    ミックスインとコンポーネントでフックが重複しているとき、
    ミックスインから先に全てのフックが呼び出される
  */
  created: function(){
    console.log('コンポーネントのcreated');
  }
});

Vue.component('my-component-e', {
  template: `<div v-if="show">
              <div>MyComponentE</div>
              <button v-on:click="show = !show">コンポーネントのルートタグに付与したv-ifを変更</button>
            </div>`,
  data: function(){
    return {
      show: true
    }
  },
  /*
    * 親コンポーネントでテンプレートに付与されたv-ifがfalseになると、コンポーネントは破棄される。
    つまり下記のフックのうちだとdestroyedが呼ばれるし、trueになればcreatedが呼ばれる。
    * コンポーネント自身のルートタグに付与されたv-ifがfalseになってもコンポーネントは破棄されず、
    状態がかわったときはupdate系のフックが呼ばれる。またそのとき、内側に子コンポーネントを持つ場合、
    その子コンポーネントは破棄される。
  */
  created: function(){
    console.log('my-component-e created');
  },
  updated: function(){
    console.log('my-component-e updated');
  },
  destroyed: function(){
    console.log('my-component-e destroyed');
  },
})

Vue.component('comp-board', {
  template: '<div>Message Board</div>'
});
Vue.component('comp-form', {
  template: '<div>Form\
              <textarea v-model="message"></textarea>\
            </div>',
  data: function(){
    return {
      message: ''
    }
  },
  /*
    keep-alive使用時に追加されるフック
    keep-aliveが適用されたコンポーネントがそれぞれ、
    活性時/非活性時になったときに呼ばれる。
  */
  activated: function(){
    console.log('Activated');
  },
  deactivated: function(){
    console.log('deactivated');
  }
})

var app = new Vue({
  el: '#app',
  data: {
    message: '関数型コンポーネント',
    componentTypes: ['my-component-a', 'my-component-b'],
    current: 0,
    show: true,
    boardCurrent: 'comp-board'
  },
  computed: {
    component: function(){
      return this.componentTypes[this.current];
    }
  }
})