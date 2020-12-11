<!--
 * @Author: qi-you
 * @Date: 2020-12-01 17:44:19
 * @LastEditors: qi-you
 * @LastEditTime: 2020-12-11 11:45:00
 * @Descripttion: 
-->
<template>
  <div class="home">
    <nav-bar class="home-bar">
      <div slot="center" class="home-font">首页</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>
<script>
import NavBar from "common/navbar/NavBar";
import HomeSwiper from "views/home/childcomps/HomeSwiper";
import { getHomeMultidata } from "network/home";
export default {
  name: "Home",
  data() {
    return { banners: [], recommends: [] };
  },
  components: { NavBar, HomeSwiper },
  created() {
    getHomeMultidata()
      .then((res) => {
        // console.log("app", data);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {},
};
</script>

<style>
.home-bar {
  background-color: var(--color-tint);
}
.home-font {
  color: #fff;
}
</style>


