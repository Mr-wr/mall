<!--
 * @Author: qi-you
 * @Date: 2021-01-14 20:26:49
 * @LastEditors: qi-you
 * @LastEditTime: 2021-01-16 09:55:50
 * @FilePath: \spuer_mall\src\views\cart\childComps\CartList.vue
 * @Description: 
-->
<template>
  <div class="cart-list">
    <div class="a">
      {{ getCartList }}
    </div>
    <scroll ref="scroll" class="scroll-content">
      <cart-list-item
        v-for="item in getCartList"
        :key="item.iid"
        :item-info="item"
      ></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from "common/scroll/Scroll";
import CartListItem from "./CartListItem";
import { mapGettersCartMixin } from "@/common/mixin";

export default {
  components: {
    Scroll,
    CartListItem
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
  height: calc(100% - 44px - 47px);
  overflow: hidden;
}
.scroll-content {
  height: 100%;
}
</style>
