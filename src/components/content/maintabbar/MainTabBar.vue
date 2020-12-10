<!--
 * @Author: qi-you
 * @Date: 2020-12-02 08:46:50
 * @LastEditors: qi-you
 * @LastEditTime: 2020-12-10 19:20:53
 * @Descripttion: 
-->
<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="" />
        <img
          slot="item-icon-active"
          src="@/assets/img/tabbar/home_active.svg"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img
          slot="item-icon"
          src="@/assets/img/tabbar/category.svg"
          alt=""
        />
        <img
          slot="item-icon-active"
          src="@/assets/img/tabbar/category_active.svg"
          alt=""
        />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img
          slot="item-icon"
          src="@/assets/img/tabbar/shopping.svg"
          alt=""
        />
        <img
          slot="item-icon-active"
          src="@/assets/img/tabbar/shopping_active.svg"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img
          slot="item-icon"
          src="@/assets/img/tabbar/profile.svg"
          alt=""
        />
        <img
          slot="item-icon-active"
          src="@/assets/img/tabbar/profile_active.svg"
          alt=""
        />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "common/tabbar/TabBar";
import TabBarItem from "common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: { TabBar, TabBarItem },
};
</script>

<style>
img {
  margin-top: 4px;
  height: 20px;
  vertical-align: middle;
}
</style>