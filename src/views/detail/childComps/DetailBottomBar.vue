<!--
 * @Author: qi-you
 * @Date: 2021-01-09 16:31:27
 * @LastEditors: qi-you
 * @LastEditTime: 2021-01-16 19:14:58
 * @FilePath: \spuer_mall\src\views\detail\childComps\DetailBottomBar.vue
 * @Description: 
-->
<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addToCart() {
      this.$emit("addCart");
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  background-color: red;
  z-index: 9;
}
</style>
