<!--
 * @Author: qi-you
 * @Date: 2020-12-24 16:57:29
 * @LastEditors: qi-you
 * @LastEditTime: 2021-01-13 11:05:35
 * @Descripttion: 
-->
<template>
  <div>
    <nav-bar>
      <div class="back" slot="left" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item, index) in titleArray"
          @click="titleClick(index)"
          :key="index"
          :class="{ red: index == currentIndex }"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "common/navbar/NavBar";
export default {
  components: { NavBar },
  data() {
    return {
      titleArray: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    // 点击事件
    backClick() {
      this.$router.go(-1);
    },
    titleClick(index) {
      this.currentIndex = index;
      // 判断那一个被点击
      this.$emit("titleClick", this.currentIndex);
    }
  },
  deactivated() {}
};
</script>

<style scoped>
.title {
  display: flex;
  justify-content: space-around;
  font-size: 14px;
}
.back img {
  margin-top: 13px;
}
.red {
  color: var(--color-tint);
}
</style>
