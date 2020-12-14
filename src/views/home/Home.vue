<!--
 * @Author: qi-you
 * @Date: 2020-12-01 17:44:19
 * @LastEditors: qi-you
 * @LastEditTime: 2020-12-14 17:47:06
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
    <tab-control :itemArray="['流行', '新款', '精选']"></tab-control>
    <goods-list :goods="goods['pop'].list"></goods-list>
  </div>
</template>
<script>
import HomeSwiper from "views/home/childcomps/HomeSwiper";
import HomeRecommend from "views/home/childcomps/HomeRecommend";
import HomeFeature from "views/home/childcomps/HomeFeature";

import TabControl from "../../components/content/tabcontrol/TabControl";
import NavBar from "common/navbar/NavBar";
import GoodsList from "../../components/content/goods/GoodsList";

import { getHomeMultidata, getHomeData } from "network/home";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl,
    GoodsList,
  },
  created() {
    // 获取multdata
    this.getHomeMultidata();

    // 获取主页流行。。。数据
    this.getHomeData("pop");
    this.getHomeData("new");
    this.getHomeData("sell");
  },
  methods: {
    getHomeMultidata() {
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
    getHomeData(type) {
      getHomeData(type, (this.goods[type].page += 1)).then((res) =>
        this.goods[type].list.push(...res.data.list)
      );
    },
  },
};
</script>

<style scoped>
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


