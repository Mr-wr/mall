<!--
 * @Author: qi-you
 * @Date: 2020-12-11 11:32:36
 * @LastEditors: qi-you
 * @LastEditTime: 2020-12-16 20:20:01
 * @Descripttion: 
-->
<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.image" >
      <a href="#">
        <img :src="item.image" alt="" @load="imgLoad" />
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
    return {
      isImgload: true,
    };
  },
  components: { Swiper, SwiperItem },
  computed: {},

  methods: {
    imgLoad() {
      if (this.isImgload) {
        this.isImgload = false;
        this.$emit("imgLoad");
      }
    },
  },
};
</script>

<style scoped>
</style>