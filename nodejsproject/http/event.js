/**
 * Created by qimengmeng on 17/1/2.
 */
function clickIt(e){
    window.alert('button is click')
}
var button= document.getElementById('button')
button.addEventListener('click',clickIt)