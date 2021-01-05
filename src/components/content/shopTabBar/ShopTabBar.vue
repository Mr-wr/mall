<!--
 * @Author: qi-you
 * @Date: 2020-12-29 10:25:03
 * @LastEditors: qi-you
 * @LastEditTime: 2020-12-29 17:36:24
 * @FilePath: \spuer_mall\src\components\content\shopTabBar\ShopTabBar.vue
 * @Description: 
-->
<template>
  <div class="shop-tab-bar">
    <tab-bar>
      <tab-bar-item path="/store">
        <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="" />
        <img
          slot="item-icon-active"
          src="@/assets/img/tabbar/home_active.svg"
          alt=""
        />
        <div slot="item-text">店铺</div>
      </tab-bar-item>
      <tab-bar-item path="/customer">
        <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="" />
        <img
          slot="item-icon-active"
          src="@/assets/img/tabbar/home_active.svg"
          alt=""
        />
        <div slot="item-text">店铺</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBarItem from "common/tabbar/TabBarItem";
import TabBar from "common/tabbar/TabBar";

export default {
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
.shop-tab-bar img {
  margin-top: 4px;
  height: 20px;
  vertical-align: middle;
}
</style>