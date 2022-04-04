// 节流函数
function throttle(fn, delay) {
  let old = Date.now()
  let args = [...arguments].slice(2)
  return function () {
    let _new = Date.now()
    if (_new - old >= delay) {
      fn.apply(null, args)
      old = Date.now()
    }
  }
}
