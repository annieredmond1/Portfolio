console.log("Sanity check - Javascript is working!");


// var winTop = 0;
// setInterval(function () {
// winTop = winTop + 10;
// //console.log(winTop);
// window.scrollTo(0, winTop);
// }, 10);

// var bodyRect = document.body.getBoundingClientRect(),
    // elemRect = element.getBoundingClientRect(),
    // offset   = elemRect.top - bodyRect.top;

document.body.addEventListener('click', function(event) {
 var elem = event.target;
	if(elem.classList.contains('js-scroll')) {
		var elemHref = elem.getAttribute('href');
		var elemDestination = document.querySelector(elemHref);
		var bodyRect = document.body.getBoundingClientRect();
		var elemRect = elemDestination.getBoundingClientRect();
		var topCoordinate = elemRect.top - bodyRect.top;
		var winTop = 0;
		var limit = topCoordinate;
		var timerId = setInterval(function() {
			if(winTop < limit) {
				window.scrollTo(0, winTop += 10);		
			} else {
				window.scrollTo(0, limit);
				clearInterval(timerId);
			}
		}, 10);
	}
});