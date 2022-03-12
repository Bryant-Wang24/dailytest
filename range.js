// 1. 实现range函数，入参类型为数字，输出一个数组，值与下标相同，长度为入参值。
function range(num) {
    let arr = new Array(num).fill()
    arr.forEach((value, index) => arr[index] = index)
    return arr
}

console.log(range(5));