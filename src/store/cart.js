/*
 * @Author: qi-you
 * @Date: 2021-01-14 09:33:38
 * @LastEditors: qi-you
 * @LastEditTime: 2021-01-16 10:30:34
 * @FilePath: \spuer_mall\src\store\cart.js
 * @Description:
 */
export const cartModule = {
  state: {
    cartList: []
  },
  mutations: {
    addCart(state, playload) {
      // 获取相同的iid
      let product = state.cartList.find(item => item.iid == playload.iid);
      if (product) {
        product.count += 1;
      } else {
        playload.count = 1;
        playload.isSelect = true;
        state.cartList.push(playload);
      }
    }
  },
  actions: {},
  getters: {
    getCartList(state) {
      return state.cartList;
    },
    getCartListLength(state) {
      return state.cartList.length;
    }
  }
};
