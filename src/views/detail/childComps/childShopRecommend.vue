<!--
 * @Author: qi-you
 * @Date: 2020-12-29 17:42:26
 * @LastEditors: qi-you
 * @LastEditTime: 2021-01-03 04:00:30
 * @FilePath: \spuer_mall\src\views\detail\childComps\childShopRecommend.vue
 * @Description: 
-->
<template>
  <!-- 商家推荐 -->
  <div class="recommended">
    <div class="fr">
      <a href="#">查看全部<img src="~img/common/next.svg" alt="" /></a>
    </div>
    <div><h4>商家推荐</h4></div>
      <goods-list :goods="recommends" class="recommend-img"></goods-list>
  </div>
</template>

<script>
import Wrapper from "content/wrapper/Wrapper";

import GoodsList from "content/goods/GoodsList";
export default {
  name: "childShopRecommend",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: { GoodsList, Wrapper },
};
</script>

<style scoped>
.fr {
  float: right;
}
/* 推荐 */
.recommended {
  margin-top: 20px;
}
.recommended .fr a {
  color: #eb5d2a;
}
.recommended .fr img {
  width: 18px;
  vertical-align: sub;
}
/* 推荐图片 */
.recommend-img {
  width: 100%;
}
</style>