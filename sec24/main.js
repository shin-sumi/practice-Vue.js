var app = new Vue({
  el: '#app',
  data: {
    message: 'Vue.js'
  },
  components: {
    'comp-child-first': {
      template: '<div class="comp-child-first">\
                  <slot>デフォルト</slot>\
                </div>'
    },
    'comp-child-second': {
      template: '<section class="comp-child-second">\
                  <header>\
                    <slot name="header">デフォルトタイトル</slot>\
                  </header>\
                  <div class="content">\
                    <slot>デフォルトコンテンツ</slot>\
                  </div>\
                  <slot name="footer"></slot>\
                </section>'
    },
    'comp-child-third': {
      template: '<div class="comp-child-third">\
                  <slot name="test-slot" text="Hello!"></slot>\
                </div>'
    },
    'comp-child-fourth': {
      template: '<ul>\
                  <slot v-for="item in list" v-bind:item="item"></slot>\
                </ul>',
      data: function(){
        return {
          list: ['one', 'two', 'three']
        }
      }
    }
  }
})