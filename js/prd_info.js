$(function(){
    $(".prd_slider").bxSlider({
        minSlides: 2,
        maxSlides: 2,
        moveSlides: 1,
        nextSelector: '.prdSlider_wrap .contlors .next',
        prevSelector: '.prdSlider_wrap .contlors .prev',
        prevText:'<i class="fa-solid fa-chevron-left"></i>',
        nextText:'<i class="fa-solid fa-chevron-right"></i>',
        slideWidth: 600,
        adaptiveHeight:true,
        pager:false,
        infiniteLoop: true
      });

      $('.c_chip button').click(function(){
        var value = $(this).attr('value');
        $('.userColor').text(value);
      });
      $('.c_chip button').click(function(){
        var value = $(this).attr('value');
        $('.chipName p').text(value);
      });

      $('.size_btn button').click(function(){
        var size = $(this).text();
        $('.userSize').text(size+'mm');
      });

      $('.col4 li').click(function() {
				var activeTab = $(this).attr('data-tab');
        $('.col4 li a').removeAttr("href");
				$('.col4 li').removeClass('on');
				$('.cont').removeClass('on');
				$(this).addClass('on');
				$('#' + activeTab).addClass('on');
			});
			});






