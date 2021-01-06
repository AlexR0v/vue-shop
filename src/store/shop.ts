export default {
  state: {
    shopList: [
      {
        id: 1,
        title: 'Nike Red',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis deleniti distinctio dolor ea error nemo nesciunt nisi officiis quae.',
        img: require('../assets/shop-img/1.png'),
        gallery: [
          {name: 'Nike red first', img: require('../assets/shop-img/1.png')},
          {name: 'Nike red second', img: require('../assets/shop-img/2.png')},
          {name: 'Nike red third', img: require('../assets/shop-img/3.png')},
        ]
      },
      {
        id: 2,
        title: 'Nike Default',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis deleniti distinctio dolor ea error nemo nesciunt nisi officiis quae.',
        img: require('../assets/shop-img/4.png'),
        gallery: [
          {name: 'Nike def first', img: require('../assets/shop-img/4.png')},
          {name: 'Nike def second', img: require('../assets/shop-img/5.png')},
          {name: 'Nike def third', img: require('../assets/shop-img/6.png')},
        ]
      },
      {
        id: 3,
        title: 'Nike Green',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis deleniti distinctio dolor ea error nemo nesciunt nisi officiis quae.',
        img: require('../assets/shop-img/7.png'),
        gallery: [
          {name: 'Nike green first', img: require('../assets/shop-img/7.png')},
          {name: 'Nike green second', img: require('../assets/shop-img/8.png')},
          {name: 'Nike green third', img: require('../assets/shop-img/9.png')},
        ]
      },
      {
        id: 4,
        title: 'Nike Street',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis deleniti distinctio dolor ea error nemo nesciunt nisi officiis quae.',
        img: require('../assets/shop-img/10.png'),
        gallery: [
          {name: 'Nike street first', img: require('../assets/shop-img/10.png')},
          {name: 'Nike street second', img: require('../assets/shop-img/11.png')},
          {name: 'Nike street third', img: require('../assets/shop-img/12.png')},
        ]
      },
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getShopList(state: any) {
      return state.shopList
    },
    getProduct: (state: any) => (id: string) => {
      return state.shopList.find((product: any) => product.id === +id)
    }
  }
}
