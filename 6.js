// 防抖debounce (相当于回城被打断)
function debounce(fn,delay){
    let timer = null
    return ()=>{
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this,arguments)
            timer = null
        }, delay);
    }
}


// 节流throttle（相当于释放技能有冷却时间）
function throttle (fn,delay){
    let timer = null
    return ()=>{
        if (timer){return}
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
        }, delay);       
    }
}