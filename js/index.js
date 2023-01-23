$(function () {
$(document).ready(function () {

    $('.slide_img').bxSlider({
        pager: true,
        slideWidth: 1920,
        nextSelector: '.mainSlider_wrap .contlors .next',
        prevSelector: '.mainSlider_wrap .contlors .prev',
        prevText:'<i class="fa-solid fa-caret-left"></i>',
        nextText:'<i class="fa-solid fa-caret-right"></i>'
    });
    // $('.cont').bxSlider({
    //     useCSS:true,
    //     minSlides: 4,
    //     maxSlides: 4,
    //     moveSlides: 1,
    //     slideWidth: 1000,
    //     adaptiveHeight:false,
    //     pager:false,
    //     infiniteLoop: true
    // });
});

$('.tab_btn div').click(function() {
    var activeTab = $(this).attr('data-tab');
    $('.tab_btn div a').removeAttr("href");
    $('.tab_btn div').removeClass('on');
    $('.cont').removeClass('on');
    $(this).addClass('on');
    $('#' + activeTab).addClass('on');
});

});




//$(".tab_list li a").css({"color":"a6a6a6","background-color":"#e5e1e1"})
    // $(this).find("a").css({"background-color":"#b40a13","color":"#fff"});
    // $(".tab_cont>div").hide();
    // $(this).next().show();