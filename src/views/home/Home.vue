<!--
 * @Author: qi-you
 * @Date: 2020-12-01 17:44:19
 * @LastEditors: qi-you
 * @LastEditTime: 2020-12-14 17:14:54
 * @Descripttion: 
-->
<template>
  <div class="home">
    <nav-bar class="home-bar">
      <div slot="center" class="home-font">首页</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommend="recommends"></home-recommend>
    <home-feature></home-feature>
    <tab-control :itemArray="['流行', '新款', '精选']"></tab-control>
    <ul>
      <li>item1</li>
      <li>item2</li>
      <li>item3</li>
      <li>item4</li>
      <li>item5</li>
      <li>item6</li>
      <li>item7</li>
      <li>item8</li>
      <li>item9</li>
      <li>item10</li>
      <li>item11</li>
      <li>item12</li>
      <li>item13</li>
      <li>item14</li>
      <li>item15</li>
      <li>item16</li>
      <li>item17</li>
      <li>item18</li>
      <li>item19</li>
      <li>item20</li>
      <li>item21</li>
      <li>item22</li>
      <li>item23</li>
      <li>item24</li>
      <li>item25</li>
      <li>item26</li>
      <li>item27</li>
      <li>item28</li>
      <li>item29</li>
      <li>item30</li>
      <li>item31</li>
      <li>item32</li>
      <li>item33</li>
      <li>item34</li>
      <li>item35</li>
      <li>item36</li>
      <li>item37</li>
      <li>item38</li>
      <li>item39</li>
      <li>item40</li>
      <li>item41</li>
      <li>item42</li>
      <li>item43</li>
      <li>item44</li>
      <li>item45</li>
      <li>item46</li>
      <li>item47</li>
      <li>item48</li>
      <li>item49</li>
      <li>item50</li>
    </ul>
  </div>
</template>
<script>
import NavBar from "common/navbar/NavBar";

import HomeSwiper from "views/home/childcomps/HomeSwiper";
import HomeRecommend from "views/home/childcomps/HomeRecommend";
import HomeFeature from "views/home/childcomps/HomeFeature";

import TabControl from "../../components/content/tabcontrol/TabControl";

import { getHomeMultidata, getHomeData } from "network/home";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl,
  },
  created() {
    // 获取multdata
    this.getHomeMultidata();

    // 获取主页流行。。。数据
    this.getHomeData("pop");
    this.getHomeData("new");
    this.getHomeData("sell");
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata()
        .then((res) => {
          // console.log("app", data);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getHomeData(type) {
      getHomeData(type, (this.goods[type].page += 1)).then((res) =>
        this.goods[type].list.push(...res.data.list)
      );
    },
  },
};
</script>

<style scoped>
.home {
  padding-top: 44px;
}
.home-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--color-tint);
  z-index: 1;
}
.home-font {
  color: #fff;
}
</style>


