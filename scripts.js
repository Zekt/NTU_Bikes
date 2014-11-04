$(function(){
	$(".parallax").scroll(function(){
		var st = $(this).scrollTop();
		if (st > lastScrollTop){
			$(".parallax").animate({
				scrollTop: $("#thebike").offset().top
			}, 1000);
		} else {
		}
	});
});
