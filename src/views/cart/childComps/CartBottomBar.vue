<!--
 * @Author: qi-you
 * @Date: 2021-01-19 20:08:47
 * @LastEditors: qi-you
 * @LastEditTime: 2021-01-20 11:00:46
 * @FilePath: \spuer_mall\src\views\cart\childComps\CartBottomBar.vue
 * @Description: 
-->
<template>
  <div class="bottom-bar">
    <check-button
      @checkBtnClick="checkedChange"
      :value="getStateIsAllSelect"
    ></check-button>
    全选
    <span class="total-price">合计: {{ totalPrice | showPrice }}</span>
    <span class="buy-product">去计算({{ getCartCount }})</span>
  </div>
</template>

<script>
import CheckButton from "./CheckButton";
import { filtersMixin, mapGettersCartMixin } from "@/common/mixin";
export default {
  mixins: [filtersMixin, mapGettersCartMixin],
  data() {
    return {};
  },
  components: {
    CheckButton,
    filtersMixin,
    mapGettersCartMixin
  },
  methods: {
    checkedChange() {
      this.$store.commit("setIsAllSelect", !this.getStateIsAllSelect);
      // 判断是否全选
      for (let i = 0; i < this.getCartListLength; i++) {
        if (
          this.getCartList.find(
            item => item.isSelect == !this.getStateIsAllSelect
          )
        ) {
          this.getCartList.find(
            item => item.isSelect == !this.getStateIsAllSelect
          ).isSelect = this.getStateIsAllSelect;
        } else {
          // 减少循环次数
          return;
        }
      }
    }
  },
  computed: {
    totalPrice() {
      let total = 0;
      if (this.getCartListLength > 0) {
        total = this.getCartList
          .filter(item => item.isSelect)
          .reduce((total, item) => total + item.count * item.price, 0);
      }
      return total;
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 49px;
  left: 0;
  right: 0;
  height: 44px;
  background-color: #eee;
}

.bottom-bar .total-price {
  margin-left: 15px;
  font-size: 16px;
  color: #666;
}

.bottom-bar .buy-product {
  background-color: orangered;
  color: #fff;
  width: 100px;
  height: 44px;
  text-align: center;
  line-height: 44px;
  float: right;
}
</style>
