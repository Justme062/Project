
$(document).ready(()=>{
    $('form').on('submit', function(event) {
        event.preventDefault();
        var $form = $(this);
        var $inputs = $form.find('input, button, textarea');
        var serializedData = $form.serialize();

        $inputs.prop('disabled', true);

        $.ajax({
            url: "https://formcarry.com/s/---Rt5wv3wk",
            type: 'POST',
            data: serializedData,
            success: function(response) {
            },
            complete: function() {
                $inputs.prop('disabled', false);
            }
        });
    });



    const $navMenu = $("#mobileMenu");
    $("#navbar-toggle").click(function(event){
        $navMenu.toggle("slide", { direction: "down" }, 600)
    });
    const updateSliderCounter =(current, total)=>{
        current = current < 10 ? "0" + current : current;
        total = total < 10 ? "0" + total : total;
        $(".slick-review-counter").text(current+"/"+total)

    };

    const $slickReview = $("#slick-review")

    $slickReview.on("init", function (ev, slick){
        updateSliderCounter(slick.slickCurrentSlide() + 1, slick.slideCount);
    })


    $slickReview.slick({
        dots: false,
        prevArrow: '',
        nextArrow: '',
    })

    $slickReview.on('afterChange', function (ev, slick){
        updateSliderCounter(slick.slickCurrentSlide()+1, slick.slideCount);
    })

    $(".review-arrow-prev").click(function (){
        $("#slick-review").slick("slickPrev")
    })
    $(".review-arrow-next").click(function (){
        $("#slick-review").slick("slickNext")
    })
    $('.panel-btn').click(function (){
        const t = $(this).parents(".panel");
        t.toggleClass("panel_open")
        t.toggleClass("panel_close")
        t.children(".panel-body").slideToggle(400)
    })
    $('#slick-customers-first').slick({
        infinite: true,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: ``,
        prevArrow: ``,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('#slick-customers-second').slick({
        infinite: true,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 3250,
        nextArrow: ``,
        prevArrow: ``,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });



})

