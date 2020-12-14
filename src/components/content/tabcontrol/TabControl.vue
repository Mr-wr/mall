<!--
 * @Author: qi-you
 * @Date: 2020-12-13 13:45:32
 * @LastEditors: qi-you
 * @LastEditTime: 2020-12-14 18:22:29
 * @Descripttion: 
-->
<template>
  <div class="tab-control">
    <div
      class="tab-item"
      v-for="(item, index) in itemArray"
      :key="index"
      :class="{ active: currentIndex == index }"
      @click="itemClick(index)"
    >
      <span>
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemArray: {
      type: Array,
      defualt() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick",index)
    },
  },
};
</script>

<style scoped>
.tab-control {
  display: flex;
  position: sticky;
  top: 44px;
  background-color:#fff;
  text-align: center;
  font-size: 14px;
}
.tab-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.active {
  color: var(--color-high-text);
  border-bottom: 2px solid var(--color-tint);
}
</style>