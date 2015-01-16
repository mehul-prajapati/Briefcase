/* START Purch Ad Tag API */
(function(){
  if(document.addEventListener) {
	  window.tmntag_ready = function (handler) {
		  document.addEventListener("DOMContentLoaded", handler);
		  }
  } else if (document.attachEvent) {
	  window.tmntag_ready = function (handler) {
      var boundedHandler = function() {
    	  if ( document.readyState === "complete" ) {
    		  return handler.apply(document);
          }
      };
      document.attachEvent("onreadystatechange", boundedHandler);
    }
  } 
})();
tmntag_getAdUnit = function(unitId) {
  for(var i = 0; i < tmntag.a.length; i++) {
    if (tmntag.a[i].d === unitId) {
      return tmntag.a[i];
    }
  }
  return false;
}
tmntag_timestamp = function() {
    var date = new Date();
    //zero-pad a single zero if needed
    var zp = function (val) {
        return (val <= 9 ? '0' + val : '' + val);
    }

    //zero-pad up to two zeroes if needed
    var zp2 = function(val) {
        return val <= 99? (val <=9? '00' + val : '0' + val) : ('' + val ) ;
    }

    var d = date.getDate();
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var h = date.getHours();
    var min = date.getMinutes();
    var s = date.getSeconds();
    var ms = date.getMilliseconds();
    return '' + y + '-' + zp(m) + '-' + zp(d) + ' ' + zp(h) + ':' + zp(min) + ':' + zp(s);
};
tmntag_inIframe = function() {
	return (top !== self);
}
tmntag_IEVersion = function()
{
  var ret = -1;
  if (navigator.appName == 'Microsoft Internet Explorer') {
    var ua = navigator.userAgent;
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      ret = parseFloat( RegExp.$1 );
  }
  return ret;
}
tmntag_isArray = function(object) {
    if (object.constructor === Array) return true;
    else return false;
};
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
var tmntag={};
var tmntagCache=[];
tmntag.sr=true;
tmntag.ced=true;
tmntag.a=[];
tmntag.slots={};
tmntag.l=encodeURIComponent(window.top.document.location.href);
tmntag.t=tmntag_timestamp();
tmntag.tz=new Date().getTimezoneOffset();
tmntag.su=0;
tmntag.account = function (account) {
	tmntag.s=account;
}
tmntag.adunit = function (adunitObject) {
	var a = {};
	if (adunitObject.account) {
		a.s = adunitObject.account;
	} else if (tmntag.s) {
		a.s = tmntag.s;
	}
	if (adunitObject.sizes) {
		a.z = adunitObject.sizes;
	}
	if (adunitObject.div) {
		a.d = adunitObject.div;
	}
	if (adunitObject.targeting) {
		a.g = adunitObject.targeting;
	} else {
		a.g={};
	}
	if (adunitObject.companion) {
		a.c = adunitObject.companion;
	}
	tmntag.a.push(a);
	tmntagCache.push(adunitObject);
	return a;
}
tmntag.adunitTarget = function (adunitObject, key, value) {
	adunitObject.g[key] = value;
}
tmntag.target = function (targetingMap) {
	if (typeof targetingMap != 'object') return;
	if (!tmntag.g) {
		tmntag.g = targetingMap;
	}
	for (var key in targetingMap) {
  		if (targetingMap.hasOwnProperty(key)) {
  			var value = targetingMap[key];
  			if (value && tmntag_isArray(value)) {
  				for (var i in value) {
  					value[i] = value[i].replace(/'|&|#/g, "");
  				}
  				tmntag.g[key.replace(/'|&|#/g, "")]= value;
  			} else if (value) {
  				tmntag.g[key.replace(/'|&|#/g, "")]= value.replace(/'|&|#/g, "");
  			}
		}
	}
}
tmntag.location = function (location) {
	tmntag.l = encodeURIComponent(location);
	tmntag.su=1;
}
tmntag.adTag = function (divid, insertDiv) {
	if (typeof insertDiv=='undefined' || insertDiv) document.write("<div id=\""+divid+"\">");
	googletag.cmd.push(function() { googletag.display(divid); });
	if (typeof insertDiv=='undefined' || insertDiv) document.write("</div>");
}
tmntag.refresh =function(divIds, targeting) {
	var a = [];
	if (typeof divIds=='undefined') {
		googletag.pubads().refresh();
		return;
	} else if (divIds instanceof Array){
		for (var id in divIds) {
			var slot = tmntag.slots[divIds[id]];
			if (slot) {
				a.push(slot);
			}
		}
	} else {
		var slot = tmntag.slots[divIds];
		if (slot) {
			a.push(slot);
		}
	}
	if (a.length>0) {
		for (var slot in a) {
			if (targeting) {
				a[slot].clearTargeting();
				for (var key in targeting) {
  					if (targeting.hasOwnProperty(key)) {
  						a[slot].setTargeting(key, targeting[key]);
	  				}
				}
			}
		}
		googletag.pubads().refresh(a);
	}
}
tmntag.adunitClone = function (divId, cloneDivId, params) {
  if ('JSON' in window) {
    var origUnit  = tmntag_getAdUnit(divId);
    if (origUnit) {
      var unitClone;
      try { unitClone = JSON.parse(JSON.stringify(origUnit)); } catch (e) { return false; }
      unitClone.d = cloneDivId;
      if (params) {
        for (var k in params) {
          if (params.hasOwnProperty(k)) {
            unitClone[k] = params[k];
          }
        }
      }
      tmntag.a.push(unitClone);
      var slotClone = googletag.defineSlot(unitClone.s, unitClone.z, unitClone.d).addService(googletag.pubads());

      var targetingData = unitClone.g || {};
      for (var k in targetingData) {
        if (targetingData.hasOwnProperty(k) && targetingData[k]) {
          slotClone.setTargeting(k, targetingData[k]);
        }
      }
      googletag.cmd.push(function () {
        googletag.display(cloneDivId);
      });
      return slotClone;
    }
  }
  return false;
}
tmntag.disableSingleRequest = function() {
	tmntag.sr = false;
}
tmntag.disableCollapseEmptyDivs = function() {
	tmntag.ced = false;
}
tmntag.onAdunitRendered = function(callback) {
    callback = typeof callback === 'function' ? callback : function() {};
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
        callback({
            div: event.slot.getSlotId().getDomId(),
            size: {
              width: event.size[0],
              height: event.size[1]
            },
            _orig:event
        });
    });
}
tmntag.start = function () {
   var r = Math.floor(Math.random() * 11000);
   var qs = "r="+r+"&o="+(('JSON' in window)?JSON.stringify(tmntag).replace(/'|&|#/g, ""):"");
   var host = tmntag_findURL();
   var jsBids = [];
   if (typeof amznads!='undefined') {
      var aaxBids = amznads.getTokens();
      if (aaxBids!=null && aaxBids.length>0) {
         jsBids = [{'br':6, 'bs':aaxBids.join()}];
      }
      if (jsBids.length>0) {
         qs = "r="+r+"&o="+JSON.stringify(tmntag)+"&j="+JSON.stringify(jsBids);
      }
   }
   document.write("<script type='text/javascript' src='"+host+"tmntag.js?"+qs+"'></scr"+"ipt>");
}
tmntag_findURL = function () {
   for (var i=0; i<document.scripts.length; i++) {
      var script = document.scripts[i];
      var idx = script.src.indexOf('tmnhead.js');
      if (idx>0) {
         return(script.src.substring(0, idx));
      }
   }
   return 'http://ads.servebom.com/';
}
tmntag_render = function (doc, id) {
	if (typeof tmntag.markups!='undefined') {
		var markup = tmntag.markups[id];
		if (typeof markup!='undefined' && markup!=null) {
			doc.write(markup);
			var slot = tmntag.slots[id];
			if (slot) {
				var keys = slot.getTargetingKeys();
				slot.setTargeting("_bd", "none");
			}
		}
	}
}
document.write("<script src='//www.googletagservices.com/tag/js/gpt.js'></scr"+"ipt>");
/* OpenX */
(function(){
openxID = '10518929-TMNP.HOWTOGEEK';
if (openxID!='' && openxID.indexOf('$')!=0) {
    document.write("<script src='//ox-d.tmn.servedbyopenx.com/w/1.0/jstag?ef=db&nc="+openxID+"'></scr"+"ipt>");
}
})();
/* /OpenX */
/* Amazon */
if (!tmntag_inIframe() && (tmntag_IEVersion()==-1 || tmntag_IEVersion()>=9)) {
	(function(){
		try {
			aaxID = '3150';
			if (aaxID!='' && aaxID.indexOf('$')!=0) {
				document.write("<script src='http://c.amazon-adsystem.com/aax2/amzn_ads.js'></scr"+"ipt>");
				document.write("<script>if(typeof amznads!='undefined')amznads.getAds(aaxID);</scr"+"ipt>");
			}
		} catch (e) {
			console.error(e)
		}
	})();
}
/* /Amazon */
/* END Purch Ad Tag API */