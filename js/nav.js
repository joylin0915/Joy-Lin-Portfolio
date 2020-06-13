$(function () {
    $('.hamburger').click(function () {
        $('.hamburger').toggleClass('active');
        $('.nav-drowpDown-block').slideToggle().addClass('show');
    })
})