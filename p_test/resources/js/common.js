"use strict";
function isMobile() {
    return /Android|webOS|iPhone|iPhoneX|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

$(document).ready(function(){
	/* 윈도우팝업 닫기 */
	function close(){
		self.opener = self;
		window.close();
	}

	var scrollTop,saveTop;
	$('.btn_menu').click(function(e){
		scrollTop = $(document).scrollTop();
		if( !$(this).hasClass('close') ){
			saveTop = scrollTop;
			$(this).addClass('close');
			$('.gnb_wrap').addClass('on');
			$('body').addClass('scrolltop').scrollTop(scrollTop);
		} else {
			$(this).removeClass('close');
			$('.gnb_wrap').removeClass('on');
			$('body').removeClass('scrolltop')
			$(document).scrollTop(saveTop);
		}

	});


	if($('.slide_company_look_img').length > 0){
		var mySwiper = new Swiper('.slide_company_look_img', {
			spaceBetween: 30,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			
		});
	}

	if($('.slide_company_vod_thm').length > 0){
		var slideCoVideoPg = new Swiper('.slide_company_vod_pg', {
			spaceBetween: 10,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			breakpoints: {
				1120: {
					slidesPerView: 3,
				},
				640: {
					slidesPerView: 2,
				},
			},
		});
	
		var slideCoVideoThm = new Swiper('.slide_company_vod_thm', {
			spaceBetween: 30,
			thumbs: {
				swiper: slideCoVideoPg
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
			},
			oobserver: true,
			observeParents: true,
			observeSlideChildren: true,

		});
	}
});




// top_menu 스크롤 인터랙션
$(window).on('scroll', function() {
	if ($(window).scrollTop() > 50) {
		$('.top_menu').addClass('fixed');
	} else {
		if( $('.btn_menu').hasClass('close') ){
		} else {
			$('.top_menu').removeClass('fixed');
		}
	}
});

// Tab 함수
function btnTab(tabBtn, tabConts, tabCont) {
	for (var i = 0; i < tabBtn.length; i++) {
		tabBtn[i].addEventListener("click", function() {
			if (this.classList.contains("on")) {
				return; // 활성화된 버튼 클릭시 동작 안함
			} else {
				var targetBtn = this.getAttribute('data-tab-btn');
				// 클릭한 버튼의 인덱스 데이터 넘버 체크
				var targetCont = tabConts.querySelector('[data-tab-cont="' + targetBtn + '"]'); // 활성화 되어야 하는 탭 컨텐츠

				for (var j = 0; j < tabBtn.length; j++) {
					if (tabBtn[j].classList.contains("on")) {
						tabBtn[j].classList.remove("on");
					}
				} // 활성화 되어있는 탭버튼 비활성화

				for (var j = 0; j < tabCont.length; j++) {
					if (tabCont[j].classList.contains("on")) {
						tabCont[j].classList.remove("on");
					}
				} // 활성화 되어있는 탭 컨텐츠 비활성화

				this.classList.add("on"); // 클릭 탭 버튼 활성화
				targetCont.classList.add("on"); // 클릭 탭 컨텐츠 활성화
			}
		});
	}
}

// More 버튼 함수
function btnMore(list, numToShow, button, numInList) {
	list.hide();
	if (numInList > numToShow) {
		button.show();
	}else{
		button.hide();
	}
	list.slice(0, numToShow).show();

	button.click(function() {
		var showing = list.filter(':visible').length;
		list.slice(showing - 1, showing + numToShow).show();
		//list.slice(showing - 1, showing + numToShow).fadeIn();
		var nowShowing = list.filter(':visible').length;
		if (nowShowing >= numInList) {
			button.hide();
		}
	});
}


// Grayscale Images fix for IE10-IE11
var GrayScaleFix = (function() {
	var needToFix = /(MSIE 10)|(Trident.*rv:11\.0)|( Edge\/[\d\.]+$)/.test(navigator.userAgent);

	function replaceImage(image) {
		var tmpImage = new Image();
		tmpImage.onload = function() {
			var imgWrapper = document.createElement('span'),
				svgTemplate = 
				'<svg xmlns="http://www.w3.org/2000/svg" id="svgroot" viewBox="0 0 '+tmpImage.width+' '+tmpImage.height+'" width="100%" height="100%">' +
					'<defs>' +
					'<filter id="gray">' +
						'<feColorMatrix type="matrix" values="0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0" />' +
					'</filter>' +
					'</defs>' +
					'<image filter="url(&quot;#gray&quot;)" x="0" y="0" width="'+tmpImage.width+'" height="'+tmpImage.height+'" preserveAspectRatio="none" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="'+tmpImage.src+'" />' +
				'</svg>';
			
			imgWrapper.innerHTML = svgTemplate;
			imgWrapper.className = 'grayscale-fix';
			image.parentNode.insertBefore(imgWrapper, image);

			image.style.cssText += 'visibility:hidden;display:block';
			imgWrapper.querySelector('svg').style.position = 'absolute';
			imgWrapper.style.cssText = 'display:inline-block;position:relative;';
			imgWrapper.appendChild(image);
		};
		tmpImage.src = image.src;
	}

	function replaceAll() {
		var images = document.querySelectorAll('img.grayscale');
		for(var i = 0; i < images.length; i++) {
			replaceImage(images[i]);
		}
	}

	if(needToFix) {
		document.addEventListener('DOMContentLoaded', replaceAll);
	}

	return {
		replace: replaceImage,
		refresh: replaceAll
	};
}());


/* page별 스크립트 */
$(document).ready(function () {

	
	// 현재 페이지 이름 가져오기
	var tempPageName = window.location.href;
	var strPageName = tempPageName.split("/");
	var pageName = strPageName[strPageName.length-1].split("?")[0];



	//////////////////////////////////////////////////////////////////////
	////// About /////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////

	if(pageName==='about_en.html'|| pageName==='about_en.html#top#company' || pageName==='about_en.html#top#people' || pageName==='about_en.html#top#method' || pageName ==='about.html' || pageName==='about.html#top#company' || pageName==='about.html#top#people' || pageName==='about.html#top#method'){
		// About = 탭 영역
		var tabBtnsAbout = document.getElementById("tabBtns_about"); // 탭 버튼 영역
		var tabBtnAbout = tabBtnsAbout.querySelectorAll("[data-tab-btn]"); // 탭 버튼
		var tabContsAbout = document.getElementById("tabConts_about"); // 탭 콘텐츠 영역
		var tabContAbout = tabContsAbout.querySelectorAll("[data-tab-cont]"); // 탭 버튼
		btnTab(tabBtnAbout, tabContsAbout, tabContAbout);

		// About = 더보기 버튼
		/*
		var listPerson = $(".people_person ul li");
		var numToShowPerson = 4;
		var buttonPerson = $("#nextA");
		var numInListPerson = listPerson.length;
		btnMore(listPerson, numToShowPerson, buttonPerson, numInListPerson);

		$(function(){
			if(window.location.href.indexOf("people") > -1){
				$('.tab_btns li.people').addClass('on').siblings().removeClass('on');
				$('.tab_cont#people').addClass('on').siblings().removeClass('on');
			}
			if(window.location.href.indexOf("method") > -1){
				$('.tab_btns li.method').addClass('on').siblings().removeClass('on');
				$('.tab_cont#method').addClass('on').siblings().removeClass('on');
			}
		});
		*/

		// About - company = 'What we provide' 스크롤 인터랙션
		$(window).scroll(function(){
			var winTop = $(window).scrollTop();
			var IBRTop = $('.company_are .are_graph').offset().top-600;
			var cardTop = $('.pattern_wrap .company_provide').offset().top-700;
			var processTop = $('.method_process .bg').offset().top-400;

			if (winTop >= cardTop){
				$('.pattern_wrap .company_provide').addClass('up');
			}
			if(winTop >= IBRTop){
				$('.company_are .are_graph').addClass('up');
			}
			if(winTop >= processTop){
				$('.method .process .content').addClass('up');
			}
		});
		var winLocal = window.location.href
		var parts = winLocal.split('#');
		var name = parts[2]
		if( parts[2] === name ){
			$('.'+name).trigger('click');
		}
		
	}



	////////////////////////////////////////////////////////////////////////
	//////// Work //////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////

	if( pageName==='portfolio_en.html' || pageName==='portfolio.html'){
		// Work = 탭 영역
		var tabBtnsWork = document.getElementById("tabBtns_work"); // 탭 버튼 영역
		var tabBtnWork = tabBtnsWork.querySelectorAll("[data-tab-btn]"); // 탭 버튼
		var tabContsWork = document.getElementById("tabConts_work"); // 탭 콘텐츠 영역
		var tabContWork = tabContsWork.querySelectorAll("[data-tab-cont]"); // 탭 버튼
		btnTab(tabBtnWork, tabContsWork, tabContWork);
		$("#tabBtns_work li").click(fadeInUp);

		// Work - all = 더보기 버튼
		var listWork01 = $(".work_list_wrap.list_01 li");
		var numToShowWork01 = 6;
		var buttonWork01 = $("#more01");
		var numInListWork01 = listWork01.length;
		btnMore(listWork01, numToShowWork01, buttonWork01, numInListWork01);

		// Work - UX Design = 더보기 버튼
		var listWork02 = $(".work_list_wrap.list_02 li");
		var numToShowWork02 = 6;
		var buttonWork02 = $("#more02");
		var numInListWork02 = listWork02.length;
		btnMore(listWork02, numToShowWork02, buttonWork02, numInListWork02);

		// Work - Consulting = 더보기 버튼
		var listWork03 = $(".work_list_wrap.list_03 li");
		var numToShowWork03 = 6;
		var buttonWork03 = $("#more03");
		var numInListWork03 = listWork03.length;
		btnMore(listWork03, numToShowWork03, buttonWork03, numInListWork03);

		// Work - Concept = 더보기 버튼
		var listWork04 = $(".work_list_wrap.list_04 li");
		var numToShowWork04 = 6;
		var buttonWork04 = $("#more04");
		var numInListWork04 = listWork04.length;
		btnMore(listWork04, numToShowWork04, buttonWork04, numInListWork04);

		// Work - Mobile = 더보기 버튼
		var listWork05 = $(".work_list_wrap.list_05 li");
		var numToShowWork05 = 6;
		var buttonWork05 = $("#more05");
		var numInListWork05 = listWork05.length;
		btnMore(listWork05, numToShowWork05, buttonWork05, numInListWork05);

		// Work - Our client = bg 패럴렉스 인터랙션
		$('.pattern_bg').simpleParallax();
		
		// Work - Our client = 스크롤 인터랙션
		// $(window).scroll(function(){
		// 	var winTop = $(window).scrollTop();
		// 	var clientTop = $('.client_wrap').offset().top-800;
		// 	if (winTop>=clientTop){
		// 		$('.client_wrap ul').addClass('up');
		// 	}
		// });
	}



	////////////////////////////////////////////////////////////////////////
	//////// Story /////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////

	if(pageName === 'story_en.html' || pageName === 'story.html') {
		// Story = Tab 영역
		var tabBtnsStory = document.getElementById("tabBtns_story"); // 탭 버튼 영역
		var tabBtnStory = tabBtnsStory.querySelectorAll("[data-tab-btn]"); // 탭 버튼
		var tabContsStory = document.getElementById("tabConts_story"); // 탭 콘텐츠 영역
		var tabContStory = tabContsStory.querySelectorAll("[data-tab-cont]"); // 탭 버튼
		btnTab(tabBtnStory, tabContsStory, tabContStory);

		// Story - All = More 버튼
		var listStory01 = $(".story_list_wrap.list_01 ul li");
		var numToShowStory01 = 16;
		var buttonStory01 = $("#more01");
		var numInListStory01 = listStory01.length;
		btnMore(listStory01, numToShowStory01, buttonStory01, numInListStory01);

		// Story - NEWS = More 버튼
		var listStory02 = $(".story_list_wrap.list_02 ul li");
		var numToShowStory02 = 16;
		var buttonStory02 = $("#more02");
		var numInListStory02 = listStory01.length;
		btnMore(listStory02, numToShowStory02, buttonStory02, numInListStory02);

		// Story - UX Story = More 버튼
		var listStory03 = $(".story_list_wrap.list_03 ul li");
		var numToShowStory03 = 16;
		var buttonStory03 = $("#more03");
		var numInListStory03 = listStory03.length;
		btnMore(listStory03, numToShowStory03, buttonStory03, numInListStory03);

		// Story - Daily = More 버튼
		var listStory04 = $(".story_list_wrap.list_04 ul li");
		var numToShowStory04 = 16;
		var buttonStory04 = $("#more04");
		var numInListStory04 = listStory04.length;
		btnMore(listStory04, numToShowStory04, buttonStory04, numInListStory04);

		// Story - Trend report = More 버튼
		var listStory05 = $(".story_list_wrap.list_05 ul li");
		var numToShowStory05 = 16;
		var buttonStory05 = $("#more05");
		var numInListStory05 = listStory05.length;
		btnMore(listStory05, numToShowStory05, buttonStory05, numInListStory05);
	}



	////////////////////////////////////////////////////////////////////////
	//////// Request ///////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////
	if(pageName === 'request.html') {
		// Request - form = input의 placeholder(span.message)를 클릭하여 첨부파일 창 열기

	}

	
	$(window).scroll(function(){
		fadeInUp();
		
	});
	fadeInUp();


});

var whVal = 2;
if(isMobile()){
	var whVal = 1.5;
} else {
	var whVal = 1.9;
}

function fadeInUp (){
	var ele = $("ul.list_wrap > li");
	var any = Array();

	ele.each(function(i){
		any[i] = $(this).offset().top;
	});

		var pos = $(window).scrollTop() + ($(window).height() / whVal);
		ele.each(function(index){
			var anyBox_Bottom_Pos = $(this).offset().top + $(this).outerHeight();  //anyBox 가장하단의 위치값
			ele.each(function(i){
				if (pos > any[i]){
					$(this).addClass('fadeInUp animated').animate({opacity:"1"},500);
				}
			});
		});


}
