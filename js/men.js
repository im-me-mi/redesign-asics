$(function () {
  $(".dp_cate li a").click(function () {
    if ($(this).hasClass("active")) {
      $(".dp_cate li a").removeClass("active");
    } else {
      $(".dp_cate li a").removeClass("active");
      $(this).addClass("active");
    }
    // let fontBold = $(this).css({ color: "#00116e", fontWeight: "500" });
  });

  $(".more_btn_wrap button").click(function () {
    if ($(".dp_wrap").css("height") < "4770px") {
      $(".dp_wrap").css("height", "+=1590px");
    }
    // $('.dp_wrap').css({"height":"+=1600px"});
    //     if($('.dp_wrap').css("height") == "4800px")
    //     {$('.more_btn_wrap button').attr("disabled",true)};
  });
});
