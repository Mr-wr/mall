/*
 * @Author: qi-you
 * @Date: 2021-01-14 09:33:38
 * @LastEditors: qi-you
 * @LastEditTime: 2021-01-20 10:16:35
 * @FilePath: \spuer_mall\src\store\cart.js
 * @Description:
 */
export const cartModule = {
  state: {
    cartList: [],
    isAllSelect: true
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
    },
    setIsAllSelect(state, playload) {
      state.isAllSelect = playload;
    }
  },
  actions: {},
  getters: {
    getCartList(state) {
      return state.cartList;
    },
    getCartListLength(state) {
      return state.cartList.length;
    },
    getStateIsAllSelect(state) {
      return state.isAllSelect;
    }
  }
};
