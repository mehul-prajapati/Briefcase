2011-12-22// JavaScript Document
//퍼블리셔가 작성하는 js스크립트 파일입니다. 개발자가 작성하는 js스크립트나 수정할 경우에는 따로 js파일을 추가로 생성하여 작성 부탁드립니다.
//공사용 페이지 다이렉트 연결 : document.location.href='http://developer.bada.com/parking.html';
document.write("<script type='text/javascript' src='http://static.bada.com/en_US/developer/apis/js/popup.js'></script>");
document.write("<script type='text/javascript' src='http://static.bada.com/contents/en_US/developer/apis/js/etc.js'></script>");
document.write("<script type='text/javascript' src='http://static.bada.com/en_US/developer/apis/js/3rd_application.js'></script>");


$(function($){ 
	$('embed').attr('wmode','transparent');
});

/* PNG Img */
function setPNG24(obj) {
	obj.width=obj.height=1;
	obj.className=obj.className.replace(/\bPNG24\b/i,'');
	obj.style.filter =
	"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ obj.src +"',sizingMethod='image');"
	obj.src='';
	return '';
}

//gub 활성화
$(function($){
	$('.gnb a')
		.mouseover(function(){
			var li = $(this).parent();
			li.addClass('active');
			li.siblings().removeClass('active');
			li.find('li').removeClass('active');
		})
		.focus(function() {
			$(this).mouseover();
		});
	$('.gnb > ul > li:first').css('margin-left','25px'); //.gnb의 ul의 첫번째 li요소에 스타일
	//$('.gnb > ul > li > ul > li').css('margin-left','40px'); //.gnb의 ul의 첫번째 li의 ul 의 li에
});

//gnb 활성화 메뉴2번째 타입
jQuery(function($){
	
	// Menu
	var Menu = $('div.Menu');
	var major = $('div.major');
	var li_list = major.find('>ul>li');
	
	// Selected
	function onselectMenu(){
		var myclass = [];
		
		$(this).parent('li').each(function(){
			myclass.push( $(this).attr('class') );
		});
		
		myclass = myclass.join(' ');
		if (!major.hasClass(myclass)) major.attr('class','major').addClass(myclass);
	}
	
	// Show Menu
	function show_Menu(){
		t = $(this);
		li_list.removeClass('active');
		aside_li.removeClass('active'); //오른쪽메뉴도 같이 제거
		t.parent('li').addClass('active').css('margin-right','40px');

		// IE7 or IE7 documentMode bug fix
		if($.browser.msie) {
			var v = document.documentMode || parseInt($.browser.version);
			if (v == 7) {
				var subWidth = t.next('div.sub').eq(-1).width();
				t.next('div.sub').css('width',subWidth);
			}
		}
	}
	li_list.find('>a').click(onselectMenu).mouseover(show_Menu).focus(show_Menu);
	
	// Hide Menu
	function hide_Menu(){
		li_list.removeClass('active');
	}
	Menu.mouseleave(hide_Menu);
	li_list.find('div.sub>ul').mouseleave(hide_Menu);

	// Aside
	var aside_li = $('.Menu>.inset>.aside>ul>li');
	var aside_a = $('.Menu>.inset>.aside>ul>li>a');

	// Show Aside
	function show_aside(){
		li_list.removeClass('active');
		aside_li.removeClass('active');
		$(this).parent('li').addClass('active');

		// IE7 or IE7 documentMode bug fix
		if($.browser.msie) {
			var v = document.documentMode || parseInt($.browser.version);

			if (v == 7) {
				var sub = $(this).next('div.sub').eq(-1);
				sub.css('width', '').css('width', sub.width()+'px');
			}
		}
	}	
	aside_a.mouseover(show_aside).focus(show_aside);
	
	// Hide Aside 숨기기
	function hide_aside(){
		//li_list.removeClass('active');
		aside_li.removeClass('active');
	}	
	Menu.mouseleave(hide_aside);
	aside_li.find('div.sub>ul').mouseleave(hide_aside);

	// Hide Menu & Aside
	$('*:not(".Menu *")').focus(hide_Menu).focus(hide_aside);
	
});


