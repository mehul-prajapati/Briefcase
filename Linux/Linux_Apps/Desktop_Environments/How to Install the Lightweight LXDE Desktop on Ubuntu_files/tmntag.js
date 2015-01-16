tmntag.pubtargets = [];
tmntag.pubtargets.push(['TUUID', '1E1840AD7360476881232E6B826A4C29']);
tmntag.pubtargets.push(['mcat', ['p23']]);
tmntag.pubtargets.push(['_pgid', '1b62ea0a']);
tmntag.pubtargets.push(['scat', ['i328','i349','i360','i350','i351']]);
tmntag.adtargets = [];
tmntag.markups=[];
tmntag.adtargets['div-1342-2']=[];
tmntag.adtargets['div-1342-2'].push(['adsense2', 'adsense2']);
tmntag.adtargets['div-1342-1']=[];
tmntag.adtargets['div-1342-1'].push(['adsense1', 'adsense1']);
tmntag.adtargets['div-1342-3']=[];
tmntag.adtargets['div-1342-3'].push(['adsense3', 'adsense3']);
tmntag.adtargets['div-gpt-ad-1342044737928-2']=[];
tmntag.adtargets['div-gpt-ad-1342044737928-14']=[];
tmntag.adtargets['div-gpt-ad-1342044737928-1']=[];
tmntag.adtargets['div-gpt-ad-1342044737928-5']=[];
tmntag.adtargets['div-gpt-ad-1342044737928-12']=[];
googletag.cmd.push(function() {
	if(typeof tmntag!='undefined' && typeof tmntag.a!='undefined') {
		for (var i=0; i<tmntag.a.length; i++) {
			var slot;
			var unit = tmntag.a[i];
			if (unit.z) {
               slot = googletag.defineSlot(unit.s, unit.z, unit.d).addService(googletag.pubads());
			} else {
               slot = googletag.defineOutOfPageSlot(unit.s, unit.d).addService(googletag.pubads());
			}
			if (unit.c) {
                slot.addService(googletag.companionAds().setRefreshUnfilledSlots(unit.c));
            }
			tmntag.slots[unit.d]=slot;
			if(typeof tmntag.adtargets!='undefined') {
			   var targetData = tmntag.adtargets[unit.d];
			   for (var j=0; typeof targetData!='undefined' && j<targetData.length; j++) {
                              slot.setTargeting(targetData[j][0], targetData[j][1]);
			   }
		    }

            if(tmntagCache && typeof tmntagCache[i].sizeMapping!='undefined') {
               slot.defineSizeMapping(tmntagCache[i].sizeMapping);
            }
		}
	}
    if(typeof tmntag!='undefined' && typeof tmntag.pubtargets!='undefined') {
		for (var i=0; i<tmntag.pubtargets.length; i++) {
	      		googletag.pubads().setTargeting(tmntag.pubtargets[i][0], tmntag.pubtargets[i][1]);
		}
	}

	if(typeof tmntag!='undefined' && typeof tmntag.su!='undefined' && tmntag.su===1 && typeof tmntag.l!='undefined') {
		googletag.pubads().set("page_url", decodeURIComponent(tmntag.l));
	}


if(typeof tmntag!='undefined' && typeof tmntag.sr!='undefined' && tmntag.sr==true) {
   googletag.pubads().enableSingleRequest();
}
if(typeof tmntag!='undefined' && typeof tmntag.ced!='undefined' && tmntag.ced==true) {
   googletag.pubads().collapseEmptyDivs();
}
googletag.enableServices();
});
for (divid in tmntag.slots) {
	var e = document.getElementById(divid);
	if (e && typeof e !='undefined') {
		googletag.cmd.push(function() { googletag.display(divid); });
	}
}
tmntag_ready(function() {
var s = document.createElement("span");
s.style.display='none';
s.innerHTML = "<iframe style=\"display:none\" src=\"http:\/\/ip.casalemedia.com\/usermatch?s=181869&cb=http%3A%2F%2Fads.servebom.com%2Fpartner%3Fsvc%3Dus%26id%3D2%26uid%3D\"><\/iframe>";
document.body.appendChild(s);
});

