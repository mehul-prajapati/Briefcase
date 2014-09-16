<!DOCTYPE html>
<html class=" js" lang="en"><head>

	<meta name="WT.qs_dlk" content="UyfbcgrIZ2MAAGYOioUAAAAM">

	<meta name="WT.qs_shmv" content="lv20130110-turner.sf.quinstreet.net">
	<meta http-equiv="Set-Cookie" content="WMUUID=UyfbcgrIZ2MAAGYOioUAAAAM; path=/;   domain=webopedia.com;">

	<meta name="inject_params" content="WT.qs_dlk=UyfbcgrIZ2MAAGYOioUAAAAM&amp;">

	<meta http-equiv="Set-Cookie" content="inject_params=WT.qs_dlk=UyfbcgrIZ2MAAGYOioUAAAAM&amp;; path=/;   domain=webopedia.com;">

    	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>The System Boot Process Explained - Webopedia.com</title>
	<meta name="keywords" content="system boot, boot sequence,boot computer, what is a boot, BIOS, CPU, mempry, process, computer basics">
	<meta name="description" content="For a computer to boot, its BIOS, operating system and hardware must all be working properly. Failure of an element could cause a failed boot sequence.">
        <meta content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport">
        <meta name="revisit-after" content="1 day">
        <meta name="robots" content="index, follow">
        <link rel="shortcut icon" href="http://www.webopedia.com/favicon.ico" type="image/x-icon">
                
        <link rel="canonical" href="http://www.webopedia.com/DidYouKnow/Hardware_Software/BootProcess.asp">
                <!--[if lt IE 9]>
            <script src="/js/html5shiv.js"></script>
        <![endif]-->
        <link href="The%20System%20Boot%20Process%20Explained%20-%20Webopedia_files/css.css" rel="stylesheet" type="text/css">
        <link rel="stylesheet" media="screen and (min-width:769px)" href="The%20System%20Boot%20Process%20Explained%20-%20Webopedia_files/computer.css"> 
        <link rel="stylesheet" media="screen and (min-width:641px) and (max-width:768px)" href="The%20System%20Boot%20Process%20Explained%20-%20Webopedia_files/tablet.css">
        <link rel="stylesheet" media="screen and (min-width:361px) and (max-width:640px)" href="The%20System%20Boot%20Process%20Explained%20-%20Webopedia_files/phone-landscape.css">
        <link rel="stylesheet" media="screen and (max-width:360px)" href="The%20System%20Boot%20Process%20Explained%20-%20Webopedia_files/phone.css">
        <link id="deviceStylesheet" href="" type="text/css" rel="stylesheet">
        <link type="text/css" name="min-css" rel="stylesheet" media="screen" href="The%20System%20Boot%20Process%20Explained%20-%20Webopedia_files/a.css">

	<script async="" src="The%20System%20Boot%20Process%20Explained%20-%20Webopedia_files/cbgapi.loaded_0"></script><script src="The%20System%20Boot%20Process%20Explained%20-%20Webopedia_files/widgets.js" id="twitter-wjs"></script><script src="The%20System%20Boot%20Process%20Explained%20-%20Webopedia_files/beacon.js" async=""></script><script type="text/javascript">
	(function() {
		var useSSL = 'https:' == document.location.protocol;
		var src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
		document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
	})();
</script><script src="The%20System%20Boot%20Process%20Explained%20-%20Webopedia_files/gpt.js"></script>

