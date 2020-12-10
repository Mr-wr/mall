<!--
 * @Author: qi-you
 * @Date: 2020-12-10 19:52:31
 * @LastEditors: qi-you
 * @LastEditTime: 2020-12-10 20:48:07
 * @Descripttion: 
-->
<template>
  <div class="nav-bar" :style="bgccolor">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    bgcolor: String,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    bgccolor() {
      return { "background-color": this.bgcolor };
    },
  },
};
</script>
<style>
.nav-bar {
  display: flex;
  justify-content: space-between;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
}
.left {
  width: 60px;
}
.center {
  width: 60px;

  flex: 1;
}
.right {
  width: 60px;
}
</style>