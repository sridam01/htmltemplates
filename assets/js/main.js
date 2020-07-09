$(document).ready(function(){

	$('.menu-triger').on('click', function(){
		$('.off-canvas-menu, .off-canvas-overlay').addClass("active");
		return false;
	});

	$('.menu-close, .off-canvas-overlay').on('click', function(){
		$('.off-canvas-menu, .off-canvas-overlay ').removeClass("active");
		
	});

	$('.scrolltotop').on('click', function(){
		$("html, body").animate({scrollTop:0}, 'slow');
		
		
	});

	$(window).scroll(function(){
		var height= $(window).scrollTop();
		if(height>100){
			$('.header-area').addClass("sticky");
			$('.scrolltotop').fadeIn();

		}else{
			$('.header-area').removeClass('sticky');
			$('.scrolltotop').fadeOut();

		}
	});

	$('.testimonial-wrap').owlCarousel({
		items:1,
		loop:true,
		dots:false,
		nav:false,
		autoplay:true,
	});



	$('#webdesign-progressbar').circleProgress({
		value: 0.75,
		size: 150,
		fill: '#30bae7',
		thickness:10,
		emptyFill: '#dfe8ed'
	}).on('circle-animation-progress', function(event, progress) {
    $(this).find('.progressbar-percentage').html(Math.round(90 * progress) + '<i>%</i>');
  });
	$('#html-progressbar').circleProgress({
		value: 0.8,
		size: 150,
		fill: '#de6696',
		thickness:10,
		emptyFill: '#dfe8ed'
	}).on('circle-animation-progress', function(event, progress) {
    $(this).find('.progressbar-percentage').html(Math.round(80 * progress) + '<i>%</i>');
  });
	$('#graphics-progressbar').circleProgress({
		value: 1,
		size: 150,
		fill: '#15c7a8',
		thickness:10,
		emptyFill: '#dfe8ed'
	}).on('circle-animation-progress', function(event, progress) {
    $(this).find('.progressbar-percentage').html(Math.round(100 * progress) + '<i>%</i>');
  });
	$('#uiux-progressbar').circleProgress({
		value: .85,
		size: 150,
		fill: '#eb7d4b',
		thickness:10,
		emptyFill: '#dfe8ed'
	}).on('circle-animation-progress', function(event, progress) {
    $(this).find('.progressbar-percentage').html(Math.round(85 * progress) + '<i>%</i>');
  });

	   $(".protfolio-btn li").on('click',function(){

            $(".protfolio-btn li") .removeClass("active");
            $(this) .addClass("active");


        	var selector= $(this).attr('data-filter')
        	$(".protfolio-list").isotope({
        		filter: selector
        	});
        });

});