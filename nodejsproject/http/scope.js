/**
 * Created by qimengmeng on 17/1/3.
 */
var globalVariable='this is a globalVariable'
function globalFunction() {
    var localVariable='this is a localVariable'
    console.log('visit local/global variable')
    console.log(globalVariable)
    console.log(localVariable)

    globalVariable='this a changed globalvarible'
    console.log(globalVariable)
    function localfunction() {
        var innerLocalVariable='this is inner local variable'

        console.log('visit globle/local/inner variable')
        console.log(globalVariable)
        console.log(localVariable)
        console.log(innerLocalVariable)

    }
    localfunction()

}
globalFunction()