var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js',
    checkVal: true,
    checkValText: 'yes',
    checkArray: ['B'],
    radioVal: '',
    selectVal: 'b',
    multiSelectVal: ['a','c'],
    preview: '',
    rangeVal: 30,
    colorVal: '#ff2600',
    lazyVal: '',
    numberVal: 0,
    trimVal: '',
  },
  methods: {
    assignMessage: function(e){
      this.message = e.target.value;
    },
    handleFileInput: function(e){
      var file = e.target.files[0];
      if (file && file.type.match(/^image\/(png|jpeg)$/)){
        this.preview = window.URL.createObjectURL(file);
      }
    },
  }
});