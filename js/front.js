// modal
$("#search-button").on('click', function() {
    $(".search-modal").addClass("search-modal--open");
});


$("#close-modal").on('click', function() {
    $(".search-modal").removeClass("search-modal--open")
})


// side-menu
$("#burger-button").on('click', function() {
    $(".side-menu").addClass("side-menu--open");
})
$("#close-side-menu").on('click', function() {
    $(".side-menu").removeClass('side-menu--open')
});
//nav-bar-menu
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        $("#nav-bar").addClass('nav-bar-fixed');
        $("#medium").addClass('medium-fix')
    } else {
        $("#nav-bar").removeClass('nav-bar-fixed');
        $("#medium").removeClass('medium-fix');
    }
});



$('.main-slider').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 0,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


$('.five-slider').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})
$('.second-slider').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})
$('.three-slider').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})
$('.four-slider').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})
$('.people-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
})
$('.partner-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})