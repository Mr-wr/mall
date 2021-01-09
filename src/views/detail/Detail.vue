<template>
  <div class="detail">
    <detail-title-bar
      ref="titleBar"
      @titleClick="titleClick"
      class="title-bar"
    />
    <scroll
      :probe-type="3"
      @scroll="scrollRealTime"
      class="detail-scroll"
      ref="scroll"
    >
      <!-- 顶部轮播图 -->
      <child-swiper :topImages="topImages"></child-swiper>
      <!-- 商品基本信息展示 -->
      <child-base-info :goods="goods"></child-base-info>
      <!-- 店铺信息 -->
      <child-shop-info :shop="shop"></child-shop-info>
      <!-- 商品评论 -->
      <child-comment
        v-if="Object.keys(commentInfo).length !== 0"
        :comment-info="commentInfo"
        ref="comment"
      >
      </child-comment>
      <div class="detail-font">宝贝详情</div>
      <!-- 宝贝详情 -->
      <detail-info :detail-info="detailInfo" @imgLoad="imgLoad"></detail-info>
      <!-- 商家推荐 -->
      <child-shop-recommend
        ref="recommend"
        :recommends="recommends"
      ></child-shop-recommend>
    </scroll> 
    <!-- <shop-tab-bar></shop-tab-bar> -->
    <detail-bottom-bar></detail-bottom-bar>
  </div>
</template>
<script>
import DetailTitleBar from "./childComps/DetailTitleBar";
import ChildSwiper from "./childComps/childSwiper";
import childBaseInfo from "./childComps/childBaseInfo";
import childShopInfo from "./childComps/childShopInfo";
import DetailInfo from "./childComps/DetailInfo";
import childComment from "./childComps/childComment";
import childShopRecommend from "./childComps/childShopRecommend";
import DetailBottomBar from "./childComps/DetailBottomBar";

import Scroll from "common/scroll/Scroll";

import ShopTabBar from "content/shopTabBar/ShopTabBar";

import { getDetail, Goods, Shop, getRecommends } from "network/detail";
export default {
  name: "Detail",
  components: {
    DetailTitleBar,
    ChildSwiper,
    Scroll,
    childBaseInfo,
    childShopInfo,
    ShopTabBar,
    DetailInfo,
    childComment,
    childShopRecommend,
    DetailBottomBar,
  },
  data() {
    return {
      iid: {
        type: String,
      },
      topImages: [],
      goods: {
        type: Object,
        default() {
          return {};
        },
      },
      shop: {
        type: Object,
        default() {
          return {};
        },
      },
      detailInfo: {
        type: Object,
        default() {
          return {};
        },
      },
      shopImgtime: null,
      commentInfo: {},
      recommends: [],
      recommendTitleY: [0, 300],
    };
  },
  methods: {
    // 图片加载完成后
    imgLoad() {
      this.shopImgtime && clearTimeout(this.shopImgtime);
      this.shopImgtime = setTimeout(() => {
        this.$refs.scroll.refresh();
        // 获取detail-info和顶部的距离
        this.recommendTitleY.push(this.$refs.comment.$el.offsetTop);
        this.recommendTitleY.push(this.$refs.recommend.$el.offsetTop);
      }, 1000);
    },

    // detailtitle被点击
    titleClick(index) {
      // console.log(index, "被点击");
      this.$refs.scroll.scrollTo(0, -(this.recommendTitleY[index] - 45));
    },

    // 监听滚轮
    scrollRealTime(position) {
      // 滚轮对应实时位置
      if (position.y >= this.recommendTitleY[0])
        this.$refs.titleBar.currentIndex = 0;
      if (-position.y >= this.recommendTitleY[1] - 45)
        this.$refs.titleBar.currentIndex = 1;
      if (-position.y >= this.recommendTitleY[2] - 45)
        this.$refs.titleBar.currentIndex = 2;
      if (-position.y >= this.recommendTitleY[3] - 45)
        this.$refs.titleBar.currentIndex = 3;
      // 滚动频繁问题
      console.log("----");
    },
  },
  created() {
    // 1.保存传入的iid
    this.iid = this.$route.params.iid;

    // 2.根据iid获取数据
    getDetail(this.iid).then((res) => {
      const data = res.result;

      // 3.获取轮播图数据
      this.topImages = data.itemInfo.topImages;
      // console.log(data);

      // 获取商品基本信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // console.log(this.goods);

      // 创建店铺信息对象
      this.shop = new Shop(data.shopInfo);
      // console.log(this.shop);

      this.detailInfo = data.detailInfo;
      // console.log(this.detailInfo);

      // 取出评论信息
      if (data.rate.list[0]) {
        this.commentInfo = data.rate.list[0];
      }
    });

    // 3、获取推荐数据
    getRecommends(this.iid).then((res) => {
      this.recommends = res.data.list;
    });
  },
  mounted() {},
  activated() {},
};
</script>

<style scoped>
.detail {
  position: relative;
  background-color: #f0f0f0;
  z-index: 9;
  height: 100vh;
}
.title-bar {
  position: relative;
  background-color: #f0f0f0;
  z-index: 9;
}
.detail-scroll {
  height: calc(100% - 94px);
}

/* 文字两边横线 */
.detail-font {
  padding: 10px 0;
  width: 200px;
  font-size: 16px;
  margin: 0 auto;
  position: relative;
  text-align: center;
}

.detail-font:before {
  content: "";
  border-top: 1px solid #ccc;
  display: block;
  position: absolute;
  width: 60px;
  top: 20px;
  left: 0;
}

.detail-font:after {
  content: "";
  border-top: 1px solid #ccc;
  display: block;
  position: absolute;
  width: 60px;
  top: 20px;
  right: 0;
}
</style>