$(document).ready(function () {
	var scrollPosCheck;

	/* load Discord invite link from invite.txt */
    $.get('invite.txt', function (data) {
        $(".modal").append(
            '<a href="' + data + '" class="modal-link button cyan">join</a>'
        );
    });

	/* open modal */
    $('#join-button').click(function () {
        $('.modal-container').addClass("modal-container-show");
        $('html,body').css({ "overflow": "hidden" });
    });

    /* close modal */
    $('.modal-container').click(function (e) {
        if (e.target !== e.currentTarget) return;
        $('.modal-container').removeClass("modal-container-show");
        $('html,body').css({ "overflow": "visible" });
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
