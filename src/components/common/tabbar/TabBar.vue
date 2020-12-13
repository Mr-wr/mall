<!--
 * @Author: qi-you
 * @Date: 2020-12-01 15:36:54
 * @LastEditors: qi-you
 * @LastEditTime: 2020-12-11 23:18:36
 * @Descripttion: 
-->
<template>
  <div id="tab-bar">
    <slot>我是插槽</slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style>
#tab-bar {
  display:flex;
  position: fixed;
  left:0;
  right: 0;
  bottom:0;
  height: 49px;
  background-color: #f6f6f6;
  box-shadow: 0 -1px 1px  rgba(100, 100, 100, 0.2);
}
</style>