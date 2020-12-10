<!--
 * @Author: qi-you
 * @Date: 2020-12-01 17:44:19
 * @LastEditors: qi-you
 * @LastEditTime: 2020-12-10 20:46:58
 * @Descripttion: 
-->
<template>
  <div>
    <nav-bar class="home-bar" co>
      <div slot="center" >首页</div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "common/navbar/NavBar";
export default {
  name: "Home",
  components: { NavBar },
  dat() {
    return {};
  },
  methods: {},
};
</script>

<style>
.home-bar {
  background-color: var(--color-tint);
}
</style>


