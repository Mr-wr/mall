<template>
  <div class="detail">
    <detail-title-bar class="title-bar" />
    <scroll class="detail-scroll" ref="scroll">
      <child-swiper :topImages="topImages"></child-swiper>
      <child-base-info :goods="goods"></child-base-info>
      <child-shop-info :shop="shop" :detail-info="detailInfo"></child-shop-info>
      <detail-info :detail-info="detailInfo" @imgLoad="imgLoad"></detail-info>
    </scroll>
    <shop-tab-bar></shop-tab-bar>
  </div>
</template>
<script>
import DetailTitleBar from "./childComps/DetailTitleBar";
import ChildSwiper from "./childComps/childSwiper";
import childBaseInfo from "./childComps/childBaseInfo";
import childShopInfo from "./childComps/childShopInfo";
import DetailInfo from "./childComps/DetailInfo";

import Scroll from "common/scroll/Scroll";

import ShopTabBar from "content/shopTabBar/ShopTabBar";

import { getDetail, Goods, Shop } from "network/detail";
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
    };
  },
  methods: {
    imgLoad() {
      this.shopImgtime && clearTimeout(this.shopImgtime);
      this.shopImgtime = setTimeout(() => {
        this.$refs.scroll.refresh();
      }, 1000);
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
</style>