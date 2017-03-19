/**
 * Created by qimengmeng on 17/1/3.
 */
var EventEmitter=require('events').EventEmitter

var life=new EventEmitter()//生成eventemitter的一个实例

//最好不要超过10个监听的事件，太多可能会导致内存的泄漏就会报警告.
// 。修改事件监听的最大数量
life.setMaxListeners(11)

function water(who) {
    console.log('给'+who+'倒水')
}
life.on('求安慰',water)

life.on('求安慰',function (who) {
    console.log('给'+who+'按摩')
})
life.on('求安慰',function (who) {
    console.log('给'+who+'做饭')
})
life.on('求安慰',function (who) {
    console.log('给'+who+'洗衣服')
})
life.on('求安慰',function (who) {
    console.log('给'+who+'。。5')
})
life.on('求安慰',function (who) {
    console.log('给'+who+'。。6')
})
life.on('求安慰',function (who) {
    console.log('给'+who+'。。7')
})
life.on('求安慰',function (who) {
    console.log('给'+who+'。。8')
})
life.on('求安慰',function (who) {
    console.log('给'+who+'。。9')
})
life.on('求安慰',function (who) {
    console.log('给'+who+'。。10')
})
life.on('求安慰',function (who) {
    console.log('给'+who+'累死了')
})
life.on('求溺爱',function (who) {
    console.log('给'+who+'交工资')
})
life.on('求溺爱',function (who) {
    console.log('给'+who+'买衣服')
})

// life.emit('求安慰','妹子')
life.removeListener('求安慰',water)//移除监听
// 通过emit批量移除
life.removeAllListeners('求安慰')

// 如何查看一个事件是否被监听过,查看一个布尔的值
var hasConfortListener=life.emit('求安慰','妹子')
var hasLovedListener=life.emit('求溺爱','我')
// var hadPlayedListener=life.emit('求玩坏','jdsjid')
console.log(life.listeners('求安慰').length)//获得某个事件监听的数量
console.log(life.listeners('求溺爱').length)
// console.log(EventEmitter.listenerCount(life,'求安慰'))
// 通过eventemitter获得某个事件监听的数量，第一个参数是实例名字，第二个参数是具体的某个事件的名字

// console.log(hasConfortListener)
// console.log(hasLovedListener)
// console.log(hadPlayedListener)