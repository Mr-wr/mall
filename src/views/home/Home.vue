<!--
 * @Author: qi-you
 * @Date: 2020-12-01 17:44:19
 * @LastEditors: qi-you
 * @LastEditTime: 2020-12-13 17:05:39
 * @Descripttion: 
-->
<template>
  <div class="home">
    <nav-bar class="home-bar">
      <div slot="center" class="home-font">首页</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommend="recommends"></home-recommend>
    <home-feature></home-feature>
    <tab-control :itemArray="['流行','新款','精选']"></tab-control>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>
<script>
import NavBar from "common/navbar/NavBar";
import HomeSwiper from "views/home/childcomps/HomeSwiper";
import { getHomeMultidata } from "network/home";
import HomeRecommend from "views/home/childcomps/HomeRecommend";
import HomeFeature from "views/home/childcomps/HomeFeature";
import TabControl from "../../components/content/tabcontrol/TabControl";
export default {
  name: "Home",
  data() {
    return { banners: [], recommends: [] };
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl,
  },
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
.home {
  padding-top: 44px;
}
.home-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--color-tint);
  z-index: 1;
}
.home-font {
  color: #fff;
}
</style>


