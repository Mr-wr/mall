<template>
  <div class="detail">
    <scroll class="detail-scroll" ref="detail-scroll">
      <detail-title-bar />
      <child-swiper :topImages="topImages"></child-swiper>
      <child-base-info :goods="goods"></child-base-info>
    </scroll>
  </div>
</template>
<script>
import DetailTitleBar from "./childComps/DetailTitleBar";
import ChildSwiper from "./childComps/childSwiper";
import childBaseInfo from "./childComps/childBaseInfo";

import Scroll from "common/scroll/Scroll";

import { getDetail, Goods } from "network/detail";
export default {
  name: "Detail",
  components: {
    DetailTitleBar,
    ChildSwiper,
    Scroll,
    childBaseInfo,
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
    };
  },
  methods: {},
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      const data = res;
      this.topImages = data.result.itemInfo.topImages;
      // console.log(data);
      this.goods = new Goods(data.result.itemInfo, data.result.columns, data.result.shopInfo.services);
      // console.log(this.goods);
    });
  },
  mounted() {},
};
</script>

<style scoped>
.detail {
  background-color: #f0f0f0;
}
</style>