<script type="text/javascript">
	var myBrowserWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;


		googletag.defineSlot('/5055/b2b/it/webopedia/imu', [300, 250], 'imu-1')
						.addService(googletag.pubads()).setTargeting('pos', 'top');
		googletag.defineSlot('/5055/b2b/it/webopedia/imu', [300, 250], 'imu-2')
						.addService(googletag.pubads()).setTargeting('pos', 'mid');
		googletag.defineSlot('/5055/b2b/it/webopedia/lb', [728,90], 'lb-1')
						.defineSizeMapping(googletag.sizeMapping().addSize([640,480],[728,90]).addSize([0,0],[[300,50],[320,50]]).build()) 			.addService(googletag.pubads()).setTargeting('pos', 'top');
		googletag.defineSlot('/5055/b2b/it/webopedia/lb', [728,90], 'lb-2')
						.defineSizeMapping(googletag.sizeMapping().addSize([640,480],[728,90]).addSize([0,0],[[300,50],[320,50]]).build()) 			.addService(googletag.pubads()).setTargeting('pos', 'low');
		googletag.defineOutOfPageSlot('/5055/b2b/it/webopedia/wa', 'wa-1')
			.addService(googletag.pubads());
		googletag.defineOutOfPageSlot('/5055/b2b/it/webopedia/hero', 'hero-1')
			.addService(googletag.pubads());

		googletag.pubads().setTargeting('kw', ['system boot', 'boot sequence', 'boot computer', 'what is a boot', 'BIOS', 'CPU', 'mempry', 'process', 'computer basics']);
		googletag.pubads().setTargeting('tax', ['communications']);
		googletag.pubads().setTargeting('path', ['DidYouKnow', 'Hardware_Software', 'BootProcess.asp']);
		googletag.pubads().setTargeting('pagetype', 'other');
		googletag.pubads().setTargeting('url', 'http://www.webopedia.com/DidYouKnow/Hardware_Software/BootProcess.asp');
		if (myBrowserWidth < 641) {
			googletag.pubads().setTargeting('pfm', 'mob');
		} else {
			googletag.pubads().setTargeting('pfm', 'des');
		}
		googletag.pubads().setTargeting('env', 'prod');

		googletag.pubads().enableSingleRequest();
		googletag.pubads().collapseEmptyDivs();
		googletag.pubads().enableSyncRendering();
		googletag.disablePublisherConsole();

		googletag.enableServices();
</script><script type="text/javascript" src="The%20System%20Boot%20Process%20Explained%20-%20Webopedia_files/pubads_impl_34.js"></script>

<script type="text/javascript">
	var n_imu = 0;
	var n_lb = 0;
	var n_sky = 0;
	var n_hero = 0;
	var n_wa = 0;
	var n_ciu = 0;
	var n_siteskin = 0;
	var n_button = 0;
	var n_m_lb = 0;
	var n_m_imu = 0;
	var n_m_hero = 0;
	
	function displayDFPTag(tag) {
		var this_tag_pos = 0;

		switch (tag) {
			case "imu":
				this_tag_pos = ++n_imu;
				break;
			case "lb":
				this_tag_pos = ++n_lb;
				break;
			case "sky":
				this_tag_pos = ++n_sky;
				break;
			case "hero":
				this_tag_pos = ++n_hero;
				break;
			case "wa":
				this_tag_pos = ++n_wa;
				break;
			case "ciu":
				this_tag_pos = ++n_ciu;
				break;
			case "siteskin":
				this_tag_pos = ++n_siteskin;
				break;
			case "button":
				this_tag_pos = ++n_button;
				break;
			case "m_lb":
				this_tag_pos = ++n_m_lb;
				break;
			case "m_imu":
				this_tag_pos = ++n_m_imu;
				break;
			case "m_hero":
				this_tag_pos = ++n_m_hero;
				break;
			default:
				return "<!-- QS-DFP: Unknown tag '" + tag + "' requested -->";
		}

		var this_tag_div_id = tag + "-" + this_tag_pos;

		tag_code = 	"<div id='" + this_tag_div_id + "'>\n" +
					"	<scr" + "ipt type='text/javascript'>\n" +
					"		googletag.display('" + this_tag_div_id + "');\n" +
					"	</scr" + "ipt>\n" +
					"</div>\n";

		return tag_code;
	}
	
	function refreshDFPTags() {
		googletag.pubads().refresh();
	}
	
	function hideQSDiv(element_id) {
		if (document.getElementById) {
			document.getElementById(element_id).style.visibility = "hidden";
			document.getElementById(element_id).innerHTML = "";
		}
	}
</script><!-- Begin comScore Tag -->
<script>
  var _comscore = _comscore || [];
  _comscore.push({ c1: "2", c2: "17199065" });
  (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
  })();
</script>
<noscript>
  <img src="http://b.scorecardresearch.com/p?c1=2&c2=17199065&cv=2.0&cj=1" />
