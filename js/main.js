$(document).ready(function() {

	const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");

	const swiper = new Swiper('.swiper', {	
		lazy: true,
		keyboard: {
		enabled: true,
		},
		loop: true,

		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		  },
	
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	
		navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
		},
	
		scrollbar: {
		el: '.swiper-scrollbar',
		},

		on: {
			autoplayTimeLeft(s, time, progress) {
			  progressCircle.style.setProperty("--progress", 1 - progress);
			  progressContent.textContent = `${Math.ceil(time / 1000)}s`;
			}
		},
	});


	$('.fullscreen').on('click', fullscreen);

}); 

function fullscreen()
{
	var canvas = document.getElementById('swiper-full');
	fullScreen(canvas);
}

function fullScreen(element) {
	if(element.requestFullscreen) {
	  element.requestFullscreen();
	} else if(element.webkitrequestFullscreen) {
	  element.webkitRequestFullscreen();
	} else if(element.mozRequestFullscreen) {
	  element.mozRequestFullScreen();
	}
  }