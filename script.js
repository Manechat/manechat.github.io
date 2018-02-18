$(document).ready(function(){
	$('#join-button').click(function(){
		$('.modal').addClass("modal-show");
		$('section,header,nav,footer').addClass("blur");
		$('.button').css({"pointer-events" : "none"});
		$('body').css({"background" : "#36393e"});
	});
	$('section,header').mouseup(function(){
		$('.modal').removeClass("modal-show");
		$('section,header,nav,footer').removeClass("blur");
		$('.button').css({"pointer-events" : "initial"});
		$('body').css({"background" : "#36393e url('img/rdsalute_bg.png') fixed right bottom no-repeat"});
	});
});