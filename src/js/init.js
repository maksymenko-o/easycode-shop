$(function() {
    
    (function () {
        let nav = $('.main-menu__nav');

        $('.menu-btn').click(function() {
            if(nav.hasClass('active')) {
                nav.removeClass('active');
            }
            else {
                nav.addClass('active');
            }
        });
    }());

});