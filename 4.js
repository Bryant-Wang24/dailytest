// 一、快速排序 nlogn
const quickSort = (arr)=>{
    if(arr.length<2)return arr
    const middleIndex = Math.floor(arr.length/2)
    const middleValue = arr.splice(middleIndex,1)[0]
    let leftArray = [],rightArray =[]
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]<middleValue){
            leftArray.push(arr[i])
        }else if(arr[i]>middleValue){
            rightArray.push(arr[i])
        }
    }
    let newArray = quickSort(leftArray).concat(middleValue,quickSort(rightArray))

    return newArray
}


// 二、冒泡排序 n^2
const bubbleSort = (arr)=>{
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if(arr[i]>arr[j]){
                let a = []
                a = arr[i]
                arr[i] = arr[j]
                arr[j] = a
            }
        }
    }
    return arr
}

// 三、归并排序 nlogn
const merge = (leftArray,rightArray)=>{
    let result = []
    if(leftArray.length>0&&rightArray.length>0){
        if(leftArray[0]<rightArray[0]){
            result.push(leftArray.shift())
        }else{
            result.push(rightArray.shift())
        }
    }
    return result.concat(leftArray,rightArray)
}
const mergeSort = (arr)=>{
    if(arr.length<2)return arr
    const middleIndex = Math.floor(arr.length/2)
    let leftArray = arr.slice(0,middleIndex)
    let rightArray = arr.slice(middleIndex)
    return merge(mergeSort(leftArray),mergeSort(rightArray))
}

const array = [];
// 生成[0, 100000]之间的随机数
for (let i = 0; i < 100000; i++) {
  array.push(0 + Math.floor((100000 - 0 + 1) * Math.random()))
}



// 快速排序
console.time('testQuick');
const result1 = quickSort(array)
console.log('result1',result1);
console.timeEnd('testQuick');//耗时 95 ms

// 冒泡排序
console.time('testBubble');
const result2 = bubbleSort(array)
console.log('result2',result2);
console.timeEnd('testBubble');// 耗时 22 s

// 归并排序
console.time('testMerge');
const result3 = mergeSort(array)
console.log('result3',result3);
console.timeEnd('testMerge'); //耗时 79 ms