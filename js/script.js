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

const body = document.querySelector("body"),
	nav = document.querySelector("nav"),
	modeToggle = document.querySelector(".dark-light"),
	searchToggle = document.querySelector(".searchToggle"),
	sidebarOpen = document.querySelector(".sidebarOpen"),
	siderbarClose = document.querySelector(".siderbarClose");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
	body.classList.add("dark");
}

// js code to toggle dark and light mode
modeToggle.addEventListener("click", () => {
	modeToggle.classList.toggle("active");
	body.classList.toggle("dark");

	// js code to keep user selected mode even page refresh or file reopen
	if (!body.classList.contains("dark")) {
		localStorage.setItem("mode", "light-mode");
	} else {
		localStorage.setItem("mode", "dark-mode");
	}
});



document.addEventListener('DOMContentLoaded', function () {
	const translateId = document.getElementById('translate-id');
	const translateEn = document.getElementById('translate-en');
	// const darkModeToggle = document.getElementById('dark-mode-toggle');
	const body = document.body;

	function translateContent(lang) {
		body.setAttribute('lang', lang); // Atur atribut lang

		// Terjemahkan setiap elemen dengan atribut data-translate-id atau data-translate-en
		document.querySelectorAll('[data-translate-id], [data-translate-en]').forEach(element => {
			const translationKey = `data-translate-${lang}`;
			element.innerText = element.getAttribute(translationKey);
		});

		// Ganti teks pada tombol Download CV
		const cvButton = document.getElementById('cv');
		const cvButtonText = lang === 'id' ? 'Unduh CV' : 'Download CV';
		cvButton.innerText = cvButtonText;
	}

	translateId.addEventListener('click', function () {
		translateContent('id');
		alert('Translate to Bahasa Indonesia');
	});

	translateEn.addEventListener('click', function () {
		translateContent('en');
		alert('Translate to English');
	});

	// Toggle class dark mode
	// Tambahkan logika untuk mengaktifkan/dematikan dark mode
	// darkModeToggle.addEventListener('click', function () {
	// 	body.classList.toggle('dark-mode'); 

	// 	alert('Toggle Dark Mode');
	// });
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

//selecting all required elements
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".portfolio-wrap .img-fluid");

window.onload = () => { //after window loaded
	filterItem.onclick = (selectedItem) => { //if user click on filterItem div
		if (selectedItem.target.classList.contains("item")) { //if user selected item has .item class
			filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
			selectedItem.target.classList.add("active"); //add that active class on user selected item
			let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
			filterImg.forEach((image) => {
				let filterImges = image.getAttribute("data-name"); //getting image data-name value
				//if user selected item data-name value is equal to images data-name value
				//or user selected item data-name value is equal to "all"
				if ((filterImges == filterName) || (filterName == "all")) {
					image.classList.remove("hide"); //first remove the hide class from the image
					image.classList.add("show"); //add show class in image
				} else {
					image.classList.add("hide"); //add hide class in image
					image.classList.remove("show"); //remove show class from the image
				}
			});
		}
	}
	for (let i = 0; i < filterImg.length; i++) {
		filterImg[i].setAttribute("onclick", "preview(this)"); //adding onclick attribute in all available images
	}
}

/**
   * Initiate portfolio lightbox 
   */
const portfolioLightbox = GLightbox({
	selector: '.portfolio-lightbox'
});

/**
   * Portfolio details slider
   */
new Swiper('.portfolio-details-slider', {
	speed: 400,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	}
});

/**
   * Testimonials slider
   */
new Swiper('.testimonials-slider', {
	speed: 600,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	},
	slidesPerView: 'auto',
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 40
		},

		1200: {
			slidesPerView: 3,
		}
	}
});