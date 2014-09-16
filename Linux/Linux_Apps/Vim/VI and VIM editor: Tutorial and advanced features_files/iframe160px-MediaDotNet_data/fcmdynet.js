   try {
var _mN = _mN || {};
var iframeURL = 'http://contextual.media.net/mediamain.html?cid=8CUKYS9EX&crid=678748431&pid=8PO62Y61S&size=160x600&cpnet=yVb1sHm%2B0KIh29BOFTjjrNkVna1nTU878FlJSdidtfU%3D&cme=%2BGrnje2DVSUEOXxUGC8xNiavel%2FfZ5Xsnz4bMh%2Blsr2y9cSqHE3VUyQktXJ1%2BfoMvtRtwN16AdqxG3QiEzO0jw2HSju8MuffVOH2BYV8rCw%3D%7C%7CN7fu2vKt8%2Fs%3D%7CFcl4VLL%2BIaLv7%2Bws8%2FYm2aQHXnFWTbOn1Kvyfz80H%2BCXwLexzlUdEg6h6ZNX7K7bv7U%2Ba1VnyJx%2Bkeq0nAAOTWulxJbCvumu%7CJf0d%2BWoAdPugZdiC0MCJNGSoD9GorE2HXV9tCnfaib0%3D%7C&cc=IN&bf=0&vif=2';
var locHash = '';
try{
	if(typeof _mNDetails != 'undefined' && _mNDetails['locHash'] && _mNDetails['locHash']['678748431']){ locHash += _mNDetails['locHash']['678748431'];};
	if(locHash != ''){
		locHash = '#'+locHash;
	}
	locHash += '&dytm=' + new Date().getTime();
}catch(e){}
iframeURL += locHash;
_mNDetails = (typeof _mNDetails != "undefined")?_mNDetails:{};
_mNDetails['locHash'] = _mNDetails['locHash'] || {};		
    _mNDetails['locHash']['678748431'] = locHash;
var _mN_mc_cnt = _mN_mc_cnt || 0; 
var _mN_mc_frameID = '_mN_main_678748431'+'_'+_mN_mc_cnt++;
_mNDetails = (typeof _mNDetails != "undefined")?_mNDetails:{};
_mNDetails['iframeURL'] = _mNDetails['iframeURL'] || {};
_mNDetails['iframeURL']['678748431'] = iframeURL;
_mNDetails['iframeID'] = _mNDetails['iframeID'] || {};
_mNDetails['iframeID']['678748431'] = _mN_mc_frameID; 
document.write("<iframe marginwidth='0' marginheight='0' scrolling='NO' frameborder='0' height='600' width='160' id='"+_mN_mc_frameID+"' style='display:none;' ></iframe>");
var _mN_mainCont = '<!DOCTYPE html><html><head><scr'+'ipt type="text/javascript">var  publisherScope = window.parent.winScope; var iframeID = typeof(frameID) !== "undefined" ? frameID : window.parent._mNDetails["iframeID"]["678748431"],  callback = false, dyncId = iframeID.replace("main", "dy").replace(/_[0-9]*$/g, ""),  mFrame = window.parent._mNDetails["iframeURL"]["678748431"].replace(/#.*/,"");  function processL3(){loadL3();} window.parent.loadL3 = loadL3; function loadL3(){parent._mN_dy.putContent(iframeID, adContent.content, "160", "600", "", "0");};function createTag() {var scr = document.createElement("script");scr.onload = scr.onreadystatechange = function () { if(typeof adContent != "undefined" && !callback) { callback = true; processL3(); } };  scr.type = "text/javascript"; scr.src = mFrame+\'&nb=1\'; scr.async = "async"; document.getElementsByTagName("head")[0].appendChild(scr);};</scr'+'ipt></head><body onload="createTag()"></body></html>';
var _mN_dy = _mN_dy || {};_mN_dy.eventLib = {
	addEvent: function (elem, type, eventHandle) {
		if(elem.addEventListener) {
			elem.addEventListener( type, eventHandle, false );
		} else if ( elem.attachEvent ) {
			elem.attachEvent( "on" + type, eventHandle );
		}
		elem = null; // Handle Memory Leak
	},
	removeEvent: function(elem, type, eventHandle) {
		if (elem.removeEventListener) {
			elem.removeEventListener(type, eventHandle);
		} else if(elem.detachEvent) {
			elem.detachEvent('on' + type, eventHandle);
		}
		elem = null;
	}
};
_mN_dy.getContent = function (data, url, w, h, id, insl) {
	var ifr = document.getElementById(id),
	errload = function(){_mN_dy.getContent(data, url, w, h, id);};
	
	if(!ifr){
		_mN_dy.eventLib.addEvent(document, 'DOMContentLoaded', errload);  
		//_mN_dy.eventLib.addEvent(window, 'load', errload);
		ifr = null;
		return;
	}
	//_mN_dy.eventLib.removeEvent(window, 'load', errload);
	var doc,
	win = ifr.contentWindow || ifr.contentDocument; 
	try { 
		doc = (win && (win.document || win)) || false;
		if(doc) {
			doc.open();
			win.frameID = id;
			doc.write(data);
			doc.close();
			win.frameID = id;
			//win.locHash = window.locHash || null;
		}
	} catch (e) { 
		_mN_dy.putContent(id, '', w, h, url, insl);
	}
}
_mN_dy.putContent = function (id, data, w, h, url, insl) {
	var ifr = document.getElementById(id), 
	mainFrame = document.createElement("iframe");
	mainFrame.marginWidth = 0;
	mainFrame.marginHeight = 0;
	mainFrame.scrolling = "no";
	mainFrame.frameBorder = 0;
	mainFrame.height = h;
	mainFrame.width = w;
	mainFrame.id = id+"_n";
	mainFrame.setAttribute('allowTransparency', "true");
	
	if(url != '' && data == ''){
		mainFrame.src = url;
	}
	ifr.parentNode.insertBefore(mainFrame, ifr);
	if(url != '' && data == ''){
		mainFrame.parentNode.removeChild(ifr);
		return;
	}
	
	var win = mainFrame.contentWindow || mainFrame.contentDocument,
	doc = (win && (win.document || win)) || false;
	if(doc) { 
		try {
			if(/msie/.test(navigator.userAgent.toLowerCase())){
				throw 10;
			}
			doc.open();
			win.frameId = id+"_n";
			doc.write(data);
			doc.close();
			win.frameId = id+"_n";
			//win.locHash = window.locHash || null;
		} catch (e) { 
			win.data = data;
			doc.location.replace('javascript:window["data"];');
		}
		if(insl && insl == '1'){
			_mN_dy.inttAd && _mN_dy.inttAd.init && _mN_dy.inttAd.init(mainFrame);
		}
		mainFrame.parentNode.removeChild(ifr);
	}
}; _mN_dy["ha_678748431"] = (function(){ var id = _mN_mc_frameID+"_n"; return function (){  if(document.getElementById(id)){document.getElementById(id).style.display="none";}};})(); _mN_dy.getContent(_mN_mainCont, iframeURL, '160', '600', _mN_mc_frameID, '0');try {
    function chkSync(cid){
            var chkContent = '<!DOCTYPE html><html><head><scr'+'ipt type="text/javascript">var syncURL = "http://mycdn.media.net/checksync.php?cid='+ cid+'" ;  function createTag() { window.location.replace(syncURL); }</scr'+'ipt></head><body onload="createTag()"></body></html>';
            var mainFrame = document.createElement("iframe");
            mainFrame.id = "_mN_cksync";
            mainFrame.marginWidth = 0;
            mainFrame.marginHeight = 0;
            mainFrame.width = 0;
            mainFrame.height = 0;
            mainFrame.scrolling = "no";
            mainFrame.style.cssText = 'display:none !important;';
            document.getElementsByTagName("body")[0].appendChild(mainFrame);
            _mN_dy.getContent(chkContent, '', '0', '0', '_mN_cksync', '0');


    };
    var windowScope = window.parent || window;
    if(typeof winScope == 'object') {
        windowScope = winScope
    }
    if(windowScope && windowScope._mNDetails) {
        if(windowScope._mNDetails['syncDone'] === undefined) {
          windowScope._mNDetails['syncDone'] = true;
          chkSync('8CUKYS9EX');
        }
    }
}
catch(e){
}} catch (err){
					var _mNerrStacktrace = '';
					if (err.stack) {_mNerrStacktrace = err.stack;}
					else if (err.s) {_mNerrStacktrace = err.s;}
					else if (err.stacktrace) {_mNerrStacktrace = err.stacktrace;}
					else _mNerrStacktrace = 'No StackTrace';
					
					var _mNobjTrace = '';
					for ( var x in err) {
						if (err.hasOwnProperty && err.hasOwnProperty(x)) {
							_mNobjTrace += x + " : '" + err[x] + "',";  
						}
					}
					
					var _mNurlsrc = 'http://qsearch.media.net/errping.php?&msg='+encodeURIComponent(_mNerrStacktrace)+'&err='+encodeURIComponent(err)+'&errObj='+encodeURIComponent(_mNobjTrace)+'&script=DynamicLayer&cid=8CUKYS9EX&crid=678748431';
					var _mNImgx  = new Image();
					_mNImgx.src = _mNurlsrc ;
			}