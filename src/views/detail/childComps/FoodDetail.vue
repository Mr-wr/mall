<!--
 * @Author: qi-you
 * @Date: 2021-01-12 21:03:08
 * @LastEditors: qi-you
 * @LastEditTime: 2021-01-13 20:09:00
 * @FilePath: \spuer_mall\src\views\detail\childComps\FoodDetail.vue
 * @Description: 
-->
<template>
  <div class="food-detail">
    <to-back-bar>
      <img slot="left" src="~img/common/close.svg" alt="" />
      <img src="~img/common/more.svg" alt="" />
    </to-back-bar>
    <scroll ref="scroll" class="scroll" :probe-type="3">
      <div class="detail">
        <div class="img-info">
          <div class="banner">
            <div class="back" @click="toBack">
              <img src="~img/common/back-w.svg" alt="" />
            </div>
            <img src="~img/detail/fooddetail/banner.png" alt="" />
          </div>
          <div class="img-font">Chocolate Brownie</div>
        </div>
        <div class="ccc"></div>

        <!-- 表格选项 -->
        <div class="title">
          <!-- Maik's -->
          <div class="title-bar">
            <div>Maik's</div>
            <div>SOP</div>
            <div>客户商标</div>
          </div>
          <div class="title-img">
            <img src="~img/detail/fooddetail/center.png" alt="" />
          </div>
          <!-- 组装原材料 -->
          <div class="component">
            <h3>Component 组装原料</h3>

            <div class="component-title">
              <div>
                <div>Product Name</div>
                产品名称
              </div>
              <div>
                <div>SKU</div>
                商品编号
              </div>
              <div>
                <div>COST</div>
                成本
              </div>
            </div>

            <!-- tab -->
            <div class="tab">
              <div
                class="row"
                v-for="item in foodData"
                :key="Object.keys(item)[0]"
              >
                <div class="content">
                  {{ Object.keys(item)[0] }}
                </div>
                <div class="content">Number2</div>
                <div class="content">$7</div>
              </div>
              <!-- <div class="row">
                <div class="content">Name1</div>
                <div class="content">Number2</div>
                <div class="content">$7</div>
              </div>
              <div class="row">
                <div class="content">Name1</div>
                <div class="content">Number2</div>
                <div class="content">$7</div>
              </div>
              <div class="row">
                <div class="content">Name1</div>
                <div class="content">Number2</div>
                <div class="content">$7</div>
              </div>
              <div class="row">
                <div class="content">Name1</div>
                <div class="content">Number2</div>
                <div class="content">$7</div>
              </div>
              <div class="row">
                <div class="content">Name1</div>
                <div class="content">Number2</div>
                <div class="content">$7</div>
              </div> -->
            </div>
            <!-- total总共 -->
            <div class="total">
              <div>
                Total
                Cost(总成本价)...............................................................................
                <span>{{ this.totalCost | showPrice }}</span>
              </div>
              <div>
                Suggested Sales
                Price(建议零售价)............................................................
                <span>$50</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Plating 摆盘 -->
        <div class="plating">
          <h3>Plating 摆盘</h3>
          <div class="step">
            <div>Step 1 第一步</div>
            <div class="font">
              准备一个方盘，以及刀和叉子，将刀和叉子摆在盘子的左边
            </div>
          </div>
          <div class="step">
            <div>Step 2 第二步</div>
            <div class="font">
              准备一个方盘，以及刀和叉子，将刀和叉子摆在盘子的左边
            </div>
          </div>
          <div class="step">
            <div>Step 3 第三步</div>
            <div class="font">
              准备一个方盘，以及刀和叉子，将刀和叉子摆在盘子的左边
            </div>
          </div>
          <div class="step">
            <div>Step 4 第四步</div>
            <div class="font">
              准备一个方盘，以及刀和叉子，将刀和叉子摆在盘子的左边
            </div>
          </div>
        </div>

        <!-- Video 食品视频 340 230 -->
        <div class="video">
          <h3>Video 食品视频</h3>
          <video poster="~img/detail/fooddetail/video.png" src=""></video>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "common/scroll/Scroll";
