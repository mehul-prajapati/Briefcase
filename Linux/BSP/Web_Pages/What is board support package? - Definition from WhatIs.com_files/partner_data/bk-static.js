/* 3.0.17-73642 */ 
!function(){function createCookie(a,b,c){if(c){var d=new Date;d.setTime(d.getTime()+1000*60*60*24*c);var e="; expires="+d.toGMTString();}else{var e="";}document.cookie=a+"="+b+e+"; path=/";}function readCookie(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "==e.charAt(0);){e=e.substring(1,e.length);}if(0==e.indexOf(b)){return e.substring(b.length,e.length);}}return null;}function eraseCookie(a){createCookie(a,"",-1);}var requirejs,require,define;!function(a){function b(a,b){var c,d,e,f,g,h,i,j=b&&b.split("/"),k=m.map,l=k&&k["*"]||{};if(a&&"."===a.charAt(0)&&b){for(j=j.slice(0,j.length-1),a=j.concat(a.split("/")),g=0;i=a[g];g++){if("."===i){a.splice(g,1),g-=1;}else{if(".."===i){if(1===g&&(".."===a[2]||".."===a[0])){return !0;}g>0&&(a.splice(g-1,2),g-=2);}}}a=a.join("/");}if((j||l)&&k){for(c=a.split("/"),g=c.length;g>0;g-=1){if(d=c.slice(0,g).join("/"),j){for(h=j.length;h>0;h-=1){if(e=k[j.slice(0,h).join("/")],e&&(e=e[d])){f=e;break;}}}if(f=f||l[d]){c.splice(0,g,f),a=c.join("/");break;}}}return a;}function c(b,c){return function(){return j.apply(a,o.call(arguments,0).concat([b,c]));};}function d(a){return function(c){return b(c,a);};}function e(a){return function(b){k[a]=b;};}function f(b){if(l.hasOwnProperty(b)){var c=l[b];delete l[b],n[b]=!0,i.apply(a,c);}if(!k.hasOwnProperty(b)){throw new Error("No "+b);}return k[b];}function g(a,c){var e,g,h=a.indexOf("!");return -1!==h?(e=b(a.slice(0,h),c),a=a.slice(h+1),g=f(e),a=g&&g.normalize?g.normalize(a,d(c)):b(a,c)):a=b(a,c),{f:e?e+"!"+a:a,n:a,p:g};}function h(a){return function(){return m&&m.config&&m.config[a]||{};};}var i,j,k={},l={},m={},n={},o=[].slice;i=function(b,d,i,j){var m,o,p,q,r,s,t=[];if(j=j||b,"function"==typeof i){for(d=!d.length&&i.length?["require","exports","module"]:d,s=0;s<d.length;s++){if(r=g(d[s],j),p=r.f,"require"===p){t[s]=c(b);}else{if("exports"===p){t[s]=k[b]={},m=!0;}else{if("module"===p){o=t[s]={id:b,uri:"",exports:k[b],config:h(b)};}else{if(k.hasOwnProperty(p)||l.hasOwnProperty(p)){t[s]=f(p);}else{if(r.p){r.p.load(r.n,c(j,!0),e(p),{}),t[s]=k[p];}else{if(!n[p]){throw new Error(b+" missing "+p);}}}}}}}q=i.apply(k[b],t),b&&(o&&o.exports!==a&&o.exports!==k[b]?k[b]=o.exports:q===a&&m||(k[b]=q));}else{b&&(k[b]=i);}},requirejs=require=j=function(b,c,d,e){return"string"==typeof b?f(g(b,c).f):(b.splice||(m=b,c.splice?(b=c,c=d,d=null):b=a),c=c||function(){},e?i(a,b,c,d):setTimeout(function(){i(a,b,c,d);},15),j);},j.config=function(a){return m=a,j;},define=function(a,b,c){b.splice||(c=b,b=[]),l[a]=[a,b,c];},define.amd={jQuery:!0};}(),define("../vendor/almond",function(){}),fortyone=new function(){this.e=new Date(2005,0,15).getTimezoneOffset(),this.f=new Date(2005,6,15).getTimezoneOffset(),this.plugins=[],this.d={Flash:["ShockwaveFlash.ShockwaveFlash",function(a){return a.getVariable("$version");}],Director:["SWCtl.SWCtl",function(a){return a.ShockwaveVersion("");}]},this.r=function(a){var b;try{b=document.getElementById(a);}catch(c){}if(null===b||"undefined"==typeof b){try{b=document.getElementsByName(a)[0];}catch(d){}}if(null===b||"undefined"==typeof b){for(var e=0;e<document.forms.length;e++){for(var f=document.forms[e],g=0;g<f.elements.length;g++){var h=f[g];if(h.name===a||h.id===a){return h;}}}}return b;},this.b=function(a){var b="";try{"undefined"!=typeof this.c.getComponentVersion&&(b=this.c.getComponentVersion(a,"ComponentID"));}catch(c){a=c.message.length,a=a>40?40:a,b=escape(c.message.substr(0,a));}return b;},this.exec=function(b){for(var c=0;c<b.length;c++){try{var d=eval(b[c]);if(d){return d;}}catch(e){}}return"";},this.p=function(a){var b="";try{if(navigator.plugins&&navigator.plugins.length){var c=RegExp(a+".* ([0-9._]+)");for(a=0;a<navigator.plugins.length;a++){var d=c.exec(navigator.plugins[a].name);null===d&&(d=c.exec(navigator.plugins[a].description)),d&&(b=d[1]);}}else{if(window.ActiveXObject&&this.d[a]){try{var e=new ActiveXObject(this.d[a][0]);b=this.d[a][1](e);}catch(f){b="";}}}}catch(g){b=g.message;}return b;},this.q=function(){for(var a=["Acrobat","Flash","QuickTime","Java Plug-in","Director","Office"],b=0;b<a.length;b++){var c=a[b];this.plugins[c]=this.p(c);}},this.g=function(){return Math.abs(this.e-this.f);},this.h=function(){return 0!==this.g();},this.i=function(a){var b=Math.min(this.e,this.f);return this.h()&&a.getTimezoneOffset()===b;},this.n=function(a){var b=0;return b=0,this.i(a)&&(b=this.g()),b=-(a.getTimezoneOffset()+b)/60;},this.j=function(a,b,c,d){"boolean"!=typeof d&&(d=!1);for(var e,f=!0;(e=a.indexOf(b))>=0&&(d||f);){a=a.substr(0,e)+c+a.substr(e+b.length),f=!1;}return a;},this.m=function(){return new Date(2005,5,7,21,33,44,888).toLocaleString();},this.k=function(b){var c=new Date,d=[function(){return"TF1";},function(){return"015";},function(){return ScriptEngineMajorVersion();},function(){return ScriptEngineMinorVersion();},function(){return ScriptEngineBuildVersion();},function(a){return a.b("{7790769C-0471-11D2-AF11-00C04FA35D02}");},function(a){return a.b("{89820200-ECBD-11CF-8B85-00AA005B4340}");},function(a){return a.b("{283807B5-2C60-11D0-A31D-00AA00B92C03}");},function(a){return a.b("{4F216970-C90C-11D1-B5C7-0000F8051515}");},function(a){return a.b("{44BBA848-CC51-11CF-AAFA-00AA00B6015C}");},function(a){return a.b("{9381D8F2-0288-11D0-9501-00AA00B911A5}");},function(a){return a.b("{4F216970-C90C-11D1-B5C7-0000F8051515}");},function(a){return a.b("{5A8D6EE0-3E18-11D0-821E-444553540000}");},function(a){return a.b("{89820200-ECBD-11CF-8B85-00AA005B4383}");},function(a){return a.b("{08B0E5C0-4FCB-11CF-AAA5-00401C608555}");},function(a){return a.b("{45EA75A0-A269-11D1-B5BF-0000F8051515}");},function(a){return a.b("{DE5AED00-A4BF-11D1-9948-00C04F98BBC9}");},function(a){return a.b("{22D6F312-B0F6-11D0-94AB-0080C74C7E95}");},function(a){return a.b("{44BBA842-CC51-11CF-AAFA-00AA00B6015B}");},function(a){return a.b("{3AF36230-A269-11D1-B5BF-0000F8051515}");},function(a){return a.b("{44BBA840-CC51-11CF-AAFA-00AA00B6015C}");},function(a){return a.b("{CC2A9BA0-3BDD-11D0-821E-444553540000}");},function(a){return a.b("{08B0E5C0-4FCB-11CF-AAA5-00401C608500}");},function(){return eval("navigator.appCodeName");},function(){return eval("navigator.appName");},function(){return eval("navigator.appVersion");},function(a){return a.exec(["navigator.productSub","navigator.appMinorVersion"]);},function(){return eval("navigator.browserLanguage");},function(){return eval("navigator.cookieEnabled");},function(a){return a.exec(["navigator.oscpu","navigator.cpuClass"]);},function(){return eval("navigator.onLine");},function(){return eval("navigator.platform");},function(){return eval("navigator.systemLanguage");},function(){return eval("navigator.userAgent");},function(a){return a.exec(["navigator.language","navigator.userLanguage"]);},function(){return eval("document.defaultCharset");},function(){return eval("document.domain");},function(){return eval("screen.deviceXDPI");},function(){return eval("screen.deviceYDPI");},function(){return eval("screen.fontSmoothingEnabled");},function(){return eval("screen.updateInterval");},function(a){return a.h();},function(a){return a.i(c);},function(){return"@UTC@";},function(a){return a.n(c);},function(a){return a.m();},function(){return eval("screen.width");},function(){return eval("screen.height");},function(a){return a.plugins.Acrobat;},function(a){return a.plugins.Flash;},function(a){return a.plugins.QuickTime;},function(a){return a.plugins["Java Plug-in"];},function(a){return a.plugins.Director;},function(a){return a.plugins.Office;},function(){return(new Date).getTime()-c.getTime();},function(a){return a.e;},function(a){return a.f;},function(){return c.toLocaleString();},function(){return eval("screen.colorDepth");},function(){return eval("window.screen.availWidth");},function(){return eval("window.screen.availHeight");},function(){return eval("window.screen.availLeft");},function(){return eval("window.screen.availTop");},function(a){return a.a("Acrobat");},function(a){return a.a("Adobe SVG");},function(a){return a.a("Authorware");},function(a){return a.a("Citrix ICA");},function(a){return a.a("Director");},function(a){return a.a("Flash");},function(a){return a.a("MapGuide");},function(a){return a.a("MetaStream");},function(a){return a.a("PDFViewer");},function(a){return a.a("QuickTime");},function(a){return a.a("RealOne");},function(a){return a.a("RealPlayer Enterprise");},function(a){return a.a("RealPlayer Plugin");},function(a){return a.a("Seagate Software Report");},function(a){return a.a("Silverlight");},function(a){return a.a("Windows Media");},function(a){return a.a("iPIX");},function(a){return a.a("nppdf.so");},function(a){return a.o();}];this.q();for(var e="",f=0;f<d.length;f++){b&&(e+=this.j(d[f].toString(),'"',"'",!0),e+="=");var g;try{g=d[f](this);}catch(h){g="";}e+=b?g:escape(g),e+=";",b&&(e+="\\n");}return e=this.j(e,escape("@UTC@"),(new Date).getTime());},this.l=function(a){try{if(!a){return this.k();}var b;if(b=this.r(a),null!==b){try{b.value=this.k();}catch(c){b.value=escape(c.message);}}}catch(d){}},this.a=function(a){try{if(navigator.plugins&&navigator.plugins.length){for(var b=0;b<navigator.plugins.length;b++){var c=navigator.plugins[b];if(c.name.indexOf(a)>=0){return c.name+(c.description?"|"+c.description:"");}}}}catch(d){}return"";},this.o=function(){var a=document.createElement("span");a.innerHTML="&nbsp;",a.style.position="absolute",a.style.left="-9999px",document.body.appendChild(a);var b=a.offsetHeight;return document.body.removeChild(a),b;};};try{fortyone.c=document.createElement("span"),"undefined"!=typeof fortyone.c.addBehavior&&fortyone.c.addBehavior("#default#clientCaps");}catch(i){}window.fortyone=fortyone,window.fortyone.collect=fortyone.l,define("../vendor/fortyone",function(){}),"object"!=typeof JSON&&(JSON={}),function(){function f(a){return 10>a?"0"+a:a;}function quote(a){return escapable.lastIndex=0,escapable.test(a)?'"'+a.replace(escapable,function(a){var b=meta[a];return"string"==typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+a+'"';}function str(a,b){var c,d,e,f,g,h=gap,i=b[a];switch(i&&"object"==typeof i&&"function"==typeof i.toJSON&&(i=i.toJSON(a)),"function"==typeof rep&&(i=rep.call(b,a,i)),typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i){return"null";}if(gap+=indent,g=[],"[object Array]"===Object.prototype.toString.apply(i)){for(f=i.length,c=0;f>c;c+=1){g[c]=str(c,i)||"null";}return e=0===g.length?"[]":gap?"[\n"+gap+g.join(",\n"+gap)+"\n"+h+"]":"["+g.join(",")+"]",gap=h,e;}if(rep&&"object"==typeof rep){for(f=rep.length,c=0;f>c;c+=1){"string"==typeof rep[c]&&(d=rep[c],e=str(d,i),e&&g.push(quote(d)+(gap?": ":":")+e));}}else{for(d in i){Object.prototype.hasOwnProperty.call(i,d)&&(e=str(d,i),e&&g.push(quote(d)+(gap?": ":":")+e));}}return e=0===g.length?"{}":gap?"{\n"+gap+g.join(",\n"+gap)+"\n"+h+"}":"{"+g.join(",")+"}",gap=h,e;}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null;},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf();});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;"function"!=typeof JSON.stringify&&(JSON.stringify=function(a,b,c){var d;if(gap="",indent="","number"==typeof c){for(d=0;c>d;d+=1){indent+=" ";}}else{"string"==typeof c&&(indent=c);}if(rep=b,!b||"function"==typeof b||"object"==typeof b&&"number"==typeof b.length){return str("",{"":a});}throw new Error("JSON.stringify");}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&"object"==typeof e){for(c in e){Object.prototype.hasOwnProperty.call(e,c)&&(d=walk(e,c),void 0!==d?e[c]=d:delete e[c]);}}return reviver.call(a,b,e);}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4);})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;}throw new SyntaxError("JSON.parse");});}(),define("../vendor/json2",function(){}),define("../src/bootstrap",[],function(){var a=function(a,b){var c,d=b.split("."),e=a;c=d.length;for(var f=0;c>f;f++){"undefined"==typeof e[d[f]]&&(e[d[f]]={}),e=e[d[f]];}return e;};"undefined"==typeof BKTAG&&a(window,"BKTAG"),BKTAG.ns=a;var b={createFrame:function(a){var b=document.createElement("iframe");return b.setAttribute("name",a),b.setAttribute("id",a),b.setAttribute("title","bk"),b.style.border="0px",b.style.width="0px",b.style.height="0px","function"==typeof bk_frameLoad&&(b.onload=bk_frameLoad),b.src="javascript:void(0)",b;},checkFrame:function(a){var c="__bkframe";if("undefined"==typeof frames[c]||"undefined"==typeof document.getElementById(c)){var d=b.createFrame(c),e=document.getElementsByTagName("body")[0];e&&e.appendChild(d);}"function"==typeof a&&a();}};return b;}),define("../vendor/htmlparser",[],function(){var a=function(a){for(var b={},c=a.split(","),d=0;d<c.length;d++){b[c[d]]=!0;}return b;},b={leftTrim:function(a){return a.replace(/^\s+/,"");},startTag:/^<(\w+)((?:\s+\w+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,endTag:/^<\/(\w+)[^>]*>/,attr:/(\w+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,empty:a("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed"),block:a("address,applet,blockquote,button,center,dd,del,dir,div,dl,dt,fieldset,form,frameset,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,NOSCRIPT,object,ol,p,pre,script,SCRIPT,table,tbody,td,tfoot,th,thead,tr,ul"),inline:a("a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,SCRIPT,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),closeSelf:a("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),fillAttrs:a("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),special:a("script,SCRIPT,style"),one:a("html,head,body,title"),structure:{link:"head",base:"head"},htmlParser:function(a,c){function d(a,d,f,g){if(b.block[d]){for(;i.last()&&b.inline[i.last()];){e("",i.last());}}if(b.closeSelf[d]&&i.last()==d&&e("",d),g=b.empty[d]||!!g,g||i.push(d),c.start){var h=[];f.replace(b.attr,function(a,c){var d=arguments[2]?arguments[2]:arguments[3]?arguments[3]:arguments[4]?arguments[4]:b.fillAttrs[c]?c:"";h.push({name:c,value:d,escaped:d.replace(/(^|[^\\])"/g,'$1\\"')});}),c.start&&c.start(d,h,g);}}function e(a,b){if(b){for(var d=i.length-1;d>=0&&i[d]!=b;d--){}}else{var d=0;}if(d>=0){for(var e=i.length-1;e>=d;e--){c.end&&c.end(i[e]);}i.length=d;}}var f,g,h,i=[],j=a;for(i.last=function(){return this[this.length-1];};a;){if(g=!0,a=b.leftTrim(a),i.last()&&b.special[i.last()]){var k=new RegExp("</"+i.last()+">","i"),f=a.search(k),l=a.substring(0,f);l.length>0&&(c.chars&&c.chars(l),a=a.replace(l,"")),a=a.replace(k,""),e("",i.last());}else{if(0==a.indexOf("<!--")?(f=a.indexOf("-->"),f>=0&&(c.comment&&c.comment(a.substring(4,f)),a=a.substring(f+3),g=!1)):0==a.indexOf("</")?(h=a.match(b.endTag),h&&(a=a.substring(h[0].length),h[0].replace(b.endTag,e),g=!1)):0==a.indexOf("<")&&(h=a.match(b.startTag),h&&(a=a.substring(h[0].length),h[0].replace(b.startTag,d),g=!1)),g){f=a.indexOf("<");var m=0>f?a:a.substring(0,f);a=0>f?"":a.substring(f),c.chars&&c.chars(m);}}if(a==j){throw"Parse Error: "+a;}j=a;}e();},htmlToDom:function(a,c){var d=[],e=c.documentElement||c.getOwnerDocument&&c.getOwnerDocument()||c;if(!e&&c.createElement&&function(){var a=c.createElement("html"),b=c.createElement("head");b.appendChild(c.createElement("title")),a.appendChild(b),a.appendChild(c.createElement("body")),c.appendChild(a);}(),c.getElementsByTagName){for(var f in b.one){b.one[f]=c.getElementsByTagName(f)[0];}}var g=b.one.body;b.htmlParser(a,{start:function(a,e,f){if(b.one[a]){return g=b.one[a],void 0;}for(var h=c.createElement(a),i=0;i<e.length;i++){h.setAttribute(e[i].name,e[i].value);}b.structure[a]&&"boolean"!=typeof _one[b.structure[a]]?b.one[b.structure[a]].appendChild(h):g&&g.appendChild&&(window.addEventListener||"NOSCRIPT"!=g.tagName)&&g.appendChild(h),f||(d.push(h),g=h);},end:function(){d.length-=1,g=d.length>0?d[d.length-1]:b.one.body;},chars:function(a){if(window.addEventListener){var b=c.createTextNode(a);g.appendChild(b);}else{g.text=a;}},comment:function(){}});}};return b;}),define("../src/utils",["../src/bootstrap","../vendor/htmlparser"],function(a,b){var c={getKwds:function(){var a,b=document.getElementsByTagName("meta"),c=[],d=b.length;for(a=0;d>a;a++){b[a].name&&"keywords"===b[a].name.toLowerCase()&&""!==b[a].content&&c.push(b[a].content);}return c.join(",");},getMeta:function(a){for(var b=document.getElementsByTagName("meta"),c=b.length,d=0;c>d;d++){var e=b[d];if(e.name.toLowerCase()===a.toLowerCase()&&""!==e.content){return e.content;}}return null;},scriptWithOnload:function(a,b){var c=document.createElement("script");return c.src=a,c.onloadDone=!1,c.onload=function(){c.onloadDone||(c.onloadDone=!0,"function"==typeof b&&b());},c.onreadystatechange=function(){("loaded"===c.readyState||"complete"===c.readyState)&&!c.onloadDone&&(c.onloadDone=!0,"function"==typeof b&&b());},c;},isMobile:function(){var a=!1,b=["Mobile","Tablet","Handheld","Android","iPhone","Kindle","Silk","Nokia","Symbian","BlackBerry"];for(var c in b){if(-1!==navigator.userAgent.indexOf(b[c])){a=!0;break;}}return a;},isDebug:function(){var a=!1;return"undefined"!=typeof window.location&&"undefined"!=typeof window.location.search&&-1!==window.location.search.indexOf("debug=1")&&(a=!0),a;},addEvent:function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,function(b){return c.call(a,b);});}};return window.BKTAG.htmlToDom=b.htmlToDom,window.BKTAG.util=c,c;}),define("../vendor/cookies",function(){});var hashers={java:function(a){for(var b=31,c=0,d=0,e=0;e<a.length;e++){d=b*d+a.charCodeAt(e)<<c;}return d;},javaHex:function(a){return Math.abs(hashers.java(a)).toString(16);}},indexes={1:"dtzpmk".split("")},encoders={indexed_comma:function(a){for(var b=[a],c=indexes[a],d=0;d<c.length;d++){var e=signifiers[c[d]][0];b.push(encodeURIComponent(e?e:""));}return b.join(",");}},signifiers={a:[navigator.userAgent,"userAgent"],e:[function(){return hashers.javaHex(navigator.userAgent);}(),"userAgent hashed"],d:[[screen.width,screen.height,screen.colorDepth].join(""),"Screen concat"],t:[(new Date).getTime(),"Time"],z:[(new Date).getTimezoneOffset(),"Timezone"],n:[function(){for(var a in navigator){var b=[];return"string"==typeof navigator[a]&&b.push(navigator[a]),b.join("");}}(),"Navigator"],p:[function(){for(var a=[],b=0,c=navigator.plugins;b<c.length;b++){a.push(c[b].name);}return hashers.javaHex(a.join(","));}(),"Plugins hashed"],pv:[function(){for(var a=0,b=0,c=navigator.plugins;b<c.length;b++){var d=c[b].description.match(/\d+(.\d+){1,3}/);d&&(a+=d[0]);}return a;}(),"Plugin version concat"],m:[function(){for(var a=[],b=0,c=navigator.mimeTypes;b<c.length;b++){a.push(c[b].description);}return hashers.javaHex(a.join(","));}(),"mimeTypes hashed"],l:[navigator.language,"language"],k:[navigator.cookieEnabled?1:0,"cookies"],ps:[navigator.productSub,"productSub"],u:[navigator.cpuClass,"cpuClass"],g:[navigator.browserLanguage,"browserLanguage"],s:[document.defaultCharset,"charset"]},numis={collect:function(a,b){var c=a||"indexed_comma",d=b||1;return encoders[c](d);}};define("../vendor/numis",function(){}),define("../src/core",["../src/bootstrap","../src/utils","../vendor/cookies","../vendor/numis"],function(a,b){var c=0.1,d=Math.random(),e=(Math.random(),[]),f=!1,g={site:"site_id",limit:"pixel_limit",excludeBkParams:"ignore_meta",excludeTitle:"exclude_title",excludeKeywords:"exclude_keywords",excludeReferrer:"exclude_referrer",excludeLocation:"exclude_location",partnerID:"partner_id",allowMultipleCalls:"allow_multiple_calls",suppressMultipleCalls:"suppress_multiple_calls",callback:"callback",useImage:"use_image",useMultipleIframes:"use_multiple_iframes",allData:"all_data",timeOut:"timeout",ignoreOutsideIframe:"ignore_outside_iframe",eventScheduling:"event_scheduling",suppressEventScheduling:"suppress_event_scheduling",suppressCacheBusting:"suppress_cache_bustin",pixelUrl:"pixel_url",pixelSecure:"pixel_secure",useFirstParty:"use_first_party",suppressFirstParty:"suppress_first_party",sendStatidPayload:"send_statid_payload",suppressStatidPayload:"suppress_statid_payload",metaVars:"meta_vars",jsList:"js_list",paramList:"param_list",useMobile:"use_mobile",disableMobile:"disable_mobile",isDebug:"is_debug",limitGetLength:"limit_get_length"},h={_dest:null,addParam:function(a,b,c){return"undefined"!=typeof varMap&&varMap[b]&&(b=varMap[b]),"undefined"!=typeof c?e.push(a+"="+encodeURIComponent(b+"="+c)):e.push(a+"="+b),BKTAG;},addBkParam:function(a,b){if("string"==typeof a&&"string"==typeof b){h.addParam("phint","__bk_"+a,b);}else{for(var c in a){a.hasOwnProperty(c)&&"string"==typeof a[c]&&h.addParam("phint","__bk_"+c,a[c]);}}return BKTAG;},_reset:function(){f=!1,e=[];for(var a in g){g.hasOwnProperty(a)&&delete window["bk_"+g[a]];}return BKTAG;},params:function(){return e;},getGlobals:function(a){if(a.length){for(var b=0;b<a.length;b++){var c=a[b];"undefined"!=typeof window[c]&&""!==c&&""!==window[c]&&bk_addPageCtx(c,window[c]);}}else{for(var d in a){a.hasOwnProperty(d)&&"string"==typeof d&&("string"==typeof a[d]||"number"==typeof a[d]||"boolean"==typeof a[d])&&bk_addPageCtx(d,a[d]);}}},doTag:function(i,j,k,l,m,n,o,p,q){var r={site:i,limit:j,excludeBkParams:k,partnerID:l,allowMultipleCalls:m,callback:n,allData:o,timeOut:p,ignoreOutsideIframe:q};for(var s in g){g.hasOwnProperty(s)&&"undefined"!=typeof window["bk_"+g[s]]&&(r[s]=window["bk_"+g[s]]);}if("object"==typeof i){for(var t in g){g.hasOwnProperty(t)&&"undefined"!=typeof i[g[t]]&&(r[t]=i[g[t]]);}}if(!(r.suppressMultipleCalls===!0||"undefined"!=typeof f&&f&&r.allowMultipleCalls!==!0)){f=!0,void 0===r.timeOut&&(r.timeOut=1000),e.unshift("ret="+(r.callback?"js":"html"));var u="undefined"!=typeof r.partnerID&&null!==r.partnerID;u&&e.unshift("partner="+encodeURIComponent(r.partnerID));var v={2607:1,2834:1,2894:1,3316:1,3317:1,3318:1,3319:1,3321:1,3322:1,3323:1,3324:1,3325:1,3326:1,3327:1,3328:1,3329:1,3330:1,3331:1,3332:1,3333:1,3334:1,3338:1,3339:1,3340:1,3341:1,3344:1,3345:1,3346:1,3348:1};if(!r.excludeBkParams&&!r.excludeTitle&&""!==document.title&&h.addBkParam("t",document.title),!r.excludeBkParams&&!r.excludeKeywords&&h.addBkParam("k",b.getKwds()),!r.excludeBkParams&&!r.excludeReferrer&&"referrer" in document&&""!==document.referrer&&h.addBkParam("pr",document.referrer),!r.excludeBkParams&&!r.excludeLocation&&h.addBkParam("l",window.location.toString()),r.callback?h.addParam("jscb",encodeURIComponent(r.callback)):"undefined"!=typeof r.limit&&h.addParam("limit",encodeURIComponent(r.limit)),r.allData===!0&&h.addParam("data","all"),r.disableMobile!==!0&&r.suppressStatidPayload!==!0&&(b.isMobile()||c>d||r.sendStatidPayload||-1!==window.location.search.indexOf("force=bkfpd"))&&"undefined"!=typeof fortyone&&"undefined"!=typeof numis&&(h.addParam("bkfpd",fortyone.collect()),h.addParam("bknms",numis.collect())),r.suppressEventScheduling!==!0&&r.eventScheduling===!0&&b.addEvent("message",function(a){if("http://tags.bluekai.com"===a.origin){var b=document.getElementById("__bkframe"),c=function(a){return function(){b.contentWindow.postMessage(JSON.stringify({event:a}),"*"),b.contentWindow.postMessage(JSON.stringify({schedule:"run"}),"*");};},d=JSON.parse(a.data);if(d.status&&"loaded"===d.status&&b.contentWindow.postMessage(JSON.stringify({get:"events"}),"*"),d.scheduled){var e=JSON.parse(d.scheduled);for(var f in e){var g="window"===e[f]?window:document.getElementById(e[f]);g.addEventListener(f,c(f),!1);}}d.status&&"complete"===d.status&&b.contentWindow.postMessage(JSON.stringify({status:"ack"}),"*");}},!1),r.suppressFirstParty!==!0&&r.useFirstParty&&(readCookie("bkrid")||createCookie("bkrid",Math.floor(Math.random()*Math.pow(2,31)),180),readCookie("bkrid")&&h.addParam("bkrid",encodeURIComponent(readCookie("bkrid")))),(b.isDebug()||r.isDebug)&&h.addParam("debug","1"),!r.excludeBkParams&&"undefined"!=typeof r.paramList&&h.getGlobals(r.paramList),!r.excludeBkParams&&"undefined"!=typeof r.jsList&&h.getGlobals(r.jsList),!r.excludeBkParams&&"undefined"!=typeof r.metaVars){for(var w=0;w<r.metaVars.length;w++){var x=b.getMeta(r.metaVars[w]);null!==x&&h.addBkParam(r.metaVars[w],x);}}r.suppressCacheBusting!==!0&&h.addParam("r",parseInt(99999999*Math.random(),10));var y="https://stags.bluekai.com/",z="http://tags.bluekai.com/",A=("https:"===document.location.protocol?r.pixelSecure?r.pixelSecure:y:r.pixelUrl?r.pixelUrl:z)+(u?"psite":"site")+"/"+r.site,B=A+"?"+e.join("&");if(r.limitGetLength&&(B=B.substr(0,2000)),BKTAG._dest=h._dest=B,r.callback){if(r.useImage){var C=document.createElement("span");C.style.display="none";var D=document.getElementsByTagName("body")[0];D.appendChild(C);var E=document.createElement("img");E.src=h._dest,C.appendChild(E);}else{var F=document.createElement("script");F.type="text/javascript",F.src=h._dest,F.id="__bk_script__",v[""+i]&&setTimeout(function(){var a=document.getElementById("__bk_script__");a&&(a.removeNode?a.removeNode(!0):a.parentNode.removeChild(a));},r.timeOut),document.getElementsByTagName("head")[0].appendChild(F);}}else{if(a.checkFrame(function(){if(r.useMultipleIframes){var b=a.createFrame("__bkframe_"+r.site+"_"+(new Date).valueOf());b.className="__bkframe_site_"+r.site,b.src=B,document.getElementsByTagName("body")[0].appendChild(b);}else{if(frames&&frames.__bkframe){frames.__bkframe.location.replace(B);}else{var c=a.createFrame("__bkframe");document.getElementsByTagName("body")[0].appendChild(c),frames.__bkframe.location.replace(B);}}}),e.shift(),"undefined"!=typeof r.ignoreOutsideIframe&&r.ignoreOutsideIframe===!1){e.unshift("ret=jsht"),B=A+"?"+e.join("&"),B=B.substr(0,2000);var G=document.createElement("script");G.src=B,G.type="text/javascript",document.getElementsByTagName("body").item(0).appendChild(G);}}"function"==typeof j&&j(),e=[];}}};for(var i in h){h.hasOwnProperty(i)&&(window.BKTAG[i]=h[i]);}return"function"==typeof window.bk_async&&window.setTimeout(function(){bk_async();},0),h;}),define("../src/aliases",["../src/core"],function(){window.BKTAG.addCtxParam=function(a,b){return BKTAG.addParam("phint",a,b),BKTAG;},window.BKTAG.addBkParam=function(a,b){return BKTAG.addParam("phint","__bk_"+a,b),BKTAG;},window.BKTAG.addPageCtx=window.bk_addPageCtx=window.BKTAG.addUserCtx=window.bk_addUserCtx=function(a,b){return BKTAG.addParam("phint",a,b),BKTAG;},window.BKTAG.doJSTag=window.bk_doJSTag=function(a,b,c){BKTAG.doTag(a,b,!1,null,c);},window.BKTAG.doJSTag2=window.bk_doJSTag2=function(a,b){BKTAG.doTag(a,b);},window.BKTAG.doCarsJSTag=window.bk_doCarsJSTag=function(a,b){BKTAG.doTag(a,b,!0);},window.BKTAG.doPartnerAltTag=window.bk_doPartnerAltTag=function(a,b,c){("undefined"==typeof c||null===c)&&(c=0),BKTAG.doTag(a,b,!1,c);},window.BKTAG.doCallbackTag=window.bk_doCallbackTag=function(a,b,c,d){BKTAG.doTag(a,0,!1,null,c,b,d);},window.BKTAG.doCallbackTagWithTimeOut=window.bk_doCallbackTagWithTimeOut=function(a,b,c,d,e){BKTAG.doTag(a,0,!1,null,c,b,d,e);},window.BKTAG.sendData=function(a){BKTAG.doTag(a);};}),define("mobile",["../vendor/fortyone","../vendor/json2","../src/core","../src/aliases"],function(){}),require("mobile");}();BKTAG.version="3.0.17";