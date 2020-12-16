/*
 * @Author: qi-you
 * @Date: 2020-12-16 14:41:25
 * @LastEditors: qi-you
 * @LastEditTime: 2020-12-16 14:42:05
 * @Descripttion:
 */
// 封装放抖动
export function debounce(func, delay) {
  let time = null;
  return (...arg) => {
    time && clearTimeout(time);
    time = setTimeout(() => {
      func.apply(this, arg);
    }, delay);
  };
}
