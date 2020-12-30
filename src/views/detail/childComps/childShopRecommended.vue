<!--
 * @Author: qi-you
 * @Date: 2020-12-29 17:42:26
 * @LastEditors: qi-you
 * @LastEditTime: 2020-12-29 17:47:21
 * @FilePath: \spuer_mall\src\views\detail\childComps\childShopRecommended.vue
 * @Description: 
-->
<template>
  <!-- 商家推荐 -->
  <div class="recommended">
    <div class="fr">
      <a href="#">查看全部<img src="~img/common/next.svg" alt="" /></a>
    </div>
    <div><h4>商家推荐</h4></div>
    
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.fr {
  float: right;
}
/* 推荐 */
.recommended {
  margin-top: 20px;
}
.recommended .fr a {
  color: #eb5d2a;
}
.recommended .fr img {
  width: 18px;
  vertical-align: sub;
}
</style>