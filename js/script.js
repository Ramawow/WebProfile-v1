$('.page-scroll').on('click', function(e){

    //ambil isi href
    var tujuan = $(this).attr('href');
    //tangkap elemen ybs
    var elemenTujuan = $(tujuan);

    //pindahkan scroll
    $('html,body').animate({
     scrollTop: elemenTujuan.offset().top -50   
    }, 2000, 'easeInOutExpo');

    e.preventDefault();
    
});



// Parallax
// About
$(window).on('load', function(){
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
})


$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	// Jumbotron

	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});


	// portofolio
	if( wScroll > $('.portofolio').offset().top - 250) {
		$('.portofolio .thumbnail').each(function(i){
			setTimeout(function() {
				$('.portofolio .thumbnail').eq(i).addClass('muncul');
				$('.portofolio h4').eq(i).addClass('muncul');
			}, 400 * (i+1));
		});
	}

	if( wScroll > $('.sertificate').offset().top - 250) {
		$('.sertificate .thumbnail').each(function(i){
			setTimeout(function() {
				$('.sertificate .thumbnail').eq(i).addClass('muncul');
				$('.sertificate h4').eq(i).addClass('muncul');
			}, 400 * (i+1));
		});
	}

});




