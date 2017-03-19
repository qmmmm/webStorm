/**
 * Created by qimengmeng on 17/1/3.
 */
function pet(words) {
    this.words=words
    this.speak=function () {
        console.log(this.words)
    }
}
function dog(words) {
    pet.call(this,words)
    //pet.apply(this,arguements)
}
var dog=new dog('wang')

dog.speak()