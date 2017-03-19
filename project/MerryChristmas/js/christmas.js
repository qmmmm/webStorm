/**
 * Created by qimengmeng on 17/1/6.
 */
/**
 * 慕课网特制
 * 圣诞主题效果
 * @type {Object}
 */

/**
 * 切换页面
 * 模拟镜头效果
 * @return {[type]} [description]
 */
function changePage(element,effect,callback){
    element
        .addClass(effect)
        .one("animationend webkitAnimationEnd", function() {
            callback && callback();
        })
}


/**
 * 中间调用
 */
var Christmas = function() {
    //页面容器元素
    var $pageA = $(".page-a");
    var $pageB = $(".page-b");
    var $pageC = $(".page-c");

    // 观察者
    var observer=new Observer();
    // a场景页面
    new pageA($pageA);
    
    // 这是用点击切换场景的
    // new pageA(function () {
    //     observer.publish("completeA");
    // })

    // 进入场景b
    observer.subscribe("pageB",function () {
        new pageB(function () {
            observer.publish("completeB");
        })
    })

    // 进入场景c
    observer.subscribe("pageC",function () {
        new pageC()
    })

    // 页面a－b场景切换
    observer.subscribe("completeA",function () {
        changePage($pageA,"effect-out",function () {
            observer.publish("pageB");

        })
    })
    observer.subscribe("completeB",function () {
        changePage($pageC,"effect-in",function () {
            observer.publish("pageC");
        })
    })

};
/**
 * 背景音乐
 * @param {[type]} url  [description]
 * @param {[type]} loop [description]
 */
function HTML5Audio(url, loop) {
    var audio=new Audio(url);
    audio.autoplay=true;
    audio.loop=loop||false;
    // 是否循环
    audio.play();
    return{
        end:function (callback) {
            audio.addEventListener('ended',function () {
                callback()
            },false);
        }
    }
}


$(function() {
    $(".runxueqiao").click(function () {
        Christmas()
    })
    $(".music").click(function () {
        // 背景音乐
        var audio1=HTML5Audio('music/scene.mp3')
        audio1.end(function () {
            alert("音乐结束")
        })
    })
    // 圣诞主题效果，开始
    $(".changeView").click(function () {
        Christmas()
    })
    $(".loopmusic").click(function () {
        HTML5Audio('music/circulation.mp3',true)
    })
    $(".openwindow").on("click",function () {
        Christmas()
    })


})