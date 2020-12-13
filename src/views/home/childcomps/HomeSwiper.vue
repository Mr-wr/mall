<!--
 * @Author: qi-you
 * @Date: 2020-12-11 11:32:36
 * @LastEditors: qi-you
 * @LastEditTime: 2020-12-13 17:33:54
 * @Descripttion: 
-->
<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.image">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "common/swiper";
export default {
  name: "",
  props: {
    banners: null,
  },
  data() {
    return {  };
  },
  components: { Swiper, SwiperItem },
  computed: {},
  
  methods: {},
};
</script>

<style scoped>
</style>