tmntag_ready(function() {
var s = document.createElement("span");
s.style.display='none';
s.innerHTML = "<iframe style=\"display:none\" src=\"http:\/\/ads.pubmatic.com\/AdServer\/js\/user_sync.html?predirect=http%3A%2F%2Fads.servebom.com%2Fpartner%3Fsvc%3Dus%26id%3D5%26uid%3D\"><\/iframe>";
document.body.appendChild(s);
});

/* Bluekai*/
(function(){
var _bkID = '19483';
if (_bkID=='' || _bkID.indexOf('$')==0) {
	_bkID='20915';
}
window.bk_async = function() {
var _visitorID = 'VISITOR_ID';
if (_visitorID!='' && _visitorID.indexOf('$')!=0) {
    bk_addPageCtx('pid', '1E1840AD7360476881232E6B826A4C29');
}
BKTAG.doTag(_bkID, 4); };
(function() {
   var scripts = document.getElementsByTagName('script')[0];
   var s = document.createElement('script');
   s.async = true;
   s.src = 'http://tags.bkrtx.com/js/bk-coretag.js';
   scripts.parentNode.insertBefore(s, scripts);
}());
})();
/* /Bluekai*/

/* Comscore */
var _comscoreID = '${PAGE_DOMAIN:COMSCORE_ID}';
if (_comscoreID!='' && _comscoreID.indexOf('$')!=0) {
    var scripts = document.getElementsByTagName('script')[0];
	var s = document.createElement('script');
	s.src = (document.location.protocol=="https:"?"https://sb":"http://b")+".scorecardresearch.com/beacon.js";
	scripts.parentNode.insertBefore(s, scripts);
   
	s = document.createElement('script');
	s.innerHTML = "setTimeout('COMSCORE.beacon({"+
		   "c1:2," +
		   "c2:\""+_comscoreID+"\"," +
           "c3:\""+_comscoreID+"\"," +
           "c4:\"http://www.howtogeek.com/107368/how-to-install-the-lightweight-lxde-desktop-on-ubuntu/\"," +
           "c5:\"Technology - News\"," +
           "c6:\"\"," +
           "c15:\"\"" +
		   "});', 3000);";
   scripts.parentNode.insertBefore(s, scripts);
}
/* /Comscore */

tmntag_ready(function() {
var scripts = document.getElementsByTagName('script')[0];var s = document.createElement("script");
s.type = "text/javascript";
s.innerHTML = "\/* Linksmart *\/\nvar _linksmartID = \'${PAGE_DOMAIN:LINKSMART_ID}\';\nif (_linksmartID!=\'\' && _linksmartID.indexOf(\'$\')!=0) {\n  var _ls_pub_id = _linksmartID;\n  (function(d, t){\n  var mb = d.createElement(t), s = d.getElementsByTagName(t)[0];\n  mb.async = mb.src = \'\/\/cdn.linksmart.com\/linksmart_2.3.0.min.js\';\n  s.parentNode.insertBefore(mb, s);\n  }(document, \'script\'));\n}\n\/* \/Linksmart *\/";
scripts.parentNode.insertBefore(s, scripts);
});