</noscript>
<!-- End comScore Tag -->

    <meta name="cache-creation-time" content="Tue Mar 18 3:30:11 PDT 2014">    <script type="text/javascript">
    var _rtt = {
        renderStart       : new Date().getTime(),
        processingTime    : 0.054490089416504,
        executionEndTime  : 1395152508.1458,
        ajaxExecutionTime : 0,
        ajaxStartTime     : -1,
        lastAjaxCallTime  : 0,
        maxWaitTime       : 10000,
        sendTotalsTimeout : 300,
        configKey         : '13310',
        renderDone        : false,
        pingDone          : false,
        ajaxDone          : true,
        totalsSent        : false,
        sendPing : function()
        {
            if (_rtt.xmlHttpPing != null)
            {
                _rtt.pingStart = new Date().getTime();
                _rtt.xmlHttpPing.onreadystatechange = _rtt.handlePing;
                _rtt.xmlHttpPing.open("GET", "/rtt-request-ping", true);
                _rtt.xmlHttpPing.send(null);
            }
        },
        handlePing : function()
        {
            if (this.readyState == 4)
            {
                _rtt.pingEnd = new Date().getTime();
                _rtt.pingTime = (_rtt.pingEnd - _rtt.pingStart) / 1000;
                _rtt.secondServerTime = parseFloat(this.responseText);
                _rtt.requestTime = _rtt.pingTime / 2;
                _rtt.transferTime = _rtt.secondServerTime - _rtt.executionEndTime - _rtt.requestTime;
                if (_rtt.transferTime < 0)
                {
                    _rtt.transferTime = 0;
                }
                _rtt.pingDone = true;
                _rtt.sendTotals();
            }
        },
        ajaxTimeoutHandler : function()
        {
            if (_rtt.ajaxStartTime !== -1)
            {
                if (_rtt.lastAjaxCallTime > 0)
                {
                    _rtt.ajaxExecutionTime = (_rtt.lastAjaxCallTime - _rtt.ajaxStartTime)/1000;
                }
                else
                {
                    _rtt.ajaxExecutionTime = -1;
                }
            }
            _rtt.ajaxDone = true;
            _rtt.sendTotals();
        },
        sendTotalsTimeoutHandler : function()
        {
            if (_rtt.xmlHttpTotals.readyState <= 2)
            {
                _rtt.xmlHttpTotals.abort();
            }
        },
        sendRender : function()
        {
            _rtt.renderTime = (new Date().getTime() - _rtt.renderStart)/1000;
            _rtt.renderDone = true;
            _rtt.sendTotals();
        },
        sendTotals : function(shouldTimeout)
        {
            if (_rtt.renderDone && _rtt.pingDone && _rtt.ajaxDone && !_rtt.totalsSent)
            {
                var totals = '';
                totals += '&serverTime='        + parseFloat(_rtt.processingTime);
                totals += '&requestTime='       + parseFloat(_rtt.requestTime);
                totals += '&renderTime='        + parseFloat(_rtt.renderTime);
                totals += '&transferTime='      + parseFloat(_rtt.transferTime);
                totals += '&ajaxExecutionTime=' + parseFloat(_rtt.ajaxExecutionTime);
                totals += '&config='            + encodeURIComponent(_rtt.configKey);
                totals += '&url='               + escape(window.location.href);
                _rtt.xmlHttpTotals.open("GET", "/rtt-log-data?" + totals, true);
                _rtt.xmlHttpTotals.send(null);

                if (shouldTimeout === true)
                {
                    setTimeout('_rtt.sendTotalsTimeoutHandler()', _rtt.sendTotalsTimeout);
                }

                _rtt.totalsSent = true;
            }
        }
    }
    if (window.XMLHttpRequest)
    {
        _rtt.xmlHttpPing   = new XMLHttpRequest();
        _rtt.xmlHttpRender = new XMLHttpRequest();
        _rtt.xmlHttpTotals = new XMLHttpRequest();
    }
    else if (window.ActiveXObject)
    {
        _rtt.xmlHttpPing   = new ActiveXObject("Microsoft.XMLHTTP");
        _rtt.xmlHttpRender = new ActiveXObject("Microsoft.XMLHTTP");
        _rtt.xmlHttpTotals = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (window.addEventListener)
    {
        window.addEventListener("load", _rtt.sendRender, true);
    }
    else if (window.attachEvent)
    {
        window.attachEvent("onload", _rtt.sendRender);
    }

    if (typeof jQuery !== "undefined")
    {
        jQuery(document).ready(function()
        {
            jQuery(document).ajaxStart(function(e, jqXhr, ajOpt)
            {
                if (_rtt.ajaxStartTime === -1)
                {
                    _rtt.ajaxDone = false;
                    _rtt.ajaxStartTime = new Date().getTime();
                }
            });

            jQuery(document).ajaxStop(
                function(e, xhr, ao)
                {
                    _rtt.lastAjaxCallTime = new Date().getTime();
                }
            );
        });

        jQuery(window).unload(function()
        {
            _rtt.renderDone = true;
            _rtt.pingDone = true;
            _rtt.ajaxDone = true;
            _rtt.sendTotals(true);
        });

        setTimeout('_rtt.ajaxTimeoutHandler()', _rtt.maxWaitTime);
    }

    _rtt.sendPing();
    </script><script src="The%20System%20Boot%20Process%20Explained%20-%20Webopedia_files/osd.js" type="text/javascript"></script></head>
    <body>
    <!--div id='jsWidth'></div>
    <div id='jsHeight'></div-->
    <div id="body_container">
        
<!--Start site header -->
<header>
    <hgroup>
        <div id="logo"><a href="http://www.webopedia.com/"><img src="The%20System%20Boot%20Process%20Explained%20-%20Webopedia_files/1x1_transparent.gif" class="logo"></a></div>
        
        <div id="menu"><a href="#" onclick="$('.mobile-search-form-container').slideUp('fast');$('nav').toggle('slide');
"><img src="The%20System%20Boot%20Process%20Explained%20-%20Webopedia_files/1x1_transparent.gif" class="menu_button"></a></div>

        <div id="search"><a href="#" onclick="$('nav').slideUp('fast');$('.mobile-search-form-container').slideToggle('fast');
"><img src="The%20System%20Boot%20Process%20Explained%20-%20Webopedia_files/1x1_transparent.gif" class="search_button"></a></div>
        
        <div class="header-search-form-container">
            <div id="main-search">
                <form action="/sgsearch/results" id="cse-search-box">
                    <div class="form-bg">
                        <input name="cx" value="partner-pub-8768004398756183:6766915980" type="hidden">
                        <input name="cof" value="FORID:10" type="hidden">
                        <input name="ie" value="UTF-8" type="hidden">
                        <input id="search-term-input" class="term-search form-blur" name="q" size="75" value="Enter a term..." onfocus="this.value='';" onblur="check_for_search_term();" type="text">
                        <button class="lookitup" type="submit"></button>
                    </div>
                </form>
                
            </div>
            <!-- a href="/accountManagement?formType=registrationForm">SIGN UP</a> &nbsp; | &nbsp; <a href="/accountManagement?formType=loginForm">SIGN IN</a><br/ -->
                <a href="https://plus.google.com/+webopedia/"><img src="The%20System%20Boot%20Process%20Explained%20-%20Webopedia_files/header_icon_google.png" alt="Webopedia on Google+"></a><a href="http://twitter.com/WebopediaTech/"><img src="The%20System%20Boot%20Process%20Explained%20-%20Webopedia_files/header_icon_twitter.png" alt="Webopedia on Twitter"></a><a href="http://www.facebook.com/webopedia"><img src="The%20System%20Boot%20Process%20Explained%20-%20Webopedia_files/header_icon_facebook.png" alt="Webopedia on Facebook"></a><a href="http://www.webopedia.com/Blog"><img src="The%20System%20Boot%20Process%20Explained%20-%20Webopedia_files/header_icon_techbytes.png" alt="Tech Bytes Blog"></a>
        </div>
    </hgroup>
</header>
<!--End site header -->

<!--Start mobile search bar -->
<div class="mobile-search-form-container">
    <form action="/sgsearch/results" id="cse-search-box">
        <input name="cx" value="partner-pub-8768004398756183:6766915980" type="hidden">
        <input name="cof" value="FORID:10" type="hidden">
        <input name="ie" value="UTF-8" type="hidden">
        <input id="search-term-input" class="term-search form-blur" name="q" size="75" value="Enter a term..." onfocus="this.value='';" onblur="check_for_search_term();" type="text">
        <button class="lookitup" type="submit"></button>
    </form>
</div>
<!--End mobile search bar -->

<!--Start site navigation -->
<nav>
    <ul id="top-nav_content">
        <li><a href="http://www.webopedia.com/">MAIN</a></li>
        <li><a href="http://www.webopedia.com/TERM">BROWSE TERMS</a></li>
        <li><a href="http://www.webopedia.com/DidYouKnow/_index.asp">DID YOU KNOW?</a></li>
        <li><a href="http://www.webopedia.com/quick_ref/index.asp">QUICK REFERENCE</a></li>
        <li><a href="http://www.webopedia.com/Top_Category.asp">ALL CATEGORIES</a></li>
        <li><a href="http://www.webopedia.com/partner_programs.asp">RESOURCES</a></li>
        <li><a href="http://www.webopedia.com/AboutUs.asp">ABOUT US</a></li>
        <li class="mobile_menu"><a href="http://www.webopedia.com/partner_programs.asp#subscribe">SUBSCRIBE</a></li>
        <li class="mobile_menu"><a href="http://www.facebook.com/webopedia">FACEBOOK</a></li>
        <li class="mobile_menu"><a href="http://twitter.com/WebopediaTech/">TWITTER</a></li>
        <li class="mobile_menu"><a href="https://plus.google.com/+webopedia/">GOOGLE PLUS</a></li>
        <li class="mobile_menu"><a href="http://www.webopedia.com/webo_totd_xml.asp">RSS</a></li>
    </ul>
</nav>
<!--End site navigation -->

<!--Start top banner-->
<div id="top-banner"><!-- QS-AD: 'lb' start -->
<script language="JavaScript">
	var my_tag = displayDFPTag("lb");
	document.write(my_tag);
</script><div id="lb-1">
	<script type="text/javascript">
		googletag.display('lb-1');
	</script><script type="text/javascript" src="The%20System%20Boot%20Process%20Explained%20-%20Webopedia_files/ads"></script><div id="lb-1_ad_container">
<ins style="width: 728px; height: 90px; display: inline-table; position: relative; border: 0px none; vertical-align: bottom;"><ins style="width: 728px; height: 90px; display: block; position: relative; border: 0px none;"><iframe style="border: 0px none; position: absolute; top: 0px; left: 0px;" marginheight="0" marginwidth="0" name="google_ads_iframe_/5055/b2b/it/webopedia/lb_0" id="google_ads_iframe_/5055/b2b/it/webopedia/lb_0" scrolling="no" width="728" frameborder="0" height="90"></iframe></ins></ins></div>
<script>googletag.impl.pubads.createDomIframe("lb-1_ad_container" ,"/5055/b2b/it/webopedia/lb_0",false,undefined);</script>
</div>

<!-- QS-AD: 'lb' end --></div>
<!--End top banner-->        <div id="article_content_container" class="content_container">
            <div id="article_content" class="content">
                
                                <div id="article_main_column" class="main_column">    
                    <span class="breadcrumb"><a href="http://www.webopedia.com/" id="breadcrumb_0" class="breadcrumb_link">Main</a> » <a href="http://www.webopedia.com/DidYouKnow" id="breadcrumb_1" class="breadcrumb_link">Did You Know</a> » <a href="http://www.webopedia.com/DidYouKnow/Hardware_Software" id="breadcrumb_2" class="breadcrumb_link">Hardware &amp; Software</a> » </span><!-- Start article widget-->

    <h1>The System Boot Process Explained</h1>
    
    <!--Start article share widget-->
    <div class="article_social">
        <ul>
            <li id="fbsocial"><script src="The%20System%20Boot%20Process%20Explained%20-%20Webopedia_files/all.js"></script><fb:like layout="button_count" show_faces="true"></fb:like></li>

            <li id="tweetsocial"><a href="https://twitter.com/share" class="twitter-share-button" data-via="WebopediaTech" data-dnt="true">Tweet</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script></li>
            
            <li><script gapi_processed="true" type="text/javascript" src="The%20System%20Boot%20Process%20Explained%20-%20Webopedia_files/plusone.js"></script><g:plusone size="medium"></g:plusone></li>
            
            <!-- li><script src="http://www.stumbleupon.com/hostedbadge.php?s=1"></script></li -->

            <!-- li><a href="/_email/email_a_colleague.html" title="E-Mail this Article" ><img src="/img/icon_mail_small.png" width="27" height="16" alt="E-mail this Article"/></a></li -->
            
            <!-- AddThis Button BEGIN -->
            <!--li><a class="addthis_button" href="http://www.addthis.com/bookmark.php?v=250&amp;username=xa-4c06a3e335aae892"><img src="http://s7.addthis.com/static/btn/v2/lg-share-en.gif" width="125" height="16" alt="Bookmark and Share" style="border:0"/></a><script type="text/javascript" src="http://s7.addthis.com/js/250/addthis_widget.js#username=xa-4c06a3e335aae892"></script></li-->
            <!-- AddThis Button END -->

        </ul>
    </div>
<!--End article share widget-->    <span class="byline">
    Updated September 01, 2010 / Posted June 24, 2010    </span>
    <div class="article_related_items">
        <!--Start related articles widget-->
            <div>
            <h3>Related Terms</h3>
            <ul id="related_terms">
    
                    <li><a href="http://www.webopedia.com/TERM/B/boot.html">boot</a></li>
        
                    <li><a href="http://www.webopedia.com/TERM/S/system.html">system</a></li>
        
                    <li><a href="http://www.webopedia.com/TERM/W/warm_boot.html">warm boot</a></li>
        
                    <li><a href="http://www.webopedia.com/TERM/C/clean_boot.html">clean boot</a></li>
        
                    <li><a href="http://www.webopedia.com/TERM/C/cold_boot.html">cold boot</a></li>
        
                </ul>
        </div>
        
    
<!--End related articles widget-->    </div>
    <table id="table4" border="0" cellpadding="3" cellspacing="7">
<tbody>
<tr>
<td>
<p>In order for a computer to successfully <strong>boot</strong>, its <strong><a href="http://www.webopedia.com/TERM/B/BIOS.html">BIOS</a>, operating system</strong>
 and hardware components must all be working properly; failure of any 
one of these three elements will likely result in a failed boot 
sequence.</p>
<p>When the computer's power is first turned on, the <a href="http://www.webopedia.com/TERM/C/CPU.html">CPU</a> initializes itself, which is triggered by a series of <a href="http://www.webopedia.com/TERM/C/clock_tick.html">clock ticks</a> generated by the system clock. Part of the CPU's initialization is to look to the system's <strong><a href="http://www.webopedia.com/TERM/R/ROM.html">ROM</a> BIOS</strong> for its first instruction in the startup program. The<strong> ROM BIOS </strong>stores the first instruction, which is the instruction to run the <a href="http://www.webopedia.com/TERM/P/power_on_self_test.html">power-on self test</a> (POST), in a predetermined <a href="http://www.webopedia.com/TERM/M/memory_address.html">memory address</a>. POST begins by checking the BIOS chip and then tests <a href="http://www.webopedia.com/TERM/C/CMOS.html">CMOS</a> <a href="http://www.webopedia.com/TERM/R/RAM.html">RAM</a>.
 If the POST does not detect a battery failure, it then continues to 
initialize the CPU, checking the inventoried hardware devices (such as 
the video card), secondary storage devices, such as <a href="http://www.webopedia.com/TERM/H/hard_disk_drive.html">hard drives</a> and <a href="http://www.webopedia.com/TERM/F/floppy_drive.html">floppy drives</a>, <a href="http://www.webopedia.com/TERM/P/port.html">ports</a> and other hardware devices, such as the <a href="http://www.webopedia.com/TERM/K/keyboard.html">keyboard</a> and <a href="http://www.webopedia.com/TERM/M/mouse.html">mouse</a>, to ensure they are functioning properly.</p>
<p>Once the POST has determined that all components are functioning 
properly and the CPU has successfully initialized, the BIOS looks for an
 OS to load.</p><div id="olal-container">
<script language="javascript" src="The%20System%20Boot%20Process%20Explained%20-%20Webopedia_files/a_002.html"></script><script type="text/javascript" language="javascript" src="The%20System%20Boot%20Process%20Explained%20-%20Webopedia_files/a.js"></script><style type="text/css">html.js .cachedWidget { display: none; }</style><script type="text/html" id="assetsListings_listing_template">    <div class="assetNew" style="cursor: hand; cursor: pointer;" onclick="window.open('http://o1.qnsr.com/cgi/r?WT.qs_dlk=UyfbcgrIZ2MAAGYOioUAAAAM;;;n=203;c=1395322;s=9534;x=7936;f=201308291518020;u=j;z=TIMESTAMP;k=http://www.webopedia.com/ebooks${getAssetFormUrl()}?BLUID=${getBluid()}');">        <div class="assetNew-icon">            <img src="/images/pdfImage.jpg" height="32" width="32" border="0">        </div>        <div class="assetNew-title">            ${asset.getTitle(true)}        </div>        <div class="assetNew-download">            <a href="javascript: return false;" onclick="return false;" class="assetNew-download-link qsct bluid_${getBluid()}">Download Now</a>        </div>    </div></script><div id="assetsListings" class="cachedWidget">    <span id="assetsListings_filterCriteria" style="display:none" class="%3Ca%20class%3D%22array%22%3E%3Ce%20key%3D%22sp_260910%22%3E%3C%21%5BCDATA%5BWidget%5D%5D%3E%3C%2Fe%3E%3Ce%20key%3D%22sp_261200%22%3E%3C%21%5BCDATA%5Btrue%5D%5D%3E%3C%2Fe%3E%3Ce%20key%3D%22sp_261220%22%3E%3C%21%5BCDATA%5Btrue%5D%5D%3E%3C%2Fe%3E%3Ce%20key%3D%22sp_260890%22%3E%3C%21%5BCDATA%5B%2FDidYouKnow%2FHardware_Software%2FBootProcess.asp%5D%5D%3E%3C%2Fe%3E%3Ce%20key%3D%22sp_260880%22%3E%3C%21%5BCDATA%5Bwww.webopedia.com%5D%5D%3E%3C%2Fe%3E%3Ce%20key%3D%22sp_260920%22%3E%3C%21%5BCDATA%5B19839010%5D%5D%3E%3C%2Fe%3E%3C%2Fa%3E"></span>    <span id="assetsListings_dataValues" style="display:none" class="%3Ca%20class%3D%22array%22%3E%3Ce%20key%3D%22IO%22%3E%3C%21%5BCDATA%5BMULTI-MATCH%5D%5D%3E%3C%2Fe%3E%3Ce%20key%3D%22LoadProductContentMap%22%3E%3C%21%5BCDATA%5Btrue%5D%5D%3E%3C%2Fe%3E%3Ce%20key%3D%22AllClientsRequireAssets%22%3E%3C%21%5BCDATA%5Btrue%5D%5D%3E%3C%2Fe%3E%3C%2Fa%3E"></span>    <span id="assetsListings_tracking" style="display:none" class="%5B%2220140318072150234371671%22%5D"></span>    <span id="assetsListings_ajaxLoadEffect" style="display:none;" class="progressBar"></span>    <span id="assetsListings_useOnPageWrapper" style="display:none;" class="true"></span>    <span id="assetsListings_optimizeForUser" style="display:none;" class="true"></span>    <div id="assetsListings_listing">                        <div class="assetNew" style="cursor: hand; cursor: pointer;" onclick="window.open('http://o1.qnsr.com/cgi/r?WT.qs_dlk=UyfbcgrIZ2MAAGYOioUAAAAM;;;n=203;c=1395322;s=9534;x=7936;f=201308291518020;u=j;z=TIMESTAMP;k=http://www.webopedia.com/ebooks/182224010/95980/10770310/208756?BLUID=20140318072150234371671');">                    <div class="assetNew-icon">                        <img src="The%20System%20Boot%20Process%20Explained%20-%20Webopedia_files/pdfImage.jpg" width="35" height="35" border="0">                    </div>                    <div class="assetNew-title">                        DDoS and Downtime: Considerations for Risk Management                    </div>                    <div class="assetNew-download">                        <a href="javascript:%20return%20false;" onclick="return false;" class="assetNew-download-link qsctCached bluid_20140318072150234371671">Download Now</a>                    </div>                </div>                </div></div>
</div>
<p></p>
<p>The BIOS typically looks to the CMOS chip to tell it where to find 
the OS, and in most PCs, the OS loads from the C drive on the hard drive
 even though the BIOS has the capability to load the OS from a floppy 
disk, CD or <a href="http://www.webopedia.com/TERM/Z/Zip_drive.html">ZIP drive</a>. The order of drives that the CMOS looks to in order to locate the OS is called the <a href="http://www.webopedia.com/TERM/B/boot_sequence.html">boot sequence</a>,
 which can be changed by altering the CMOS setup. Looking to the 
appropriate boot drive, the BIOS will first encounter the boot record, 
which tells it where to find the beginning of the OS and the subsequent 
program file that will initialize the OS.</p>
<p>Once the OS initializes, the BIOS copies its files into memory and 
the OS basically takes over control of the boot process. Now in control,
 the OS performs another inventory of the system's memory and memory 
availability (which the BIOS already checked) and loads the device <a href="http://www.webopedia.com/TERM/D/driver.html">drivers</a> that it needs to control the <a href="http://www.webopedia.com/TERM/P/peripheral_device.html">peripheral devices</a>, such as a <a href="http://www.webopedia.com/TERM/P/printer.html">printer</a>, <a href="http://www.webopedia.com/TERM/O/optical_scanner.html">scanner</a>, optical drive, mouse and keyboard. This is the final stage in the boot process, after which the user can access the system’s <a href="http://www.webopedia.com/TERM/A/application.html">applications</a> to perform tasks.</p>
</td>
</tr>
</tbody>
</table>
<table>
<tbody>
<tr>
<td><strong>Key Terms to Understanding&nbsp;the System Boot process:</strong> 
<ul>
<li> <a href="http://www.webopedia.com/TERM/B/boot_sequence.html">Boot sequence</a></li>
<li> <a href="http://www.webopedia.com/TERM/B/BIOS.html">BIOS</a></li>
<li> <a href="http://www.webopedia.com/TERM/C/CPU.html">CPU</a></li>
<li> <a href="http://www.webopedia.com/TERM/C/clock_tick.html">clock ticks</a></li>
<li> <a href="http://www.webopedia.com/TERM/P/power_on_self_test.html">power-on self test</a></li>
<li> <a href="http://www.webopedia.com/TERM/C/CMOS.html">CMOS</a></li>
<li> <a href="http://www.webopedia.com/TERM/R/RAM.html">RAM</a></li>
<li> <a href="http://www.webopedia.com/TERM/P/port.html">ports</a></li>
<li> <a href="http://www.webopedia.com/TERM/K/keyboard.html">keyboard</a></li>
<li> <a href="http://www.webopedia.com/TERM/P/peripheral_device.html">peripheral devices</a></li>
<li> <a href="http://www.webopedia.com/TERM/D/driver.html">drivers</a></li>
</ul>
<p><strong>Related Articles on Webopedia:</strong></p>
<ul>
<li>
<p><a href="http://www.webopedia.com/didyouknow/computer_science/2005/overclocking.asp"> Understanding CPU Overclocking</a></p>
</li>
<li> <a href="http://www.webopedia.com/DidYouKnow/Hardware_Software/2005/computer_bus.asp"> Understanding PC Buses</a></li>
</ul>
</td>
</tr>
</tbody>
</table><br><br>    <br clear="all">
    <div class="article_pagination">
    <div class="previous_link"><a href="http://www.webopedia.com/DidYouKnow/Hardware_Software/history_of_microsoft_windows_operating_system.html">PREVIOUS<br><span class="page_title">The History of Microsoft Operating Systems </span></a></div><div class="next_link"><a href="http://www.webopedia.com/DidYouKnow/Hardware_Software/windows_system_registry.asp">NEXT<br><span class="page_title">The Windows System Registry</span></a></div>        <br clear="all">
    </div>
    <br clear="all">

            <div class="related_links_container">
        <h3>Related Links</h3>
        <ul id="related_links">
            
                <li><a href="http://www.webopedia.com/didyouknow/computer_science/2005/overclocking.asp" target="_blank">What Is CPU Overclocking?</a></li>
        
                <li><a href="http://www.webopedia.com/DidYouKnow/Hardware_Software/2005/computer_bus.asp" target="_blank">Understanding PC Buses</a></li>
        
            </ul>
        </div>
            <br clear="all">
<!-- End article widget--><div class="business-listing-title-container">
    TECH RESOURCES FROM OUR PARTNERS
</div>
<iframe id="whitePaperIFrame" src="The%20System%20Boot%20Process%20Explained%20-%20Webopedia_files/a.html" scrolling="no" frameborder="0" align="middle"></iframe>

<!-- iframe id='whitePaperIFrame' scrolling="no" frameborder="0" align="middle" src="http://www.webopedia.com/sl/assetlisting/?wsn=www.webopedia.com&amp;wpu=/TERM/D/device_manager.html&amp;lurl=http://o1.qnsr.com/cgi/r?WT.qs_dlk=UyfbcgrIZ2MAAGYOioUAAAAM;;;n=203;c=1369294;s=8986;x=7936;f=201210042112000;u=j;z=TIMESTAMP;k=http://local.new.webopedia.com/ebooks&amp;wpos=AssetListing&amp;lyt=h1&css=http://local.new.webopedia.com/css/businesslisting.css&wi=20776810&title=More Storage Downloads" style="height: 1800px;"></iframe -->


<!--div id="business-listing-container">
<script language="javascript" src=""></script>
</div-->
<!-- div style="clear:both;margin-bottom:15px"></div -->
                </div>
                                
                                <div id="article_right_column" class="right_column">    
                    
<!--Start imu ad-->
<div class="imu"><!-- QS-AD: 'imu' start -->
<script language="JavaScript">
	var my_tag = displayDFPTag("imu");
	document.write(my_tag);
</script><div id="imu-1">
	<script type="text/javascript">
		googletag.display('imu-1');
	</script><div id="imu-1_ad_container"><script language="javascript" src="The%20System%20Boot%20Process%20Explained%20-%20Webopedia_files/ibmbigdata_1-2014.js"></script><script type="text/javascript" src="The%20System%20Boot%20Process%20Explained%20-%20Webopedia_files/jquery-1.js"></script><script type="text/javascript" src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script></div></div></div></div></div></div></div><div class=" fb_reset" id="fb-root"><div style="position: absolute; top: -10000px; height: 0px; width: 0px;"><div><iframe src="The%20System%20Boot%20Process%20Explained%20-%20Webopedia_files/LEdxGgtB9cN.html" style="border: medium none;" tab-index="-1" title="Facebook Cross Domain Communication Frame" aria-hidden="true" id="fb_xdm_frame_http" allowtransparency="true" name="fb_xdm_frame_http" scrolling="no" frameborder="0"></iframe><iframe src="The%20System%20Boot%20Process%20Explained%20-%20Webopedia_files/LEdxGgtB9cN_002.html" style="border: medium none;" tab-index="-1" title="Facebook Cross Domain Communication Frame" aria-hidden="true" id="fb_xdm_frame_https" allowtransparency="true" name="fb_xdm_frame_https" scrolling="no" frameborder="0"></iframe></div></div></div></body></html>