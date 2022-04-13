$(document).ready(function () {
    // swiper
    var swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    // slick
    // $('.single-item').slick({
    //     autoplay: true,
    //     autoplaySpeed: 2500,
    // });
})