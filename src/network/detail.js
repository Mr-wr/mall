/*
 * @Author: qi-you
 * @Date: 2020-12-24 17:07:30
 * @LastEditors: qi-you
 * @LastEditTime: 2020-12-28 16:30:49
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
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.realPrice = itemInfo.lowNowPrice;
  }
}
