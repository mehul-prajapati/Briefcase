window.OBR = window.OBR||{};(function(OBR){window.OB_releaseVer="173030";window.OBR=window.OBR||{};OBR.j=OBR.j||[];OBR.na=OBR.na||{};window.OBR$=function(d){return document.getElementById(d)};OBR.d=OBR.d||function(){var d={},a={w:function(){return d},i:function(a){d.X=a;d.Ba=[];d.startTime=(new Date).getTime()},startTime:function(){return d.startTime},log:function(a){var f=((new Date).getTime()-d.startTime)/1E3;1E3>d.Ba.length&&d.Ba.push(f+" >"+a)},printLog:function(){if(d.X.b.ig)window.console.log(d.Ba.join("\n"));else{var a=d.X.a.ya();a&&(a.innerHTML=d.Ba.join("<br>"),a.style.display="block")}return d.Ba.join("\n")}};a.i(OBR);return a}();OBR.printLog=OBR.d.printLog;OBR.u=function(){this.N=[]};OBR.u.prototype.add=function(d,a){var c;"string"===typeof d&&"function"===typeof a&&(c={},c.name=d,c.vf=a,this.N.push(c))};OBR.u.prototype.ec=function(d){var a,c;OBR.d.log("remove event :"+d);a=0;for(c=this.N.length;a<c;a+=1)if(this.N[a]&&this.N[a].name&&this.N[a].name===d)try{this.N.splice(a,1)}catch(f){OBR.d.log("rm evnt err: "+f)}};
OBR.u.prototype.l=function(d,a,c){var f,b,e,g;a=a||[];c=!!c;OBR.d.log("event fire:"+d);f=0;for(b=this.N.length;f<b;f+=1)if(e=this.N[f].name||"",g=this.N[f].vf,e===d)try{g.apply(this,a)}catch(m){OBR.d.log("fire evnt *"+d+"* error: "+m)}!0===c&&this.ec(d)};OBR.u.prototype.Y=function(){this.N=[]};OBR.a=OBR.a||function(){var d={},a={},c=document,f=OBR;a.w=function(){d.X=f;return d};a.i=function(b){f=b};a.ka=function(){return function(){}};a.Wf=function(){var b=window.jQuery;return void 0!==b?!(/1\.(0|1|2|3|4)\.(0|1)/.test(b.fn.jquery)||/^1\.1/.test(b.fn.jquery)||/^1\.2/.test(b.fn.jquery)||/^1\.3/.test(b.fn.jquery)):!1};a.v=function(b){return null===b||isNaN(b)?null:f.o("outbrain_widget_"+b)};a.ya=function(){return f.o("ob_holder")};a.Nb=function(){if(!f.o(f.b.Xa)){var b=f.a.createElement("iframe",
f.b.Xa),e=b.style;e.display="none";e.width="1px";e.height="1px";b.src="about:blank";(e=a.ya())||(e=a.Gb());f.a.O(b,e)}};a.Gb=function(){if(c.body)return c.body;var b;b=f.a.$("","","body",!0);return 0>=b.length?c.lastChild:b[0]};a.createElement=function(b,e,g,a){b=c.createElement(b);"string"===typeof e&&b.setAttribute("id",e);"string"===typeof g&&(b.style.cssText=g);for(var f in a)b.setAttribute(f,a[f]);return b};a.Aa=function(b){if(f.b.xc===f.b.rc)try{document.createStyleSheet().cssText=b}catch(e){}else{var g=
c.createElement("style"),a=c.body?"string"===typeof c.body.style.WebkitAppearance:!1;g.type="text/css";c.getElementsByTagName("head")[0].appendChild(g);g[a?"innerText":"innerHTML"]=b}};a.F=function(b,e){var g=c.createElement("script");g.type=f.b.yg;g.src=b;g.async=!!e;g.defer=!1;return g};a.ri=function(b,e){var g=f.a.createElement("link",b);g.setAttribute("rel","stylesheet");g.setAttribute("type",f.b.bf);e&&g.setAttribute("href",e);return g};a.Re=function(b){var e=f.o("ob_iframe");e&&(e.src=b)};a.Id=
function(){var b;b=isNaN(b)?1E5:b;return Math.floor(Math.random()*b)};a.ph=function(b,e,g){return b.replace(e,g)};a.Jf=function(b,e){var g=[];g.push('<body onload="');g.push("var js = document.createElement('script');");g.push("js.src = '"+b+"';");"number"===typeof e&&g.push("js.onerror = function(){ top.OBR.extern.errorInjectionHandler("+e+") };");g.push("var d = document;d.getElementsByTagName('head')[0].appendChild(js);\">");g.push("<script type='text/javascript'>");g.push("window.OBR={extern:{}};");
g.push("OBR.extern.returnedHtmlData=function(json,idx){(top.OBR.extern.returnedHtmlData)&& top.OBR.extern.returnedHtmlData(json,idx); };");g.push("OBR.extern.returnedIrdData=function(json,idx){(top.OBR.extern.returnedIrdData)&& top.OBR.extern.returnedIrdData (json,idx);};");g.push("OBR.extern.returnedJsonData=function(json,idx){(top.OBR.extern.returnedJsonData)&& top.OBR.extern.returnedJsonData(json,idx);};");g.push("OBR.extern.returnedError=function(json){(top.OBR.extern.returnedError)&& top.OBR.extern.returnedError(json);};");
g.push("window.outbrain={};");g.push("outbrain.returnedIrdJsonData=function(json,idx){(top.outbrain.returnedIrdJsonData) && top.outbrain.returnedIrdJsonData(json,idx);  };");g.push("outbrain.returnedJsonData =function(json,idx){(top.outbrain.returnedJsonData) && top.outbrain.returnedJsonData(json,idx); };");g.push("outbrain.returnedError=function(json){(top.outbrain.returnedError) && top.outbrain.returnedError(json);};");g.push("\x3c/script>");g.push("</body>");return g.join("")};a.If=function(){var b;
if(b=OBR.o("objsonpp"))if(a.ng())a.fa(b.parentNode)&&b.parentNode.removeChild(b);else return OBR.o("objsonpp");b=c.createElement("iframe");b.id="objsonpp";b.vh&&(b.vh="seamless");(b.frameElement||b).style.cssText="width: 0; height: 0; border: 0";b.src="";c.body.appendChild(b);return b};a.dg=function(b){var e=a.If(),e=e.contentWindow||e.contentDocument;e.document&&(e=e.document);e.open().write(b);e.close()};a.L=function(b){var e=f.b.ef,g,a;a=e.getElementsByTagName("head");try{a&&0<a.length?a[0].insertBefore(b,
a[0].firstChild):(g=e.getElementsByTagName("script"),g[0].insertBefore(b,g[0].firstChild))}catch(c){f.d.log("Err insertToHead:"+c)}};a.hg=function(b,e){var g=a.Jf(e,b);a.sd(g)||a.dg(g)};a.vi=function(b){b=b||OBR;return"function"!==typeof b.u?(OBR.d.log("namespace.EventManager not function"),null):new b.u};a.G=function(b){return encodeURIComponent(b)};a.fa=function(b){return null!==b};a.ug=function(b){var e,g=!1;if(a.Pb(b))return!1;e=b.Kb().recMode||"";b=b.Kb().dynamicWidgetLayout||"";"2"===(f.b.Xd[e]||
"")&&"1"===(f.b.uh[b]||"")&&(g=!0);g||"1"!==(f.b.Xd[e]||"")||(g=!0);return g};a.Pb=function(b){return void 0===b||null===b};a.sd=function(b){return a.Pb(b)||""===b};a.$=function(b,e,g,f,d,k){var l,n,p;l=[];g=g||"*";f=!!f;d=a.sd(d)?!0:!1;g=k?k.getElementsByTagName(g):c.getElementsByTagName(g);k=0;for(n=g.length;k<n;k+=1)p="class"===b?g[k].className:g[k].getAttribute(b),null!==p&&(!1===d&&(p=p.toLowerCase(),e=e.toLowerCase()),(p=""===b?!0:f?-1<p.indexOf(e):p===e)&&l.push(g[k]));return l};a.Pd=function(b){var e=
window;e.detachEvent?e.detachEvent("onscroll",b):e.removeEventListener&&e.removeEventListener("scroll",b,!1)};a.n=function(b,e,g){b.attachEvent?b.attachEvent("on"+e,function(){g.call(b)}):b.addEventListener&&b.addEventListener(e,g,!1)};a.O=function(b,e){try{e.appendChild(b)}catch(g){f.d.log("fail insert into Dom:"+g)}};a.fb=function(b){b=f.o(b);!a.Pb(b)&&a.fa(b.parentNode)&&b.parentNode.removeChild(b)};a.insertBefore=function(b,e){return e.parentNode.insertBefore(b,e)};a.isArray=function(b){return b instanceof
Array?!0:"[object Array]"===Object.prototype.toString.call(b)};a.ib=function(b,e){var g=/htt(p|ps)?:\/\/([\w\-]*|[\w\-]*\.[\w\-]*)\.outbrain\.com(:\d\d\d\d)?/i,a=/htt(p|ps)?:\/\/127\.0\.0\.1(:\d\d\d\d)?/i;return"http://192.168.30.213"==b||g.test(b)||a.test(b)?b:e};a.ci=function(b){b=b.replace(/^(\s*)/g,"");var e=c.createElement("div");e.innerHTML=b;return e.childNodes};a.J=function(b,e){return b?b.getAttribute(e):null};a.s=function(b,e,g){b&&b.setAttribute(e,g)};a.yb=function(b,e){var g=RegExp("[ '\"|]"+
e+"[ '\"|]");b&&!g.test("|"+b.className+"|")&&(b.className+=" "+e)};a.R=function(b,e){b=b.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var g,a;try{return g=RegExp("[\\?&]"+b+"=([^&#]*)","i"),a=g.exec(decodeURIComponent(window.location.href.replace(/\+/g," "))),null===a?e:a[1]}catch(c){return e}};a.Xe=function(b){"string"===typeof b&&0<b.indexOf("#")&&(b=b.substr(0,b.lastIndexOf("#")));return b};a.Fc=function(b){var a=f.b.H+"/strip_default.png";b.src!==a&&(b.alt="",b.title="",b.src=a)};a.kf=function(){var b=
null,a,g,f=null;if("string"===typeof window.OB_MP_feed)b=window.OB_MP_feed;else if((a=c.getElementsByTagName("head"))&&0<a.length)for(g=a[0].getElementsByTagName("link"),a=0;a<g.length;a+=1)if(f=g[a],null!==f.type&&("application/rss+xml"===f.type||"application/atom+xml"===f.type)&&null!==f.href&&""!==f.href){b=f.href;break}return b};a.dd=function(b){var a=null;b.currentStyle?a=b.currentStyle.color:window.getComputedStyle&&(a=document.defaultView.getComputedStyle(b,null).getPropertyValue("color"));
return a};a.Ch=function(){var b=a.ya(),e,g;a.fa(b)&&(e=f.a.createElement("span","ob_a"),a.insertBefore(e,b),e.innerHTML=".",g=a.dd(e),a.fb("ob_a"),e=f.a.createElement("a","ob_a"),e.setAttribute("href","void(0)"),e.innerHTML=".",a.insertBefore(e,b),b=a.dd(e),a.fb("ob_a"),g="rgb(0, 0, 0)"===g||"#000000"===g?"#555":g,a.Aa(".ob-tcolor{color:"+g+"} .ob-lcolor{color:"+b+"} .ob-bgtcolor{background-color:"+g+"} .item-link-container:hover .ob-tcolor{border-color:"+g+"}"))};a.bd=function(b){var e=a.ad("property",
"og:url","meta","content");null===e&&(e=a.ad("rel","canonical","link","href"));null!==e||b||(e=window.location.href);null===e&&(e="");return e};a.ad=function(b,e,g,c){var f=null;b=a.$(b,e,g,!1);null!==b&&0<b.length&&(f=b[0].getAttribute(c));return f};a.Se=function(b){var e,g,c;g=f.j[b].k("tracking",!1);e=f.b.Za;b=f.j[b].k("comScoreEnabled",!0);c=f.b.Gc;!1===g&&(!1===e&&!0===b&&!1===c)&&(a.Nb(),e=f.o(f.b.Xa))&&(e.src=f.b.H+"/"+f.b.eb+"3rd/comScore/comScore.htm",f.b.Gc=!0)};a.Uf=function(){var b=a.Ib(8);
"string"===typeof window.name&&(""===window.name||-1<window.name.indexOf("frame"))?(window.name=b,b=window.name):"string"===typeof window.name&&""!==window.name&&(b=window.name);return b=f.a.G(b.substring(0,9))};a.Ib=function(b){var a,g;a=[];b="number"===typeof b?b:8;for(g=0;g<b;g+=1)a.push("0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".charAt(Math.floor(61*Math.random())));return a.join("")};a.Qa=function(b){for(var a in f.na)if(f.na.hasOwnProperty(a)&&f.na[a].h===b)return f.na[a];
return null};a.fd=function(b){var a,g;g=f.j;for(a=0;a<g.length;a+=1)if(g[a].xa()===b)return g[a];return null};a.rg=function(b){for(var a in b)if(b.hasOwnProperty(a))return!1;return!0};a.la=function(b,a){return"function"!==typeof b?null:void 0===a?b():b(a)};a.ng=function(){return"Microsoft Internet Explorer"===navigator.appName};a.cf=function(b,a){return b*a};a.Yc=function(b){if(!b||""===b)return[];b=b.replace("","").replace("http://","").replace("https://","").replace("www.","").replace("www2.","").split("/");
b.pop();return 0<b.length?b:[]};a.Cf=function(b,e){var g=a.Yc(b),c=[],f="";if(e>=g.length)f=g.join(".");else{c[0]=g[0];for(f=1;f<=e;f+=1)c[f]=g[f];f=c.join(".")}return f};a.Mf=function(){return"http"+("https:"===c.location.protocol?"s":"")};a.Lf=function(){var b,e;b=c.getElementById("widgetVersionSync");null===b&&(b=a.createElement("iframe","widgetVersionSync"),e=a.createElement("div",null,"display:none; height:0px; width:0px; border:none;"),e.appendChild(b),a.Gb().appendChild(e));return b};a.ii=
function(b){var e;e=window.OB_releaseVer;isNaN(e)||(isNaN(b)||e>=b)||(b=a.Mf()+"://widgets.outbrain.com/external/sync/outbrainjs.html?needToBeVer="+b.toString(),e=a.Lf(),e.src=b)};a.Fe=function(b){b=b.k("widgetVersionSync",1);isNaN(b)||""===b||(b=parseInt(b,10)||1,a.ii(b))};a.i(OBR);return a}();
OBR.W=function(d,a,c,f,b,e,g,m,h){var k,l;k=this;l=0;h="function"===typeof h?h:OBR.a.cf;k.start=function(){var n;l+=1;OBR.a.la(d,l)?OBR.a.la(a,l):(n=OBR.a.la(m,l))?OBR.a.la(f,l):(n=l===e&&1E3!==e)?OBR.a.la(f,l):(OBR.a.la(c,l),n=g?h(l,b):b,setTimeout(function(){k.start()},n))};k.start()};OBR.Mc=OBR.Mc||{kg:function(){return"complete"===document.readyState}};
OBR.of=function(){var d={},a=[];d.add=function(c){a.push(c)};d.remove=function(c){a.splice(c,1)};d.top=function(){return 0<a.length?a.shift():null};d.ui=function(){return a};d.We=function(){a=[]};return d};
OBR.ua=function(){function d(f,b){a.Ha="resolve"===f?function(a){a&&a(b)}:function(a,g){g&&g(b)};a.pa=a.mh=function(){throw Error("Promise already completed.");};for(var e,g=0;e=c[g++];)e[f]&&e[f](b);delete c}var a={},c=[];a.Ha=function(a,b){c.push({resolve:a,reject:b})};a.pa=function(a){d("resolve",a)};a.mh=function(a){d("reject",a)};return a};OBR.b=OBR.b||function(){var d={},a={},c=OBR,f;a.ve="opera";a.rc="msie";a.se="firefox";a.re="chrome";a.xe="safari";a.ue="mozilla";a.qi="boolean";a.Hi="string";a.Bi="object";a.Ii="undefined";a.Xa="ob_iframe";a.kd=!0;a.Gd=0;a.kb="outbrain_widget_";a.yg="text/javascript";a.bf="text/css";a.ef=document;a.pd=void 0!==document.createElement("script").async;a.qe=c.a.Uf();a.jh=document.referrer;a.ih=c.a.G(document.referrer);a.Bg=document.location.href;a.zi=c.a.G(a.Bg);a.La=!1;a.ic="";a.zb=navigator.userAgent.toLowerCase();
a.Wg=navigator.platform.toLowerCase();f=a.zb;a.xc=/opera/.test(f)?a.ve:/msie/.test(f)?a.rc:/firefox/.test(f)?a.se:/chrome/.test(f)?a.re:/safari/.test(f)?a.xe:a.ue;a.Za=!!/(iphone|ipod|symbian|android|windows ce|blackberry|palm|ipad)/.test(f);a.pg=0;a.nd=a.zb.match(/msie 8/)||a.zb.match(/msie 7/);a.og=function(){return void 0===window.XMLHttpRequest&&void 0!==ActiveXObject};a.bh=window.OB_platformType||null;a.ab="number"===typeof a.bh;a.Yd=null;a.Qc=null;a.bi=function(){a.ab&&(a.Yd&&a.Qc)&&(a.Yd(),
a.Qc())};a.ra="string"===typeof window.OB_releaseVer?window.OB_releaseVer:"0";a.Ig=!0===window.OB_disable_odbl;f=("https:"===document.location.protocol?"https":"http")+"://";a.Oe="/blogutils/ExcludeRec.action?bocr=";a.Ci="html";a.Zf=c.a.ib(c.a.R("wiodb",f+"hpr.outbrain.com"),f+"hpr.outbrain.com");a.Xb=c.a.ib(c.a.R("wiodb",f+"odb.outbrain.com"),f+"odb.outbrain.com");a.Pe=f+"storage.outbrain.com/";a.H=c.a.ib(c.a.R("wihost",f+"widgets.outbrain.com"),f+"widgets.outbrain.com");a.Xg=c.a.ib(c.a.R("wiout",
f+"outbrain.com"),f+"outbrain.com");a.Pc=c.a.R("wixp",null);a.$b=f+"log.outbrain.com/";a.eb="nanoWidget/";a.Yg=a.ab?"NANOWDGTLT13":"NANOWDGT01";a.Fg=a.H+"/"+a.eb+a.ra+(a.ab?"/moduleLT":"/module");a.Eg=a.H+"/"+a.eb+"3rd";a.ig="object"===typeof window.console;a.ie=c.a.Xe(c.a.kf());a.he=null===a.ie?"":c.a.G(a.ie);a.Gc=!1;a.Jg="true"===c.a.R("obdraft",!1)?"&obDraft=true":"";a.ze=!1!==c.a.R("obAbtest",!1)?"&obAbtest="+c.a.R("obAbtest",""):"";a.be=function(b){a.Ya=a.Ya||b;return a.Ya};a.Ya=a.be("true"===
c.a.R("advanceLoader","false").toLowerCase());a.vd=0;a.Ca=null;a.th="data-obscrollable";a.Xd={touch_strip:"1",odb_dynamic:"2"};a.uh={"touch-strip":"1"};a.w=function(){d.X=c;return d};return a}();OBR.c=OBR.c||function(){var d={},a,c={};d.i=function(c,b){a=c;d.gh(b)};d.e={ob:"POPUPDESCRIPTION",Ja:"WIDGETSTATISTICS",wb:"STATISTICS",Ia:"WHATIS",mb:"FLYTHROUGH",xb:"VIDEOPLUGIN",ja:"POSCUL",tb:"SCROLL",ub:"SCROLLEXTERNAL",qb:"RECINIFRAME",sb:"REGISTER",rb:"REFRESHWIDGET",vb:"SKYLANDER"};d.we=function(a,b){var e={si:a,url:b,version:-1,state:0,Ab:null,Hc:this,wc:null,Ve:function(){if(2===e.state)e.ud();else if(0===e.state){var b=OBR.a.F(e.url,!0);e.state=1;OBR.a.L(b)}},ud:function(){e.state=2;"function"===
typeof e.Ab&&e.Ab.call(e.Hc,e.wc)}};return e};d.gh=function(c){function b(b){return a.b.Fg+"/"+b}function e(b,a){c[b]||(c[b]=new d.we(b,a))}e(d.e.ob,b("popupDescription.js"));e(d.e.Ja,b("widgetStatistics.js"));e(d.e.wb,b("statistics.js"));e(d.e.Ia,b("whatis.js"));e(d.e.mb,b("flyThrough.js"));e(d.e.xb,b("videoPlugin.js"));e(d.e.ja,b("positionCalculation.js"));e(d.e.qb,b("recInIframe.js"));e(d.e.sb,b("registration.js"));e(d.e.rb,b("refreshWidget.js"));e(d.e.vb,b("skyLander.js"));e(d.e.tb,b("scroll.js"));
e(d.e.ub,a.b.Eg+"/scroll/scrollExternal.js")};d.Gf=function(a){return c[a]};d.A=function(a,b,e,g){if(a=d.Gf(a))a.Ab=b||OBR.a.ka(),a.Hc=e,a.wc=g,a.Ve()};d.Ra=function(a){return c[a].state};d.C=function(f){"-1"!==a.b.ra&&c[f].ud()};d.i(OBR,c);return d}();OBR.i=OBR.i||void 0;OBR.o=function(d){return document.getElementById(d)};OBR.P=OBR.P||function(){var d={},a={},c,f;a.i=function(b){c=b=b||OBR;d.Da=new c.u;f=!1};a.w=function(){return d};d.gg=function(){var b,a;b=c.a.createElement("iframe","ob_ping");b.setAttribute("id","ob_ping");b.style.border="0px";b.style.width="0px";b.style.height="0px";b.setAttribute("src",c.b.Xb+"/utils/ping.html?r="+c.a.Id());c.a.n(b,"load",function(){c.d.log("ping returned");c.b.Gd=2;d.Da.l("success");c.P.Rd()});a=c.a.ya();null!==a&&(c.d.log("ping inserted"),c.a.O(b,a))};d.ah=function(){c.d.log("ping Wait");
new c.W(function(){return 2===c.b.Gd},function(){},c.a.ka(),function(){d.Da.l("fail");c.P.Rd()},50,200,!1)};a.Rd=function(){c.a.fb("ob_ping")};a.Sg=function(b){d.Da.add("success",b)};a.Rg=function(b){d.Da.add("fail",b)};a.sg=function(){return f};a.ee=function(){f=!0};a.$g=function(){d.gg();d.ah()};a.I=function(){d.Da.Y()};a.i(OBR);return a}();OBR.ma=OBR.ma||function(){var d,a={},c={},f;a.i=function(b){d=b=b||OBR;f=new d.u};a.w=function(){return c};c.Db=function(b){var a,g;a=0;for(g=b.length;a<g;a+=1)d.a.s(b[a],"data-ob-mark","true"),d.a.s(b[a],"data-browser",d.b.xc),d.a.s(b[a],"data-os",d.b.Wg),f.l("find",[b[a]])};c.Vc=function(){return d.a.$("class","OUTBRAIN","div",!0)};c.Bf=function(b){var a,g,c=[],f=[];a=0;for(g=b.length;a<g;a+=1)if("string"===typeof b[a].containerId)if(d.o(b[a].containerId)){var k=d.o(b[a].containerId);"string"===
typeof b[a].widgetId&&d.a.s(k,"data-widget-id",b[a].widgetId);"string"===typeof b[a].permalink&&d.a.s(k,"data-src",b[a].permalink);"string"===typeof b[a].srcUrl&&d.a.s(k,"data-ob-srcUrl",b[a].srcUrl);"boolean"===typeof b[a].advanceLoader&&d.a.s(k,"data-advance-loader",b[a].advanceLoader);"boolean"===typeof b[a].dynLoad&&d.a.s(k,"data-dynLoad",b[a].dynLoad);"string"===typeof b[a].widgetType&&d.a.s(k,"data-widget-type",b[a].widgetType);"string"===typeof b[a].timeout&&d.a.s(k,"data-timeout",b[a].timeout);
"string"===typeof b[a].fbk&&d.a.s(k,"data-fbk",b[a].fbk);f.push(k)}else c.push(b[a]);window.OB_elements=c;return f};c.Kf=function(){var b=[];"object"===typeof window.OB_elements&&0<window.OB_elements.length&&(b=window.OB_elements);return b};c.Hf=function(){var b=[],a=c.Vc(),g,f;g=0;for(f=a.length;g<f;g+=1){var h=d.a.J(a[g],"data-ob-mark");null!==h&&"true"===h||!a[g]||b.push(a[g])}g=c.Kf();if(0<g.length)for(d.d.log("Array of elements found!"),a=c.Bf(g),g=0,f=a.length;g<f;g+=1)b.push(a[g]);return b};
a.oi=function(b){c.Sc(b)};c.Sc=function(b){if(void 0===b){var a=!1;d.d.log("searching for containers");new d.W(function(){return a},d.a.ka(),function(){a=d.Mc.kg();var b=c.Hf();a&&d.d.log("checking:("+a+")");0<b.length&&c.Db(b)},f.l("stopSearch"),50,1E3,!1)}else 0<(b.length||0)&&c.Db(b)};a.xi=function(){return 0<c.Vc().length};a.Lg=function(b){f.add("find",b)};a.Ei=function(b){f.add("stopSearch",b)};a.Rc=function(){c.Sc()};a.pf=function(b){var a=[],g,f;d.r.bg();g=0;for(f=d.j.length;g<f;g+=1){var h=
d.a.v(g);null!==h&&("string"===typeof b&&d.a.s(h,"data-src",b),d.a.s(h,"data-ob-mark","false"),a.push(h))}0<a.length&&(d.j=[],c.Db(a))};a.I=function(){f.Y();d.j=[]};a.i(OBR);return a}();OBR.r=OBR.r||function(){var d={},a={},c;a.i=function(a){c=a=a||OBR;d.Zb=new c.of;d.Wb=new c.u;d.$a=!1};d.xf=function(a){var b;b=a.Tf();var e,g=c.a.ph;b=b&&"hp"===b?c.b.Zf+"/utils/get?url=$LNK$SRC&settings=$SET&recs=$REC&widgetJSId=$WID&key=$KEY&idx=$IDX&version=$VER&ref=$REF&apv=$APV&sig=$SIG&format=$FRT&rand=$RND$DRFT$ABTEST$XP$TOKEN":c.b.Xb+"/utils/get?url=$LNK$SRC&settings=$SET&recs=$REC&widgetJSId=$WID&key=$KEY&idx=$IDX&version=$VER&ref=$REF&apv=$APV&sig=$SIG&format=$FRT&rand=$RND$DRFT$ABTEST$XP$TOKEN";
e=a.xa();b=g(b+(""!==e&&null!==e?"&fbk="+e:""),"$LNK",c.a.G(a.da()));b=g(b,"$SRC",d.Rf(a));b=g(b,"$IDX",a.Ef());b=g(b,"$SET",!0);b=g(b,"$REC",!0);b=g(b,"$KEY",c.b.Yg);b=g(b,"$WID",a.K());b=g(b,"$VER",c.b.ra);b=g(b,"$REF",c.b.ih);b=g(b,"$SIG",c.b.qe);b=g(b,"$APV",c.b.La);b=g(b,"$FRT",a.Df());b=g(b,"$RND",c.a.Id());b=g(b,"$DRFT",c.b.Jg);b=g(b,"$ABTEST",c.b.ze);b=g(b,"$XP",c.b.Pc?"&xp="+c.a.G(c.b.Pc):"");return b=g(b,"$TOKEN",""!==c.b.ic?"&t="+c.b.ic:"")};d.Rf=function(a){var b="&srcUrl=";a=a.Sf();return b=
null!==a&&"string"===typeof a&&0<a.length?b+c.a.G(a):0<c.b.he.length?b+c.b.he:""};d.Mb=function(a,b,e){e=c.b.Ya&&e;var g=b.h;b.D.Nh();e?c.a.hg(g,a):(e=c.a.F(a,!0),""!==b.xa()&&c.a.n(e,"error",function(){OBR.extern.errorInjectionHandler(g)}),c.a.L(e));d.Wb.l("onOdbFire_"+g+"_"+b.K(),[b],!0);c.d.log("fire this src "+a)};d.Oh=function(a){c.b.pd&&setTimeout(function(){d.Qd(a.h,a.K())},1E4)};d.Qd=function(a,b){c.a.fb("ob_odbCall_"+a+b)};a.l=function(){if(!0!==d.$a&&!0===c.P.sg()){d.$a=!0;var a=d.Zb.top(),
b;a?(c.d.log("fire odb for "+a.da()),b=d.xf(a),d.Mb(b,a,!0),d.Oh(a)):d.$a=!1}};a.Pg=function(a,b){d.Wb.add("onOdbFire_"+a.h+"_"+a.K(),b)};a.kc=function(a,b){d.$a=!1;d.Qd(a,b)};a.Bh=function(a){!0===a&&(OBR.b.La=a)};a.Sh=function(a){c.b.ic=a};a.bg=function(){c.b.La=!1};a.dc=function(f){d.Zb.add(f);c.d.log("register odb for "+f.da());a.l()};a.Ie=function(c){a.kc(c.h,c.K());a.l()};a.I=function(){d.Zb.We();d.Wb.Y()};a.w=function(){d.X=c;return d};a.i(OBR);return a}();OBR.g=OBR.g||function(){function d(){c.d.log("ping fail")}function a(){c.d.log("ping success");c.P.ee();c.display.Dd(b.Ee);c.r.l()}var c,f={},b={},e;b.Tb="manualDataReady";b.Sb="manualClickReady";f.i=function(a){c=a=a||OBR;e=new c.u;f.Nd(b.Ag)};f.w=function(){return b};f.Nd=function(b){e.add("onHtmlReturn",b)};f.lh=function(b){e.add("noRecs",b)};b.Ee=function(a){c.d.log("rec "+a+" was rendered");var e=c.j[a];e.V(!0);e.D.Ph();0===a&&c.a.Ch();b.Ke(e);c.a.Fe(e);c.display.eg(e)};b.Nf=function(b){return Math.floor(Math.random()*
b)+1};b.Ke=function(a){var e=a.k("widgetStatistics",!1),f=c.b.Za,d=a.k("tracking",!1);a.k("globalWidgetStatistics",!1)&&!d?b.zh():!e||(f||d)||(e=a.k("wsSampling",0),0!==e&&b.Nf(e)!==e||b.hb(a))};b.hb=function(b){2===c.c.Ra(c.c.e.Ja)&&2===c.c.Ra(c.c.e.ja)?c.B.zc(b.h):c.c.A(c.c.e.ja,function(){c.c.A(c.c.e.Ja,function(){c.B.zc(b.h)},this)},this)};b.zh=function(){2===c.c.Ra(c.c.e.wb)&&2===c.c.Ra(c.c.e.ja)&&c.uc.start()};b.hi=function(a){c.d.log("widget was found");a=c.lb.De(a);0===a.h&&b.Je();!0===a.lg()?
c.d.log("Dynamic loader - stop odb!"):c.r.dc(a)};f.Ad=function(a,d){var h="NA",k=a&&a.response?a.response:null,l;if(l=c.a.Qa(d))if(e.l("onmManualOdbReturned_"+d,[k,d]),l.T())return;k&&(k.request&&k.request.widgetJsId)&&(h=k.request.widgetJsId);c.r.kc(d,h);l&&(k&&k.documents)&&(l.V(!0),f.Uc(b.Tb,d,h,a));c.r.l()};f.Qg=function(b,a){e.add("onmManualOdbReturned_"+b,a)};f.Uc=function(b,a,c,f){b=b+a+c;e.l(b,[f.response.documents,a]);e.ec(b)};f.wd=function(a,d){if(null!==a){var h=0,k=a.permalink,l=a.srcUrl,
n=a.widgetId,p=a.widgetType,q=a.fbk,r=a.timeout;k&&"string"===typeof k&&(n&&"string"===typeof n)&&(c.d.log("manual Odb call"),h=f.Cg(k),f.cb(b.Tb+h+n,d),k=c.lb.Ic(h,k,n,!1,p,q,r,l,!0),k.Ih(),c.na[h]=k,e.l("onmManualOdbCall",[k,b.Tb]),c.P.ee(),c.r.dc(k))}};f.cb=function(b,a){e.add(b,a)};f.Ug=function(b){e.add("onmManualOdbCall",b)};f.Cg=function(b){var a=0,e=c.b;null===e.Ca&&(e.Ca=0<c.j.length?c.j[0].da():null);e.Ca===b?a=e.vd+1:e.Ca=b;return e.vd=a};f.Rb=function(a,f){var d=OBR.o(c.b.Xa);c.a.fa(d)&&
c.a.fa(d.parentNode)&&d.parentNode.removeChild(d);c.a.Nb();"function"===typeof f&&e.add(b.Sb,f);if(null!==a&&(d=a.link)&&"string"===typeof d){c.d.log("manual Click");if(null!==d.match(/http:\/\/.+outbrain.com/i))c.a.Re(d+"&noRedirect=true");else throw"Wrong redirect link: "+d;e.l(b.Sb);e.ec(b.Sb)}};b.wg=function(a){return b.od(a)||a.k("stopWidget",!1)};b.od=function(b){return b.k("stopRater",!1)};b.Je=function(){c.P.Sg(a);c.P.Rg(d);c.b.Ig||c.b.pd?(c.d.log("async - no ping"),a()):c.P.$g()};f.Yb=function(a,
d){var h,k;OBR.d.log("HTML returned");d=b.zd(d);h=c.j[d];a.response&&(a.response.request&&a.response.request.t)&&c.r.Sh(a.response.request.t);h?(0>=h.Pf(a)&&e.l("noRecs",[h]),h.D.Mh(),h.T()||(h.setData(a),k=h.K(),b.wg(h)||b.xg(h.Pa())||(c.r.Bh(a.response.settings.apv),b.Ue(h),f.tg(h)?f.oa(d):f.Vf(h),k&&e.l("odbRtn_"+k,[h]),e.l("onHtmlReturn",[h]))),f.tf(h)):c.d.log("odbHtmlReturned : Widget not found")};b.zd=function(b){return 1E3>b?b:b%1E3};b.Ag=function(b){!0===b.k("isRegistrationEnabled",!1)&&
c.c.A(c.c.e.sb,function(){c.Od.oh(b)},this)};b.xg=function(b){var a=!1;null!==b.match(/(<\/?met|<\/?scr)/i)&&(a=!0,c.d.log("SECURITY"));return a};f.tf=function(a){b.od(a)||(c.r.kc(a.h,a.K()),c.r.l())};b.Ue=function(b){b.vg()&&c.c.A(c.c.e.vb,function(){c.ge.i(b.da())},this)};f.tg=function(b){var a=!0;if(b.td()||b.ld())a=!1;return a};f.Vf=function(b){var a=b.h;b.td()?c.c.A(c.c.e.xb,function(){c.jb.af(a)},this):b.ld()&&c.display.cg(b)};f.oa=function(b){c.display.oa(c.j[b]);c.d.log("HTML - Render");f.dh(b)};
f.dh=function(b){c.a.Se(b)};f.Jd=function(b,a){c.a.yb(a,"ob_clicked");var e=c.a.J(a,"data-redirect");null!==e&&(a.href=e);return!0};f.Fa=function(b){c.B&&c.B.Fd();c.ma.pf(b);return!0};f.I=function(){e.Y()};f.Vd=function(){c.ma.Lg(b.hi);c.b.ab?c.b.bi():c.ma.Rc()};f.Ne=function(b,a,e){if(confirm("Removing this recommendation will remove it permanently for this section and will refresh the recommendations.\n Are you sure you want to remove this recommendation?")){var d="https://my.outbrain.com/manage/",
d=!1===e?d+("add-zapped-document?publisherId="+a+"&docUrl="+c.a.G(b)):d+("add-rule?publisherId="+a+"&ruleValue="+c.a.G(b)+"&ruleType="+e);b=c.a.F(d,!0);c.a.L(b)}};f.Me=function(b){confirm("Removing this recommendation will remove it permanently for this section and will refresh the recommendations.\n Are you sure you want to remove this recommendation?")&&(b=c.a.F(c.b.Xb+c.b.Oe+b+"&index=1&templateIndex=1&sig="+c.b.qe,!0),c.a.L(b))};f.sh=function(b){b&&(b.ob_exclude_resp&&b.ob_exclude_resp.code&&
1!==b.ob_exclude_resp.code)&&f.Fa()};f.Md=function(b,a){if(a&&"function"===typeof a){var d="odbRtn_"+b;e.add(d,a);var f=c.mc.gd(b);f&&f.jg()&&e.l(d,[f])}};f.yf=function(b){return(b=c.mc.gd(b))?b.p("tcr",-1):null};f.Ud=function(){c.ma.Rc()};f.Y=function(){c.B&&c.B.Fd();c.display.I();c.r.I();c.P.I();this.I();c.ma.I();c.va&&c.va.I();c.b.La=!1};f.nh=function(){this.Y();this.Vd()};f.Kd=function(a,e){a=b.zd(a);var d=c.j[a];d.kh(e);OBR.Fa&&OBR.Fa.Kh(d);c.r.dc(d)};f.i(OBR);return f}();OBR.display=OBR.display||function(){var d,a={},c;a.i=function(a){d=a=a||OBR;c=new d.u};a.hd=function(c,b){var e=d.a.ci(c),g=d.a.v(b.h);if(g&&e&&0<e.length){var m=function(){a.Xf(g).Ha(function(c){a.Lh(c,e[0],b.h).Ha(function(b){a.lf(b)})})},h=new d.ua;h.Ha(0<b.Jb()?function(){a.mf(g).Ha(m)}:m);h.pa();d.d.log("element inserted")}};a.mf=function(a){var b=new d.ua,e=1,c=setInterval(function(){0.1>=e?(clearInterval(c),b.pa(a)):(a.style.opacity=e,d.b.nd?e=0:(a.style.filter="alpha(opacity="+100*e+")",e-=
0.1*e))},10);return b};a.Xf=function(a){var b=new d.ua;a.style.opacity=0;setTimeout(function(){b.pa(a)},0);return b};a.Lh=function(a,b,e){var g=new d.ua;a.innerHTML="";d.a.O(b,a);c.l("afterRender",[e]);setTimeout(function(){g.pa(a)},0);return g};a.lf=function(a){var b=new d.ua,e=0.1,c=setInterval(function(){1<=e?(clearInterval(c),a.removeAttribute("style"),b.pa(a)):(a.style.opacity=e,d.b.nd?e=1:(a.style.filter="alpha(opacity="+100*e+")",e+=1.1*e))},50)};a.Di=function(a){c.add("beforeRender",a)};a.Dd=
function(a){c.add("afterRender",a)};a.eg=function(a){d.a.ug(a)&&OBR.c.A(OBR.c.e.tb,function(b){OBR.scroll.Dg(b)},this,a)};a.cg=function(c){OBR.c.A(OBR.c.e.ja,d.a.ka(),this);OBR.c.A(OBR.c.e.mb,function(){a.uf(c)},this)};a.uf=function(d){a.hd(OBR.Na.$f(d),d);OBR.Na.i();c.l("afterRender",[d.h])};a.oa=function(c){d.d.log("HTML - render widget with "+c.Pa());a.hd(c.Pa(),c);c.V(!0)};a.I=function(){c.Y()};a.i(OBR);return a}();OBR.ne=OBR.ne||function(d){var a={},c={},f={},b="",e=null,g=null,m=null,h=!1,k=0,l="html",n=!1,p=4E3,q="nano",r=!1,s=!1,u={},t=0,v=new OBR.u;a.ni=0;a.mi=1E3;a.li=2;a.h=d;a.Ma="";a.Gh=function(b,a){v.add("onInjectError_"+b.h,a)};a.rf=function(b){v.l("onInjectError_"+b,[b],!0)};a.D={Cd:-1,Bd:-1,Td:-1,Ta:function(){var b=[];b.push(a.D.Cd);b.push(a.D.Bd);b.push(a.D.Td);return b},Nh:function(){a.D.Cd=(new Date).getTime()},Mh:function(){a.D.Bd=(new Date).getTime()},Ph:function(){a.D.Td=(new Date).getTime()}};
a.nf={slow:7E3,normal:5E3,fast:3E3,qa:5};a.setData=function(a){a&&a.response&&(a=a.response,a.request&&(f=a.request),a.settings&&(c=a.settings),a.html&&(b=a.html),n=!0)};a.Kb=function(){return c};a.k=function(b,a){var e;e=c[b];return"undefined"!==typeof e&&null!==e?e:a};a.Pf=function(b){var a={};return b&&(b.response&&b.response.request)&&(a=b.response.request,b=a.tcr)?b:-1};a.p=function(b,a){var e=f[b];return e?e:a};a.Pa=function(){return b};a.K=function(){return e};a.Wh=function(b){e="string"===
typeof b?b:"NA"};a.Ih=function(){l="japi"};a.Df=function(){return l};a.Fi=function(b){k=b};a.ti=function(){return k};a.da=function(){return g};a.de=function(b){g=b};a.Rh=function(b){m=b};a.Sf=function(){return m};a.lg=function(){return h};a.Eh=function(b){h="true"===b||!0===b};a.ld=function(){return"flyThrough"===a.k("displayMode","")};a.td=function(){return"video"===a.k("displayMode","")};a.yi=function(){return"recInIframe"===a.k("displayMode","")};a.vg=function(){return"true"===a.k("skyLanderInjector",
!1)};a.jg=function(){return n};a.Tf=function(){return q};a.Xh=function(b){"string"===typeof b&&(q=b.toLowerCase())};a.Uh=function(b){"string"===typeof b&&""!==b&&(a.Ma=b)};a.mg=function(){return!isNaN(parseInt(a.Ma,10))};a.xa=function(){var b;b=parseInt(a.Ma,10);return a.mg()&&"number"===typeof b&&0<=b&&10>b?OBR.a.Cf(g,b):a.Ma};a.T=function(){return r};a.V=function(b){"boolean"===typeof b&&(r=b)};a.wi=function(){return"hp"===q};a.q=function(){return u};a.Fh=function(){var b={timeout:0,Ea:null,Bb:0,
Cc:!1,Kg:!1,cb:"",Wa:!1,hc:!1,ac:!1,Ka:!1,pe:"NA",reason:0,Ob:!0};"object"===typeof b&&(u=b)};a.qg=function(){return s};a.$c=function(){return p};a.Hh=function(b){p=a.nf[b]||6E3};a.Jh=function(b){"boolean"===typeof b&&(s=b)};a.Ef=function(){return 0===t?a.h:1E3*t+a.h};a.kh=function(b){"string"===typeof b?(OBR.a.s(OBR.a.v(a.h),"data-src",b),a.de(b),t=0):t+=1;a.V(!1)};a.Jb=function(){return t};return a};
OBR.lb=OBR.lb||function(){var d=OBR,a={},c=new d.u;a.Ic=function(a,b,e,c,m,h,k,l,n){a=new d.ne(a);a.de(b);a.Wh(e);a.Eh(c);a.Xh(m);a.Uh(h);a.Hh(k);a.Rh(l);"boolean"===typeof n&&a.Jh(n);return a};a.De=function(f){var b=d.a.J(f,"data-src"),e=d.a.J(f,"data-widget-id"),g=d.a.J(f,"data-widget-type"),m=d.a.J(f,"data-timeout"),h=d.a.J(f,"data-fbk"),k=d.a.J(f,"data-ob-srcUrl"),l=d.a.J(f,"data-advance-loader"),n=d.a.J(f,"data-dynLoad");d.a.s(f,"data-dynLoad","");d.b.be("true"===(l||"").toLowerCase());if("string"!==
typeof b)b=d.a.bd(!1);else if(0===b.length||0===b.indexOf("DROP")||0===b.indexOf("INSERT"))b=d.a.bd(!0);l=0===d.j.length&&d.b.Ca===b?1:d.j.length;b=a.Ic(l,b,e,n,g,h,m,k,!1);d.j[l]=b;0===l&&(e=d.a.createElement("div","ob_holder"),e.style.display="none",d.a.insertBefore(e,f),d.a.Nb());f.id=d.b.kb+l;c.l("onWidgetCreate",[b]);return b};a.Tg=function(a){c.add("onWidgetCreate",a)};return a}();
OBR.mc=OBR.mc||function(){var d=OBR;return{gd:function(a){var c,f,b;if(d.j)for(f=d.j.length,c=0;c<f;c+=1)if((b=d.j[c])&&b.K()===a)return b;return null}}}();OBR.va=OBR.va||function(){var d={},a=OBR,c={},f=new a.u;c.gf=function(b){b.Fh();""!==b.xa()&&(b.Gh(b,function(){d.Yf(b.h)}),OBR.r.Pg(b,function(){c.Vh(b)}),OBR.g.Md(b.K(),d.Og))};c.Vh=function(b){var a;a=b.q();a.timeout=b.$c();a.Wa||(a.Ea=setTimeout(function(){c.Qe(b)},a.timeout))};d.Og=function(b){var a=b.q();a.Kg=!0;b.k("ispartialrecs",!1)&&(clearTimeout(a.Ea),a.reason=3,a.ac=!0,c.Hb(b))};d.Mg=function(b,e){var g;b&&(b.settings&&!0===b.settings.ispartialrecs)&&(g=a.a.Qa(e),clearTimeout(g.q().Ea),
c.Sd(g))};c.Ng=function(b,c){b.q().cb=c;a.g.Qg(b.h,d.Mg)};a.lb.Tg(c.gf);a.g.Ug(c.Ng);d.Bc=function(b,e){var g,d,f;b&&b.response&&(g=b.response,OBR.d.log("Cdn response returned"),(d=c.ed(e))?(a.r.Ie(d),f=d.q(),f.Qb=b,g.request&&(f.pe=g.request.widgetJsId||"NA"),f.Cc=(new Date).getTime(),f.Wa&&!f.Ka?(f.Wa=!1,c.Lb(d)):f.hc&&!f.Ka?(f.hc=!1,c.Lb(d)):f.ac&&!f.Ka&&(f.ac=!1,c.Lb(d))):a.d.log("Editorial Widget : Widget not found"))};c.Lb=function(b){var a=b.q();a.Ka=!0;c.Sd(b);d.te(b);clearTimeout(b.q().Ea);
a.reason=0;a.Ob=!0};c.ed=function(b){var c=a.j[b];return c?c:a.a.Qa(b)};c.fd=function(b){return(b=a.a.fd(b))?b:a.a.Qa("fbk")};c.Qe=function(b){var a=b.q();b.T()||(a.reason=1,a.hc=!0,c.Hb(b))};c.Sd=function(b){var c=b.q();b.T()&&!b.k("ispartialrecs",!1)?c.Ob=!1:(b.qg()?a.g.Uc(c.cb,b.h,c.pe,c.Qb):(b.setData(c.Qb),OBR.g.oa(b.h)),b.V(!0))};d.te=function(b){var c,g,d;g=b.q();a.a.rg(b.Kb())&&b.setData(g.Qb);d=""!==b.da()?a.a.G(b.da()):window.location.href;c=b.k("irdfb","");""!==c&&(c+="&reason="+g.reason||
"",c=c+("&url="+d||"")+("&at="+(b.q().Cc-b.q().Bb)||""),c+="&to="+b.$c()||"",c+="&ir="+(g.Ob?1:0)||"",b=OBR.a.F(c,!1),OBR.a.L(b))};c.Hb=function(b){if(0===b.q().Bb){var e=c.wf(b);c.Mb(e,b);a.d.log("CDN call: cdnCall")}};c.wf=function(b){var c;c=a.b.Pe;b=b.xa()+"_"+b.K()+"_"+b.h;return c+b};d.Yf=function(b){b=c.ed(b);var a;b&&(a=b.q(),clearTimeout(a.Ea),a.Wa=!0,a.reason=2,c.Hb(b))};c.Mb=function(b,c){var g=a.a.F(b,!1);c.q().Bb=(new Date).getTime();a.a.L(g);a.d.log("fire this src "+b)};d.I=function(){f.Y()};
d.w=function(){return c};return d}();OBR.m=OBR.m||function(){var d={},a=OBR,c={height:0,width:0},f=300;d.ia=function(b){a=b};d.w=function(){var b={};b.X=a;return b};d.cd=function(){return new OBR.pb({})};d.fe=function(){var b,a,g;g={height:0,width:0};b=void 0!==window.innerWidth;a=void 0!==document.documentElement&&void 0!==document.documentElement.clientWidth&&0!==document.documentElement.clientWidth;b?(g.height=window.innerHeight,g.width=window.innerWidth):a?(g.height=document.documentElement.clientHeight,g.width=document.documentElement.clientWidth):
!1===b&&!1===a&&(g.height=document.getElementsByTagName("body")[0].clientHeight,g.width=document.getElementsByTagName("body")[0].clientWidth);c=g};d.ea=function(){return c};d.ce=function(){document&&document.body&&(f=Math.max(Math.max(document.body.scrollHeight,document.documentElement.scrollHeight),Math.max(document.body.offsetHeight,document.documentElement.offsetHeight),Math.max(document.body.clientHeight,document.documentElement.clientHeight)))};d.Xc=function(){return f};d.Oa=function(b){var a=
0;if(!b)return d.U.oc;try{if(b.offsetParent)for(;;){a+=b.offsetTop;if(!b.offsetParent)break;b=b.offsetParent}else b.y&&(a+=b.y)}catch(c){return d.U.oc}return parseInt(a,10)};d.za=function(){return document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop};d.md=function(){return OBR.m.ea().height+10>=OBR.m.Xc()};OBR.a.n(window,"resize",function(){d.fe();d.ce()});d.fe();d.ce();return d}();
OBR.pb=OBR.pb||function(d){var a,c={U:{vc:3,nc:5,nb:60,oc:1E4},M:{tc:0,ta:1,qc:2,sc:3}};if(d)for(a in d)d.hasOwnProperty(a)&&(c.U[a]=d[a]);c.Cb=function(a){function b(b,a){return e.top-b<=g.height&&0<=e.bottom+a}var e=a.getBoundingClientRect(),g=OBR.m.ea(),d=c.U.vc,h=c.U.nc,k=c.U.nb;a=a.clientHeight;var l=c.M.tc;b(0,0)?l=c.M.ta:b(d+a/2,h+a/2)?l=c.M.qc:b(k,k)&&(l=c.M.sc);return l};c.Ec=function(a){var b,e,g,d,h;b=a.getBoundingClientRect();e=OBR.m.Oa(a);h=OBR.m.ea();g=h.height+OBR.m.za();d=c.M.tc;b=
0<=b.top&&0<=b.left&&b.bottom<=h.height&&b.right<=h.width;a=e-c.U.vc<=g&&e+a.clientHeight-c.U.nc>=g;e=e-c.U.nb<=g&&e>g;b?d=c.M.ta:a?d=c.M.qc:e&&(d=c.M.sc);return d};return c};OBR.c.C(OBR.c.e.ja);OBR.uc=OBR.uc||function(){var d={},a={},c,f=(new Date).getTime(),b,e;a.i=function(g){c=g;d.bc=!1;d.sa=[];d.ha=new OBR.pb({nb:0});d.S=!1;a.Oc={hh:0,hf:3};e=d.ha.M.ta;b=c.b.$b+"loggerServices/widgetEvent?"};a.start=function(){c.g.Nd(d.Kc);d.Eb();d.Kc();c.a.n(window,"scroll",d.bb)};d.Kc=function(){var b=0,a,c=!1;b;for(a=OBR.j.length;b<a;b+=1)void 0===d.sa[b]&&OBR.j[b].T()&&(d.sa[b]={Z:OBR.a.v(b),ae:!1},c=!0);d.sf();c&&d.bb()};d.sf=function(){var b=0,a;b;for(a=OBR.j.length;b<a;b+=1)void 0!==d.sa[b]&&
(!1===d.sa[b].ae&&OBR.j[b].T())&&(d.yh(b),d.sa[b].ae=!0)};a.wh=function(){var b,c=d.sa,f=c.length||0;for(b=0;b<f;b+=1)if(void 0!==c[b]&&(c[b]&&c[b].Z)&&d.ha.Cb(c[b].Z)===e){f=d.Jc(b,a.Oc.hf,e);d.hb(b,f);c[b]=null;break}};d.yh=function(b){var e=d.ha.Cb(c.a.v(b)),e=d.Jc(b,a.Oc.hh,e);d.hb(b,e)};d.hb=function(b,a){var e=c.a.F(a,!0),d=c.a.ya();d||(d=c.a.Gb());c.a.O(e,d)};d.Jc=function(a,e,h){var k=c.j[a],l=[];l.push(b);l.push("tm=");l.push((new Date).getTime()-f);l.push("&eT="+e);l.push("&eVP="+h);l.push("&ab="+
d.S);l.push("&did="+k.p("did",-1));l.push("&rId="+k.p("req_id",-1));l.push("&sid="+k.p("sid",-1));l.push("&wnid="+k.p("wnid",-1));l.push("&pid="+k.p("pid",-1));l.push("&wId="+k.p("widgetJsId","null"));l.push("&wRV="+OBR.b.ra);l.push("&eY="+c.m.Oa(OBR.a.v(a)));l.push("&ty="+Math.floor(c.m.za()));l.push("&viH="+c.m.ea().height);return l.join("")};d.Eb=function(){var b,a;!0!==d.S&&(b=c.a.createElement("IFRAME","ob_ad","height:1px;width:-1px;left:-1000px;top:-1000px;display:block;border:none"),a=c.a.createElement("IMG",
"ob_ads","height:1px;width:-1px;left:-1000px;top:-1000px;display:block;border:none"),a.src=c.b.H+"/nanoWidget/images/adImages/ads-check.gif",b.className="item-container-ad",document.body.appendChild(b),document.body.appendChild(a),setTimeout(function(){if(a&&-1<a.style.display.indexOf("none")||b&&("hidden"===b.style.visibility||0===b.clientHeight))d.S=!0;b&&b.parentNode&&b.parentNode.removeChild(b);a&&a.parentNode&&a.parentNode.removeChild(a)},300))};d.bb=function(){!0!==d.bc&&(a.wh(),setTimeout(function(){d.bc=
!1},150),d.bc=!0)};a.i(OBR);return a}();OBR.c.C(OBR.c.e.wb);OBR.extern=OBR.extern||function(){var d=OBR;return{getStat:function(){d.B.Wd()},showDescription:function(a,c){d.c.A(OBR.c.e.ob,function(){OBR.Hd.zg(a,c)},this)},returnedHtmlData:function(a,c){d.g.Yb(a,c)},returnedIrdData:function(a,c){d.va.Bc(a,c)},returnedJsonData:function(a,c){d.g.Ad(a,c)},returnedError:function(a){OBR.d.log("Call made using extern class");d.d.log("Callback error"+a)},callRecs:function(a,c){OBR.d.log("Call made using extern class");d.g.wd(a,c)},callClick:function(a,c){OBR.d.log("Call made using extern class");
d.g.Rb(a,c)},callWhatIs:function(a,c,d,b,e,g){OBR.c.A(OBR.c.e.Ia,function(){OBR.lc.Ac(a,c,d,b,e,g)},this);return!1},recClicked:function(a,c){OBR.d.log("Call made using extern class");d.g.Jd(a,c)},imageError:function(a){OBR.d.log("Call made using extern class");d.a.Fc(a)},showRecInIframe:function(a,c,f,b,e){d.c.A(d.c.e.qb,function(){d.cc.Yh(a,c,f,b,e)},this)},errorInjectionHandler:function(a){OBR.j[a].rf(a)},reloadWidget:function(){OBR.d.log("reload widget");d.g.nh()},researchWidget:function(){OBR.d.log("research widget");
d.g.Ud()},cancelRecommendation:function(a){OBR.d.log("cancel recommendation with bocr "+a);d.g.Me(a)},cancelRecs:function(a,c,f){OBR.d.log("cancel recommendation by doc url "+a+" publisher id = "+c+" isAd = "+f);d.g.Ne(a,c,f)},refreshWidget:function(a){OBR.d.log("refresh widget");d.g.Fa(a)},refreshSpecificWidget:function(a,c){OBR.d.log("refresh SPECIFIC widget");"string"!=typeof c?d.c.A(d.c.e.rb,function(){OBR.g.Kd(a,c)},this):OBR.g.Kd(a,c)},getCountOfRecs:function(a){return d.g.yf(a)},onOdbReturn:function(a,
c){d.g.Md(a,c)},closeCard:function(){d.Na.Ye()},closeModal:function(){try{d.modal.hideModal()}catch(a){}},scrollLoad:function(){try{OBR.c.C(OBR.c.e.ub)}catch(a){}}}}();window.outbrain=window.outbrain||{};window.outbrain.returnedHtmlData=function(d,a){OBR.g.Yb(d,a)};window.outbrain.returnedIrdJsonData=function(d,a){OBR.va.Bc(d,a)};window.outbrain.returnedJsonData=function(d,a){OBR.g.Ad(d,a)};window.outbrain.returnedError=function(d){OBR.d.log("Callback error"+d)};
window.outbrain.callRecs=function(d,a){OBR.g.wd(d,a)};window.outbrain.callClick=function(d,a){OBR.g.Rb(d,a)};window.outbrain.callWhatIs=function(d,a,c,f,b,e){OBR.c.A(OBR.c.e.Ia,function(){OBR.lc.Ac(d,a,c,f,b,e)},this)};window.outbrain.recClicked=function(d,a){OBR.g.Jd(d,a)};window.outbrain.imageError=function(d){OBR.a.Fc(d)};window.outbrain.closeModal=function(){try{OBR.modal.hideModal()}catch(d){}};window.outbrain_rater=window.outbrain_rater||{};
window.outbrain_rater.returnedHtmlData=function(d,a){OBR.g.Yb(d,a)};window.outbrain_rater.returnedCancelOdbData=function(d){OBR.g.sh(d)};!0===OBR.b.kd&&(OBR.d.log("Widget Start!"),OBR.b.kd=!1,"boolean"===typeof window.OB_PASSIVE_MODE&&!0===window.OB_PASSIVE_MODE?OBR.d.log("passive"):OBR.g.Vd());})(window.OBR);
