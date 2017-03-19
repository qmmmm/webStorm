/**
 * Created by qimengmeng on 17/1/3.
 */
var pet={
    words:'...',
    speak:function (say) {
        console.log(say+' '+this.words)
    }
}

// pet.speak('speak')
var dog={
    words:'wang'
}
pet.speak.call(dog,'speak')
//函数所拥有的两个方法，call和apply，
// 可以改变上下文执行对象，
// call需要一个参数列表，apply允许传递一个参数或者数组