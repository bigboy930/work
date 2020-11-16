// 모바일, pc 체크
function isMobile() {
    return /Android|webOS|iPhone|iPhoneX|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

let initialY = null;
function initTouch(e) {
  initialY = `${e.touches ? e.touches[0].clientY : e.clientY}`;
};
function swipeDirection(e) {
	if (initialY !== null) {
	  const currentY = `${e.touches ? e.touches[0].clientY : e.clientY}`;
	  let diffY = initialY - currentY;
		if(Math.abs(diffY)){			
			if(0 < diffY){
				if( !$('.main_slide').hasClass('on') ){
					$('.main_slide').addClass('on').addClass('fir')
					$('body').addClass('ck');
				} else {
					$('.main_slide').removeClass('fir');
				}
			} else {
				if( $('.main_slide').hasClass('fir') ){
					$('.main_slide').removeClass('on');
					$('body').removeClass('ck');
				}
			}
		}
	  initialY = null;
	}
}

$(document).ready(function(){
	let _video = document.querySelector('#testVideo');
	_video.play()
	$('.swiper-container').scroll(function(){
		var scrollTop = $(this).scrollTop();
		if( scrollTop == 0  ){
			$('.main_slide').removeClass('on');
			$('body').removeClass('ck');
		}
	});
	if(isMobile()){
		if( !$('.btn_menu').hasClass('close') ){
			if( !$('.main_slide').hasClass('on') ) {
				window.addEventListener("touchstart", initTouch);
				window.addEventListener("touchmove", swipeDirection);
			}
		}

	} else {
		var wW = $(window).width();
		var sW = wW - 600 ;
		var swiper1 = new Swiper('.main_slide > .swiper-container', {
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			freeMode: true,
			direction: 'horizontal',
			width: 540,
			spaceBetween: 40,
			slidesOffsetBefore: 60,
			slidesOffsetAfter: -sW,
			iOSEdgeSwipeDetection: true,
			iOSEdgeSwipeThreshold: 20,
			scrollbar: {
				el: '.swiper-scrollbar',
				dragSize: 300,
			},
			mousewheel: {
				sensitivity: 1.5,
			},
		});

		document.addEventListener('wheel', (e) => {
			if( !$('.btn_menu').hasClass('close') ){
				if( !$('.main_slide').hasClass('on') ) {
					if( event.wheelDelta < 0 ){
						$('.main_slide').addClass('on');
					}
				} else {
					if( event.wheelDelta > 0 ){
						if( $('.swiper-slide:first-child').hasClass('swiper-slide-active') ) {
							$('.main_slide').removeClass('on');
						} 
					}
				}
			}
		}, false);

	}

	$('.btn_menu').click(function(){
		$(this).toggleClass('close');
		$('.gnb_wrap').toggleClass('on');
		$('.main').toggleClass('on');
	});


	var swiper2 = new Swiper('.main_info.swiper-container', {
		observer: true,
		observeParents: true,
		observeSlideChildren: true,
		spaceBetween : 30,
		fadeEffect: { crossFade: true },
		autoplay: {
		delay: 5000,
		touchRatio: 0,
		nested: true,
		iOSEdgeSwipeDetection: true,
		},
		effect: "fade",
		loop: true,
	});

	// const throttleAndDebounce = () => {
	// 	// 쓰로틀링과 디바운스를 체크하기 위한 변수를 만들어줍니다.
	// 	let throttleCheck, debounceCheck;
		
	// 	return {
	// 	// throttle과 debounce 모두 실행할 콜백 함수와 실행할 주기를 인자로 받습니다.
	// 	throttle (callback, milliseconds) {
	// 		return function () {
	// 		if (!throttleCheck) {
	// 			// setTimeout을 이용하여 설정한 주기마다 콜백이 실행될 수 있도록 하였고,
	// 			// 실행이 끝난 후에는 다시 throttleCheck를 false로 만들어 주어, 설정한 주기마다 이벤트가 한 번씩만 호출되도록 하였습니다.
	// 			throttleCheck = setTimeout(() => {
	// 			callback(...arguments);
	// 			throttleCheck = false;
	// 			}, milliseconds);
	// 		}
	// 		}
	// 	},
		
	// 	debounce (callback, milliseconds) {
	// 		return function () {
	// 		// clearTimeout을 이용하여 이벤트 발생을 무시해주고,
	// 		// 마지막 호출 이후, 일정 시간이 지난 후에 단 한 번만, 이벤트가 호출되도록 하였습니다.
	// 		clearTimeout(debounceCheck);
	// 		debounceCheck = setTimeout(() => {
	// 			callback(...arguments);
	// 		}, milliseconds);
	// 		}
	// 	}
	// 	}
	// }

	// const _ = throttleAndDebounce();
	// const throttleFuncUp = _.debounce(() => {
	// 	swiper1.slidePrev();
	// }, 200);
	// const throttleFuncDw = _.debounce(() => {
	// 	swiper1.slideNext();
	// }, 200);


});



	$(function() {
		var winH = $(window).height();;
		$('.main_container, .main_slide').css('height', winH - 1);
		
		$(window).resize (resizeBoxM).resize();
		function resizeBoxM(){
			var winH = $(window).height();;
			$('.main_container, .main_slide').css('height', winH - 1 );
		}
	});



