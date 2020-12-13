<!--
 * @Author: qi-you
 * @Date: 2020-12-11 17:33:35
 * @LastEditors: qi-you
 * @LastEditTime: 2020-12-13 17:33:05
 * @Descripttion: 
-->
<template>
  <div class="recommend">
    <div class="item" v-for="item in recommend" :key="item.image">
      <div class="img">
        <a :href="item.link"><img :src="item.image" alt="" /></a>
      </div>
      <div class="item-title">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.recommend {
  display: flex;
  text-align: center;
  justify-content: space-around;
  padding: 10px 0 30px;
  border-bottom: 10px solid #ccc;
}
.recommend .img a {
  display: block;
  height: 80px;
  margin-bottom: 15px;
}
.recommend .img img {
  height: 100%;
}
.recommend .item{
  font-size: 12px;
}
</style>