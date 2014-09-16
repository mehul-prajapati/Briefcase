// JavaScript Document
// 옮길 것! 디자인 스타일용 js

jQuery(function($){
	$('.popTable1 > thead  > tr > th:last-child').addClass('last');
	$('.popTable1 > tbody > tr > td:last-child').addClass('last');
	$('.popTable1 > tbody > tr:odd').addClass('bg');
	$('.DsTableStyle3 > thead > tr > th:last-child').addClass('last');
	$('.DsTableStyle3 > tbody > tr > td:last-child').addClass('last');
	$('.leftAppGradeTable > tbody > tr:last').addClass('last');
	$('.testkiTList > ul > li:last').addClass('last');
	$('.waveFindbadaTarget li:odd').addClass('bg');	
	$('.contentSet3 > ul > li:last').addClass('last');

	var DDayMiF = $('.DsTableStyle3 > tbody > tr');
	DDayMiF.mouseover(function() { $(this).addClass('bg'); });
	DDayMiF.mouseout(function() { $(this).removeClass('bg'); });

	var DDayMiF2 = $('.appVersionList tr');
	DDayMiF2.mouseover(function() { $(this).addClass('bg'); });
	DDayMiF2.mouseout(function() { $(this).removeClass('bg'); });

	var DtitleTips = $('.titleAppVer > .Tips ');
	DtitleTips.mouseover(function() { $(this).addClass('on'); });
	DtitleTips.mouseout(function() { $(this).removeClass('on'); });

	//----------- My application List version Tool Tips  ---------------------
	var DdaMYappTipsHight = $('.DsTableStyle3 .ver > dl > dt > span'); //클릭위치
	var DdaMY = $('.DsTableStyle3 .ver > dl > dd');
	var absTipsMax = $('.DsTableStyle3 .ver > dl').length;  // 전체 갯수
	$('.DsTableStyle3 .ver > dl > dt > span').live('click',function() 
		{ 
			var noMddy = $('.DsTableStyle3 .ver > dl > dt > span').index(this)+1; //현재 클릭한 값+1
			var noMddy2 = $(this).parents('.DsTableStyle3 .ver > dl').children('dd'); //상대위치
			for(var kixnoMddy=1; kixnoMddy<=absTipsMax; kixnoMddy++)
				{
					if(kixnoMddy == noMddy)
						{ 
							$('.DsTableStyle3 .ver > dl > dd').eq(kixnoMddy-1).toggleClass('viewVerTips');
							$(DdaMYappTipsHight).eq(kixnoMddy-1).toggleClass('on');
							$('.DsTableStyle3 .ver > dl').eq(kixnoMddy-1).css('position','relative');
						}
					else 
						{
							$('.DsTableStyle3 .ver > dl > dd').eq(kixnoMddy-1).removeClass('viewVerTips');
							$(DdaMYappTipsHight).eq(kixnoMddy-1).removeClass('on');
							$('.DsTableStyle3 .ver > dl').eq(kixnoMddy-1).css('position','static');
						}
				}
		});
	//$(this).parents('.DsTableStyle3 .ver > dl').children('dd').toggleClass('viewVerTips');  //팁보이기
	//$(this).toggleClass('on');	 //파랑색 배경 보이기
	//----------------------------------------------------------------------

	//--------------- My application > component Setup List ----------------
	var sdrDL = $('.sdrList > li > dl').length;  //DL의 전체 갯수
	$('.sdrList > li:first').addClass('first'); 
	$('.sdrList > li > dl').live('click',function() {
		$(this).parents('.sdrList > li').children('div').toggleClass('sub'); //view tip
		$(this).toggleClass('on'); //on off 
	});
	//----------------------------------------------------------------------

	//--------------- My application > Privilege API Group -----------------
	var daDL = $('.privilAPIgroup > ul > li').length; //전체 갯수
	$('.privilAPIgroup > ul > li > dl').live('click',function() {
		$(this).parents(daDL).toggleClass('on'); //배경색 변경
		$(this).parents(daDL).children('div').toggleClass('subOn');
	});
	
	// 개별 박스에서 체크박스 선택
	$('.privilAPIgroup .select .all').live('click',function() {
		var checkboxEX = $(this).parents('.privilAPIgroup .sub').find('input:checkbox[disabled!="disabled"]');
		checkboxEX.attr('checked','checked');
		$(this).parents('.privilAPIgroup .sub').find('.all').addClass('active');
		$(this).parents('.privilAPIgroup .sub').find('.clear').removeClass('active');
	});
	
	//각각 개별 박스에서 체크박스 해제
	$('.privilAPIgroup .select .clear').live('click',function() {
		var checkboxEz = $(this).parents('.privilAPIgroup .sub').find('input:checkbox[onclick!="goDisableUncheck(this)"]');
		checkboxEz.removeAttr('checked');
		$(this).parents('.privilAPIgroup .sub').find('.clear').addClass('active');
		$(this).parents('.privilAPIgroup .sub').find('.all').removeClass('active');
	});

	//페이지내의 전체 체크박스 선택
	$('.pvSelect .on').live('click',function() {
		//$('.privilAPIgroup input:checkbox[disabled!="disabled"]').attr('checked','checked');
		$(this).addClass('active');
		$('.pvSelect .off').removeClass('active');
		$('.privilAPIgroup > ul > li').each(
			function(){
					jQuery(this).addClass('on');
					jQuery(this).children('div').removeClass('subOn');
					jQuery(this).children('div').toggleClass('subOn');
			}
		); 
	 });
	
	//페이지내의 전체 체크박스 해제
	$('.pvSelect .off').live('click',function() {
		//$('.privilAPIgroup input:checkbox[onclick!="goDisableUncheck(this)"]').removeAttr('checked');
		$(this).addClass('active');
		$('.pvSelect .on').removeClass('active');
		$('.privilAPIgroup > ul > li').each(
			function(){
					jQuery(this).removeClass('on');
					jQuery(this).children('div').removeClass('subOn');
			}
		); 
	 });
	
	var pvBgCell = $('.privilAPIgroup tr');
	pvBgCell.mouseover(function() { $(this).addClass('bg'); });
	pvBgCell.mouseout(function() { $(this).removeClass('bg'); });
	//----------------------------------------------------------------------
	
	//--------------- My application > Privilege API Group2 ----------------
	//페이지내의 전체 체크박스 선택
	$('.pvSelect2 .on').live('click',function() {
		$('.privilAPIgroup2 :checkbox').attr('checked','checked');
		$(this).addClass('active');
		$('.pvSelect2 .off').removeClass('active');
	 });
	
	//페이지내의 전체 체크박스 해제
	$('.pvSelect2 .off').live('click',function() {
		$('.privilAPIgroup2 :checkbox').removeAttr('checked');
		$(this).addClass('active');
		$('.pvSelect2 .on').removeClass('active');
	 });
	//----------------------------------------------------------------------
	
	//--------------- Main index 랜덤 배너 ---------------------------------
	var mainViLng = $('.mainVisual ul.List li').length; //메인 메뉴 갯수
	$('.mainVisual ul.List').find('li').css('display','none'); //전체 숨김
	var randombgIndex = Math.floor(Math.random()*mainViLng)+1; // 랜덤발생
	$('.mainVisual ul.List').find('li').eq(randombgIndex-1).css('display','block'); //배너 활성화
	$('.mainVisual .btn').find('li img').eq(randombgIndex-1).attr('src','http://static.bada.com/en_US/developer/apis/images/renewal/common/main/banner_on.gif'); //버튼 활성화
	$('.mainVisual .btn li').live('click',function()
		{
			var mainVibtnLi = $('.mainVisual .btn li').length+1;  // 전체 갯수
			var mainVibtnLiNum = $('.mainVisual .btn li').index(this)+1;
			$('.mainVisual ul.List').find('li').css('display','none'); //현재 배너 숨김
			$('.mainVisual .btn').find('li img').attr('src','http://static.bada.com/en_US/developer/apis/images/renewal/common/main/banner_off.gif'); //현재 버튼 숨김
			for(var Uvm=1; Uvm<=mainVibtnLi; Uvm++)
				{
					if(Uvm == mainVibtnLiNum)
						{
							$('.mainVisual ul.List').find('li').eq(mainVibtnLiNum-1).css('display','block'); //배너 활성화
							$('.mainVisual .btn').find('li img').eq(mainVibtnLiNum-1).attr('src','http://static.bada.com/en_US/developer/apis/images/renewal/common/main/banner_on.gif'); //버튼 활성화
						}
					else {
							$('.mainVisual ul.List').find('li').eq(Uvm).css('display','none'); //배너 숨김
							$('.mainVisual .btn').find('li img').eq(Uvm).attr('src','http://static.bada.com/en_US/developer/apis/images/renewal/common/main/banner_off.gif'); //버튼 숨김
						}
				}
		}
	);
	//----------------------------------------------------------------------
	//$('.sortDES').click(function() { $(this).toggleClass('sortASC'); });	 //정렬용 임시! 개발자 요청시 삭제!! - 삭제

});