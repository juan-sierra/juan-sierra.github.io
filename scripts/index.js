$(document).ready(function () {
    // sidebar functionality
    $('#hamburger').click(function () {
        $('.sidebar').toggleClass('open');
    });
    if (!$('.sidebar').hasClass('open')) {
        $('.nav-link').click(function () {
            $('.sidebar').removeClass('open');
        })
    }

    // scroll on click

    // about = 646
    // projects = 1572
    // contact = 485
    $('a[href^="#"]').click(function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').animate({
            scrollTop: $target.offset().top
        }, 1000, 'swing', function () {
            window.location.hash = target;
        });
    });
});