/* Search form
$(function($){
	//검색창에 포커스 있을 때 백그라운드 삭제
	$('.input_search').focusin(function() {
	  $(this).css('background-image','url(http://static.bada.com/en_US/developer/apis/images/common/layout/bg_search_on.jpg)');
	});
	//검색창에서 포커스 벗어날 때 백그라운드 복귀
	//$('.input_search').focusout(function() {
	//  $(this).css('background-image','url(images/layout/bg_search.jpg)');
	//});
});
*/

//Right Menu
jQuery(function($){
	// Side Menu
	var sMenu = $('div.rightContentList'); //선언 클래스
	var sItem = sMenu.find('>ul.ListPlus>li');  // 서브찾기
	var ssItem = sMenu.find('>ul.ListPlus>li>ol>li'); //서브의 서브 
	var lastEvent = null;

	sItem.find('>ul.ListPlus').css('display','none');
	sMenu.find('>ul.ListPlus >li>ol>li[class=active]').parents('li').attr('class','active');
	sMenu.find('>ul.ListPlus >li[class=active]').find('>ol').css('display','block');

	function sMenuToggle(event){
		var t = $(this);

		if (this == lastEvent) return false;
		lastEvent = this;
		setTimeout(function(){ lastEvent=null }, 200);

		if (t.next('ul').is(':hidden')) {
			sItem.find('>ul').slideUp(100);
			t.next('ul').slideDown(100);
			
		} else if(!t.next('ul').length) {
			sItem.find('>ul').slideUp(100);
			
		} else {
			t.next('ul').slideUp(100);
		}

		if (t.parent('li').hasClass('active')){
			t.parent('li').removeClass('active');
			//alert("열림");
			
		} else {
			//sItem.removeClass('active'); 활성화 된 것 이외에는 다 닫기
			t.parent('li').addClass('active');
			//alert("닫힘");
		}
	}
	sItem.find('>a[href=#]').click(sMenuToggle).focus(sMenuToggle);
	sItem.find('>img').click(sMenuToggle).focus(sMenuToggle);

	function subMenuActive(){
		ssItem.removeClass('active');
		$(this).parent(ssItem).addClass('active');
	}; 
	ssItem.find('>a').click(subMenuActive).focus(subMenuActive);
	ssItem.find('>img').click(subMenuActive).focus(subMenuActive);
});

//게시판 리스트 접고 펼치기
jQuery(function($){
	$('.viewBBSListFull').click(function()
		{
			var bbsList = $('div.bbsList');	
			bbsList.find('ul>li>dl>dd>p[class=text]').css('display','block');
			bbsList.find('ul>li>dl>dd>p[class=tag]').css('display','block');
			$('.viewBBSListFull').attr('src','http://static.bada.com/en_US/developer/apis/images/common/ico/ico_full2_on.gif');
			$('.viewBBSListSet').attr('src','http://static.bada.com/en_US/developer/apis/images/common/ico/ico_listset2_off.gif');
		});
	
	$('.viewBBSListSet').click(function()
		{
			var bbsList = $('div.bbsList');	
			bbsList.find('ul>li>dl>dd>p[class=text]').css('display','none');
			bbsList.find('ul>li>dl>dd>p[class=tag]').css('display','none');
			$('.viewBBSListFull').attr('src','http://static.bada.com/en_US/developer/apis/images/common/ico/ico_full2_off.gif');
			$('.viewBBSListSet').attr('src','http://static.bada.com/en_US/developer/apis/images/common/ico/ico_listset2_on.gif');
		});
	
	$('.viewVideoListFull').click(function()
		{
			var bbsList = $('div.bbsList_Thumbnail');	
			bbsList.find('ul>li>dl>dd>p[class=text]').css('display','block');
			bbsList.find('ul>li>dl>dd>p[class=tag]').css('display','block');
			$('.viewVideoListFull').attr('src','http://static.bada.com/en_US/developer/apis/images/common/ico/ico_full2_on.gif');
			$('.viewVideoListSet').attr('src','http://static.bada.com/en_US/developer/apis/images/common/ico/ico_listset2_off.gif');
		});
	
	$('.viewVideoListSet').click(function()
		{
			var bbsList = $('div.bbsList_Thumbnail');	
			bbsList.find('ul>li>dl>dd>p[class=text]').css('display','none');
			bbsList.find('ul>li>dl>dd>p[class=tag]').css('display','none');
			$('.viewVideoListFull').attr('src','http://static.bada.com/en_US/developer/apis/images/common/ico/ico_full2_off.gif');
			$('.viewVideoListSet').attr('src','http://static.bada.com/en_US/developer/apis/images/common/ico/ico_listset2_on.gif');
		});
	
	$('.viewArchiveFull').click(function()
		{
			$('.archivesTR').css('display','');
			$('.viewArchiveFull').attr('src','http://static.bada.com/en_US/developer/apis/images/common/ico/ico_full2_on.gif');
			$('.HideArchiveList').attr('src','http://static.bada.com/en_US/developer/apis/images/common/ico/ico_listset2_off.gif');
			$('.archiveAp').attr('src','http://static.bada.com/en_US/developer/apis/images/common/btn/btn_up.gif');
		});
	
	$('.HideArchiveList').click(function()
		{
			$('.archivesTR').css('display','none');
			$('.viewArchiveFull').attr('src','http://static.bada.com/en_US/developer/apis/images/common/ico/ico_full2_off.gif');
			$('.HideArchiveList').attr('src','http://static.bada.com/en_US/developer/apis/images/common/ico/ico_listset2_on.gif');
			$('.archiveAp').attr('src','http://static.bada.com/en_US/developer/apis/images/common/btn/btn_down.gif');
		});	
});

