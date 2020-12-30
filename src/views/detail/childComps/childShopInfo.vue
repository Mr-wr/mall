<!--
 * @Author: qi-you
 * @Date: 2020-12-28 22:02:28
 * @LastEditors: qi-you
 * @LastEditTime: 2020-12-30 10:21:51
 * @FilePath: \spuer_mall\src\views\detail\childComps\childShopInfo.vue
 * @Description: 
-->
<template>
  <div class="shop-info">
    <!-- <div class="info-content"> -->
    <wrapper>
      <div class="shop-level">商铺等级</div>
      <div class="serve">
        <div v-for="(item, index) in shop.score" :key="index">
          <span>
            {{ item.name }}
          </span>
          <span>
            {{ item.score | showPrice }}
          </span>
          <span
            class="gao"
            v-if="item.isBetter"
            :style="storeServicesColor(item.isBetter)"
          >
            高
          </span>
          <span class="gao" v-else :style="storeServicesColor(item.isBetter)">
            低
          </span>
        </div>
      </div>
      <!-- 商家头像 -->
      <div class="head-portrait">
        <img :src="shop.logo" alt="" />{{ shop.name }}
      </div>
      <div class="shop-btn">
        <button>进店逛逛</button>
        <button>全部宝贝</button>
      </div>
      <!-- 商家推荐 -->
      <div class="recommended">
        <div class="fr">
          <a href="#">查看全部<img src="~img/common/next.svg" alt="" /></a>
        </div>
        <h4>店铺推荐</h4>
      </div>
    </wrapper>
    <div class="detail-font">宝贝详情</div>
    <!-- </div> -->
  </div>
</template>

<script>
import Wrapper from "content/wrapper/Wrapper";
export default {
  components: {
    Wrapper,
  },
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    storeServicesColor(isColor) {
      return isColor ? { color: "red" } : { color: "#41b782" };
    },
  },
  computed: {},
  //过滤器
  filters: {
    showPrice(price) {
      return price.toFixed(1);
    },
  },
  mounted() {},
};
</script>

<style scoped>
.fr {
  float: right;
}
.head-portrait img {
  margin-top: 10px;
  margin-right: 10px;
  width: 50px;
  vertical-align: middle;
}
.serve {
  margin-top: 10px;
  float: right;
  font-size: 13px;
}
.low {
  color: #41b782;
}
.high {
  color: red;
}
.gao {
  margin-left: 5px;
  float: right;
}
.shop-btn {
  margin-top: 15px;
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #f4f4f4;
}
.shop-btn button {
  margin-right: 10px;
  width: 100px;
  height: 24px;
  background-color: #fff;
  border: 1px solid #eb5d2a;
  border-radius: 20px;
  color: #eb5d2a;
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