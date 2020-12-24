<!--
 * @Author: qi-you
 * @Date: 2020-12-14 17:26:01
 * @LastEditors: qi-you
 * @LastEditTime: 2020-12-24 16:53:54
 * @Descripttion: 
-->
<template>
  <div class="goods-item" @click="todetail">
    <img :src="goodsItem.show.img" alt="" @load="itemImageLoad" />
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
  methods: {
    // 图片加载
    itemImageLoad() {
      // 事件总线发射实现
      this.$bus.$emit("itemImageLoad");
    },
    todetail() {
      this.$router.push("/detail/" + this.goodsItem.iid);
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