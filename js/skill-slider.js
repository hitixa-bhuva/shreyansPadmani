    document.addEventListener('DOMContentLoaded', function() {
        new Swiper('.maquee-slider-one', {
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 80,
            allowTouchMove: false,
            centeredSlides: true,
            speed: 5000,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            freeMode: true,
        });
    });