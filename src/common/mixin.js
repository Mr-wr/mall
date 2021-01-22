/*
 * @Author: qi-you
 * @Date: 2021-01-09 18:22:05
 * @LastEditors: qi-you
 * @LastEditTime: 2021-01-20 11:00:59
 * @FilePath: \spuer_mall\src\common\mixin.js
 * @Description:
 */
import BackTop from "content/backtop/BackTop";
export const backtopMixin = {
  components: { BackTop },
  data() {
    return { isShowBackTop: false };
  },
  methods: {
    // 回到顶部
    scrollToTop() {
      this.$refs.scroll.scrollTo(0, 0);
    }
  }
};
export const imgLodeMixin = {
  methods: {
    imgLoaded() {
      this.$emit("imgLoade");
    }
  }
};

import { mapGetters } from "vuex";
export const mapGettersCartMixin = {
  computed: {
    ...mapGetters([
      "getCartList",
      "getCartListLength",
      "getStateIsAllSelect",
      "getCartCount"
    ])
  }
};

export const filtersMixin = {
  //过滤器
  filters: {
    showPrice(price) {
      return "￥" + (price * 1).toFixed(2);
    }
  }
};
