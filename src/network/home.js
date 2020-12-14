/*
 * @Author: qi-you
 * @Date: 2020-12-11 09:14:27
 * @LastEditors: qi-you
 * @LastEditTime: 2020-12-14 16:49:47
 * @Descripttion:
 */
import { request } from "./request";

export function getHomeMultidata() {
  return request({
    url: "/home/multidata"
  });
}

export function getHomeData(type, page) {
  return request({
    url: "/home/data",
    params: {
      type,
      page
    }
  });
}
