<!--
 * @Author: qi-you
 * @Date: 2021-01-14 20:26:49
 * @LastEditors: qi-you
 * @LastEditTime: 2021-01-20 11:08:36
 * @FilePath: \spuer_mall\src\views\cart\childComps\CartList.vue
 * @Description: 
-->
<template>
  <div class="cart-list">
    <scroll ref="scroll" class="scroll-content">
      <cart-list-item
        v-for="item in getCartList"
        :key="item.iid"
        :item-info="item"
      ></cart-list-item>
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import Scroll from "common/scroll/Scroll";
import CartListItem from "./CartListItem";
import { mapGettersCartMixin } from "@/common/mixin";
import CartBottomBar from "./CartBottomBar";
export default {
  components: {
    Scroll,
    CartListItem,
    CartBottomBar
  },
  mixins: [mapGettersCartMixin],
  activated() {
    console.log("刷新scroll");
    this.$refs.scroll.refresh();
  }
};
</script>

<style scoped>
.cart-list {
  /* position: relative; */
  height: calc(100% - 44px - 47px - 40px);
  overflow: hidden;
  background-color: #eee;
}
.cart-list .wrapper {
  margin-bottom: 10px;
}
.scroll-content {
  height: 100%;
}
</style>
