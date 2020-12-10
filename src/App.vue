<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>
import MainTabBar from "content/maintabbar/MainTabBar";
export default {
  name: "App",
  components: { MainTabBar },
};
</script>
<style src="assets/css/base.css">
</style>
