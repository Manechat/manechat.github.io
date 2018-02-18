$(document).ready(function(){
	$('#join-button').click(function(){
		$('.modal').addClass("modal-show");
		$('section,header,nav,footer').addClass("blur");
		$('.button').css({"pointer-events" : "none"});
	});
	$('section,header').mouseup(function(){
		$('.modal').removeClass("modal-show");
		$('section,header,nav,footer').removeClass("blur");
		$('.button').css({"pointer-events" : "initial"});
	});
});