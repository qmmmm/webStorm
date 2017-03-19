/**
 * Created by qimengmeng on 17/1/3.
 */
// var pet={
//     words:'...',
//     speak:function () {
//         console.log(this.words)
//         console.log(this===pet)
//     }
// }
// pet.speak()


// function pet(words){
//     this.words=words
//     console.log(this.words)
//     console.log(this)
//
// }
// pet('...')

function pet(words){
    this.words=words
    this.speak=function () {
        console.log(this.words)
        console.log(this)
    }
}
var cat =new pet('miao')
cat.speak()