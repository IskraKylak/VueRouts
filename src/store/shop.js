export default {
   state: {
      shopList: [
         {
            id: 1,
            title: 'Nike Red',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            img: require('../assets/img/1.jpg'),
            gallery: [
               { name: 'Nike boots First', img: require('../assets/img/1.jpg') },
               { name: 'Nike boots Second', img: require('../assets/img/2.jpg') },
               { name: 'Nike boots Third', img: require('../assets/img/3.jpg') },
            ]
         },
         {
            id: 2,
            title: 'Nike Default',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            img: require('../assets/img/4.jpg'),
            gallery: [
               { name: 'Nike Default First', img: require('../assets/img/4.jpg') },
               { name: 'Nike Default Second', img: require('../assets/img/5.jpg') },
               { name: 'Nike Default Third', img: require('../assets/img/6.jpg') },
            ]
         },
         {
            id: 3,
            title: 'Nike Street',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            img: require('../assets/img/7.jpg'),
            gallery: [
               { name: 'Nike Street First', img: require('../assets/img/7.jpg') },
               { name: 'Nike Street Second', img: require('../assets/img/8.jpg') },
               { name: 'Nike Street Third', img: require('../assets/img/9.jpg') },
            ]
         },
         {
            id: 4,
            title: 'Nike Super',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            img: require('../assets/img/2.jpg'),
            gallery: [
               { name: 'Nike Super First', img: require('../assets/img/2.jpg') },
               { name: 'Nike Super Second', img: require('../assets/img/4.jpg') },
               { name: 'Nike Super Third', img: require('../assets/img/6.jpg') },
            ]
         },
      ]
   },
   mutations: {
   },
   actions: {
   },
   getters: {
      getShopList(state) {
         return state.shopList
      },
      getProduct: (state) => (id) => {
         return state.shopList.find(product => product.id == id)
      }
   },
   modules: {
   }
}