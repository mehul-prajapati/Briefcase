/* Copyright IBM Corp. 2008, 2013  All Rights Reserved.              */

var feedMarkletMenu = {

	menuTemplate:"",
	mnu:null,
	timeOutId:null,
	showOnHover:function(evt) {
		if(typeof(evt.target)=="undefined") {
			var lockedElement = evt.srcElement;
		} else {
			var lockedElement = evt.currentTarget;
		}
		try{feedMarkletMenu.mnu.destroy();}catch(e){}
		feedMarkletMenu.mnu = feedMarkletMenu.buildMenu(escape(lockedElement.getAttribute('href',2)));
		menuUtility.openMenu(evt, feedMarkletMenu.mnu.id);
		if (window.addEventListener) {
			window.addEventListener('click', feedMarkletMenu.hideOnClick, false);
		} else if (window.attachEvent) {
			window.attachEvent('onclick', feedMarkletMenu.hideOnClick);
		}
		feedMarkletMenu.startTimeOut(15000);
	},
	
	hideOnClick:function() {
		try{window.clearTimeout(feedMarkletMenu.timeOutId)}catch(e){}
		
		if (window.addEventListener) {
			try{window.removeEventListener('click', feedMarkletMenu.hideOnClick, false);}catch(e){}
		} else if (window.attachEvent) {
			try{window.detachEvent('onclick', feedMarkletMenu.hideOnClick);}catch(e){}
		}
		window.setTimeout(function(){try{feedMarkletMenu.mnu.destroy();}catch(e){}},300);
	},
	clearTimeOut:function() {
		try{window.clearTimeout(feedMarkletMenu.timeOutId)}catch(e){}
	},
	startTimeOut:function(tme) {
		feedMarkletMenu.timeOutId=window.setTimeout(feedMarkletMenu.hideOnClick,tme);
	},
	buildMenu:function(hrefLocation) {

		hrefLocation=feedMarkletMenu.fixLocation(hrefLocation);
		if(hrefLocation!=null){
			var menuid = "feedmarkletMenu";
			var menudiv = dojo.byId(menuid);
			if (!menudiv){
				menudiv = document.createElement("DIV");
				menudiv.id = menuid;
				menudiv.className = "lotusActionMenu";
				menudiv.style.display = "none";
				document.body.appendChild(menudiv);
			}
			var dynamicMenu = new dijit.Menu({targetNodeIds:[menuid], id: menuid});
			newItems=eval(feedMarkletActions.actions);
			for(var i=0;i<newItems.length;i++) {
				var loc=newItems[i].href.replace("%l",unescape(hrefLocation));
				if (loc.match("^javascript")){
					loc = loc.replace("javascript:", "");
					var temp = loc;
					dynamicMenu.addChild(new dijit.MenuItem({label:newItems[i].text, onClick:function(){eval(temp + ";")}}));
				}else {
					dynamicMenu.addChild(new dijit.MenuItem({
						label:newItems[i].text, 
						onClick:function(){
							eval("window.open('"+loc+"', '');");
							}
					}));
				}
				
			}
			dynamicMenu.startup();
			return dynamicMenu;
		}
	},
	fixLocation:function(loc) {
		var newURL="";
		if(loc!=null) {
			loc = feedMarkletMenu.trim(loc);
			if(loc.match("^http")) {
				newURL=loc;
			} else if(loc.match("^/")) {
				newURL=window.location.protocol+"//"+window.location.host+loc;
			} else {
				newURL=window.location.toString().substring(0,window.location.toString().lastIndexOf("/")+1)+loc;
			}
		}
		return newURL;
	},
    trim:function(stringToTrim) {
    	return stringToTrim.replace(/^\s+|\s+$/g,"");
    } 
}