/*
//popup layer
jQuery(function($){
	//oepn
	$('.LvPopup').click(function() 
		{
			var popBox = $(this).parent();
			alert(popBox);
			var windowWidth = $(".fg"); //창의 가로사이즈
			var windowHeight = $(".fg"); //창의 세로사이즈
			$('.LayerPopup').fadeIn(200); //show, slideDown(숫자)
			$('.fg').css('margin-top',-windowWidth.innerWidth()/2-50);  //창 가로 사이즈의 절반 마이너스값
			$('.fg').css('margin-left',-windowWidth.innerHeight()/2); //창 세로 사이즈의 절반 마이너스 값			
		})
	//close
	$('.helpClose').click(function() 
		{
			$('.LayerPopup').fadeOut(500); //hide, SlideOut(숫자)

		})
	$('.bg').click(function()	{
			$('.LayerPopup').fadeOut(500); //백그라운드 클릭시 사라지게
		})
});
*/

//Devtools List View Hide 2012-01-04 수정
function archiveDp(apNux)
{
	if(document.getElementById('Dp'+apNux).style.display == "none")
		{
			document.getElementById('Dp'+apNux).style.display = "";
			document.getElementById("Ap"+apNux).src = "http://static.bada.com/en_US/developer/apis/images/renewal/common/btn/btn_hide.gif";
		}
	else {
		document.getElementById('Dp'+apNux).style.display = "none";
		document.getElementById("Ap"+apNux).src = "http://static.bada.com/en_US/developer/apis/images/renewal/common/btn/btn_show.gif";
	}
}

// FAQ
jQuery(function($){
var articleBox = $('.faq .article');
articleBox.addClass('hide');
articleBox.find('.a').slideUp(100);

	$('.faq .article .trigger').click(function(){
		var myArticle = $(this).parents('.article:first');
		if(myArticle.hasClass('hide')){
			articleBox.addClass('hide').removeClass('show'); // 아코디언 효과를 원치 않으면 이 라인을 지우세요
			articleBox.find('.q > a').css("font-weight","normal");
			articleBox.find('.q').css("background-image","url(http://static.bada.com/contents/en_US/developer/apis/images/common/ico/dot_am.gif)");  //원상복귀
			articleBox.find('.a').slideUp(100); // 아코디언 효과를 원치 않으면 이 라인을 지우세요
	
			myArticle.removeClass('hide').addClass('show');
			myArticle.find('.q > a').css("font-weight","bold");
			myArticle.find('.q').css("background-image","url(http://static.bada.com/contents/en_US/developer/apis/images/common/ico/dot_pm.gif)"); 
			myArticle.find('.a').slideDown(100);
		} else {
			myArticle.removeClass('show').addClass('hide');
			myArticle.find('.a').slideUp(100);
		}
	});

	// ShowFAQ
	$('.hgroup #showFAQ').click(function(){
		var hidden = $('.faq .article.hide').length;
		if(hidden > 0){
			articleBox.removeClass('hide').addClass('show');
			articleBox.find('.a').slideDown(100);
			articleBox.find('.q > a').css("font-weight","normal");
			articleBox.find('.q').css("background-image","url(http://static.bada.com/contents/en_US/developer/apis/images/common/ico/dot_am.gif)");
			$('#showFAQ').attr('src','http://static.bada.com/en_US/developer/apis/images/common/ico/ico_full2_on.gif');
			$('#HidFAQ').attr('src','http://static.bada.com/en_US/developer/apis/images/common/ico/ico_listset2_off.gif');
		}
	});
	// HidFAQ
	$('.hgroup #HidFAQ').click(function(){
		articleBox.removeClass('show').addClass('hide');
		articleBox.find('.a').slideUp(100);
		$('#showFAQ').attr('src','http://static.bada.com/en_US/developer/apis/images/common/ico/ico_full2_off.gif');
		$('#HidFAQ').attr('src','http://static.bada.com/en_US/developer/apis/images/common/ico/ico_listset2_on.gif');
	});
});

