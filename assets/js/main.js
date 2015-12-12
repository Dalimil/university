/*
 * Dalimil Hajek
 */

$(document).ready(function () {

    $('.scrollup').click(function () {
    	/* scroll back to projects */
        $("html, body").animate({
            scrollTop: $("#projects").offset().top
        }, 1000, 'easeInOutExpo');
        return false;
    });
    $('.scrolldown').click(function() {
    	/* first disable all */
    	z = document.getElementsByClassName("project-details");
    	for(var i =0;i < z.length; i++){ 
    		z[i].style.display = "none"; 
    	}

    	$($(this).attr("href")).css("display", ""); /* enable only this */

    	/* get href of itself and animate scroll */
    	$("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 1000, 'easeInOutExpo');
    	return false;
    });


    $("#typed-animation").typed({
        /*strings: ["Hello, I'm Dalimil", "It <em>types</em> out sentences.", "Try it out!"],*/
        stringsElement: $('#typed-strings'),
        typeSpeed: 20,
        startDelay: 500,
        backDelay: 500,
        loop: false,
        contentType: 'html', // or text
        // Callback can be specified - see https://github.com/mattboldt/typed.js
    });

});

/*
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var settings = {

		// Parallax background effect?
			parallax: true,

		// Parallax factor (lower = more intense, higher = less intense).
			parallaxFactor: 70

	};

	skel.breakpoints({
		xlarge: '(max-width: 1800px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	$(function() {

		var $window = $(window),
			$body = $('body'),
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Touch?
			if (skel.vars.mobile) {

				// Turn on touch mode.
					$body.addClass('is-touch');

				// Height fix (mostly for iOS).
					window.setTimeout(function() {
						$window.scrollTop($window.scrollTop() + 1);
					}, 0);

			}

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Header.

			// Parallax background.

				// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
					if (skel.vars.browser == 'ie'
					||	skel.vars.mobile)
						settings.parallax = false;

				if (settings.parallax) {

					skel.on('change', function() {

						if (skel.breakpoint('medium').active) {

							$window.off('scroll.strata_parallax');
							$header.css('background-position', 'top left, center center');

						}
						else {

							$header.css('background-position', 'left 0px');

							$window.on('scroll.strata_parallax', function() {
								$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
							});

						}

					});

				}

		// Poptrox - popup projects 

				$window.on('load', function() {

					$('#projects').poptrox({
						overlayOpacity: 0.85,
						selector: '.popup', /*'.work-item a.image',*/
						usePopupDefaultStyling: false,
						usePopupEasyClose: false,
						usePopupNav: true,
						windowMargin: (skel.breakpoint('small').active ? 0 : 50)
					});

				});

	});

})(jQuery);