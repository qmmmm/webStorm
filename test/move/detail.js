/**
 * Created by qimengmeng on 17/3/13.
 */
/*鼠标悬停事件，停在哪个小图上显示哪张大图
 * */
function  changeimg(){
    var bigimg=document.getElementById("bigimg");
    bigimg.src=event.srcElement.src;
}

//显示放大后的图片局部
function showobj(id){
    var obj=document.getElementById(id);
    obj.style.display="block";
}
//隐藏
function hiddenobj(id){
    var obj=document.getElementById(id);
    obj.style.display="none";
}
//显示目标图片
function miniimg(){
    var obj1=document.getElementById("targetimg");
    var obj2=document.getElementById(event.srcElement.id);
    obj1.src=obj2.src;
}
//局部显示
function onmove(){
    showobj("targetimgdiv");
    miniimg();
    //获取放大镜图片对象
    var obj=document.getElementById("targetimg");
    //获取鼠标相对位移
    var offx=obj.width/event.srcElement.width;
    var offy=obj.height/event.srcElement.height;
    //获取放大镜div对象
    var div=document.getElementById("targetimgdiv");
    //重新设置容器的滚动条
    div.scrollLeft=(event.offsetX*offx);
    div.scrollTop=(event.offsetY*offy);

}