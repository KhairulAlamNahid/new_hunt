$(function () {
    // fixed menu js
    $(window).scroll(function () {
        let scrolling = $(this).scrollTop();
        if (scrolling > 0) {
            $('.navbar').addClass('fixed')
        } else {
            $('.navbar').removeClass('fixed')
        }
    })

    // banner slider
    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        dots: false,
        arrows: true,
        speed: 2000,
        prevArrow: '<i class="fa fa-chevron-left left"></i>',
        nextArrow: '<i class="fa fa-chevron-right right"></i>',
    });

    // portfolio venobox js
    $('.venobox').venobox();

    // service slider js
    $('.service_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: true,
        speed: 1000,
        vertical: true,
        centerMode: true,
        centerPadding: 0,
        prevArrow: '<i class="fa fa-chevron-up up"></i>',
        nextArrow: '<i class="fa fa-chevron-down down"></i>',
    });

    // feed img slider js
    $('.feed_img_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: true,
        speed: 1000,
        vertical: true,
        centerMode: true,
        centerPadding: 0,
        prevArrow: '<i class="fa fa-chevron-up up"></i>',
        nextArrow: '<i class="fa fa-chevron-down down"></i>',
        asNavFor: '.feed_slider',
    });

    // feed img slider js
    $('.feed_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        speed: 1000,
        fade: true,
        asNavFor: '.feed_img_slider',
    });
    // sponsor slider js
    $('.sponsor-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        autoplay: true,
        speed: 1000,
        centerMode: true,
        centerPadding: 0,
    });

    // counter up js
    $('.counter').counterUp({
        delay: 50,
        time: 2000
    });

    // back to top js
    // Check distance to top and display back-to-top.
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('.back-to-top').addClass('show-back-to-top');
        } else {
            $('.back-to-top').removeClass('show-back-to-top');
        }
    });

    // Click event to scroll to top.
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500);
        return false;
    });



});