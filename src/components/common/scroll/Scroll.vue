<!--
 * @Author: qi-you
 * @Date: 2020-12-15 22:47:12
 * @LastEditors: qi-you
 * @LastEditTime: 2020-12-15 23:37:30
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
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper);
  },
};
</script>

<style scoped>
</style>