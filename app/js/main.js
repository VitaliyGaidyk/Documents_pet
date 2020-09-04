$(function () {
    $('.section__slider-program').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        focusOnSelect: true
    });
    $('.section__example-photo').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="../images/svg/arrow-slider-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="../images/svg/arrow-slider-right.svg" alt="">'

    });
    $('.icon').click(function () {
        $(this).toggleClass('active');
    })
});