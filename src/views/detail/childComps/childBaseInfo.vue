<!--
 * @Author: qi-you
 * @Date: 2020-12-27 11:30:55
 * @LastEditors: qi-you
 * @LastEditTime: 2020-12-28 17:18:15
 * @FilePath: \spuer_mall\src\views\detail\childComps\childBaseInfo.vue
 * @Description: 
-->
<template>
  <div class="child-base-info">
    <div class="info-content">
      <div class="discount">卖家促销{{ goods.discountDesc }}</div>
      <div class="price">
        <i class="new-price">
          <em>¥</em>
          {{ goods.realPrice }}
        </i>
        <span class="old-price">
          价格
          <del>{{ goods.oldPrice }}</del>
        </span>
      </div>
      <div class="title">
        {{ goods.title }}
      </div>
      <div class="sales-info">
        <span v-for="item in goods.columns" :key="item">
          {{ item }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      defaulte() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.child-base-info {
  display: flex;
  justify-content: center;
}
.info-content {
  margin-top: 10px;
  padding: 10px;
  width: 95%;
  border-radius: 10px;
  background-color: #fff;
}
.info-content div {
  margin-top: 5px;
}
.discount {
  color: #eb5d2a;
  font-size: 12px;
  font-weight: bolder;
}
.new-price {
  color: #eb5d2a;
  font-weight: bolder;
  font-size: 27px;
}
.title {
  color: #000;
  font-size: 18px;
  font-weight: bolder;
}
.sales-info {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
}
</style>