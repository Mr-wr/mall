import {
  request
} from './request';

export function geta(
  url = "/shop/showGoodsCategory",
  sysCode = "MICK"

) {
  return request({
    url,
    params: {
      sysCode
    }
  })
}