//테이블 맨 끝 보더값 + 홀수 백그라운드 클래스 추가 + css에서 이용하는 함수 모음
jQuery(function($){
	$('.tbrStyleA > tr > td:last').addClass('last');
	$('.tbrStyleC > tbody > tr:last').addClass('last');
	$('.tbrStyleD > tbody > tr:odd').addClass('bg');
	$('.tbrStyleD > tr > td:last').addClass('last');
	$('.tbrStyleD > tbody > tr:last').addClass('last');
	$('.tbrStyleE > tr > td:last').addClass('last');
	$('.tbrStyleE > tbody > tr:last').addClass('last');
	$('.tbrStyleC > tbody > tr:odd').addClass('bg');
	$('.devExterList > li:last').addClass('last');
	$('.devExterListview > ul > li:last').addClass('last');
	$('.boardSet > table > tbody > tr:odd').addClass('bg');	
	$('.ListPlus > li > ol > li:last').css('background-image','url(http://static.bada.com/en_US/developer/apis/images/common/ico/dot_listol_last.gif)');
	$('.tbrStyleWrite > tbody > tr:last').addClass('last');
	//$('.inputA').focusin(function() { $(this).css('background-color','#ffffff');	});
	//$('.inputA').focusout(function() { $(this).css('background-color','#fafafa'); });
	$('.supportDv').find('.ver > ul > li:last').addClass('last');
	$('.flagList > ul:last').addClass('last');
	$('.sdkFileDown').find('tr:last').addClass('last');
	
	$('.siteMapSet').find('dl:last').addClass('setLast');
	$('.innerSign > li:last').addClass('last');
	$('.term > li:last').addClass('last');
	$('.listTit > th:last').addClass('last');
	$('.pageNumber > a:last').addClass('last');
	$('.viewInfo > p:first').addClass('midLine');
	$('.btnCtrl > span:last').addClass('last');
	
	$('.testKitList:last').addClass('last');
	$('.deviceManagerList > thead > tr > th:last').addClass('last');
	$('.deviceManagerList > tbody > tr > td:first-child').addClass('first');
	$('.deviceManagerList > tbody > tr > td:last-child').addClass('last');
	$('.inputData > td:first').addClass('first');
	$('.inputData > td:last').addClass('last');
	
	//2012-01-04 추가
	$('.archivesTb > thead > tr > th:last').addClass('last');
	$('.archivesTb > tbody > tr > td:first-child').addClass('sdkVer');
	$('.archivesInfo > td:last-child').addClass('last');

	$('.tbTypeDD > tbody > tr > td:last-child').addClass('last');
	$('.tbTypeDD > thead > tr > th:last-child').addClass('last');
	$('.appIcnList > ul  > li:last').addClass('last');
	$('.flagIcnList > ul  > li:last').addClass('last');

	$('.procedureTR:first > td').addClass('tdPd_1');
	$('.procedureTR > td:last-child').addClass('tdBorder');
	$('.procedureTR > td:last').addClass('noBorder');

	$('.serviceList > tbody > tr:first > td').addClass('first');
	$('.serviceList > tbody > tr:last > td').addClass('last');
	
	$('.tbTypeD > tbody > tr:odd').addClass('bg');
	$('.tbTypeD > tr > td:last').addClass('last');
	$('.tbTypeD > tbody > tr:last').addClass('last');

	

	var buttons = $('#main > ul > li');	
	buttons.eq(0).click(function() { $('#indexViewDDa').attr('src','http://static.bada.com/en_US/developer/apis/images/common/layout/sample_1.jpg'); $('body').css('background-image','url(/en_US/developer/apis/images/body.png)');  });
	buttons.eq(1).click(function() { $('#indexViewDDa').attr('src','http://static.bada.com/en_US/developer/apis/images/common/layout/sample_2.jpg'); $('body').css('background-image','url(/en_US/developer/apis/images/body2.png)'); });
	buttons.eq(2).click(function() { $('#indexViewDDa').attr('src','http://static.bada.com/en_US/developer/apis/images/common/layout/sample_3.jpg'); $('body').css('background-image','none'); });

});

