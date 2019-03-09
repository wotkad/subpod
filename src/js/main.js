$(document).ready(function() {

	function render() {
		var render = document.querySelector('.render');
		var tl = new TimelineLite();
		tl
			.fromTo(render, .5, {opacity: 1}, {opacity: 0})
			.delay(.2)
			.call(hideRender);

		function hideRender(){
			$(render).remove();
		};
	}
	render();

	var body = document.body;
	var selectorClose = $(".headermob__items-close");
	var selectorMenu = $(".headermob__items");
	var selectorButton = $(".headermob__menu");
		t = TweenLite
		.to(selectorMenu, .5, {y:'0', ease:Back.easeOut})
		.reversed(true);

	function toggleDirection() {
		t.reversed( !t.reversed() );
	}

	selectorClose.click(function(){
		toggleDirection();
		$(document).unbind('click.myEvent');
	});

	$('.headermob__menu').click(function(e) {
		var $search = $('.headermob__items');
		if ($search.css('display') != 'block') {
			toggleDirection();
			var firstClick = true;
			$(document).bind('click.myEvent', function(e) {
				if (!firstClick && $(e.target).closest('.headermob__items').length == 0) {
					toggleDirection();
					$(document).unbind('click.myEvent');
				}
				firstClick = false;
			});
		}
		e.preventDefault();
	});

	var sendMail = function sendMail(selector) {
		return fetch('../mail.php', {
			method: 'POST',
			body: new FormData(document.querySelector(selector))
		}).catch(function (error) {
			alertify.error("Ошибка. Повторите отправку позже");
		});
	};

	var sendForm = function() {
		document.querySelector(".footer__block-form-button");
		document.querySelector(".footer__block-form").onsubmit = function(n) {
			n.preventDefault(), sendMail(".footer__block-form").then(function(e) {
				return alertify.success('Ваша заявка отправленна, Мы свяжемся с вами в ближайшее время!')/*,
				 yaCounter********.reachGoal('****', function () {})*/,
				 document.querySelector(".footer__block-form").reset();
			})
		};
	}
	sendForm();

	function smoothScroll() {
		new SmoothScroll('a[href*="#"]', {
			speed: 1500,
			after: function() {
				document.querySelector("body").style.overflow = "";
			}
		});
	}
	smoothScroll();

	var mobItem = document.querySelectorAll('.headermob__items-item');
	for (i = 0; i < mobItem.length; i++){
		mobItem[i].onclick = function() {
			toggleDirection();
			$(document).unbind('click.myEvent');
		}
	}

	function inViewHeader() {
		const tl = new TimelineLite()
		.delay(.3)
		.to('.header__logo', 1, {x: 0, opacity: 1})
		.staggerTo('.header__items-item', .5, {y: 0, opacity: 1}, 0.2)
		.to('.header__block', .5, {x: 0, opacity: 1})
	}
	inViewHeader();

	function inViewHome() {
		const tl = new TimelineLite()
		.to('.home__block-image', 1, {rotation: 0, opacity: 1, x: 0})
	}
	inViewHome();

	function inViewQuestion() {
		const tl = new TimelineLite()
		.delay(1)
		.to('.question__block:nth-child(1)', .5, {x: 0, opacity: 1})
		.to('.question__block:nth-child(2)', .5, {x: 0, opacity: 1})
	}
	inViewQuestion();

	function inViewAbout() {
		var win = $(window);
		var block = $('.about');
		win.scroll(function() {
			if(win.scrollTop() + win.height() > block.offset().top) {
				const tl = new TimelineLite()
				.to('.about__titles', .5, {y: 0, opacity: 1})
				.staggerTo('.about__block', .5, {y: 0, opacity: 1}, 0.2)
				.to('.about__block-image', .2, {x: 0, opacity: 1})
			}
		});
	}
	inViewAbout();

	function inViewInfo1() {
		var win = $(window);
		var block = $('.info1');
		win.scroll(function() {
			if(win.scrollTop() + win.height() > block.offset().top) {
				const tl = new TimelineLite()
				.delay(.5)
				.staggerTo('.info1__blocks-block', 1, {y: 0, opacity: 1}, 0.5)
			}
		});
	}
	inViewInfo1();

	function inViewInfo2() {
		var win = $(window);
		var block = $('.info2');
		win.scroll(function() {
			if(win.scrollTop() + win.height() > block.offset().top) {
				const tl = new TimelineLite()
				.delay(.5)
				.staggerTo('.info2__blocks-block', 1, {y: 0, opacity: 1}, 0.2)
			}
		});
	}
	inViewInfo2();

	function inViewInfo3() {
		var win = $(window);
		var block = $('.info3');
		win.scroll(function() {
			if(win.scrollTop() + win.height() > block.offset().top) {
				const tl = new TimelineLite()
				.delay(.5)
				.staggerTo('.info3__blocks-item', 1, {y: 0, opacity: 1}, 0.2)
			}
		});
	}
	inViewInfo3();

	function inViewItems() {
		var win = $(window);
		var block = $('.items');
		win.scroll(function() {
			if(win.scrollTop() + win.height() > block.offset().top) {
				const tl = new TimelineLite()
				.delay(.5)
				.staggerTo('.items__block', 1, {opacity: 1}, 0.2)
			}
		});
	}
	inViewItems();

	function inViewFooter() {
		var win = $(window);
		var block = $('.footer');
		win.scroll(function() {
			if(win.scrollTop() + win.height() > block.offset().top) {
				const tl = new TimelineLite()
				.delay(.5)
				.to('.footer__block:nth-child(2)', .5, {x: 0, opacity: 1})
			}
		});
	}
	inViewFooter();

	var typed = new Typed('.home__block-title', {
		strings: ["Найдем лучшую кандидатуру за Вас и поможем хорошо заработать на этом!"],
		typeSpeed: 30
	});

})

