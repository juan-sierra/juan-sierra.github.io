$(document).ready(function () {
    $('#hamburger').click(function () {
        $('.sidebar').toggleClass('open');
    });
    if (!$('.sidebar').hasClass('open')) {
        $('.nav-link').click(function () {
            $('.sidebar').removeClass('open');
        })
    }
});