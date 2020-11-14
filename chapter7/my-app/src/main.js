// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Added from './Added'

Vue.config.productionTip = false

var MyPlugin = {
  install: function(Vue, options){
    console.log(options);
    Vue.directive('my-plugin', function(el){
      console.log(el);
    });
    Vue.mixin({
      created: function(){
        if(this.logSelf){
          this.logSelf();
        }
      }
    });
    Vue.prototype.$myPlugin = 'My Plugin!';
  },

}
Vue.use(MyPlugin, {lang: 'ja'});

var windowPlugin = {
  install: function(){
    //プラグインデータ用にVueインスタンスを利用する
    var store = new Vue({
      data: {
        scrollY: 0
      }
    });
    var timer = null;
    window.addEventListener('scroll', function(){
      if(timer === null){
        timer = setTimeout(function(){
          store.scrollY = window.scrollY;
          clearTimeout(timer);
          timer = null;
        }, 200);
      }
    });
    Vue.prototype.$window = store.$data;
  }
}
Vue.use(windowPlugin);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App, Added },
  template: `<div>
              <App/>
              <Added/>
            </div>`,

})

//一応section40のES6記法を再確認
{
  {
    let x = 0;
    console.log(x++);
    
    /*
    const x = 0;
    console.log(x++);
    -> 再代入不可でエラー
    */
    {
      var x2 = 0;
      const x3 = 0;
      let x4 = 0;
    }
    console.log(x2);
    /*
    console.log(x3);
    console.log(x4);
    -> スコープ外からのアクセスでエラー
    */
  }

  {
    const array = [1, 2];
    array.push(3);
    console.log(array);
    /*
    array = [];
    -> constで宣言した配列は、初期化などのために空配列を代入することはできない
    */
    array.length = 0;
    console.log(array);
  }

  {
    let app = {
      //thisが必要な場合はアロー関数ではなくこちらを
      shorthandMethod() {
        console.log(this.message);
      },
      message: 'Shorthand Method'
    }
    app.shorthandMethod();
    
    //アロー関数いろいろ
    //ベーシックなやつ
    let array2 = [1, 2, 3];
    const newArray = array2.map(el => {
      return el * 2
    });
    console.log(newArray);
    
    //中括弧の省略で右辺がreturnの値に
    const newArray2 = array2.map(el => el * 3);
    console.log(newArray2);

    //引数が複数の場合は括弧で囲みグループ化
    const newArray3 = array2.map((el, index) => el * index);
    console.log(newArray3);

    /*
    returnを中括弧を省略してオブジェクトを返す場合、()でグループ化
    -> 関数のブロックと解釈されてしまうので
    */
    const newArray4 = array2.map(el => ({value: el * 2}));
    console.log(newArray4);
  }

  {
    let obj1 = {
      name: 'なまえ'
    }
    let obj2 = {
      template: `改行をそのまま書いたり
                  変数を埋め込んだり。
                  変数: ${obj1.name}
                `,
      log() {
        console.log(this.template);
      }
    }
    //テンプレートリテラル
    obj2.log();
  }

  {
    let a = 1;
    let b = 2;

    const newObject = {a, b};
    console.log(newObject);
  }
  {
    const [a, b] = [1, 2];
    console.log(a, b);

    const {name} = {id: 1, name: 'りんご'}
    console.log(name);

    function myFunction({id, name}){
      console.log(name);
    }
    myFunction({id: 1, name: 'いちご'});
  }
  {
    const array = [100, 200, 300];
    function myFunction(...array){
      array.forEach(function(el, i){
        console.log(`${i}: ${el}`);
      })
    }
    myFunction(...array);

    const newArray = [...array, 400];
    console.log(newArray);
  }
  {
    const array = [
      {id: 1, name: 'りんご'},
      {id: 2, name: 'ばなな'}
    ]

    //find: 条件に一致した最初の要素の値を1つ返す
    const result = array.find(el => el.id === 2);
    console.log(result);

    //find: 条件に一致した最初の要素のインデックスを1つ返す
    const resultIndex = array.findIndex(el => el.id === 2);
    console.log(resultIndex);
  }
  {
    function myFunction(num) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if(num < 10){
            resolve('success!');
          }else{
            resolve('error!');
          }
        }, 1000);
      })
    }
    myFunction(100).then(value => {
      console.log(value);
    })
    myFunction(5).then(value => {
      console.log(value);
    })
    myFunction(100).then().catch().finally(value => {
      console.log('どちらも処理')
    })
    myFunction(5).then().catch().finally(value => {
      console.log('どちらも処理')
    })
  }
}