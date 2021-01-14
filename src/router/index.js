import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Home = () => import("views/home/Home");
const Cart = () => import("views/cart/Cart");
const Category = () => import("views/category/Category");
const Profile = () => import("views/profile/Profile");
const Detail = () => import("views/detail/Detail");
const Store = () => import("views/store/Store");
const FoodDetail = () => import("views/detail/childComps/FoodDetail");
const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    meta: {
      title: "首页"
    },
    component: Home
  },
  {
    path: "/cart",
    meta: {
      title: "购物车"
    },
    component: Cart
  },
  {
    path: "/category",
    meta: {
      title: "分类菜单"
    },
    component: Category
  },
  {
    path: "/profile",
    meta: {
      title: "我的"
    },
    component: Profile
  },
  {
    path: "/detail/:iid",
    meta: {
      title: "商品详情"
    },
    component: Detail
  },
  {
    path: "/store",
    component: Store
  },
  {
    path: "/food-detail",
    component: FoodDetail,
    meta: {
      title: "商品详情"
    },
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
