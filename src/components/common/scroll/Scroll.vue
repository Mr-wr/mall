<!--
 * @Author: qi-you
 * @Date: 2020-12-15 22:47:12
 * @LastEditors: qi-you
 * @LastEditTime: 2020-12-16 01:45:58
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
    pullUpLoad: {
      type: Boolean,
      defualt: false,
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
      pullUpLoad: this.pullUpLoad,
    });
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
  },
};
</script>

<style scoped>
</style>