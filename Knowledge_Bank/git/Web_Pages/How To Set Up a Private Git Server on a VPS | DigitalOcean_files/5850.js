if(typeof CE2=="undefined"){CE2={}}CE2.ignoredElements=[];CE2.clickCaptors=[];CE2.d=document;CE2.w=window;CE2.n=navigator;CE2.p={};(function(){var b=CE2.n.userAgent;if(/\bMSIE\b/.test(b)){CE2.ie=1;CE2.ieVersion=parseInt(/MSIE (\d+)\.\d+/.exec(b)[1],10);CE2.ieQuirksMode=(CE2.d.compatMode=="BackCompat")}})();CE2.ignore=function(b){CE2.ignoredElements.push(b);if(CE2.tracker){CE2.tracker.ignoredElements.push(b)}};CE2.capture=function(b){CE2.clickCaptors.push(b);if(CE2.tracker){CE2.tracker.clickCaptors.push(b)}};CE2.findMatchingSnapshot=function(j,k){var l,i,g,h;for(i=0;g=CE2.snapshots[i++];){l=Math.floor(new Date().getTime()/1000);if(g.e&&g.e<=l){continue}if(k&&!/n/.test(g.o||"")){continue}if(CE2.matchURL(g.u,k||j,g.o,g.d,CE2.n.userAgent)){if(g.s&&g.s>l){CE2.p[g.id]=g}else{if(!h){h=g}}}}return h};CE2.startTracking=function(d){if(!CE2.sampleVisit(d)){return}CE2.testID=d.id;CE2.testVersion=d.v||1;var e=CE2.d.createElement("script");var f=CE2.w.location.protocol=="https:"?CE2.TRACKING_SCRIPT_SECURE:CE2.TRACKING_SCRIPT;if(CE2.ie){f=f.replace(/t(\.prerelease)?\.js/,"tu$1.js")}e.src=f+"?s="+d.id+"&t="+(new Date().getTime());e.type="text/javascript";CE2.d.body.appendChild(e)};CE2.unescape=function(d){try{return decodeURIComponent(d)}catch(c){return unescape(d)}};CE2.qs2obj=function(h){if(h==null||/^\s*$/.test(h)){return null}var i={},k=null,j=h.replace(/\+/g," ").split("&");for(var l=0,g=j.length;l<g;l++){k=j[l].split("=");if(!k[0]){continue}i[CE2.unescape(k[0])]=k[1]==null?null:CE2.unescape(k[1])}return i};CE2.each=function(j,l,h){if(!j){return}var k;if(typeof j.length=="number"&&typeof j.concat=="function"){for(var m=0,i=j.length;m<i;m++){k=j[m];if(l.call(h,k,m)===false){break}}}else{var n;for(n in j){k=j[n];if(k!==Object.prototype[n]){if(l.call(h,k,n)===false){break}}}}};CE2.indexOf=function(g,h,j){var i,f;for(i=j||0,f=g.length;i<f;i++){if(g[i]===h){return i}}return -1};CE2.listen=CE2.addListener=function(f,e,d){if(f.addEventListener){f.addEventListener(e,d,true)}else{f.attachEvent("on"+e,d)}};CE2.removeListener=function(f,e,d){if(f.removeEventListener){f.removeEventListener(e,d,true)}else{f.detachEvent("on"+e,d)}};CE2.userData={};CE2.set=function(d,c){d=parseInt(d,10);if(1<=d&&d<=5){CE2.userData[d]=String(c)}};CE2.click=function(){if(CE2.tracker){return CE2.tracker.click.apply(CE2.tracker,arguments)}};CE2.getBox=function(){};CE2.sampleVisit=function(b){if(b.r==null){return true}if(b.r===false||b.r===true){return b.r}if(Math.random()>=1/b.r){b.r=false;return false}else{b.r=true;return true}};if(typeof CE2=="undefined"){CE2={}}CE2.READY_STATE_PATTERN=/complete|loaded/;CE2.autoStart=(typeof CE_MANUAL_START=="undefined"||!CE_MANUAL_START);CE2.domReady=(document.readyState&&CE2.READY_STATE_PATTERN.test(document.readyState));CE2.domReadyListeners=[];CE2.onDOMReady=function(b){if(CE2.domReady){return setTimeout(b,1)}CE2.domReadyListeners.push(b)};CE2.domReadySetup=function(){var c=function(g){var b,h;var a=CE2.domReadyListeners;while(a.length>0){a.pop().call()}CE2.domReady=true};if(CE2.domReady){c()}CE2.listen(window,"load",c);if(document.addEventListener){CE2.listen(document,"DOMContentLoaded",c)}if(document.readyState){var d=CE2.READY_STATE_PATTERN;(function(){if(d.test(document.readyState)){c()}else{setTimeout(arguments.callee,10)}})()}};if(CE2.autoStart){CE2.domReadySetup()}if(typeof CE2=="undefined"){CE2={}}CE2.matchURL=function(M,D,L,I,A){var J=/(home|default|index)($|\..*)/i,K=false,S,i,H,F,z,N,R,Q,B,P,O,T,G,l,C,E;if(!(M&&D)){return false}if(I&&CE2.indexOf(I,CE2.deviceType(A))<0){return false}L=L||"";if(/n/.test(L)){return M===D}if(/[re]/.test(L)){return new RegExp(M,"i").test(D)}S=new CE2.URI(D.toLowerCase());if(/h/.test(L)&&((M.protocol)!=S.protocol)){return false}H=S.host;i=H.replace(/^www\./,"");Q=M.host;B=M.ihost;if(/w/.test(L)&&(H!=Q&&H!=B)){return false}if(i!=Q.replace(/^www\./,"")&&i!=(B&&B.replace(/^www\./,""))){return false}if(!M.path){P="/"}else{P=M.path}F=S.path;if(P!=F){if(/\//.test(L)){return false}O=P.split("/");z=F.split("/");for(C=0,E=Math.max(O.length,z.length);C<E;C++){if(!O[C]){O[C]=""}if(!z[C]){z[C]=""}if(C==E-1){O[C]=O[C].replace(J,"");z[C]=z[C].replace(J,"")}if(O[C]!=z[C]){return false}}}N=S.qs;l=/\?/.test(L);T=M.qs||"";if((l&&N&&!T)||(!N&&T)){return false}CE2.each(T,function(a,b){if(N[b]!==a){K=true;return false}});if(K){return false}if(l){CE2.each(N,function(a,b){if(a!=T[b]){return(K=true)}});if(K){return false}}G=M.hash||"";R=S.hash||"";l=/#/.test(L);if((l||G)&&G!=R){return false}return true};if(typeof CE2=="undefined"){CE2={}}if(typeof(CE2.URI)=="undefined"){CE2.URI=function(c){this.src=c;this.protocol=this.host=this.port=this.path=this.qs=this.hash=this.query=null;if(c){var d=typeof(c);if(d=="string"){this.initWithString(c)}else{if(d=="object"){this.initWithURI(c)}}}};CE2.URI.pattern=/^\s*([\S]+?:\/\/)?([^\s\/]+?@)?([^:\/\?\#]+)?(\:\d+)?(\/?[^#\?\s]*)?([\?][^#\s]*)?([#]\S+)?/i;CE2.URI.prototype={initWithString:function(k){var l,i,m,j,n,o;var p=CE2.URI.pattern.exec(k);if(!p[1]&&k.charAt(0)!="/"){this.path=CE2.unescape((p[3]||"")+(p[5]||""))}else{if(l=p[1]){this.protocol=l.substr(0,l.indexOf(":"))}this.host=p[3]||null;if(i=p[4]){this.port=Number(i.substr(1))}if(m=p[5]){this.path=CE2.unescape(m)}else{if(this.host){this.path="/"}}}this.query=(p[6]+"").replace("?","");if(j=p[6]){this.qs=CE2.qs2obj(j.substr(1))}if(n=p[7]){this.hash=CE2.unescape(n.substr(1))}},initWithURI:function(b){CE2.each(b,function(d,a){this[a]=d},this)},isAbsolute:function(){return this.isURL()||(this.path&&this.path.charAt(0)=="/")},isURL:function(){return this.protocol&&this.host}}}CE2.TRACKING_SCRIPT="http://trk.cetrk.com/t.js";CE2.TRACKING_SCRIPT_SECURE="https://s3.amazonaws.com/trk.cetrk.com/t.js";CE2.TRACKING_DEST="http://trk.cetrk.com/";CE2.TRACKING_DEST_SECURE="https://s3.amazonaws.com/trk.cetrk.com/";CE2.uid=205850;CE2.snapshots=[{id:819246,u:{protocol:"https",domain:"digitalocean.com",path:"/price-comparison-chart",host:"digitalocean.com"},v:4,e:1397940584},{id:808988,u:{protocol:"https",domain:"digitalocean.com",path:"/badges-and-logos",host:"www.digitalocean.com"},v:4,e:1397327727},{id:821528,u:{protocol:"https",domain:"digitalocean.com",path:"/careers",host:"digitalocean.com"},v:4,e:1398027978}];CE2.dontTrack=function(){if(CE2.ie&&typeof CE2.w.external!="undefined"){try{if(CE2.w.external.InPrivateFilteringEnabled()==true){return true}}catch(c){}}var d=CE2.d.doNotTrack||CE2.n.doNotTrack||CE2.n.msDoNotTrack;return(d=="1"||d=="yes")};CE2.userMain=function(){if(CE2.dontTrack()){return}CE2.testID=CE2.testVersion=null;var b=function(){try{var a=CE2.findMatchingSnapshot(CE2.w.location.href,typeof CE_SNAPSHOT_NAME=="string"&&CE_SNAPSHOT_NAME);if(a){if(a.id!=CE2.testID){CE2.startTracking(a);if(typeof CE2.badge!="undefined"){CE2.badge()}}}else{CE2.testID=CE2.testVersion=null;if(CE2.tracker){CE2.tracker.cleanup();CE2.tracker=null}}}catch(d){}};b();if(CE2.autoStart){CE2.monitorInterval=setInterval(b,1000)}};if(CE2.autoStart){CE2.onDOMReady(CE2.userMain)}if(typeof CE_READY=="function"){CE2.onDOMReady(CE_READY)}else{if(typeof CE_READY=="object"){CE2.onDOMReady(function(){CE2.each(CE_READY,function(b){if(typeof b=="function"){b()}})})}};