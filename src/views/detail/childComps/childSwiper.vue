<!--
 * @Author: qi-you
 * @Date: 2020-12-27 11:04:25
 * @LastEditors: qi-you
 * @LastEditTime: 2020-12-27 11:27:52
 * @FilePath: \spuer_mall\src\views\detail\childComps\childSwiper.vue
 * @Description: 
-->
<template>
  <swiper class="top-images">
    <swiper-item class="item" v-for="item in topImages" :key="item">
      <img :src="item" alt="" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "common/swiper";

export default {
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.top-images {
  height: 300px;
}
</style>