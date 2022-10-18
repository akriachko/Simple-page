$(function () {

	$(window).scroll(function () {
		if ($(window).scrollTop() >= 95) {
			$('.header__wrapper').addClass('sticky')
		} else {
			$('.header__wrapper').removeClass('sticky')
		}
	});

	$(window).scroll(function () {
		if ($(window).scrollTop() >= 95) {
			$('.menu').addClass('menu--padding')
		} else {
			$('.menu').removeClass('menu--padding')
		}
	});


	$(".menu").on("click", "a", function (e) {
		e.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top }, 1500);
	});

	$('.burger').on('click', function () {
		$('.menu__list').toggleClass('menu__list--active');
	})

	var mixer = mixitup('.works__example');
});

document.addEventListener('DOMContentLoaded', () => {

	const burger = document.querySelector('.burger');

	burger.addEventListener('click', () => {
		burger.classList.toggle('burger--active');
	});

});