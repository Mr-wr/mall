<!--
 * @Author: qi-you
 * @Date: 2021-01-20 12:43:01
 * @LastEditors: qi-you
 * @LastEditTime: 2021-01-20 12:49:05
 * @FilePath: \spuer_mall\src\components\common\toast\Toast.vue
 * @Description: 
-->
<template>
  <div class="toast" v-if="isShow">
    {{ message }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: { type: String, default: "默认消息" },
      isShow: { type: Boolean, default: true }
    };
  }
};
</script>

<style scoped>
.toast {
  padding: 10px;
  background: rgb(0, 0, 0, 0.6);
  color: #fff;
}
</style>
