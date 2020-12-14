<!--
 * @Author: qi-you
 * @Date: 2020-12-14 17:26:01
 * @LastEditors: qi-you
 * @LastEditTime: 2020-12-14 18:13:29
 * @Descripttion: 
-->
<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img" alt="" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">收藏{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      defualt() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.goods-item {
  width: 46%;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
</style>