$(document).ready(function () {
	var scrollPosCheck;

	$('#join-button').click(function () {
		$('.modal').addClass("modal-show");
		$('section,header,nav,footer').addClass("blur");
		$('.button, nav, section a').css({ "pointer-events": "none" });
		$('html,body').css({ "overflow": "hidden"});
	});
	$('section,header').mouseup(function () {
		$('.modal').removeClass("modal-show");
		$('section,header,nav,footer').removeClass("blur");
		$('.button, nav, section a').css({ "pointer-events": "initial" });
		$('html,body').css({ "overflow": "initial" });
	});

	$(window).scroll(function () {
		clearTimeout(scrollPosCheck);
		checkScrollPosition();
	});

	function checkScrollPosition() {
		scrollPosCheck = setTimeout(function () {
			if ($(window).scrollTop() > 200) {
				$('nav').addClass("scrolled");
			} else {
				$('nav').removeClass("scrolled");
			}
		}, 100)
	};

	$('nav').children('img').click(function () {
		$('html, body').animate({ scrollTop: 0 }, 500);
	})

	$('#twismile').click(function () {
		if (!($(this).hasClass("slide"))) {
			$('#twismile').addClass("slide");
			setTimeout(function () {
				$('#twismile').removeClass("slide");
			}, 4000);
		}
	});
});
