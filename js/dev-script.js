// Marquee slider Js
		if ($(".maquee-slider-one").length > 0) {
			var swiper = new Swiper(".maquee-slider-one", {
				slidesPerView: "auto",
				spaceBetween: 80,
				loop: true,
				speed: 5000,
				breakpoints: {
					320: {
						spaceBetween: 40,
					},
					768: {
						spaceBetween: 40,
					},
					992: {
						spaceBetween: 40,
					},
					1024: {
						spaceBetween: 80,
					},
				},
				allowTouchMove: false,
				autoplay: {
					delay: 1,
					disableOnInteraction: true,
				},
			});
		}