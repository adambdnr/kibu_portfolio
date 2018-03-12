$(document).ready(function(){
    var nav = $(".nav-wrapper");

    $(".menu-button").click(function () {
        if (nav.hasClass("hide")) {
            nav.removeClass("hide")
            nav.addClass("show")
        } else if (nav.hasClass("show")) {
            nav.removeClass("show")
            nav.addClass("hide")
        }
})
});

$(window).scroll(function(){
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
        $('#upButton').css('display', 'block');
        $('#upButton').css('opacity', 1);
    } else {
        $('#upButton').css('display', 'none');
        $('#upButton').css('opacity', 0);
    }
}
);

function goToTop() {
    $(window).scrollTop(0);
}
