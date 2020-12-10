/*
 * @Author: qi-you
 * @Date: 2020-12-10 11:26:18
 * @LastEditors: qi-you
 * @LastEditTime: 2020-12-10 19:13:47
 * @Descripttion:
 */
// module.exports = {
//   chainWebpack: config => {
//     config.resolve.alias
//       //第一个参数：别名 第二个参数：路径
//       .set("components", resolve("@/components"))
//       .set("assets", resolve("@/assets"))
//       .set("common", resolve("@/common"))
//       .set("views", resolve("src/views"));
//   }
// };
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        common: "@/components/common",
        content:"@/components/content",
        assets: "@/assets",
        views: "@/views"
      }
    }
  }
};
