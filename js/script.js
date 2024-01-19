$('.page-scroll').on('click', function (e) {

	//ambil isi href
	var tujuan = $(this).attr('href');
	//tangkap elemen ybs
	var elemenTujuan = $(tujuan);

	//pindahkan scroll
	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 2000, 'easeInOutExpo');

	e.preventDefault();

});

// Automatic text
document.addEventListener('DOMContentLoaded', function () {
	var options = {
		strings: ["Programmer", "Web Developer", "Designer", "Freelancer"],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true
	};
	var typed = new Typed(".typing", options);
});


// Parallax
// About
$(window).on('load', function () {
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
})


$(window).scroll(function () {
	var wScroll = $(this).scrollTop();

	// Jumbotron

	$('.jumbotron img').css({
		'transform': 'translate(0px, ' + wScroll / 4 + '%)'
	});

	$('.jumbotron h1').css({
		'transform': 'translate(0px, ' + wScroll / 2 + '%)'
	});

	$('.jumbotron p').css({
		'transform': 'translate(0px, ' + wScroll / 1.2 + '%)'
	});


	// portofolio
	if (wScroll > $('.portofolio').offset().top - 250) {
		$('.portofolio .thumbnail').each(function (i) {
			setTimeout(function () {
				$('.portofolio .thumbnail').eq(i).addClass('muncul');
				$('.portofolio h4').eq(i).addClass('muncul');
			}, 400 * (i + 1));
		});
	}

	if (wScroll > $('.sertificate').offset().top - 250) {
		$('.sertificate .thumbnail').each(function (i) {
			setTimeout(function () {
				$('.sertificate .thumbnail').eq(i).addClass('muncul');
				$('.sertificate h4').eq(i).addClass('muncul');
			}, 400 * (i + 1));
		});
	}

});

/**
   * Animation on scroll
   */
window.addEventListener('load', () => {
	AOS.init({
		duration: 2000,
		easing: 'ease-in-out',
		once: true,
		mirror: false
	})
});

/**
   * Preloader
   */
var preloader = document.getElementById('preloader');

window.addEventListener('load', function () {
	preloader.style.display = "none";
})

/**
   * Back to top button
   */
const backtotop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
	if (window.pageYOffset > 100) {
		backtotop.classList.add('active');
	} else {
		backtotop.classList.remove('active');
	}
})



