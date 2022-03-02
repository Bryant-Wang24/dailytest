// 一、序列化、反序列化
// JSON.parse(JSON.stringify())


// 二、递归、判断类型、检查环、不拷贝原型上的属性
const cache = new Map()//缓存不能全局，最好临时创建并递归传递
const deepClone = (a)=>{
    if(a instanceof Object){//判断a是否为对象
        if(cache.get(a)){return cache.get(a)}
        let result
        if(a instanceof Function){//判断a是否为函数
            if(a.prototype){//如果有 prototype 就是普通函数，没有则为箭头函数
                result = function(){return a.apply(this,arguments)}
            }else{
                result = (...arguments)=>{return a.call(undefined,...arguments)}
            }
        }else if(a instanceof Array){//判断a是否为数组
            result =[]
        }else if(a instanceof Date){//判断a是否为日期
            result = new Date(a-0)
        }else if(a instanceof RegExp){//判断a是否为正则
            result = new RegExp(a.source,a.flags)
        }else{
            result = {}
        }
        cache.set(a,result)
        for(let key in a){
            if(a.hasOwnProperty(key)){
                result[key] = deepClone(a[key])
            }
        }
        return result
    }else{
        return a
    }
}

const a = {
    q:1,
    w:2,
    e:3
}
const b = deepClone(a)
console.log(b);
a.q = 5
console.log(a,b);
