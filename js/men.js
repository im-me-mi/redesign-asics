$(function () {
    $('.dp_cate li').click(function(){
       $(this).css("font-weight",500);
    });

    $('.more_btn_wrap button').click(function(){
        if($('.dp_wrap').css("height") < "4770px")
        {
            $('.dp_wrap').css("height","+=1590px");
        };
    // $('.dp_wrap').css({"height":"+=1600px"});
    //     if($('.dp_wrap').css("height") == "4800px")
    //     {$('.more_btn_wrap button').attr("disabled",true)};
    });

});