import ToBackBar from "../../../components/content/foodBack/ToBackBar";
export default {
  data() {
    return {
      foodData: {
        product: {
          Name1: { sku: "number1", cost: 7 },
          Name2: { sku: "number2", cost: 7 },
          Name3: { sku: "number3", cost: 7 },
          Name4: { sku: "number4", cost: 7 },
          Name5: { sku: "number5", cost: 7 }
        }
      },
      productName: []
    };
  },
  components: {
    Scroll,
    ToBackBar
  },
  created() {},
  computed: {
    totalCost() {
      let totalPrice = 0;
      let productAry = this.foodData.product;
      for (const key in productAry) {
        if (Object.hasOwnProperty.call(productAry, key)) {
          totalPrice += productAry[key]["cost"];
        }
      }
      return totalPrice;
    }
  },
  //过滤器
  filters: {
    showPrice(price) {
      return "$" + price.toFixed(2);
    }
  },
  methods: {
    toBack() {
      this.$router.go(-1);
    }
  },
  mounted() {
    this.$refs.scroll.refresh();
  }
};
</script>

<style scoped>
* {
  font-size: 12px;
}

.food-detail {
  position: relative;
  background-color: #fff;
  height: 100vh;
  z-index: 10;
}
.scroll {
  height: calc(100%);
}
/* title */
.detail-title {
  height: 45px;
  line-height: 45px;
  background-color: #eee;
}

/* detail-img banner */
.img-info img {
  width: 100%;
  height: 100%;
}
.banner {
  position: relative;
}
.back::before {
  position: absolute;
  content: "";
  display: block;

  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.3;
}
.back {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
}

/* banner图片下的文字 */
.img-font {
  padding: 10px 15px;
}

.ccc {
  height: 10px;
  background-color: #eeeeee;
}

/*  */
.title-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 45px;
}
.title-img {
  height: 150px;
}
.title-img img {
  height: 100%;
  width: 100%;
}
.title-bar div:first-of-type {
  color: #c4893d;
}

/* componenet */
.component {
  margin: 0 10px;
}

.component h3::before {
  content: "";
  display: inline-block;
  height: 15px;
  border-left: 2px solid #c48836;
  padding-right: 5px;
}

.component h3 {
  padding: 10px 0;
}

.component-title {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f5e6cf;
  color: #c28732;
  padding: 8px 0;
  text-align: center;
  font-size: 12px;
}

.component-title div:nth-of-type(2) {
  margin-left: 50px;
}

.component-title div:nth-of-type(3) {
  margin-left: 50px;
}

.component .tab .row {
  display: flex;
  justify-content: space-around;
  text-align: center;
}

.component .tab .row:nth-of-type(2n) {
  background-color: #faf3eb;
}

.component .content {
  padding: 10px 0;
}

.component .total {
  position: relative;
  padding: 10px 10px;
  background-color: #f5e6cf;
  overflow: hidden;
  color: #c28732;
}

.component .total div {
  margin-bottom: 10px;
  white-space: nowrap;
}

.component .total span {
  position: absolute;
  right: 0px;
  padding-right: 10px;
  background-color: #f5e6cf;
}

/* <!-- Plating 摆盘 --> */
.plating {
  margin: 0 10px;
}

.plating h3::before {
  content: "";
  display: inline-block;
  height: 15px;
  border-left: 2px solid #c48836;
  padding-right: 5px;
}

.plating h3 {
  padding: 10px 0px;
}

.plating .step {
  padding: 10px 10px;
}

.plating .step:nth-of-type(2n-1) {
  background-color: #faf3eb;
}

.plating .step div:first-of-type {
  color: #c28732;
  margin-bottom: 5px;
}

.plating font {
  font-size: 12px;
}

/* video */
.video {
  margin: 0 10px;
}
.video video {
  width: 100%;
}
.video h3::before {
  content: "";
  display: inline-block;
  height: 15px;
  border-left: 2px solid #c48836;
  padding-right: 5px;
}
.video h3 {
  padding: 10px 0;
}
</style>
