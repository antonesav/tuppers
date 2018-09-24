(function () {
    $('.big-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
    $('.index__slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('.icon__index_left'),
        nextArrow: $('.icon__index_right'),
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    // $('.icon__index_right').on('click', function () {
    //     index_slider.slick('slickNext');
    // });
    // $('.icon__index_left').on('click', function () {
    //     index_slider.slick('slickPrev');
    // });
    var goods_slider = $('.goods__slider');
    var goods_nav = $('.goods__slider-nav');

    goods_slider.slick({
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        // initialSlide: 1,
        prevArrow: $('.icon__goods_slider_left'),
        nextArrow: $('.icon__goods_slider_right'),
        asNavFor: goods_nav
    });
    goods_nav.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: goods_slider,
        dots: false,
        arrows: false,
        focusOnSelect: true,
        centerPadding: '50px',
        infinite: false,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    centerMode: true,
                    focusOnSelect: true,
                    slidesToShow: 3,
                    centerPadding: '50px',
                    vertical: true
                }
            }
        ]

    });

    $('.goods__views').slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.icon__goods_left'),
        nextArrow: $('.icon__goods_right'),
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });

})();