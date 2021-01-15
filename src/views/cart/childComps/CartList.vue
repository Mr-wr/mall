<!--
 * @Author: qi-you
 * @Date: 2021-01-14 20:26:49
 * @LastEditors: qi-you
 * @LastEditTime: 2021-01-14 21:47:04
 * @FilePath: \spuer_mall\src\views\cart\childComps\CartList.vue
 * @Description: 
-->
<template>
  <div class="cart-list">
    <scroll class="scroll-content">
      <li v-for="item in getCartList" :key="item.desc">
        {{ item }}
      </li>
    </scroll>
  </div>
</template>

<script>
import Scroll from "common/scroll/Scroll";
import { mapGettersCartMixin } from "@/common/mixin";

export default {
  components: {
    Scroll
  },
  mixins: [mapGettersCartMixin]
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
