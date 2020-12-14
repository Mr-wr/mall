<!--
 * @Author: qi-you
 * @Date: 2020-12-14 17:24:48
 * @LastEditors: qi-you
 * @LastEditTime: 2020-12-14 17:33:43
 * @Descripttion: 
-->
<template>
  <div>
    <goods-list-item :goods-item="item" v-for="item in goods" :key="item.show.img"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  props: {
    goods: {
      type: Array,
      defualt() {
        return [];
      },
    },
  },
  components: {
    GoodsListItem,
  },
};
</script>

<style scoped>
</style>