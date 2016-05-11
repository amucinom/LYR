$(document).ready(function() {
    // variables
    var $offset = 220;
    var $duration = 500;

    // Back-to-top button
    $(window).scroll(function(event) {
        event.preventDefault();
        if ($(this).scrollTop() > $offset) {
            $('.back-to-top').fadeIn($duration);
        } else {
            $('.back-to-top').fadeOut($duration);
        }
    });

    $('.back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, $duration);
        return false;
    });


    $("#link-about").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    });

    $("#link-portfolio").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top
        }, 1000);
    });

    $("#link-contact").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });

    $("#link-warriors").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#warriors").offset().top
        }, 1000);
    });


});
