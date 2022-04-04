// 检测 backtop 按钮何时出现
let backtop = document.querySelector('.backtop')
document.onscroll = throttle(
  function (x) {
    console.log('111')
    console.log(x)
    if (window.pageYOffset >= 500) {
      backtop.style.display = 'block'
    } else {
      backtop.style.display = 'none'
    }
  },
  500,
  '我是额外参数'
)
backtop.onclick = function () {
  document.body.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

// 锚点实现

let lis = document.querySelectorAll('.side>ol li')
console.log(lis)
let horizontal = document.querySelector('#horizontal') // 水平居中节点
let vertical = document.querySelector('#vertical') // 垂直居中节点
let center = document.querySelector('#center') // 综合

let elements = [horizontal, vertical, center]

lis.forEach((li, index) => {
  let a = li.firstElementChild
  a.onclick = function () {
    elements[index].scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
})
