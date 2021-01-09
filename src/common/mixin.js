/*
 * @Author: qi-you
 * @Date: 2021-01-09 18:22:05
 * @LastEditors: qi-you
 * @LastEditTime: 2021-01-09 18:35:57
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
