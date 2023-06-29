var swiper = new Swiper('.top-nfts-now__swiper', {
    direction: 'horizontal',
    spaceBetween: 25,
    grabCursor: true,
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
        },
        980: {
            slidesPerView: 3,
        },
    }
});