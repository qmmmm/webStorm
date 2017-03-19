/**
 * Created by qimengmeng on 17/1/2.
 */
function learn(something) {
    console.log(something)
}
function we(callback,something) {
    something+=' is super cool'
    callback(something)
}
we(learn,'Nodejs')
we(function (something) {
    console.log(something)
},'jade')