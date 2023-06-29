var swiper = new Swiper('.explore-collections-cards', {
    direction: 'horizontal',
    spaceBetween: 15,
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