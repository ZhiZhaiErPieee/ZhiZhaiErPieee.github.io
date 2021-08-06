// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = '⚠页面已崩溃!';
        clearTimeout(titleTime);
    }
    else {
        document.title = '(ฅ>ω<*ฅ) 噫又好啦~' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
