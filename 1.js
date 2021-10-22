// const printerList = []

// for(let i=1;i<=4;i++){
//     const usbList = {}
//     usbList['port'] = i
//     printerList.push(usbList)
// }
// console.log(printerList);
// var arr = [
//     { name:"小明", age:12 },
//     { name:"小红", age:11 },
//     { name:"小刚", age:15 },
//     { name:"小华", age:13 }
// ];

// function compare(p){ //这是比较函数
// return function(m,n){
// var a = m[p];
// var b = n[p];
// return a - b; //升序
// }
// }
// arr.sort(compare("age"));
// console.log(arr);
// let person = {
//     usb1:{id: 1, name: "赵一"},
//     usb2:{id: 2, name: "陈二"},
//     usb3:{id: 3, name: "张三"},
//     usb4:{id: 4, name: "李四"},
//     usb5:{id: 5, name: "王五"},
//     usb6:{id: 6, name: "马六"},
// };
// const newPerson = Object.keys(person).reduce((acc,value)=>{
//     console.log(person[value])
//     console.log(value)
//     console.log(Object.keys(person))
//     const obj = person[value]
//     acc.push(obj)
//     return acc
// },[])
// console.log('newPerson',newPerson)

// const obj = {};
// person = person.reduce((current, next) => {
//     obj[next.name] ? "" : obj[next.name] = true && current.push(next);
//     return current;
//   }, []) //设置current默认类型为数组，并且初始值为空的数组
//
//   console.log(person)
// const result = {
//     'target': [
//         {
//             'ipaddr': '19.111.96.1/24',
//             'remark': '政务网'
//         }
//     ],
//     'mode': 'black'
// }
// formList = result.target
// console.log('formList',formList)

// const hash = [{value:'黑',}]
// console.log(!Boolean((hash.false)))

// function confirmEnding(str, target) {
//     const arr = str.slice(str.length-target.length,str.length)
//     console.log(arr)
//     return arr===target?true:false
//   }
  
//   confirmEnding("Bastian", "n");
// function repeatStringNumTimes(str, num) {
//   if(num<0){
//     return ''
//   }else{
//     return str+repeatStringNumTimes(str, num-1)
//   }
// }
// const result = repeatStringNumTimes("abc", 3);
// console.log(result);
// function truncateString(str, num) {
//   if(str.length>num){
//     return str.substring(0,num)+'...'
//   }else{
//     return str;
//   }
  
// }

// const result = truncateString("A-tisket a-tasket A green and yellow basket", 8);
// console.log(result);
// function findElement(arr, func) {
//   let num = 0;
//   return num;
// }

// const result = findElement([1, 2, 3, 4], num => num % 2 === 0);
// console.log(result);
// const data = {
//   person1:{name:'kobe',age:41},
//   person2:{name:'jordon',age: 60},
//   person3:{name:'curry',age: 34},
// }
// result = Object.keys(data).reduce((acc,value)=>{
//   const obj = data[value]
//    obj.num = value
//     acc.push(obj)
//   console.log(value)
//   console.log(obj)
//   return acc
// },[])
// console.log('结果',result)

// 自定义排序
let sortArr1 = ['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'];
let sortArr2 = ['临','兵'];
function getIndex(arr, key){
    return arr.indexOf(key) != -1 ? arr.indexOf(key) : 10000;
}
var _arr = [
    {key1: '其他', key2: '兵'},
    {key1: '甲', key2: '临'},
    {key1: '丙', key2: '兵'},
    {key1: '乙', key2: '临'},
    {key1: '乙', key2: '兵'},
    {key1: '丙', key2: '临'},
    {key1: '甲', key2: '兵'},
    {key1: '其他', key2: '临'},
];
_arr.sort(function(a,b){
    if (getIndex(sortArr1, a.key1) == getIndex(sortArr1, b.key1)) {
        if (getIndex(sortArr2, a.key2) > getIndex(sortArr2, b.key2)) {
            return 1
        } else if (getIndex(sortArr2, a.key2) < getIndex(sortArr2, b.key2)) {
            return -1
        } else {
            return 0
        }
    } else {
        return getIndex(sortArr1, a.key1) > getIndex(sortArr1, b.key1) ? 1 : -1
    }
});
console.log(_arr);
