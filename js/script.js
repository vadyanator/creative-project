$(function () {
    $('.recent-works-sliders').slick({
        dots: true,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    arrows: false,
                }
            }
        ]
    })

    $('.team-slider').slick({
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 1050,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 820,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    })

    $('.header-burger').on('click', function () {
        $('.header-list').toggleClass('list-active'),
        $('body').toggleClass('body-overflow')
    })

    $('.header-item-link').on('click', function() {
        $('body').removeClass('body-overflow'),
        $('.header-list').removeClass('list-active')
    })
})