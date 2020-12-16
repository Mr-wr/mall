<!--
 * @Author: qi-you
 * @Date: 2020-12-15 22:47:12
 * @LastEditors: qi-you
 * @LastEditTime: 2020-12-16 11:54:44
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
    if (!this.scroll)
      this.scroll = new Bscroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
      });
    this.scroll &&
      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position);
      });
    this.scroll &&
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
  },
};
</script>

<style scoped>
</style>