//Select API Group 접고피기
jQuery(function($){
var art = $('.selAPIGroup .List li');
art.addClass('hide');
art.find('.info').slideUp(100); //info접어두기
art.find('#appCloSetbtn').attr('title','Setup');
	$('.selAPIGroup .List #appCloSetbtn').live('click',function(){
		var myA = $(this).parents('.List li');
		
		if(myA.hasClass('hide')){
			myA.removeClass('hide').addClass('show');
			myA.find('#appCloSetbtn').attr('src','http://static.bada.com/en_US/developer/apis/images/common/btn/btn_close.gif');
			myA.find('#appCloSetbtn').attr('title','Close');
			myA.find('.info').slideDown(100);
		} else {
			myA.removeClass('show').addClass('hide');
			myA.find('#appCloSetbtn').attr('title','Setup');
			myA.find('#appCloSetbtn').attr('src','http://static.bada.com/en_US/developer/apis/images/common/btn/btn_setup.gif');
			myA.find('.info').slideUp(100);
		}
	});
});

//Manager Activity 접고피기
jQuery(function($){
var arvMbr = $('.activityMbr .List li');
arvMbr.addClass('hide');
arvMbr.find('.info').slideUp(100); //info접어두기
	$('.activityMbr .List #appActivityOpen').live('click',function(){
		var myAbr = $(this).parents('.List li');
		if(myAbr.hasClass('hide')){
			myAbr.removeClass('hide').addClass('show');
			myAbr.find('#appActivityOpen').attr('src','http://static.bada.com/en_US/developer/apis/images/common/btn/btn_close.gif');
			myAbr.find('.info').slideDown(100);
		} else {
			myAbr.removeClass('show').addClass('hide');
			myAbr.find('#appActivityOpen').attr('src','http://static.bada.com/en_US/developer/apis/images/common/btn/btn_setup.gif');
			myAbr.find('.info').slideUp(100);
		}
	});
});

//Setup your component 접고 피기
jQuery(function($){
var seCnt = $('.SetCompnentsAmi li');
seCnt.addClass('hide'); //전부 숨기기
seCnt.find('.tip').slideUp(100); //info접어두기 //

	$('.SetCompnentsAmi .setupCmpicon').live('click',function(){
		var NkvBtn = $(this).parents('li');
		if(NkvBtn.hasClass('hide')){
			NkvBtn.removeClass('hide').addClass('on');
			NkvBtn.find('.setupCmpicon').attr('src','http://static.bada.com/en_US/developer/apis/images/common/btn/btn_close.gif');
			NkvBtn.find('.tip').slideDown(100);
		} else {
			NkvBtn.removeClass('on').addClass('hide');
			NkvBtn.find('.setupCmpicon').attr('src','http://static.bada.com/en_US/developer/apis/images/common/btn/btn_setup.gif');
			NkvBtn.find('.tip').slideUp(100);
		}
	});
});

//My application Tab Menu 
jQuery(function($){
	var MenuMax = $('.mpaTab .tab > li').length;  //li의 메뉴 갯수
	$('.mpaTab > .tab > li').live('click', function() {
		var no = $(this).index()+1;
		for(i=1; i<=MenuMax; i++)
			{
				if(i == no)
					{
						$('#M'+i).css('display','block');  //클릭한 박스 보여주기
						$('.mpaTab > .tab > li').eq(i-1).addClass('on');
					}
				else 
					{
						$('#M'+i).css('display','none'); //나머지 박스 숨기기
						$('.mpaTab > .tab > li').eq(i-1).removeClass('on');
					}
			}		
	});	
});

