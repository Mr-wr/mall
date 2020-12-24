/*
 * @Author: qi-you
 * @Date: 2020-12-24 17:07:30
 * @LastEditors: qi-you
 * @LastEditTime: 2020-12-24 17:09:36
 * @Descripttion:
 */
import { request } from "./request";
export function getDetail(iid) {
  return request({
    url: "/detail",
    params: {
      iid
    }
  });
}
