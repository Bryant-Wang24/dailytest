// 插入排序
function selectSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]];
        // if (i === minIndex) return 
        var temp = null;
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
        console.log(`当前minIndex:${minIndex}`);
        console.log(`当前数组：${arr}`);
    }
    return arr
}
let f1 = [3, 44, 38, 5]
console.log(selectSort(f1));