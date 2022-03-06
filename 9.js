// 手写一个发布订阅
const eventHub = {
    map: {}, //用map表示键为事件名，值为函数数组的键值对 ，例如：{ 'click':[fn1,fn2] }
    on: (name, fn) => {
        eventHub.map[name] = eventHub.map[name] || []
        eventHub.map[name].push(fn)
    },
    emit: (name, data) => {
        const queue = eventHub.map[name]
        if (!queue) return
        queue.map(fn => fn(data))
    },
    off: (name, fn) => {
        const queue = eventHub.map[name]
        if (!queue) return
        const index = queue.indexOf(fn)
        if (index < 0) return
        queue.splice(index, 1)
    }
}
eventHub.on('click', console.log)

eventHub.on('click', console.error)

eventHub.off('click', console.log)

setTimeout(() => {
    eventHub.emit('click', '执行')
}, 2000);