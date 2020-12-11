<!--
 * @Author: qi-you
 * @Date: 2020-12-01 17:44:19
 * @LastEditors: qi-you
 * @LastEditTime: 2020-12-11 10:25:09
 * @Descripttion: 
-->
<template>
  <div>
    <nav-bar class="home-bar" co>
      <div slot="center" class="home-font">首页</div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "common/navbar/NavBar";
import { getHomeMultidata } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      homeMultidata: null,
    };
  },
  components: { NavBar },
  methods: {},
  created() {
    getHomeMultidata()
      .then((data) => {
        // console.log("app", data);
        this.homeMultidata = data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
.home-bar {
  background-color: var(--color-tint);
}
.home-font {
  color: #fff;
}
</style>


