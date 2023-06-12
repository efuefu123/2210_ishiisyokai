jQuery(function ($) {
	// この中であればWordpressでも「$」が使用可能になる

	// ヘッダー
	// $(window).on('scroll', function () {
	// 	if ($('.slider1').height() < $(this).scrollTop()) {
	// 		$('.header').css('background', 'rgba(17,17,17,1)');
	// 	} else {
	// 		$('.header').css('background', 'rgba(17,17,17,0.5)');
	// 	}
	// });

	//ドロワーメニュー
	$('.navbar_toggle').on('click', function () {
		$(this).toggleClass('open');
		$('.menu').toggleClass('open');
	});

	//ドロワーメニュー
	$('.js-hamburger').click(function () {
		$('.l-hamburger').toggleClass('is-active');
		$('.l-drawer-menu').toggleClass('is-active');
		$('.l-hamburger-drawer').toggleClass('is-active');
		var result = $('body').css('overflow-y');
		if (result == 'hidden') {
			$('body').css('overflow-y', 'auto');
		} else {
			$('body').css('overflow-y', 'hidden');
		}
	});

	// //画面サイズ変更時にモーダルを閉じる
	var timer = '';
	$(window).on('resize', function () {
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(function () {
			var windowSize = $(window).width();

			if (windowSize < 768) {
				$('.l-modal-tel').removeClass('is-active');
				$('.l-overLay').removeClass('is-active');
				$('body').css('overflow-y', 'auto');
			}
		}, 1000);
	});

	// スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)
	$(document).on('click', 'a[href*="#"]', function () {
		let time = 400;
		let header = $('header').innerHeight();
		let target = $(this.hash);
		if (!target.length) return;
		let targetY = target.offset().top - header;
		$('html,body').animate({ scrollTop: targetY }, time, 'swing');
		return false;
	});

	// Swiper;
	const swiper1 = new Swiper('.p-top-lease-rental__content', {
		effect: 'slide',
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		loop: true,
		loopAdditionalSlides: 3,
		slidesPerView: 1.5,
		spaceBetween: 20,
		centeredSlides: true,
		breakpoints: {
			// 768px以上の場合
			768: {
				slidesPerView: 3.75,
				centeredSlides: false,
				spaceBetween: 10,
			},
			980: {
				slidesPerView: 4.85,
				spaceBetween: 20,
			},
		},
	});
	const swiper2 = new Swiper('.p-top-sale-used__content', {
		effect: 'slide',
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		loop: true,
		loopAdditionalSlides: 3,
		slidesPerView: 1.5,
		spaceBetween: 20,
		centeredSlides: true,
		breakpoints: {
			// 768px以上の場合
			768: {
				slidesPerView: 3.75,
				centeredSlides: false,
				spaceBetween: 10,
			},
			980: {
				slidesPerView: 4.85,
				spaceBetween: 20,
			},
		},
	});
	const swiper3 = new Swiper('.p-top-review__content', {
		effect: 'slide',
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		loop: true,
		loopAdditionalSlides: 3,
		slidesPerView: 1.5,
		spaceBetween: 20,
		centeredSlides: true,
		breakpoints: {
			// 768px以上の場合
			768: {
				slidesPerView: 3.75,
				centeredSlides: false,
				spaceBetween: 10,
			},
			980: {
				slidesPerView: 4.85,
				spaceBetween: 20,
			},
		},
	});

	/*-------------------------------------------- 
//プライバシーポリシーのチェック判定
--------------------------------------------*/
	$(function () {
		$('#confirm').click(function () {
			if ($('[name="agree"]').prop('checked')) {
			} else {
				$('#error').addClass('is-active');
				return false;
			}
		});
	});
});

/*--------------------------------------------
アニメーション用（フェードイン）
--------------------------------------------*/
new WOW().init();
