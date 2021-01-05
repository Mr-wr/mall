/*
 * @Author: qi-you
 * @Date: 2020-12-16 14:41:25
 * @LastEditors: qi-you
 * @LastEditTime: 2021-01-05 16:40:46
 * @Descripttion:
 */
// 封装放抖动
/**
 * @description: 防抖动
 * @param {funciton} func 要防抖动的方法
 * @param {String} delay 要防抖动毫秒数
 * @return {funciton} 返回一个方法
 */
export function debounce(func, delay = 2000) {
  let time = null;
  return (...arg) => {
    time && clearTimeout(time);
    time = setTimeout(() => {
      func.apply(this, arg);
    }, delay);
  };
}

/**
 * @description:
 * @param {*} date
 * @param {*} fmt
 * @return {*}
 */
export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  let o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + "";
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      );
    }
  }
  return fmt;
}
function padLeftZero(str) {
  return ("00" + str).substr(str.length);
}
