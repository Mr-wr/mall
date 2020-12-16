/*
 * @Author: qi-you
 * @Date: 2020-12-16 14:41:25
 * @LastEditors: qi-you
 * @LastEditTime: 2020-12-16 14:54:43
 * @Descripttion:
 */
// 封装放抖动
/**
 * @description: 防抖动
 * @param {funciton} func 要防抖动的方法
 * @param {String} delay 要防抖动毫秒数
 * @return {funciton} 返回一个方法
 */
export function debounce(func, delay) {
  let time = null;
  return (...arg) => {
    time && clearTimeout(time);
    time = setTimeout(() => {
      func.apply(this, arg);
    }, delay);
  };
}
