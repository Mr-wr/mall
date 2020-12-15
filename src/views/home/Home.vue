<!--
 * @Author: qi-you
 * @Date: 2020-12-01 17:44:19
 * @LastEditors: qi-you
 * @LastEditTime: 2020-12-16 00:57:16
 * @Descripttion: 
-->
<template>
  <div class="home">
    <nav-bar class="home-bar">
      <div slot="center" class="home-font">首页</div>
    </nav-bar>
    <scroll class="wrapper" ref="scroll" :probe-type="3" @scroll="backTop">
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend :recommend="recommends"></home-recommend>
      <home-feature></home-feature>
      <tab-control
        @tabClick="tabClick"
        :itemArray="['流行', '新款', '精选']"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>
<script>
import HomeSwiper from "views/home/childcomps/HomeSwiper";
import HomeRecommend from "views/home/childcomps/HomeRecommend";
import HomeFeature from "views/home/childcomps/HomeFeature";

import TabControl from "../../components/content/tabcontrol/TabControl";
import GoodsList from "../../components/content/goods/GoodsList";
import BackTop from "../../components/content/backtop/BackTop";

import NavBar from "../../components/common/navbar/NavBar";
import Scroll from "../../components/common/scroll/Scroll";

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
      currentType: "pop",
      isShowBackTop: false,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
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
    // 事件监听
    // 显示不同的数据
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
        default:
          break;
      }
    },
    // 回到顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    // 回到顶部
    backTop(position) {
      this.isShowBackTop = -position.y > 1000;
    },

    // 网络请求
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
  position: relative;
  padding-top: 44px;
  height: 100vh;
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
.wrapper {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
}
</style>


