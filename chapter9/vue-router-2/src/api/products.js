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
        comment: '商品A良い',
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
        reviewer: 'Aaron',
        comment: '商品B良い',
        evaluation: 5
      },
      {
        id: 2,
        reviewer: 'Cyrus',
        comment: '商品B普通',
        evaluation: 3
      },
      {
        id: 3,
        reviewer: 'Harold',
        comment: '商品B良くない',
        evaluation: 1
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
        reviewer: 'Aaron',
        comment: '商品C良い',
        evaluation: 5
      },
      {
        id: 2,
        reviewer: 'Cyrus',
        comment: '商品C普通',
        evaluation: 3
      },
      {
        id: 3,
        reviewer: 'Harold',
        comment: '商品C良くない',
        evaluation: 1
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
