<!--
 * @Author: qi-you
 * @Date: 2020-12-14 17:26:01
 * @LastEditors: qi-you
 * @LastEditTime: 2021-01-03 03:33:32
 * @Descripttion: 
-->
<template>
  <div class="goods-item" @click="todetail">
    <wrapper>
      <img :src="showImage" alt="" @load="itemImageLoad" />
      <div class="goods-info">
        <p>{{ goodsItem.title }}</p>
        <span class="price">￥{{ goodsItem.price }}</span>
        <span class="collect">收藏{{ goodsItem.cfav }}</span>
      </div>
    </wrapper>
  </div>
</template>

<script>
import Wrapper from "content/wrapper/Wrapper";
export default {
  components: {
    Wrapper,
  },
  props: {
    goodsItem: {
      type: Object,
      defualt() {
        return {};
      },
    },
  },
  methods: {
    // 图片加载
    itemImageLoad() {
      // 事件总线发射实现
      this.$bus.$emit("itemImageLoad");
    },
    todetail() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    },
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img;
    },
  },
  created() {
    // console.log(this.goodsItem);
  },
};
</script>

<style scoped>
.goods-item {
  width: 50%;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  /* text-align: center; */
}
.goods-info > p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.goods-info > .price {
  color: #eb5d2a;
}
.goods-info > .collect {
  margin-top: 3px;
  float: right;
  font-size: 12px;
  color: #ccc;
}
</style>