/*
  * Normalized hide address bar for iOS & Android
  * (c) Scott Jehl, scottjehl.com
  * MIT License
*/
(function( win ){
	var doc = win.document;
	
	// If there's a hash, or addEventListener is undefined, stop here
	if( !location.hash && win.addEventListener ){
		
		//scroll to 1
		window.scrollTo( 0, 1 );
		var scrollTop = 1,
			getScrollTop = function () {
				return win.pageYOffset || doc.compatMode === "CSS1Compat" && doc.documentElement.scrollTop || doc.body.scrollTop || 0;
			},
		
			//reset to 0 on bodyready, if needed
			bodycheck = setInterval(function () {
				if( doc.body ){
					clearInterval( bodycheck );
					scrollTop = getScrollTop();
					win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
				}	
			}, 15 );
		
		win.addEventListener( "load", function () {
			setTimeout(function () {
				//at load, if user hasn't scrolled more than 20 or so...
				if( getScrollTop() < 20 ){
					//reset to hide addr bar at onload
					win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
				}
			}, 0);
		} );
	}
})(this);

// mobile browser detection

/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);


$(document).ready(function () {

	// if on a mobile serve image instead of video on homepage hero
	
	if(jQuery.browser.mobile == true) {
		$('.hero-video-bg').html('<img src="/vegas.jpg" alt="">');
	}

	// Slideshow
	$(".slides").responsiveSlides();

	// Masonry
	var $container = $('.masonry');
	function buildMasonry(divisions) {
		$('.shell').addClass('fade');
		$container.isotope({
			itemSelector : '.shell',
			transformsEnabled : false,
//			animationEngine : 'css',
			resizable : false, // disable normal resizing
			layoutMode : 'masonry',
			// set columnWidth to a percentage of container width
			masonry: { columnWidth: $container.width() / divisions }
		});
	}
	
	
	if(Modernizr.mq('only screen and (min-width: 768px)')) {
		window.setTimeout(function () {buildMasonry(2)}, 2000);
	} else {
		window.setTimeout(function () {buildMasonry(1)}, 2000);
	}

	// update columnWidth on window resize
	$(window).smartresize(function () {
		if(Modernizr.mq('only screen and (min-width: 768px)')) {
			window.setTimeout(function () {buildMasonry(2)}, 2000);
		} else {
			window.setTimeout(function () {buildMasonry(1)}, 2000);
		}
	});


	// Rounded Images
	$('.image-wrap').each(function () {
		var imgClass = $(this).attr('class');
		$(this).wrap('<span class="image-wrap ' + imgClass + '" style="width: auto; height: auto;"/>');
		$(this).removeAttr('class');
	});

	// Tabs
	function activateTab($tab) {
		var $activeTab = $tab.closest('dl').find('a.active'),
			contentLocation = $tab.attr("href") + 'Tab';

		//Make Tab Active
		$activeTab.removeClass('active');
		$tab.addClass('active');

	// Show Tab Content
		$(contentLocation).closest('.tabs-content').children('li').hide();
		$(contentLocation).css('display', 'block');
	}

	$('dl.tabs').each(function () {
		// Get all tabs
		var tabs = $(this).children('dd').children('a');
		tabs.click(function (e) {
			activateTab($(this));
		});
	});

	if (window.location.hash) {
		activateTab($('a[href="' + window.location.hash + '"]'));
	}
	
	// Fresco (lightbox)
	$('.video-callout a').click(function() {
		var link = $(this).attr('href');
		var caption = $(this).attr('title');

		Fresco.show({
			url: link,
			caption: caption
		});
		return false;
	});
	
	// fitvids (responsive video)
	$('.media').fitVids({ customSelector: 'iframe[src^="http://vine.co"]'});
	
	
	// Live alert
	var a = $("audio")[0];
	if (!$.cookie("alertPopped")) {
	    $(".live-alert").animate({
	        bottom: 0
	    }, {
	        easing: "easeOutBack"
	    });
	    $(".live-alert .close i").removeClass().addClass("icon-minus");
	    $.cookie("alertPopped", !0, {
	        expires: 7,
	        path: "/"
	    })
	}
	
	$(".live-alert .close").click(function () {
	    if ($(".live-alert .close i").hasClass("icon-minus")) {
	        $(".live-alert").animate({
	            bottom: -166
	        }, {
	            duration: "fast",
	            easing: "easeOutBack"
	        });
	        $(".live-alert .close i").removeClass().addClass("icon-plus")
	    } else {
	        $(".live-alert").animate({
	            bottom: 0
	        }, {
	            duration: "fast",
	            easing: "easeOutBack"
	        });
	        $(".live-alert .close i").removeClass().addClass("icon-minus")
	    }
	});

});