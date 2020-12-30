<!--
 * @Author: qi-you
 * @Date: 2020-12-29 17:58:29
 * @LastEditors: qi-you
 * @LastEditTime: 2020-12-30 10:12:57
 * @FilePath: \spuer_mall\src\views\detail\childComps\detailInfo.vue
 * @Description: 
-->
<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="detail-info">
    <div v-for="(item, index) in detailInfo.detailImage" :key="index">
      <img
        v-for="(src, index) in item.list"
        :src="src"
        :key="index"
        alt=""
        @load="imgLoad"
      />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      count: 0,
      imgLength: 0,
    };
  },
  methods: {
    imgLoad() {
      this.$emit("imgLoad");
    },
  },
  mounted() {},
  watch: {
    detailInfo() {
      this.imgLength = this.detailInfo.detailImage.reduce(
        (sum, n) => (sum += n.list.length),
        0
      );
    },
  },
};
</script>

<style scoped>
.content img {
  width: 100%;
  vertical-align: bottom;
}
</style>