tmntag_ready(function() {
var scripts = document.getElementsByTagName('script')[0];var s = document.createElement("script");
s.type = "text/javascript";
s.innerHTML = "\/* Qualtrics *\/\nvar _qualtricsID = \'${PAGE_DOMAIN:QUALTRICS_ID}\';\nif (_qualtricsID!=\'\' && _qualtricsID.indexOf(\'$\')!=0) {\n   (function () {\n           var g = function (e, h, f, g) {\n               this.get = function (a) { for (var a = a + \"=\", c = document.cookie.split(\";\"), b = 0, e = c.length; b < e; b++) { for (var d = c[b]; \" \" == d.charAt(0); ) d = d.substring(1, d.length); if (0 == d.indexOf(a)) return d.substring(a.length, d.length) } return null };\n               this.set = function (a, c) { var b = \"\", b = new Date; b.setTime(b.getTime() + 6048E5); b = \"; expires=\" + b.toGMTString(); document.cookie = a + \"=\" + c + b + \"; path=\/; \" };\n               this.check = function () { var a = this.get(f); if (a) a = a.split(\":\"); else if (100 != e) \"v\" == h && (e = Math.random() >= e \/ 100 ? 0 : 100), a = [h, e, 0], this.set(f, a.join(\":\")); else return !0; var c = a[1]; if (100 == c) return !0; switch (a[0]) { case \"v\": return !1; case \"r\": return c = a[2] % Math.floor(100 \/ c), a[2]++, this.set(f, a.join(\":\")), !c } return !0 };\n               this.go = function () { if (this.check()) { var a = document.createElement(\"script\"); a.type = \"text\/javascript\"; a.src = g + \"&t=\" + (new Date()).getTime(); document.body && document.body.appendChild(a) } };\n               this.start = function () { var a = this; window.addEventListener ? window.addEventListener(\"load\", function () { a.go() }, !1) : window.attachEvent && window.attachEvent(\"onload\", function () { a.go() }) } \n           };\n           try { (new g(100, \"r\", \"QSI_S_\"+_qualtricsID, \"\/\/\"+_qualtricsID.toLowerCase()+\"-techmedianetwork.siteintercept.qualtrics.com\/WRSiteInterceptEngine\/?Q_ZID=\"+_qualtricsID+\"&Q_LOC=\" + encodeURIComponent(window.location.href))).start() } catch (i) { } \n   })();\n   var d = document.createElement(\'div\');\n   d.id = _qualtricsID;\n   d.innerHMTL=\'<!--DO NOT REMOVE-CONTENTS PLACED HERE-->\';\n   document.body.appendChild(d);\n}\n\/* \/Qualtrics *\/";
scripts.parentNode.insertBefore(s, scripts);
});

tmntag_ready(function() {
var scripts = document.getElementsByTagName('script')[0];var s = document.createElement("script");
s.type = "text/javascript";
s.innerHTML = "\/* Adroll *\/\nadroll_adv_id = \'LUPCT5CAU5BYVHRJM2RKAU\'; \nadroll_pix_id = \'TANGANKPQJFAXD655NREJ4\';\nif (adroll_adv_id!=\'\' && adroll_adv_id.indexOf(\'$\')!=0\n && adroll_pix_id!=\'\' && adroll_pix_id.indexOf(\'$\')!=0) {\n  (function () {\n  var oldonload = window.onload;\n  window.onload = function(){\n     __adroll_loaded=true;\n     var scr = document.createElement(\"script\");\n     var host = ((\"https:\" == document.location.protocol) ? \"https:\/\/s.adroll.com\" : \"http:\/\/a.adroll.com\");\n     scr.setAttribute(\'async\', \'true\');\n     scr.type = \"text\/javascript\";\n     scr.src = host + \"\/j\/roundtrip.js\";\n     ((document.getElementsByTagName(\'head\') || [null])[0] ||\n      document.getElementsByTagName(\'script\')[0].parentNode).appendChild(scr);\n     if(oldonload){oldonload()}};\n  }());\n}\n\/* \/Adroll *\/";
scripts.parentNode.insertBefore(s, scripts);
});

/* Exelate */
(function(){
	var _exelateIDg = '${PAGE_DOMAIN:EXELATE_IDG}';
	var _exelateIDc = '${PAGE_DOMAIN:EXELATE_IDC}';
	if (_exelateIDc.indexOf('$')==0) {
		_exelateIDc = '';
	}
	if (_exelateIDg!='' && _exelateIDg.indexOf('$')!=0) {
		var xl8_script = document.createElement("script");		xl8_script.src = "http://loadus.exelator.com/load/?p=274&g="+_exelateIDg+"&c="+_exelateIDc+"&ctg=&subctg=&age=&gd=&j=d";		xl8_script.type = "text/javascript"; 
		xl8_script.async = true; 
		if (document.body) document.body.appendChild(xl8_script);
		var scripts = document.getElementsByTagName('script')[0];
		scripts.parentNode.insertBefore(xl8_script, scripts);
	}
})();
/* /Exelate*/
