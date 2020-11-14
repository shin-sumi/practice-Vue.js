<template>
  <div class="product" v-if="item" key="product">
    <h1>商品情報</h1>
      <dl>
        <dt>商品名</dt>
        <dd>{{  item.name }}</dd>
        <dt>価格</dt>
        <dd>{{ item.price }}</dd>
        <dt>商品説明</dt>
        <dd>{{ item.content }}</dd>
      </dl>
    <hr />
    <p>$routeを使用して直接うけとったurlのパラメータ`:id`</p>
    id: {{ $route.params.id }}
    <pre>
      {{ "\{\{ $route.params.id \}\}" }}
    </pre>
    <p>ただし、$routeを使用するとルートとコンポーネントが密結合になるので、パラメータは以下のようにpropsとしてうけとることが推奨される。</p>
    id: {{ id }}<br>
    ルート定義
    <pre>
      {
        path: '/product/:id',
        component: Product,
        props: true
      }
    </pre>
    コンポーネント
    <pre>
      export default{
        props: {
          id: Number
        }
      }
    </pre>
    <p>
      ただ、このままではURLのidは文字列で、コンポーネント側ではNumberになっているのでエラーになる。<br>
      そこで、ルートのpropsオプションはオブジェクトや関数が定義できるので、渡す前に型変換を行う。
    </p>
    <pre>
      {
        path: '/product/:id',
        component: Product,
        props: route => ({id: Number(route.params.id)})
      }
    </pre>
  </div>
</template>
<script>
import products from '@/api/products.js'
  export default{
    props: {
      id: Number
    },
    data() {
      return {
        item: null
      }
    },
    watch: {
      id: {
        handler() {
          products.asyncFind(this.id, item => {
            this.item = item
          })
        },
        //immediateオプションで初期時でも呼び出す
        immediate: true
      }
    }
  }
</script>