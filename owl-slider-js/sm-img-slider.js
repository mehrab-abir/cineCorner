/*js for mcu small image slider */
$(document).ready(function () {
    var smImgSlider = $('.sm-img-slider');

    smImgSlider.owlCarousel({
        animateOut: 'fadeOut',
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 6
            },
            1000: {
                items: 8
            }
        }
    });
});