<!--
 * @Author: qi-you
 * @Date: 2020-12-01 15:53:51
 * @LastEditors: qi-you
 * @LastEditTime: 2020-12-10 18:48:32
 * @Descripttion: 
-->
<template>
  <!-- 在组件内使用函数 -->
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon">图片槽</slot></div>
    <div v-else><slot name="item-icon-active">图片槽</slot></div>
    <div :style="isActiveStyle"><slot name="item-text">文字槽</slot></div>

    <!-- <span class="iconfont">&#xe609;</span>
    <div>首页</div> -->
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      // 利用活跃路由判断是否活跃
      return this.$route.path.indexOf(this.path) !== -1;
    },
    isActiveStyle() {
      // 判断是否活跃来动态显示颜色
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      // 无返回添加路由
      this.$router.replace(this.path);
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  margin-top: 3px;
}
.tab-bar-item span {
  font-size: 25px;
}
</style>