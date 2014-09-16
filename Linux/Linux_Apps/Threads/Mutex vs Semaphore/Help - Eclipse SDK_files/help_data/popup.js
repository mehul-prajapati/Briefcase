//CONTROLLING EVENTS IN jQuery
//$(document).ready(function(){
						 
$(function($){	

	//SETTING UP OUR POPUP
	//0 means disabled; 1 means enabled;
	var popupStatus = 0;
	
	function loadPopup(layerUrl){
		
		//loads popup only if it is disabled
		if(popupStatus==0){
			$(".shadow").css({
				"opacity": "0.3"
			});
			$(".shadow").fadeIn("200");
			$(layerUrl).fadeIn("200");
			popupStatus = 1;
		}
		
	}

	function disablePopup(){
		//$("select").css("visibility", ""); //ie6처리 select다시 보이기
		//disables popup only if it is enabled
		if(popupStatus==1){
			$(".shadow").fadeOut("500");
			$(".LayerPop").fadeOut("500");
			popupStatus = 0;
		}
	}

	//centering popup
	function centerPopup(layerUrl){
		//request data for centering
		var windowWidth = document.documentElement.clientWidth;
		var windowHeight = document.documentElement.clientHeight;
		var popupWidth = $(layerUrl).width();
		var popupHeight = $(layerUrl).height();
		//centering
		$(layerUrl).css({
			"position": "absolute",
			"margin-left":-popupWidth/2,
			"margin-top":-popupHeight/2,
			"top":"50%",
			"left":"50%"
		});
		
		$(".shadow").css({
			"*height": "100%"
		});
		
		//$("select").css("visibility","hidden"); //ie6때문에 select 박스 삭제 visible안먹음
		//$(".LayerPop select").css("visibility",""); //팝업 내부는 보이게
	}

	//LOADING POPUP
	$(".LvPopup2").click(function(){
		var layerUrl = $(this).attr("href") ;
		//centering with css
		centerPopup(layerUrl);
		//load popup
		loadPopup(layerUrl);
	});
	
	//Articles document only email input popup
    $("#writerEmail").click(function(){
        var layerUrl = "#PopupCheckEmail";
        //centering with css
        centerPopup(layerUrl);
        //load popup
        loadPopup(layerUrl);
    });
    
    //Articles document only email button 
    $("#emailSearchBtn").click(function(){
        var layerUrl = "#PopupCheckEmail";
        //centering with css
        centerPopup(layerUrl);
        //load popup
        loadPopup(layerUrl);
    });
    
    //Feedback only button 
    $("#feedbackBtn").click(function(){
        var layerUrl = "#LayerPopup_Feedback";
        //centering with css
        centerPopup(layerUrl);
        //load popup
        loadPopup(layerUrl);
    });
	
	//Contents Rating only button 1
	$("#feedbackBtn1").click(function(){
        var layerUrl = "#LayerPopup_Feedback";
        //centering with css
        centerPopup(layerUrl);
        //load popup
        loadPopup(layerUrl);
    });

	//Contents Rating only button 2
	$("#feedbackBtn2").click(function(){
        var layerUrl = "#LayerPopup_Feedback";
        //centering with css
        centerPopup(layerUrl);
        //load popup
        loadPopup(layerUrl);
    });

	//Contents Rating only button 3
	$("#feedbackBtn3").click(function(){
        var layerUrl = "#LayerPopup_Feedback";
        //centering with css
        centerPopup(layerUrl);
        //load popup
        loadPopup(layerUrl);
    });
    
    //DC - 2011 New register Corporate event
    $("#rtt2").click(function(){
        var layerUrl = "#LayerPopup1";
        //centering with css
        centerPopup(layerUrl);
        //load popup
        loadPopup(layerUrl);
    });
    
    //DC - 2011 New register Group event
    $("#rtt3").click(function(){
        var layerUrl = "#LayerPopup1";
        //centering with css
        centerPopup(layerUrl);
        //load popup
        loadPopup(layerUrl);
    });
    
    //DC - 2011 New register Corporate, Group textarea event
    $("#participantList").click(function(){
        var layerUrl = "#LayerPopup1";
        //centering with css
        centerPopup(layerUrl);
        //load popup
        loadPopup(layerUrl);
    });
    			
	//CLOSING POPUP
	//Click the x event!
	$(".helpClose").click(function(){
		disablePopup();
	});
	//Click out event!
	$(".shadow").click(function(){
		disablePopup();
	});
	//Press Escape event!
	$(document).keypress(function(e){
		if(e.keyCode==27 && popupStatus==1){
			disablePopup();
		}
	});

});