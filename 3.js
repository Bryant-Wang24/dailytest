// 一、indexOf 该方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
const unique1 = (arr) => {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        if (newArray.indexOf(arr[i]) === -1) {
            newArray.push(arr[i])
        }
    }
    return newArray
}

// 二、include 该方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回 false。
const unique2 = (arr) => {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        if (!newArray.includes(arr[i])) {
            newArray.push(arr[i])
        }
    }
    return newArray
}

// 三、filter 该方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
const unique3 = (arr) => {
    let newArray = arr.filter((item, index) => {
        return arr.indexOf(item) === index
    })
    return newArray
}

// 四、reduce 该方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值
const unique4 = (arr) => {
    let newArray = arr.reduce((acc, v) => {
        return acc.includes(v) ? acc : [...acc, v]
    }, [])
    return newArray
}

// 五、Set  ES6中新增了数据类型set，set的一个最大的特点就是数据不重复。
// Set函数可以接受一个数组（或类数组对象）作为参数来初始化，利用该特性也能做到给数组去重
const unique5 = (arr) => {
    const newArray = [...new Set(arr)]
    return newArray
}

//六、Array.from 方法可以将Set结构转换为数组
const unique6 = (arr) => {
    const newArray = Array.from(new Set(arr))
    return newArray
}

// 七、ES6的Map 创建一个空Map数据结构，遍历需要去重的数组，把数组的每一个元素作为key存到Map中
const unique7 = (arr) => {
    let map = new Map()
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i])
            newArray.push(arr[i])
        }
    }
    return newArray
}

// 八、双重for循环
const unique8 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1)
            }
        }
    }
    return arr
}

// 九、sort 该方法对数组的元素进行排序，并返回数组。 
const unique9 = (arr)=> {
    let afterSort = arr.sort()
    let newArray = [afterSort[0]]
    for (let i = 1; i < afterSort.length; i++) {
        if (afterSort[i] !== afterSort[i - 1]) {
            newArray.push(afterSort[i])
        }
    }
    return newArray
}

// 十、forEach 该方法对数组的每个元素执行一次给定的函数。
const unique10 = (arr)=>{
    let newArray = []
    arr.forEach(element => {
        return newArray.includes(element) ? newArray : newArray.push(element)}
    );
    return newArray
}

const array = [1, 2, 3, 4, 5, 3, 2, 1]
const result1 = unique1(array)
const result2 = unique2(array)
const result3 = unique3(array)
const result4 = unique4(array)
const result5 = unique5(array)
const result6 = unique6(array)
const result7 = unique7(array)
const result8 = unique8(array)
const result9 = unique9(array)
const result10 = unique10(array)
console.log('result1', result1);
console.log('result2', result2);
console.log('result3', result3);
console.log('result4', result4);
console.log('result5', result5);
console.log('result6', result6)
console.log('result7', result7)
console.log('result8', result8)
console.log('result9', result9)
console.log('result10', result10)