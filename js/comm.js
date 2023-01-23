
$(function(){
    $('#gnb>ul>li').on({
        "mouseenter": function () {
            $('.msub_cate').css({"display":"flex"}).hide();
            $(this).find("ul").slideDown(500 ,'swing').css({
                "background": "rgba(255,255,255)"
            });
        },
        "mouseleave": function () {
            $(this).find("ul").slideUp();
        }
    });
});