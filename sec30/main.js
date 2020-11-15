var app = new Vue({
  el: '#app',
  data: {
    order: false,
    list: [
      {id: 1, name: 'りんご', price: 100},
      {id: 2, name: 'ばなな', price: 200},
      {id: 3, name: 'いちご', price: 300}
    ],
    enemyList: [
      {id: 1, name: 'スライム', hp: 100},
      {id: 2, name: 'ゴブリン', hp: 300},
      {id: 3, name: 'ドラゴン', hp: 500},
      {id: 4, name: 'つよいドラゴン', hp: 1000},
    ],
    limitHp: 300
  },
  computed: {
    sortedList: function(){
      return _.orderBy(this.list, 'price', this.order ? 'desc' : 'asc');
    },
    filteredList: function(){
      return this.sortedEnemyList.filter(function(el){
        return el.hp <= this.limitHp
      }, this);
    },
    sortedEnemyList: function(){
      return _.orderBy(this.enemyList, 'hp', this.order ? 'desc' : 'asc');
    }
  }
})