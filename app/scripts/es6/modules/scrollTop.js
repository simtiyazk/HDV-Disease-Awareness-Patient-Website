import $ from 'jquery';

export default () => {
    if ($('#patient-page, #hcp-page').length > 0) {
        const navHeight = $('.livtencity-m-header').outerHeight();
        const section = $('.patient-m-need-assistence, .hcp-m-need-assistence');
        const cardTop = parseFloat($('.patient-m-need,-assistence__card, .hcp-m-need-assistence__card').css('top'));
        const button = $('.patient-c-backtotop, .hcp-c-backtotop');

        button.on('click', function() {
            let goto = section.offset().top + cardTop - navHeight;

            $('html, body').animate({
                scrollTop: goto
            }, 500);
        });

        $(window).on('scroll', function() {
            if($(button).offset().top < section.offset().top + section.height()) {
                $(button).css('opacity', 0);
            } else {
                $(button).css('opacity', 1);
            }
        });
    }
};