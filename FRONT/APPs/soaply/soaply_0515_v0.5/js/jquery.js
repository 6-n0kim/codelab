// $(document).ready(function () {

// });

$(function () {
    // $(".menu-icon").click(function () {
    //     alert("click");
    // });

    // $('.footer-nav li').click(function (e) {
    //     console.log('work')
    //     e.preventDefault();
    //     alert($(this).attr('class'));
    // });

    $('.menu-icon').click(function () {
        $(this).toggleClass('active');

        if ($(this).hasClass("active")) {
            $('.menu-icon i').attr("class", "ri-close-large-line");
            $('.mobile-menus').slideDown("fast");
        } else {
            $('.menu-icon i').attr("class", "ri-menu-line");
            $('.mobile-menus').slideUp("fast");
        }
    })
});

