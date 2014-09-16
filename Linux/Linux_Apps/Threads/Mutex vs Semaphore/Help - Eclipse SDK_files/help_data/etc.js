$(function($){
	var randMath = Math.round(Math.random()*2); //랜덤발생 최대치-1
	function inxStp1() {
		$('.deps2').css('display','none');
		$('.deps3').css('display','none');
		$('.deps1').css('display','block');
		$('#Srap1').attr('src','http://static.bada.com/contents/en_US/developer/apis/images/common/main/ico_tep1_on.gif');
		$('#Srap2').attr('src','http://static.bada.com/contents/en_US/developer/apis/images/common/main/ico_tep2_off.gif');
		$('#Srap3').attr('src','http://static.bada.com/contents/en_US/developer/apis/images/common/main/ico_tep3_off.gif');
	}
	function inxStp2() {
		$('.deps1').css('display','none');
		$('.deps3').css('display','none');
		$('.deps2').css('display','block');
		$('#Srap1').attr('src','http://static.bada.com/contents/en_US/developer/apis/images/common/main/ico_tep1_off.gif');
		$('#Srap2').attr('src','http://static.bada.com/contents/en_US/developer/apis/images/common/main/ico_tep2_on.gif');
		$('#Srap3').attr('src','http://static.bada.com/contents/en_US/developer/apis/images/common/main/ico_tep3_off.gif');
	}
	function inxStp3() {
		$('.deps1').css('display','none');
		$('.deps2').css('display','none');
		$('.deps3').css('display','block');
		$('#Srap1').attr('src','http://static.bada.com/contents/en_US/developer/apis/images/common/main/ico_tep1_off.gif');
		$('#Srap2').attr('src','http://static.bada.com/contents/en_US/developer/apis/images/common/main/ico_tep2_off.gif');
		$('#Srap3').attr('src','http://static.bada.com/contents/en_US/developer/apis/images/common/main/ico_tep3_on.gif');
	}


	if(randMath == 0) { inxStp1(); }
	if(randMath == 1) { inxStp2(); }
	if(randMath == 2) { inxStp3(); }
	$('#Srap1').click(function() { inxStp1(); });
	$('#Srap2').click(function() { inxStp2(); });
	$('#Srap3').click(function() { inxStp3(); });
});

$(function($) {
	var sdkRbsbutton = $('#TextSdkdownload');
	sdkRbsbutton.click(function() { $('.text').toggle(); $('#box').toggle(); $('.sdkDotRm').toggle();  });

	/* 2011-10-04 App Race */
	$('#FAQprec').click(function() { $('.box').toggle(); });
	$('#APPraceHelp').mouseover(function() { $('#TipBox').show(); }); 
	$('#APPraceHelp').mouseout(function() { $('#TipBox').hide(); });
	
});

//2011-10-14 add
//My application Tab Menu 
jQuery(function($){
	$('.DDFitemList > ul > li:first').addClass('on');	 //1번째 제품 보이기
	$('#DDF1 .DDFmpaTab > .tab > li:first').addClass('on'); //1번째 메뉴 보이기
	var ddfMenuMax = $('.DDFitemList > ul >  li').length;  //li의 메뉴 갯수
	var DDFstate = 1; //현재 가지고 있는 클릭 값
	$('.DDFitemList > ul > li').live('click', function() {
		var no = $(this).index()+1; //현재 클릭한 제품값
		
		for(i=1; i<=ddfMenuMax; i++)
			{
			
			$('#DDF'+i+' .DDFmpaTab > .tab > li').removeClass('on');  //우선 전체 탭내용 클리어
			$('#M'+no+'-'+i).css('display','none');  //클릭한 탭내용 전부 클리어
			
				if(i == no)
					{
						$('.DDFitemList > ul > li').eq(i-1).addClass('on');	 //클릭한 제품 보여주기
						$('#DDF'+i).css('display','block');  //클릭한 박스 보여주기
						$('#DDF'+i+' .DDFmpaTab > .tab > li:first').addClass('on');  //클릭한 제품의 첫번째 탭 활성화
						$('#M'+i+'-1').css('display','block');  //클릭한 탭내용 첫번째 활성화
						DDFstate = no; //값 넘기기
					}
				else 
					{
						$('.DDFitemList > ul > li').eq(i-1).removeClass('on'); //클릭한 제품의 클래스 제거하기
						$('#DDF'+i).css('display','none'); //나머지 박스 숨기기
						$('#DDF'+i+' .DDFmpaTab > .tab > li').removeClass('on');  //클릭한 제품의 탭 활성화 제거
						$('#M'+no+'-'+i).css('display','none');  //클릭한 탭내용 전부 클리어
					}
			}		
	});	
	//세부 탭용
	var DDFtabMenuMax = $('.DDFmpaTab .tab > li').length;  //li의 메뉴 갯수
	$('.DDFmpaTab > .tab > li').live('click', function() {
	var no = $(this).index()+1;
	for(i=1; i<=DDFtabMenuMax; i++)
			{
				if(i == no)
					{
						$('#M'+DDFstate+'-'+i).css('display','block');  //클릭한 박스 보여주기
						$('#DDF'+DDFstate+' .DDFmpaTab > .tab > li').eq(i-1).addClass('on');
						
					}
				else 
					{
						$('#M'+DDFstate+'-'+i).css('display','none'); //나머지 박스 숨기기
						$('#DDF'+DDFstate+' .DDFmpaTab > .tab > li').eq(i-1).removeClass('on');
					}
			}		
	});	
	
	
	 // 2011-12-12 add 테크니컬노트 탭 추가부분
	 var DDFtabMenuMax_2 = $('.DDFmpaTab2 .tab > li').length;  
	 $('.DDFmpaTab2 > .tab > li').live('click', function() {
	 var no_2 = $(this).index()+1;
	 for(i2=1; i2<=DDFtabMenuMax_2; i2++)
	   {
		if(i2 == no_2)
		 {
		  $('#M'+i2).css('display','block');  
		  $('#DDF .DDFmpaTab2 > .tab > li').eq(i2-1).addClass('on');
		  
		 }
		else 
		 {
		  $('#M'+i2).css('display','none'); 
		  $('#DDF .DDFmpaTab2 > .tab > li').eq(i2-1).removeClass('on');
		 }
	   }  
	 }); 



	
});