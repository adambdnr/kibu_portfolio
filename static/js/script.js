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

/*function typeEffect(element, speed) {
	var text = $(element).text();
	$(element).html('');

	var i = 0;
	var timer = setInterval(function() {
					if (i < text.length) {
						$(element).append(text.charAt(i));
						i++;
					} else {
						clearInterval(timer);
					}
				}, speed);
}

$( document ).ready(function() {
  var speed = 75;
  var delay = $('.header-image > p:nth-child(1)').text().length * speed + speed;
  typeEffect($('.header-image > p:nth-child(1)'), speed);
  setTimeout(function(){
    typeEffect($('.header-image > p:nth-child(2)'), speed);
  }, delay);
});*/
