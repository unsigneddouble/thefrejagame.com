$(document).ready(function() {
	// PARALLAX ENGINE
	$(window).enllax();

	var windowH = $(window).height();

//============================================ nav =============================
	$(window).scroll(function(){
		var windowOffset = $(window).scrollTop();
		// console.log(windowOffset);
		if(windowOffset > 0){
			$('nav').removeClass('hidden slideOutUp');
			$('nav').addClass('slideInDown');
		}else{
			$('nav').removeClass('slideInDown');
			$('nav').addClass('slideOutUp');
		}

		var socialOffset = document.getElementById('socials-holder').getBoundingClientRect().top - $(window).height();

		console.log(socialOffset);
		if( socialOffset < -280 ){
			$('.social-block').each(function(i){
	      var item = $(this);
	      setTimeout(function() {
					item.removeClass('invisible');
					item.removeClass('fadeOutDown');
	        item.addClass('fadeInUp');
	      }, 100*i);
	    });
		}else{
			$('.social-block').each(function(i){
	      var item = $(this);
	      setTimeout(function() {
					item.removeClass('fadeInUp');
	        item.addClass('fadeOutDown');
	      }, 100*i);
	    });
		}
	})

	// OWL CAROUSEL
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})


});
