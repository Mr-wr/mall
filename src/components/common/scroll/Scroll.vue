<!--
 * @Author: qi-you
 * @Date: 2020-12-15 22:47:12
 * @LastEditors: qi-you
 * @LastEditTime: 2020-12-16 00:41:16
 * @Descripttion: 
-->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  props: {
    probeType: {
      type: Number,
      defualt: 0,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
    });
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
  },
};
</script>

<style scoped>
</style>