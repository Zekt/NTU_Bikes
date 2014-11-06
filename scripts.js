var keys = [32,33,34,37,38,39,40];
var pages = ['#sec1','#sec2','#sec3','#sec4','#sec5'];
var index = 0;

function preventDefault(e) {
	e = e || window.event;
	if (e.preventDefault)
	e.preventDefault();
	e.returnValue = false;  
}

function keydown(e) {
	for (var i = keys.length; i--;) {
		if (e.keyCode === keys[i]) {
			preventDefault(e);
				return;
		}
	}
}

function wheel(e) {
	  preventDefault(e);
}

function disable_scroll() {
	if (window.addEventListener) {
		window.addEventListener('DOMMouseScroll', wheel, false);
	}
	window.onmousewheel = document.onmousewheel = wheel;
	document.onkeydown = keydown;
}


$(function(){
	$(window).load(function(){
		$('html,body').animate({
			scrollTop: $('#sec1').offset().top}, 700);
		});
	disable_scroll();
	$("#up").click(function(){
		if(index == 0)
			return;
		--index;
		$('html,body').animate({
			scrollTop: $(pages[index]).offset().top
		}, 700);
	});
	$("#down").click(function(){
		if(index == 4)
			return;
		++index;
		$('html,body').animate({
			scrollTop: $(pages[index]).offset().top
		}, 700);
	});
	$("#nav_sec1").click(function(){
		index = 0;
		$('html,body').animate({
			scrollTop: $('#sec1').offset().top
		}, 700);
	});
	$("#nav_sec2").click(function(){
		index = 1;
		$('html,body').animate({
			scrollTop: $('#sec2').offset().top
		}, 700);
	});
	$("#nav_sec3").click(function(){
		index = 3;
		$('html,body').animate({
			scrollTop: $('#sec3').offset().top
		}, 700);
	});
	$("#nav_sec4").click(function(){
		index = 3;
		$('html,body').animate({
			scrollTop: $('#sec4').offset().top
		}, 700);
	});
	$("#nav_sec5").click(function(){
		index = 4;
		$('html,body').animate({
			scrollTop: $('#sec5').offset().top
		}, 700);
	});
});
