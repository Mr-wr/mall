/*
 * @Author: qi-you
 * @Date: 2020-12-11 09:14:27
 * @LastEditors: qi-you
 * @LastEditTime: 2020-12-11 09:47:32
 * @Descripttion:
 */
import { request } from "./request";

export function getHomeMultidata() {
  return request({
    url: "/home/multidata"
  });
}
