<!--
 * @Author: qi-you
 * @Date: 2020-12-01 17:44:19
 * @LastEditors: qi-you
 * @LastEditTime: 2020-12-16 20:22:08
 * @Descripttion: 
-->
<template>
  <div class="home">
    <nav-bar class="home-bar">
      <div slot="center" class="home-font">首页</div>
    </nav-bar>
    <tab-control
      class="tab1"
      ref="tab1"
      @tabClick="tabClick"
      :itemArray="['流行', '新款', '精选']"
      v-show="isTab1Show"
    ></tab-control>
    <scroll
      class="wrapper"
      ref="scroll"
      :probe-type="3"
      @scroll="backTop"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @imgLoad="imgLoad"></home-swiper>
      <home-recommend :recommend="recommends"></home-recommend>
      <home-feature></home-feature>
      <tab-control
        ref="tab2"
        @tabClick="tabClick"
        :itemArray="['流行', '新款', '精选']"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
      <h1 v-show="isp">正在加载</h1>
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
import { debounce } from "../../common/utils";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 1, list: [] },
        new: { page: 1, list: [] },
        sell: { page: 1, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
      isp: false,
      isFixed: false,
      scrollCurrentIndex: 0,
      isTab1Show: false,
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
      this.$refs.tab1.currentIndex = index;
      this.$refs.tab2.currentIndex = index;
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
    // 监听滚轮，回到顶部
    backTop(position) {
      this.isShowBackTop = -position.y > 1000;
      this.isTab1Show = -position.y > this.scrollCurrentIndex;
    },
    // 上拉刷新
    loadMore() {
      this.isp = true;
      this.getHomeData(this.currentType);
    },
    imgLoad() {
      this.scrollCurrentIndex = this.$refs.tab2.$el.offsetTop;
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
      getHomeData(type, this.goods[type].page++).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.$refs.scroll.finishPullUp();
      });
    },
  },
  mounted() {
    // 图片加载
    const refresh = debounce(this.$refs.scroll.refresh);
    this.$bus.$on("itemImageLoad", () => {
      refresh();
    });
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
.tab1 {
  position: relative;
  z-index: 2;
}
</style>


