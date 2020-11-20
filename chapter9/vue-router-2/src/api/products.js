const database = [
  {
    id: 1,
    name: '商品A',
    price: 100,
    content: '商品A詳細',
    reviews: [
      {
        id: 1,
        reviewer: 'Aaron',
        comment: '商品A非常に良い',
        evaluation: 5

      },
      {
        id: 2,
        reviewer: 'Cyrus',
        comment: '商品A普通',
        evaluation: 3
      },
      {
        id: 3,
        reviewer: 'Harold',
        comment: '商品A良くない',
        evaluation: 1
      }
    ]
  },
  {
    id: 2,
    name: '商品B',
    price: 200,
    content: '商品B詳細',
    reviews: [
      {
        id: 1,
        reviewer: 'Abbie',
        comment: '商品Bあまり良くない',
        evaluation: 2
      },
      {
        id: 2,
        reviewer: 'Claudia',
        comment: '商品Bまあまあ良い',
        evaluation: 4
      },
      {
        id: 3,
        reviewer: 'Gloria',
        comment: '商品Bあまり良くない',
        evaluation: 2
      }
    ]
  },
  {
    id: 3,
    name: '商品C',
    price: 300,
    content: '商品C詳細',
    reviews: [
      {
        id: 1,
        reviewer: 'Avdotya',
        comment: '商品C普通',
        evaluation: 3
      },
      {
        id: 2,
        reviewer: 'Ivanna',
        comment: '商品Cまあまあ良い',
        evaluation: 4
      },
      {
        id: 3,
        reviewer: 'Pulkheriya',
        comment: '商品C非常に良い',
        evaluation: 5
      }
    ]
  }
]

export default {
  fetch (id) {
    return database
  },
  find (id) {
    return database.find(el => el.id === id)
  },
  asyncFind (id, callback) {
    setTimeout(() => {
      callback(database.find(el => el.id === id))
    }, 1000)
  }
}
