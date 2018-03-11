$(document).ready(function(){
    var nav = $(".nav-wrapper");

    $(".menu-button").click(function () {
        if (nav.hasClass("hide")) {
            console.log("van hide")
            nav.removeClass("hide")
            nav.addClass("show")
        } else if (nav.hasClass("show")) {
            console.log("van show")
            nav.removeClass("show")
            nav.addClass("hide")
        }
        else {
            console.log("semmi nincs")
            nav.addClass("show")
        }
})
});
