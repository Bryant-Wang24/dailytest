// 找出第一个只出现一次的字符
function first(str) {
    const arr = str.split('')
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        const a = arr.indexOf(arr[i])
        const b = arr.indexOf(arr[i], a + 1)
        if (b === -1) { return arr[i] }
    }
}


s = "abaccdeff"
const result = first(s)
console.log('result', result);//'b'