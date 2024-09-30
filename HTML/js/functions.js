/*
	Project Name : History
	
	-- Google Map
	
	## Document Scroll		

	## Document Ready
		- Scrolling Navigation
		- Responsive Caret
		- Search
		- Back To Top
		- Rev Slider
		- Portfolio Section
		- Client Carousel
		- Blog Carousel
		- Lightbox for Highlights Video
		- Testimonial Slider
		- Contact Map
		- Quick Contact Form

	## Window Load
		- Site Loader
*/

(function ($) {

	"use strict"

	/* - Testimonial Slider */
	function chkActiveSlider() {
		var slideNum = 0;
		if ($(".mis-slide.mis-current").length) {
			slideNum = $(".mis-slide.mis-current").attr("id").split("-")[1];
			$("[id*='mis_slide_content-']").css("display", "none");
			$("[id='mis_slide_content-" + slideNum + "']").css("display", "block");
			$("[id='mis_slide_content-" + slideNum + "']").addClass("animated fadeIn");
		}
	}

	/* - Google Map */
	function initialize(obj) {
		var lat = $('#' + obj).attr("data-lat");
		var lng = $('#' + obj).attr("data-lng");
		var contentString = $('#' + obj).attr("data-string");
		var myLatlng = new google.maps.LatLng(lat, lng);
		var map, marker, infowindow;
		var image = "images/marker.png";
		var zoomLevel = parseInt($('#' + obj).attr("data-zoom"), 10);
		var styles = [{ "featureType": "landscape", "stylers": [{ "saturation": -100 }, { "lightness": 65 }, { "visibility": "on" }] }, { "featureType": "poi", "stylers": [{ "saturation": -100 }, { "lightness": 51 }, { "visibility": "simplified" }] }, { "featureType": "road.highway", "stylers": [{ "saturation": -100 }, { "visibility": "simplified" }] }, { "featureType": "road.arterial", "stylers": [{ "saturation": -100 }, { "lightness": 30 }, { "visibility": "on" }] }, { "featureType": "road.local", "stylers": [{ "saturation": -100 }, { "lightness": 40 }, { "visibility": "on" }] }, { "featureType": "transit", "stylers": [{ "saturation": -100 }, { "visibility": "simplified" }] }, { "featureType": "administrative.province", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "labels", "stylers": [{ "visibility": "on" }, { "lightness": -25 }, { "saturation": -100 }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "hue": "#ffff00" }, { "lightness": -25 }, { "saturation": -97 }] }]
		var styledMap = new google.maps.StyledMapType(styles, { name: "Styled Map" });

		var mapOptions = {
			zoom: zoomLevel,
			disableDefaultUI: true,
			center: myLatlng,
			scrollwheel: false,
			mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, "map_style"]
			}
		}

		map = new google.maps.Map(document.getElementById(obj), mapOptions);

		map.mapTypes.set("map_style", styledMap);
		map.setMapTypeId("map_style");

		infowindow = new google.maps.InfoWindow({
			content: contentString
		});

		marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			icon: image
		});

		google.maps.event.addListener(marker, "click", function () {
			infowindow.open(map, marker);
		});
	}


	/* ## Document Scroll - Window Scroll */
	$(document).on("scroll", function () {
		var scroll = $(window).scrollTop();
		var height = $(window).height();

		/*** set sticky menu ***/
		if (scroll >= height) {
			$(".header-section").addClass("navbar-fixed-top animated fadeInDown").delay(2000).fadeIn();
		}
		else if (scroll <= height) {
			$(".header-section").removeClass("navbar-fixed-top animated fadeInDown");
		}
		else {
			$(".header-section").removeClass("navbar-fixed-top animated fadeInDown");
		} // set sticky menu - end		

		if ($(this).scrollTop() >= 50) {
			// If page is scrolled more than 50px
			$("#back-to-top").fadeIn(200);    /* Fade in the arrow */
		}
		else {
			$("#back-to-top").fadeOut(200);   /* Else fade out the arrow */
		}
	});

	/* ## Document Ready - Handler for ready() called */
	$(document).on("ready", function () {

		/* -- Scrolling Navigation */
		var scroll = $(window).scrollTop();
		var width = $(window).width();
		var height = $(window).height();

		/* ** set sticky menu ** */
		if (scroll >= height - 500) {
			$(".header-section").addClass("navbar-fixed-top").delay(2000).fadeIn();
		}
		else if (scroll <= height) {
			$(".header-section").removeClass("navbar-fixed-top");
		}
		else {
			$(".header-section").removeClass("navbar-fixed-top");
		} /* set sticky menu - end */


		$('.navbar-nav li a[href*="#"]:not([href="#"]), .site-logo a[href*="#"]:not([href="#"])').on("click", function (e) {

			var $anchor = $(this);

			$("html, body").stop().animate({ scrollTop: $($anchor.attr("href")).offset().top - 49 }, 1500, "easeInOutExpo");

			e.preventDefault();
		});

		/* - Responsive Caret */
		$(".ddl-switch").on("click", function () {
			var li = $(this).parent();
			if (li.hasClass("ddl-active") || li.find(".ddl-active").length !== 0 || li.find(".dropdown-menu").is(":visible")) {
				li.removeClass("ddl-active");
				li.children().find(".ddl-active").removeClass("ddl-active");
				li.children(".dropdown-menu").slideUp();
			}
			else {
				li.addClass("ddl-active");
				li.children(".dropdown-menu").slideDown();
			}
		});

		/* - Search */
		if ($(".search-box").length) {
			$("#search").on("click", function () {
				$(".search-box").addClass("active")
			});
			$(".search-box span").on("click", function () {
				$(".search-box").removeClass("active")
			});
		}

		/* - Back To Top */
		$('#back-to-top').on("click", function () {
			/* When arrow is clicked */
			$('body,html').animate(
				{
					scrollTop: 0 /* Scroll to top of body */
				}, 800);
		});

		/* - Rev Slider */
		if ($(".slider-section").length) {
			$("#home-slider1").revolution({
				sliderType: "standard",
				sliderLayout: "auto",
				delay: 6000,
				navigation: {
					arrows: {
						enable: true,
						style: "uranus"
					}
				},
				gridwidth: 1900,
				gridheight: 980,

			});
			$("#home-slider2").revolution({
				sliderType: "standard",
				sliderLayout: "auto",
				delay: 6000,
				navigation: {
					arrows: {
						enable: true,
						style: "uranus"
					}
				},
				gridwidth: 1900,
				gridheight: 980,

			});
		}

		/* - Portfolio Section */
		if ($(".portfolio-section").length) {
			var url;
			$(".portfolio-section .portfolio-box").magnificPopup({
				delegate: "a",
				type: "image",
				tLoading: "Loading image #%curr%...",
				mainClass: "mfp-img-mobile",
				gallery: {
					enabled: true,
					navigateByImgClick: false,
					preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
				},
				image: {
					tError: "<a href=" % url % ">The image #%curr%</a> could not be loaded.",
				}
			});
		}

		/* - Client Carousel */
		if ($(".client-carousel").length) {
			$(".client-carousel").owlCarousel({
				autoplay: true,
				loop: true,
				dots: false,
				nav: true,
				responsive: {
					0: {
						items: 1
					},
					480: {
						items: 2
					},
					560: {
						items: 3
					},
					768: {
						items: 4
					},
					1200: {
						items: 5
					}
				},
				margin: 0,
				stagePadding: 0,
				smartSpeed: 450
			});
		}

		/* - Blog Carousel */
		if ($(".blog-carousel").length) {
			$(".blog-carousel").owlCarousel({
				autoplay: true,
				loop: true,
				dots: false,
				nav: false,
				items: 1,
				margin: 0,
				stagePadding: 0,
				smartSpeed: 450
			});
			$(".wc-controls .left").on("click", function () {
				$(".blog-carousel").trigger('next.owl.carousel');
			})
			$(".wc-controls .right").on("click", function () {
				$(".blog-carousel").trigger('prev.owl.carousel');
			})
		}

		/* - Lightbox for Highlights Video */
		$('.video-section a').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});

		if ($(".testimonial-section").length) {
			var slider = $('.mis-stage').miSlider({
				speed: 1000,
				stageHeight: false,
				slidesLoaded: true,
				slidesOnStage: false,
				slidePosition: 'center',
				slideStart: 'mid',
				slideWidth: 140,
				slideScaling: 100,
				offsetV: 0,
				centerV: true,
				navButtonsOpacity: 1
			});
		}

		/* - Contact Map */
		if ($("#map-canvas-contact").length == 1) {
			initialize("map-canvas-contact");
		}

		/* - Quick Contact Form */
		$("#btn_submit").on("click", function (event) {
			event.preventDefault();
			var mydata = $("form").serialize();
			$.ajax({
				type: "POST",
				dataType: "json",
				url: "contact.php",
				data: mydata,
				success: function (data) {
					if (data["type"] == "error") {
						$("#alert-msg").html(data["msg"]);
						$("#alert-msg").removeClass("alert-msg-success");
						$("#alert-msg").addClass("alert-msg-failure");
						$("#alert-msg").show();
					} else {
						$("#alert-msg").html(data["msg"]);
						$("#alert-msg").addClass("alert-msg-success");
						$("#alert-msg").removeClass("alert-msg-failure");
						$("#input_fname").val("");
						$("#input_lname").val("");
						$("#input_email").val("");
						$("#input_subject").val("");
						$("#textarea_message").val("");
						$("#alert-msg").show();
					}
				},
				error: function (xhr, textStatus, errorThrown) {
					return false;
				}
			});
			return false;
		});/* Quick Contact Form /- */

	});	/* - Document Ready /- */

	/* - Window Load - Handler for load() called */
	$(window).on("load", function () {
		/* - Site Loader */
		if (!$("html").is(".ie6, .ie7, .ie8")) {
			$("#site-loader").delay(1000).fadeOut("slow");
		}
		else {
			$("#site-loader").css("display", "none");
		}

		/* - Portfolio Section */
		var $container = $(".portfolio-section .portfolio-list");
		$container.isotope({
			layoutMode: 'fitRows',
			itemSelector: ".portfolio-box",
			gutter: 0,
			transitionDuration: "0.5s"
		});

		$("#filters a").on("click", function () {
			$('#filters a').removeClass("active");
			$(this).addClass("active");
			var selector = $(this).attr("data-filter");
			$container.isotope({ filter: selector });
			return false;
		});

		/* - Testimonial Slider */
		if ($(".testimonial-slider").length) {
			setInterval(chkActiveSlider, 1000);
		}


	});

})(jQuery);

