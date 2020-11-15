var app = new Vue({
  el: '#app',
  data: {
    url: 'https://vuejs.org',
    message: 'Hello Vue.js!',
    htmlMessage: 'Hello <strong>Vue.js!</strong>'
  },
  methods: {
    changeMessage: function(){
      this.message = 'Changed!';
    }
  }
});

var secondApp = new Vue({
  el: '#second-app',
  data: {
    message: 'v-cloak'
  }
});

var thirdApp = new Vue({
  el: '#third-app',
  data: {
    testData: true
  },
  methods: {
    toggleTestData: function(){
      this.testData = !this.testData;
    }
  }
})