//Article Overview 
jQuery(function($){
	var mmeMax = $('.artOverview > ul > li').length;
	var mmeAticle = $('.artOverview > ul > li');
	var mmeBox = $('.artOverview .boxArtDes');
	$(mmeBox).eq(0).css('display','block'); //1번 셋팅
	$('#Ar1').attr('src','http://static.bada.com/en_US/developer/apis/images/document/tab1_on.gif'); //1번 셋팅
	$(mmeAticle).live('click', function() {	
		var LiNumber = $(this).index()+1;
		for(ikm=1; ikm<=mmeMax; ikm++)
			{
				if(ikm == LiNumber)
					{ mmeTabOn(ikm); $(mmeBox).eq(ikm-1).css('display','block');  }
				else
					{ mmeTabOff(ikm); $(mmeBox).eq(ikm-1).css('display','none'); }
			}
	});
	function mmeTabOn(ikm)
		{	document.getElementById("Ar"+ikm).src = "http://static.bada.com/en_US/developer/apis/images/document/tab"+ikm+"_on.gif"; }
	function mmeTabOff(ikm)
		{	document.getElementById("Ar"+ikm).src = "http://static.bada.com/en_US/developer/apis/images/document/tab"+ikm+"_off.gif"; }
});


//Application FAQ icon 변경
$(function($){
	$('.selAPIGroup .List dl dt img').attr("title","Get help");
	$('.selAPIGroup .List dl dt img').mouseover(function(){
		$(this).attr("src","http://static.bada.com/en_US/developer/apis/images/common/ico/ico_q2_on.gif");
	});
	$('.selAPIGroup .List dl dt img').mouseout(function(){
		$(this).attr("src","http://static.bada.com/en_US/developer/apis/images/common/ico/ico_q2.gif");
	});
});

/* Top 검색박스 Search for 글씨 포커스
$(function($){
	$(".input_search").attr("value","Search for"); //검색 input에 Search for 설정
	$(".input_search").focusin(function() {
		$(this).attr("value","");
	});
	$(".input_search").focusout(function() {
		$(this).attr("value","Search for");
	});
});
*/

/* Beginning with bada */
function ovTabOn(km)
	{	document.getElementById("or"+km).src = "http://static.bada.com/en_US/developer/apis/images/support/step"+km+"_on.jpg"; }
function ovTabOff(km)
	{	document.getElementById("or"+km).src = "http://static.bada.com/en_US/developer/apis/images/support/step"+km+"_off.jpg"; }

/*왼쪽메뉴*/
jQuery(function($){
	$(".vertMenu .m > .verTit").click(function(){
		$(this).toggleClass("expanded");
		var submenu = $(this).next("ol");
		if( submenu.is(":visible") ){
			submenu.css("display","none");
		}else{
			submenu.css("display","block");
		}
	});

	$(".vertMenu > .tagTit").click(function(){
		$(this).toggleClass("expanded");
		var submenu = $(this).next("p");
		if( submenu.is(":visible") ){
			submenu.css("display","none");
		}else{
			submenu.css("display","block");
		}
	});

	$(".faq > dt").click(function(){
		$(this).toggleClass("active");
		var answer = $(this).next("dd");
		if( answer.is(":visible") ){
			answer.css("display","none");
		}else{
			answer.css("display","block");
		}
	});	

	$(".option > .op_1").click(function(){
		$(".option > .op_1").addClass("active");
		$(".option > .op_2").removeClass("active");
		$(".archivesTR").css("display","");
		$(".faq > dt").addClass("active");
		$(".faq > dd").css("display","block");
		$('.archiveAp').attr('src','http://static.bada.com/en_US/developer/apis/images/renewal/common/btn/btn_hide.gif'); /*2012-01-04 추가*/
	});
	$(".option > .op_2").click(function(){
		$(".option > .op_2").addClass("active");
		$(".option > .op_1").removeClass("active");
		$(".archivesTR").css("display",'none');
		$(".faq > dt").removeClass("active");
		$(".faq > dd").css("display","none");
		$('.archiveAp').attr('src','http://static.bada.com/en_US/developer/apis/images/renewal/common/btn/btn_show.gif'); /* 2012-01-04 추가*/
	});
	
	$("#yes_2").click(function(){
		$(".hideInfo").css("display","");
	});
	$("#no_2").click(function(){
		$(".hideInfo").css("display","none");
	});
});	


//2012-01-05 DD페이징
function pageTTM(inx)
{
	for(i=1; i<=8; i++)
		{
			if(inx == i)
				{
					document.getElementById("DDday_page"+i).style.display = "block";
					
				}
			else 
			{
				document.getElementById("DDday_page"+i).style.display = "none";
			}
		}
}