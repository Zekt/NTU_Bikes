$(function(){
	$("#nav_sec1").click(function(){
			$('html,body').animate({
				scrollTop: $('#sec1').offset().top
			}, 700);
	});
	$("#nav_sec2").click(function(){
			$('html,body').animate({
				scrollTop: $('#sec2').offset().top
			}, 700);
	});
	$("#nav_sec3").click(function(){
			$('html,body').animate({
				scrollTop: $('#sec3').offset().top
			}, 700);
	});
});
