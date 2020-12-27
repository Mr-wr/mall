<template>
  <div class="detail">
    <scroll>
      <detail-title-bar />
      <child-swiper :topImages="topImages"></child-swiper>
    </scroll>
    <child-base-info></child-base-info>
  </div>
</template>
<script>
import DetailTitleBar from "./childComps/DetailTitleBar";
import ChildSwiper from "./childComps/childSwiper";
import childBaseInfo from "./childComps/childBaseInfo";

import Scroll from "common/scroll/Scroll";

import { getDetail } from "network/detail";
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
    };
  },
  methods: {},
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      this.topImages = res.result.itemInfo.topImages;
      // console.log(res);
    });
  },
  mounted() {},
};
</script>

<style scoped>
</style>