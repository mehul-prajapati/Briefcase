var g,k=this,l=function(a,b){var c=a.split("."),d=k;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b},m=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&
!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b};Math.random();Math.random();var n=Array.prototype,p=function(a){return n.concat.apply(n,arguments)},q=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var r;t:{var s=k.navigator;if(s){var u=s.userAgent;if(u){r=u;break t}}r=""};var w=-1!=r.indexOf("Opera")||-1!=r.indexOf("OPR"),x=-1!=r.indexOf("Trident")||-1!=r.indexOf("MSIE"),y=-1!=r.indexOf("Gecko")&&-1==r.toLowerCase().indexOf("webkit")&&!(-1!=r.indexOf("Trident")||-1!=r.indexOf("MSIE")),A=-1!=r.toLowerCase().indexOf("webkit"),aa=A&&-1!=r.indexOf("Mobile");
(function(){var a="",b;if(w&&k.opera)return a=k.opera.version,"function"==m(a)?a():a;y?b=/rv\:([^\);]+)(\)|;)/:x?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:A&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(r))?a[1]:"");return x&&(b=(b=k.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();var B;B=!1;var C=r;C&&(-1!=C.indexOf("Firefox")||-1!=C.indexOf("Camino")||-1!=C.indexOf("iPhone")||-1!=C.indexOf("iPod")||-1!=C.indexOf("iPad")||-1!=C.indexOf("Chrome")||-1!=C.indexOf("Android")||-1!=C.indexOf("Safari")&&(B=!0));var ba=B;var D=function(a){var b=window;if(aa&&ba&&a){a.focus();var c=0,d=null,d=a.setInterval(function(){b.closed||5==c?a.clearInterval(d):(b.close(),c++)},150)}else b.close()};var E="StopIteration"in k?k.StopIteration:Error("StopIteration"),G=function(){};G.prototype.next=function(){throw E;};G.prototype.s=function(){return this};var H=function(a,b){this.g={};this.c=[];this.m=this.b=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){var e;if(a instanceof H)e=a.j(),d=a.h();else{var c=[],f=0;for(e in a)c[f++]=e;e=c;c=[];f=0;for(d in a)c[f++]=a[d];d=c}for(c=0;c<e.length;c++)this.set(e[c],d[c])}};H.prototype.h=function(){I(this);for(var a=[],b=0;b<this.c.length;b++)a.push(this.g[this.c[b]]);return a};
H.prototype.j=function(){I(this);return this.c.concat()};H.prototype.k=function(a){return J(this.g,a)};H.prototype.remove=function(a){return J(this.g,a)?(delete this.g[a],this.b--,this.m++,this.c.length>2*this.b&&I(this),!0):!1};var I=function(a){if(a.b!=a.c.length){for(var b=0,c=0;b<a.c.length;){var d=a.c[b];J(a.g,d)&&(a.c[c++]=d);b++}a.c.length=c}if(a.b!=a.c.length){for(var e={},c=b=0;b<a.c.length;)d=a.c[b],J(e,d)||(a.c[c++]=d,e[d]=1),b++;a.c.length=c}};g=H.prototype;
g.get=function(a,b){return J(this.g,a)?this.g[a]:b};g.set=function(a,b){J(this.g,a)||(this.b++,this.c.push(a),this.m++);this.g[a]=b};g.forEach=function(a,b){for(var c=this.j(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};g.clone=function(){return new H(this)};
g.s=function(a){I(this);var b=0,c=this.c,d=this.g,e=this.m,f=this,h=new G;h.next=function(){for(;;){if(e!=f.m)throw Error("The map has changed since the iterator was created");if(b>=c.length)throw E;var h=c[b++];return a?h:d[h]}};return h};var J=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var ca=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/,L=function(a){if(K){K=!1;var b=k.location;if(b){var c=b.href;if(c&&(c=(c=L(c)[3]||null)&&decodeURIComponent(c))&&c!=b.hostname)throw K=!0,Error();}}return a.match(ca)},K=A;var M=function(a,b){var c;if(a instanceof M)this.d=void 0!==b?b:a.d,N(this,a.i),c=a.q,O(this),this.q=c,c=a.l,O(this),this.l=c,P(this,a.p),c=a.o,O(this),this.o=c,Q(this,a.f.clone()),c=a.n,O(this),this.n=c;else if(a&&(c=L(String(a)))){this.d=!!b;N(this,c[1]||"",!0);var d=c[2]||"";O(this);this.q=d?decodeURIComponent(d):"";d=c[3]||"";O(this);this.l=d?decodeURIComponent(d):"";P(this,c[4]);d=c[5]||"";O(this);this.o=d?decodeURIComponent(d):"";Q(this,c[6]||"",!0);c=c[7]||"";O(this);this.n=c?decodeURIComponent(c):
""}else this.d=!!b,this.f=new R(null,0,this.d)};g=M.prototype;g.i="";g.q="";g.l="";g.p=null;g.o="";g.n="";g.t=!1;g.d=!1;g.toString=function(){var a=[],b=this.i;b&&a.push(S(b,T),":");if(b=this.l){a.push("//");var c=this.q;c&&a.push(S(c,T),"@");a.push(encodeURIComponent(String(b)));b=this.p;null!=b&&a.push(":",String(b))}if(b=this.o)this.l&&"/"!=b.charAt(0)&&a.push("/"),a.push(S(b,"/"==b.charAt(0)?da:ea));(b=this.f.toString())&&a.push("?",b);(b=this.n)&&a.push("#",S(b,fa));return a.join("")};
g.clone=function(){return new M(this)};var N=function(a,b,c){O(a);a.i=c?b?decodeURIComponent(b):"":b;a.i&&(a.i=a.i.replace(/:$/,""))},P=function(a,b){O(a);if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.p=b}else a.p=null},Q=function(a,b,c){O(a);b instanceof R?(a.f=b,a.f.r(a.d)):(c||(b=S(b,ga)),a.f=new R(b,0,a.d))},O=function(a){if(a.t)throw Error("Tried to modify a read-only Uri");};M.prototype.r=function(a){this.d=a;this.f&&this.f.r(a);return this};
var S=function(a,b){return"string"==typeof a?encodeURI(a).replace(b,ha):null},ha=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},T=/[#\/\?@]/g,ea=/[\#\?:]/g,da=/[\#\?]/g,ga=/[\#\?@]/g,fa=/#/g,R=function(a,b,c){this.e=a||null;this.d=!!c},V=function(a){if(!a.a&&(a.a=new H,a.b=0,a.e))for(var b=a.e.split("&"),c=0;c<b.length;c++){var d=b[c].indexOf("="),e=null,f=null;0<=d?(e=b[c].substring(0,d),f=b[c].substring(d+1)):e=b[c];e=decodeURIComponent(e.replace(/\+/g," "));
e=U(a,e);a.add(e,f?decodeURIComponent(f.replace(/\+/g," ")):"")}};g=R.prototype;g.a=null;g.b=null;g.add=function(a,b){V(this);this.e=null;a=U(this,a);var c=this.a.get(a);c||this.a.set(a,c=[]);c.push(b);this.b++;return this};g.remove=function(a){V(this);a=U(this,a);return this.a.k(a)?(this.e=null,this.b-=this.a.get(a).length,this.a.remove(a)):!1};g.k=function(a){V(this);a=U(this,a);return this.a.k(a)};
g.j=function(){V(this);for(var a=this.a.h(),b=this.a.j(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};g.h=function(a){V(this);var b=[];if("string"==typeof a)this.k(a)&&(b=p(b,this.a.get(U(this,a))));else{a=this.a.h();for(var c=0;c<a.length;c++)b=p(b,a[c])}return b};g.set=function(a,b){V(this);this.e=null;a=U(this,a);this.k(a)&&(this.b-=this.a.get(a).length);this.a.set(a,[b]);this.b++;return this};
g.get=function(a,b){var c=a?this.h(a):[];return 0<c.length?String(c[0]):b};g.toString=function(){if(this.e)return this.e;if(!this.a)return"";for(var a=[],b=this.a.j(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.h(d),f=0;f<d.length;f++){var h=e;""!==d[f]&&(h+="="+encodeURIComponent(String(d[f])));a.push(h)}return this.e=a.join("&")};g.clone=function(){var a=new R;a.e=this.e;this.a&&(a.a=this.a.clone(),a.b=this.b);return a};
var U=function(a,b){var c=String(b);a.d&&(c=c.toLowerCase());return c};R.prototype.r=function(a){a&&!this.d&&(V(this),this.e=null,this.a.forEach(function(a,c){var d=c.toLowerCase();c!=d&&(this.remove(c),this.remove(d),0<a.length&&(this.e=null,this.a.set(U(this,d),q(a)),this.b+=a.length))},this));this.d=a};var X=function(a){a=new M(a);var b="&"+window.name;O(a);a.f.set(b,!0);b=a.f.h("parent");O(a);a.f.remove("parent");1==b.length&&(b=gadgets.rpc.getOrigin(String(b[0])),O(a),a.f.set("parent",b));b="&"+window.name;O(a);a.f.remove(b);return a.toString()},Y=function(a,b,c,d,e,f,h){if(!d||!d.document.domain)return!1;var t=X(String(d.document.location.href));if(t.substr(0,c.length)!=c)return!1;c=gadgets.util.getUrlParameters(t);if(!b||!c.parent||b!=gadgets.rpc.getOrigin(String(c.parent)))return!1;if(!e)return l("oauth2callbackUrl",
a),d.oauth2verify.call(d,String(window.name),h)?!0:!1;d.oauth2callback.call(d,a);try{f()}catch(v){}return!0},Z=function(){try{return window.parent!=window}catch(a){}return!0},$=function(){try{return!!window.opener}catch(a){}return!0},ia=function(a,b,c,d,e){try{var f=Z(),h=!f&&$(),t=!0,v=null,F=function(){t&&D(v)};if(!f&&!h)return;var t=(h||!f)&&"keep_open"!==e,v=h?window.opener:window.parent,W=X(b);try{var z;if(d&&(z=v.frames[d],Y(a,c,W,z,!h,F,e)))return;for(b=0;b<v.frames.length;++b)if(z=v.frames[b],
Y(a,c,W,z,!h,F,e)){t=!1;break}}catch(ja){}}catch(ka){}F()};
l("postmessage.onLoad",function(){window.name="pmh"+String(2147483647*shindig.random()|0);var a=document.createElement("div"),b="true"==document.getElementById("error").value,c=gadgets.rpc.getOrigin(document.getElementById("origin").value),b=c+(b?"?":"#")+document.getElementById("response-form-encoded").value,d=document.getElementById("relay-endpoint").value,e=null,f=document.getElementById("proxy");f&&f.value&&(e=f.value);var f=document.getElementById("after-redirect"),h=null;f&&f.value&&(h=f.value);
a.appendChild(document.createTextNode(b));a.setAttribute("id","postmessage-hello");ia(b,d,c,e,h)});l("postmessage.closePopup",function(){var a=null;try{var b=Z(),c=!b&&$();if(!b&&!c)return;a=c?window.opener:window.parent}catch(d){}D(a)});
