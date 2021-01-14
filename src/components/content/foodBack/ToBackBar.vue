<!--
 * @Author: qi-you
 * @Date: 2021-01-13 17:06:17
 * @LastEditors: qi-you
 * @LastEditTime: 2021-01-13 18:34:33
 * @FilePath: \spuer_mall\src\components\content\foodBack\ToBackBar.vue
 * @Description: 
-->
<template>
  <div class="back-bar">
    <div class="left" @click="toBack">
      <div class="img">
        <slot name="left"><img src="~img/common/back.svg" alt="" /> </slot>
      </div>
      <div class="title"><slot name="title">商品订单详情</slot></div>
    </div>
    <div class="right">
      <slot><img src="~img/common/menu.svg" alt=""/></slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.back-bar {
  height: 47px;
  background-color: #eee;
}
.back-bar img {
  width: 100%;
  height: 100%;
}

.left {
  display: flex;
  align-content: center;
  height: 47px;
  font-size: 14px;
  font-weight: bold;
  line-height: 47px;
  color: #000;
}
.img {
  width: 20px;
  margin: 0 10px;
  /* height: 30px; */
}

.right {
  width: 50px;
  height: 47px;
  float: right;
}
</style>
