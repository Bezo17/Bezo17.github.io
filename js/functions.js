
$(function() {
	smoothScroll(1500);
	$(".biglink").fitText(1.7);
	$(".content h1").fitText(1.2, { minFontSize: '20px', maxFontSize: '50px' });
	$('[data-toggle="tooltip"]').tooltip({trigger: "focus"});
	$('#contactForm').bootstrapValidator({
				message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            'name': {
                validators: {
                    notEmpty: {
                        message: 'Your Name  is required and cannot be empty'
                    }
                }
            },
            '_replyto': {
                validators: {
                    notEmpty: {
                        message: 'Your Email address is required and cannot be empty'
                    },
                    emailAddress: {
                        message: 'The email address is not valid'
                    }
                }
            },
            '_subject': {
                validators: {
                    notEmpty: {
                        message: 'The Subject is required and cannot be empty'
                    },
                    stringLength: {
                        max: 100,
                        message: 'The Subject must be less than 100 characters long'
                    }
                }
            },
            'message': {
                validators: {
                    notEmpty: {
                        message: 'A Message is required and cannot be empty'
                    },
                    stringLength: {
                        max: 900,
                        message: 'The Message must be less than 900 characters long'
                    }
                }
            }
        }
    });

    var controller = new ScrollMagic.Controller();

        $('.line').each(function(){
            var tween = TweenMax.from($(this), 1, { width: '50px', ease:Linear.easeNone});

        var Scene = new ScrollMagic.Scene({
            triggerElement: this,
            duration: '15%'
         })
        .setTween(tween)
        //.setClassToggle('.line', 'widner')
        //.addIndicators()
        .addTo(controller);
	
//	$(".head-logo h1").fitText(1, { minFontSize: '35px', maxFontSize: '80px' });
	
});
function toggleChevron() {

        $('.panel-body.animated').toggleClass('zoomIn zoomOut');
    }
    
    $('#accordion').on('hide.bs.collapse', toggleChevron);
    $('#accordion').on('show.bs.collapse', toggleChevron);
}) 

function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}

$(document).on('click','.navbar-collapse.in',function(e) {
	if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
	$(this).collapse('hide');
	}
});

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );

	  (function(){

		  var parallax = document.querySelectorAll(".parallax"),
			  speed = 0.3;

		  window.onscroll = function(){
			[].slice.call(parallax).forEach(function(el,i){

			  var windowYOffset = window.pageYOffset,
				  elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

			  el.style.backgroundPosition = elBackgrounPos;

			});
		  };

		})();

var overlay = document.getElementById("overlay");

    window.addEventListener('load', function(){
        overlay.style.display = 'none';
        window.sr = ScrollReveal();
		sr.reveal('.about-me-photo', {
			duration: 2000,
			origin: 'bottom',
            viewFactor: 0.5,
            delay: 1000,
            distance: '50px',
            mobile: false,
		});
		sr.reveal('#about-me-text', {
			duration: 2000,
			origin: 'bottom',
			distance: '100px',
            viewFactor: 0.5,
            delay: 1500,
            mobile: false,
		});
		sr.reveal('.about', {
			duration: 2000,
			origin: 'bottom',
            distance: '20px',
			viewFactor: 0.9,
            mobile: false,
		});
		sr.reveal('.catalog', {
			duration: 2000,
			origin: 'bottom',
            distance: '20px',
			viewFactor: 0.9,
            delay: 1000,
            mobile: false,
		});
		sr.reveal('#faqs-h1', {
			duration: 2000,
			origin: 'bottom',
            distance: '20px',
			viewFactor: 0.9,
            delay: 1000,
            mobile: false,
		});
        sr.reveal('#licenses-h1', {
			duration: 2000,
			origin: 'bottom',
            distance: '20px',
			viewFactor: 0.9,
            mobile: false,
		});
          sr.reveal('.social', {
			duration: 2000,
			origin: 'bottom',
            distance: '20px',
			viewFactor: 0.9,
            mobile: false,
		});
          sr.reveal('#contact-h1', {
			duration: 2000,
			origin: 'bottom',
            distance: '20px',
			viewFactor: 0.9,
            delay: 2000,
            mobile: false,
		});
         sr.reveal('.store', {
			duration: 2000,
			origin: 'bottom',
            distance: '50px',
			viewFactor: 0.5,
            mobile: false,
		});
         sr.reveal('.terms', {
			duration: 2000,
			origin: 'bottom',
            distance: '50px',
			viewFactor: 0.5,
            delay: 1000,
            mobile: false,
		});
         sr.reveal('.social-links', {
			duration: 2000,
			origin: 'bottom',
            distance: '50px',
			viewFactor: 0.5,
            delay: 500,
            mobile: false,
		});
         sr.reveal('.biglink', {
			duration: 2000,
			origin: 'bottom',
            distance: '100px',
			viewFactor: 0.5,
            delay: 1000,
            mobile: false,
		});
        
    })

