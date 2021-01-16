<!--
 * @Author: qi-you
 * @Date: 2020-12-01 17:45:21
 * @LastEditors: qi-you
 * @LastEditTime: 2021-01-16 10:28:21
 * @Descripttion: 
-->
<template>
  <div class="cart">
    <!-- <h2>购物车</h2> -->
    <nav-bar class="nav-bar" bgcolor="#ff8198">
      <div slot="center" class="home-font">购物车({{ getCartListLength }})</div>
    </nav-bar>
    <cart-list></cart-list>
  </div>
</template>

<script>
import NavBar from "common/navbar/NavBar";
import CartList from "./childComps/CartList";
import { mapGettersCartMixin } from "@/common/mixin";
export default {
  components: { NavBar, CartList },
  mixins: [mapGettersCartMixin]
};
</script>
<style scoped>
.cart {
  height: 100vh;
}
</style>
