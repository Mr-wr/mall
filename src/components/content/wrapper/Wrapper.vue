<!--
 * @Author: qi-you
 * @Date: 2020-12-29 18:05:16
 * @LastEditors: qi-you
 * @LastEditTime: 2020-12-30 08:36:41
 * @FilePath: \spuer_mall\src\components\content\wrapper\Wrapper.vue
 * @Description: 
-->
<template>
  <div class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  color: #000;
}
.wrapper > .content {
  margin-top: 10px;
  padding: 10px;
  width: 95%;
  border-radius: 10px;
  background-color: #fff;
}
</style>