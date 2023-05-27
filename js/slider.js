$('.slide-nav').on('click', function (e) {
    e.preventDefault();
    // get current slide
    let current = $('.flex-active').data('slide'),
        // get button data-slide
        next = $(this).data('slide');

    $('.slide-nav').removeClass('active');
    $(this).addClass('active');

    if (current === next) {
        return false;
    } else {
        $('.slider-wrapper').find('.slider-container[data-slide=' + next + ']').addClass('flex-before');
        $('.flex-active').addClass('animate--end');
        setTimeout(function () {
            $('.animate--end').addClass('animate--start').removeClass('animate--end flex-active');
            $('.flex-before').removeClass('animate--start flex-before').addClass('flex-active');
        }, 50);
    }
});