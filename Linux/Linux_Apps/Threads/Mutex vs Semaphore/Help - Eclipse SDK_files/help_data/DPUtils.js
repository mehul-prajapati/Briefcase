var DPArr = [];
var DPSelectbox = Class.create();
function getKey(key) {
    if(DPArr.length > 0) {
        for(var i = 0; i < DPArr.length; i++) {
            if(DPArr[i].key == key) {
                return DPArr[i];
            }
        }
    }
    return null;
}

DPSelectbox.prototype = {
    maxNode: 100,
    initialize: function() {   },
    create : function(div, param, style, lastFlag, callback, data) {
        this.disp = [];
        this.key = div;
        DPArr.push(this);
        var mobj = getKey(div);
        mobj.lastFlag = lastFlag;
        mobj.div = div;
        mobj.style = style;
        mobj.callback = callback;
        mobj.data = data;
        mobj.depth = 0;
        mobj.param = param;
        var code = mobj.data[1];
        if(mobj.param == null)
            mobj.param = "";
        else {
            mobj.param = mobj.param.strip();
        }
        if(!mobj.param.empty()) {
            var lpop;
            mobj.displayAll(div, mobj.param);
            while((tpop = mobj.disp.pop())) {
                mobj.makeLayer(div, tpop);
                tpop = mobj.disp.pop();
                $('DP_select_' + mobj.div + '_' + mobj.depth).value = tpop;
                lpop = tpop;
            }
            mobj.makeLayer(div, lpop);
            if(!mobj.lastFlag) {
                mobj.callback($('DP_select_' + mobj.div + '_' + mobj.depth));
            }
        }else {
            mobj.makeLayer(div, code);
        }
    },
    makeLayer : function(div, code) { // public
        var mobj = getKey(div);
        var obj;
        if (!mobj.isLast(div, code)) {
             mobj.depth++;
             mobj.makeSelect(div, code);
             if(!mobj.lastFlag) {
                var s = $('DP_select_' + mobj.div + '_' + mobj.depth).value;
                if(s.empty()) {
                    if(mobj.depth > 1) {
                        obj = $('DP_select_' + mobj.div + '_' + (mobj.depth-1));
                        mobj.callback(obj);
                    }else {
                        obj = $('DP_select_' + mobj.div + '_' + mobj.depth);
                        mobj.callback(obj);
                    }
                }
            }
        }else {
            obj = $('DP_select_' + mobj.div + '_' + mobj.depth);
            if(!mobj.lastFlag) {
                var s = $('DP_select_' + mobj.div + '_' + mobj.depth).value;
                if(s.empty()) {
                    if(mobj.depth > 1) {
                        obj = $('DP_select_' + mobj.div + '_' + (mobj.depth-1));
                    }
                }
            }
          mobj.callback(obj);
        }
    },
    makeSelect : function(div, code) { // private
        var mobj = getKey(this.div);
        var obj = document.createElement("select");
          var selName = "DP_select_" + mobj.div + "_" + mobj.depth;
        obj.setAttribute("id", selName);
        if(mobj.style != null) {
            obj.setAttribute("style", mobj.style);
        }
        var opt = document.createElement("option");
        var txt = document.createTextNode("-all-");
        opt.setAttribute("value", "");
        opt.appendChild(txt);
        obj.appendChild(opt);
        for(var i = 0; i < mobj.data.length; i+=3) {
         if(code == mobj.data[i+1]) {
          var opt = document.createElement("option");
          var txt = document.createTextNode(mobj.data[i+2]);
          opt.setAttribute("value", mobj.data[i]);
          opt.appendChild(txt);
          obj.appendChild(opt);
         }
        }
        $(mobj.div).appendChild(obj);
        $(selName).observe("change", function(event) {
           mobj.childNodeExist(div, code, $(selName).id);
           mobj.makeLayer(div, this.value);
        } );
        return obj;
    },
    isLast : function(div, code) {
        var mobj = getKey(div);
        var cnt = 0;
        for(var i = 0; i < mobj.data.length; i+=3) {
            if(code == mobj.data[i+1]) cnt++;
        }
        return (cnt == 0 ? true : false);
    },
    childNodeExist : function(div, code, tSel) {
        var mobj = getKey(div);
        var pos = tSel.lastIndexOf("_") + 1;
        var noStr = tSel.substring(pos);
        var no = parseInt(noStr) + 1;
        var flag = true;

        for(var i = no; i < mobj.maxNode; i++) {
         if($("DP_select_" + div + "_" + i) != null) {
          $(mobj.div).removeChild($("DP_select_" + div + "_" + i));
          flag = false;
         }
        }
        if(!flag) {
         mobj.depth = no-1;
        }
    },
    displayAll : function(div, param) {
        if(param.empty()) return;
        var mobj = getKey(div);
        for(var i = 0; i < mobj.data.length; i+=3) {
            if(param == mobj.data[i]) {
                mobj.disp.push(param);
                mobj.disp.push( mobj.data[i+1]);
                mobj.displayAll(div, mobj.data[i+1]);
            }
        }
    }
};
function ChartFlashDisplay(locale, dispId, url, width, height) {
  var fn = function() {
    var att = { data: "/" + locale + "/developer/apis/flash/wlpchart.swf?url=" + url,
		    width: width,
            height: height
          };
    var par = { flashvars:"foo=bar"  };
    var myObject = swfobject.createSWF(att, par, dispId);
  };
  swfobject.addDomLoadEvent(fn);
}

function doWLO(postparam) {
	_n_sid = "DP00000001";
	_n_uid_cookie = "h5bugEHb67";

	try {
		logurl =  document.location.href;

		if ( logurl.indexOf("?") == -1 ) {
			logurl += "?" + postparam;
		}
		else {
			logurl += "&" + postparam;
		}

		n_click_logging(logurl);
	} catch (err) {
		alert(err.message);
	}
}
function goTopSearch(){
	if ( $("topSearch").value==null || $("topSearch").value.blank() != "" || $("topSearch").value.empty()!="" || $("topSearch").value=="Search for" ){
        $("topSearch").value = "Search for";
        return;
    }
    location.href = "/search/searchIndexList.do?menu=MC01120100&searchValue="+$("topSearch").value;  //dp쪽 검색 페이지쪽으로
}
function searchEnterKeyPress(e){
    var key = window.ActiveXObject ? window.event.keyCode : e.which;
		switch (key) {
			case 13:
				 this.goTopSearch();
			break;
		}
}
function goTopApiSearch(){
    location.href = "/search/apiSearchList.do?menu=MC01120700&searchValue="+$("topSearch").value;
}
function apiSearchEnterKeyPress(e){
    var key = window.ActiveXObject ? window.event.keyCode : e.which;
		switch (key) {
			case 13:
				 this.goTopApiSearch();
			break;
		}
}

function trim(str, chars) {   
    return ltrim(rtrim(str, chars), chars);      
}   
     
function ltrim(str, chars) {   
    chars = chars || "\\s";   
    return str.replace(new RegExp("^[" + chars + "]+", "g"), "");   
}   
     
function rtrim(str, chars) {   
    chars = chars || "\\s";   
    return str.replace(new RegExp("[" + chars + "]+$", "g"), "");      
} 
