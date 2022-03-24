$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			
		}
	});
});

$(document).ready(function() {

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});
	
});

$(function() {
	let headerWrap = $('.headerWrap');
	 
	$(window).scroll(function() {
	  if($(this).scrollTop() > 1) {
		headerWrap.addClass('fixHead');
	  } else {
		headerWrap.removeClass('fixHead');
	  }
	});
});


   $(document).ready(function() {
    $('.responsive-menu-button').click(function(event){
        $('.responsive-menu-button').toggleClass('is-active');
		$('.responsive-menu-inner').toggleClass('is-active');
		$('.responsive-menu-container').toggleClass('active');
        $('body').toggleClass('lock')
    });
});

$(document).ready(function() {
    $("#loadmore").on('click', function(e){
		e.preventDefault();

		$("#spinner").show(200, function(){
			setTimeout(function(){
			  $('#spinner').hide(300);
			}, 1500);
		  });

	});

});

$(document).ready(function() {
    $(".maples aside").slice(0, 10).show();
	$("#loadmore").on('click', function(e){
		e.preventDefault();
		var elementId = $(".maples aside:hidden");
		if (elementId.length > 1) {
		$(".maples aside:hidden").delay(2000).slice(0, 10).slideDown();
		}
		else {
		 $(".maples aside:hidden").slice(0, 1).slideDown();
		 $("#loadmore").fadeOut();
		}
		

	});

});

$(document).ready(function() {
    $("#loadmore2").on('click', function(e){
		e.preventDefault();

		$("#spinner").show(200, function(){
			setTimeout(function(){
			  $('#spinner').hide(300);
			}, 1500);
		  });

	});

});


$(document).ready(function() {
    $(".conifers aside").slice(0, 4).show();
	$("#loadmore2").on('click', function(e){
		e.preventDefault();
		var elementId = $(".conifers aside:hidden");
		if (elementId.length > 1) {
		$(".conifers aside:hidden").delay(2000).slice(0, 4).slideDown();
		}
		else {
		 $(".conifers aside:hidden").slice(0, 1).slideDown();
		 $("#loadmore2").fadeOut();
		}
		

	});

});



 $('.multiple-items').slick({
      infinite: true,
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 468,
	      settings: {
	        slidesToShow: 1
			
	      }
		}
    ]
    });





