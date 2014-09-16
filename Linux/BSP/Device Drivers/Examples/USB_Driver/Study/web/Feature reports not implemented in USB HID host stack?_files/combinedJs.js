

/*!
 * jQuery JavaScript Library v1.4.2
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Sat Feb 13 22:33:48 2010 -0500
 */
(function(A,w){function ma(){if(!c.isReady){try{s.documentElement.doScroll("left")}catch(a){setTimeout(ma,1);return}c.ready()}}function Qa(a,b){b.src?c.ajax({url:b.src,async:false,dataType:"script"}):c.globalEval(b.text||b.textContent||b.innerHTML||"");b.parentNode&&b.parentNode.removeChild(b)}function X(a,b,d,f,e,j){var i=a.length;if(typeof b==="object"){for(var o in b)X(a,o,b[o],f,e,d);return a}if(d!==w){f=!j&&f&&c.isFunction(d);for(o=0;o<i;o++)e(a[o],b,f?d.call(a[o],o,e(a[o],b)):d,j);return a}return i?
e(a[0],b):w}function J(){return(new Date).getTime()}function Y(){return false}function Z(){return true}function na(a,b,d){d[0].type=a;return c.event.handle.apply(b,d)}function oa(a){var b,d=[],f=[],e=arguments,j,i,o,k,n,r;i=c.data(this,"events");if(!(a.liveFired===this||!i||!i.live||a.button&&a.type==="click")){a.liveFired=this;var u=i.live.slice(0);for(k=0;k<u.length;k++){i=u[k];i.origType.replace(O,"")===a.type?f.push(i.selector):u.splice(k--,1)}j=c(a.target).closest(f,a.currentTarget);n=0;for(r=
j.length;n<r;n++)for(k=0;k<u.length;k++){i=u[k];if(j[n].selector===i.selector){o=j[n].elem;f=null;if(i.preType==="mouseenter"||i.preType==="mouseleave")f=c(a.relatedTarget).closest(i.selector)[0];if(!f||f!==o)d.push({elem:o,handleObj:i})}}n=0;for(r=d.length;n<r;n++){j=d[n];a.currentTarget=j.elem;a.data=j.handleObj.data;a.handleObj=j.handleObj;if(j.handleObj.origHandler.apply(j.elem,e)===false){b=false;break}}return b}}function pa(a,b){return"live."+(a&&a!=="*"?a+".":"")+b.replace(/\./g,"`").replace(/ /g,
"&")}function qa(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function ra(a,b){var d=0;b.each(function(){if(this.nodeName===(a[d]&&a[d].nodeName)){var f=c.data(a[d++]),e=c.data(this,f);if(f=f&&f.events){delete e.handle;e.events={};for(var j in f)for(var i in f[j])c.event.add(this,j,f[j][i],f[j][i].data)}}})}function sa(a,b,d){var f,e,j;b=b&&b[0]?b[0].ownerDocument||b[0]:s;if(a.length===1&&typeof a[0]==="string"&&a[0].length<512&&b===s&&!ta.test(a[0])&&(c.support.checkClone||!ua.test(a[0]))){e=
true;if(j=c.fragments[a[0]])if(j!==1)f=j}if(!f){f=b.createDocumentFragment();c.clean(a,b,f,d)}if(e)c.fragments[a[0]]=j?f:1;return{fragment:f,cacheable:e}}function K(a,b){var d={};c.each(va.concat.apply([],va.slice(0,b)),function(){d[this]=a});return d}function wa(a){return"scrollTo"in a&&a.document?a:a.nodeType===9?a.defaultView||a.parentWindow:false}var c=function(a,b){return new c.fn.init(a,b)},Ra=A.jQuery,Sa=A.$,s=A.document,T,Ta=/^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,Ua=/^.[^:#\[\.,]*$/,Va=/\S/,
Wa=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,Xa=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,P=navigator.userAgent,xa=false,Q=[],L,$=Object.prototype.toString,aa=Object.prototype.hasOwnProperty,ba=Array.prototype.push,R=Array.prototype.slice,ya=Array.prototype.indexOf;c.fn=c.prototype={init:function(a,b){var d,f;if(!a)return this;if(a.nodeType){this.context=this[0]=a;this.length=1;return this}if(a==="body"&&!b){this.context=s;this[0]=s.body;this.selector="body";this.length=1;return this}if(typeof a==="string")if((d=Ta.exec(a))&&
(d[1]||!b))if(d[1]){f=b?b.ownerDocument||b:s;if(a=Xa.exec(a))if(c.isPlainObject(b)){a=[s.createElement(a[1])];c.fn.attr.call(a,b,true)}else a=[f.createElement(a[1])];else{a=sa([d[1]],[f]);a=(a.cacheable?a.fragment.cloneNode(true):a.fragment).childNodes}return c.merge(this,a)}else{if(b=s.getElementById(d[2])){if(b.id!==d[2])return T.find(a);this.length=1;this[0]=b}this.context=s;this.selector=a;return this}else if(!b&&/^\w+$/.test(a)){this.selector=a;this.context=s;a=s.getElementsByTagName(a);return c.merge(this,
a)}else return!b||b.jquery?(b||T).find(a):c(b).find(a);else if(c.isFunction(a))return T.ready(a);if(a.selector!==w){this.selector=a.selector;this.context=a.context}return c.makeArray(a,this)},selector:"",jquery:"1.4.2",length:0,size:function(){return this.length},toArray:function(){return R.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this.slice(a)[0]:this[a]},pushStack:function(a,b,d){var f=c();c.isArray(a)?ba.apply(f,a):c.merge(f,a);f.prevObject=this;f.context=this.context;if(b===
"find")f.selector=this.selector+(this.selector?" ":"")+d;else if(b)f.selector=this.selector+"."+b+"("+d+")";return f},each:function(a,b){return c.each(this,a,b)},ready:function(a){c.bindReady();if(c.isReady)a.call(s,c);else Q&&Q.push(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(R.apply(this,arguments),"slice",R.call(arguments).join(","))},map:function(a){return this.pushStack(c.map(this,
function(b,d){return a.call(b,d,b)}))},end:function(){return this.prevObject||c(null)},push:ba,sort:[].sort,splice:[].splice};c.fn.init.prototype=c.fn;c.extend=c.fn.extend=function(){var a=arguments[0]||{},b=1,d=arguments.length,f=false,e,j,i,o;if(typeof a==="boolean"){f=a;a=arguments[1]||{};b=2}if(typeof a!=="object"&&!c.isFunction(a))a={};if(d===b){a=this;--b}for(;b<d;b++)if((e=arguments[b])!=null)for(j in e){i=a[j];o=e[j];if(a!==o)if(f&&o&&(c.isPlainObject(o)||c.isArray(o))){i=i&&(c.isPlainObject(i)||
c.isArray(i))?i:c.isArray(o)?[]:{};a[j]=c.extend(f,i,o)}else if(o!==w)a[j]=o}return a};c.extend({noConflict:function(a){A.$=Sa;if(a)A.jQuery=Ra;return c},isReady:false,ready:function(){if(!c.isReady){if(!s.body)return setTimeout(c.ready,13);c.isReady=true;if(Q){for(var a,b=0;a=Q[b++];)a.call(s,c);Q=null}c.fn.triggerHandler&&c(s).triggerHandler("ready")}},bindReady:function(){if(!xa){xa=true;if(s.readyState==="complete")return c.ready();if(s.addEventListener){s.addEventListener("DOMContentLoaded",
L,false);A.addEventListener("load",c.ready,false)}else if(s.attachEvent){s.attachEvent("onreadystatechange",L);A.attachEvent("onload",c.ready);var a=false;try{a=A.frameElement==null}catch(b){}s.documentElement.doScroll&&a&&ma()}}},isFunction:function(a){return $.call(a)==="[object Function]"},isArray:function(a){return $.call(a)==="[object Array]"},isPlainObject:function(a){if(!a||$.call(a)!=="[object Object]"||a.nodeType||a.setInterval)return false;if(a.constructor&&!aa.call(a,"constructor")&&!aa.call(a.constructor.prototype,
"isPrototypeOf"))return false;var b;for(b in a);return b===w||aa.call(a,b)},isEmptyObject:function(a){for(var b in a)return false;return true},error:function(a){throw a;},parseJSON:function(a){if(typeof a!=="string"||!a)return null;a=c.trim(a);if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return A.JSON&&A.JSON.parse?A.JSON.parse(a):(new Function("return "+
a))();else c.error("Invalid JSON: "+a)},noop:function(){},globalEval:function(a){if(a&&Va.test(a)){var b=s.getElementsByTagName("head")[0]||s.documentElement,d=s.createElement("script");d.type="text/javascript";if(c.support.scriptEval)d.appendChild(s.createTextNode(a));else d.text=a;b.insertBefore(d,b.firstChild);b.removeChild(d)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,b,d){var f,e=0,j=a.length,i=j===w||c.isFunction(a);if(d)if(i)for(f in a){if(b.apply(a[f],
d)===false)break}else for(;e<j;){if(b.apply(a[e++],d)===false)break}else if(i)for(f in a){if(b.call(a[f],f,a[f])===false)break}else for(d=a[0];e<j&&b.call(d,e,d)!==false;d=a[++e]);return a},trim:function(a){return(a||"").replace(Wa,"")},makeArray:function(a,b){b=b||[];if(a!=null)a.length==null||typeof a==="string"||c.isFunction(a)||typeof a!=="function"&&a.setInterval?ba.call(b,a):c.merge(b,a);return b},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var d=0,f=b.length;d<f;d++)if(b[d]===
a)return d;return-1},merge:function(a,b){var d=a.length,f=0;if(typeof b.length==="number")for(var e=b.length;f<e;f++)a[d++]=b[f];else for(;b[f]!==w;)a[d++]=b[f++];a.length=d;return a},grep:function(a,b,d){for(var f=[],e=0,j=a.length;e<j;e++)!d!==!b(a[e],e)&&f.push(a[e]);return f},map:function(a,b,d){for(var f=[],e,j=0,i=a.length;j<i;j++){e=b(a[j],j,d);if(e!=null)f[f.length]=e}return f.concat.apply([],f)},guid:1,proxy:function(a,b,d){if(arguments.length===2)if(typeof b==="string"){d=a;a=d[b];b=w}else if(b&&
!c.isFunction(b)){d=b;b=w}if(!b&&a)b=function(){return a.apply(d||this,arguments)};if(a)b.guid=a.guid=a.guid||b.guid||c.guid++;return b},uaMatch:function(a){a=a.toLowerCase();a=/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||!/compatible/.test(a)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}},browser:{}});P=c.uaMatch(P);if(P.browser){c.browser[P.browser]=true;c.browser.version=P.version}if(c.browser.webkit)c.browser.safari=
true;if(ya)c.inArray=function(a,b){return ya.call(b,a)};T=c(s);if(s.addEventListener)L=function(){s.removeEventListener("DOMContentLoaded",L,false);c.ready()};else if(s.attachEvent)L=function(){if(s.readyState==="complete"){s.detachEvent("onreadystatechange",L);c.ready()}};(function(){c.support={};var a=s.documentElement,b=s.createElement("script"),d=s.createElement("div"),f="script"+J();d.style.display="none";d.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var e=d.getElementsByTagName("*"),j=d.getElementsByTagName("a")[0];if(!(!e||!e.length||!j)){c.support={leadingWhitespace:d.firstChild.nodeType===3,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/red/.test(j.getAttribute("style")),hrefNormalized:j.getAttribute("href")==="/a",opacity:/^0.55$/.test(j.style.opacity),cssFloat:!!j.style.cssFloat,checkOn:d.getElementsByTagName("input")[0].value==="on",optSelected:s.createElement("select").appendChild(s.createElement("option")).selected,
parentNode:d.removeChild(d.appendChild(s.createElement("div"))).parentNode===null,deleteExpando:true,checkClone:false,scriptEval:false,noCloneEvent:true,boxModel:null};b.type="text/javascript";try{b.appendChild(s.createTextNode("window."+f+"=1;"))}catch(i){}a.insertBefore(b,a.firstChild);if(A[f]){c.support.scriptEval=true;delete A[f]}try{delete b.test}catch(o){c.support.deleteExpando=false}a.removeChild(b);if(d.attachEvent&&d.fireEvent){d.attachEvent("onclick",function k(){c.support.noCloneEvent=
false;d.detachEvent("onclick",k)});d.cloneNode(true).fireEvent("onclick")}d=s.createElement("div");d.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";a=s.createDocumentFragment();a.appendChild(d.firstChild);c.support.checkClone=a.cloneNode(true).cloneNode(true).lastChild.checked;c(function(){var k=s.createElement("div");k.style.width=k.style.paddingLeft="1px";s.body.appendChild(k);c.boxModel=c.support.boxModel=k.offsetWidth===2;s.body.removeChild(k).style.display="none"});a=function(k){var n=
s.createElement("div");k="on"+k;var r=k in n;if(!r){n.setAttribute(k,"return;");r=typeof n[k]==="function"}return r};c.support.submitBubbles=a("submit");c.support.changeBubbles=a("change");a=b=d=e=j=null}})();c.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};var G="jQuery"+J(),Ya=0,za={};c.extend({cache:{},expando:G,noData:{embed:true,object:true,
applet:true},data:function(a,b,d){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var f=a[G],e=c.cache;if(!f&&typeof b==="string"&&d===w)return null;f||(f=++Ya);if(typeof b==="object"){a[G]=f;e[f]=c.extend(true,{},b)}else if(!e[f]){a[G]=f;e[f]={}}a=e[f];if(d!==w)a[b]=d;return typeof b==="string"?a[b]:a}},removeData:function(a,b){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var d=a[G],f=c.cache,e=f[d];if(b){if(e){delete e[b];c.isEmptyObject(e)&&c.removeData(a)}}else{if(c.support.deleteExpando)delete a[c.expando];
else a.removeAttribute&&a.removeAttribute(c.expando);delete f[d]}}}});c.fn.extend({data:function(a,b){if(typeof a==="undefined"&&this.length)return c.data(this[0]);else if(typeof a==="object")return this.each(function(){c.data(this,a)});var d=a.split(".");d[1]=d[1]?"."+d[1]:"";if(b===w){var f=this.triggerHandler("getData"+d[1]+"!",[d[0]]);if(f===w&&this.length)f=c.data(this[0],a);return f===w&&d[1]?this.data(d[0]):f}else return this.trigger("setData"+d[1]+"!",[d[0],b]).each(function(){c.data(this,
a,b)})},removeData:function(a){return this.each(function(){c.removeData(this,a)})}});c.extend({queue:function(a,b,d){if(a){b=(b||"fx")+"queue";var f=c.data(a,b);if(!d)return f||[];if(!f||c.isArray(d))f=c.data(a,b,c.makeArray(d));else f.push(d);return f}},dequeue:function(a,b){b=b||"fx";var d=c.queue(a,b),f=d.shift();if(f==="inprogress")f=d.shift();if(f){b==="fx"&&d.unshift("inprogress");f.call(a,function(){c.dequeue(a,b)})}}});c.fn.extend({queue:function(a,b){if(typeof a!=="string"){b=a;a="fx"}if(b===
w)return c.queue(this[0],a);return this.each(function(){var d=c.queue(this,a,b);a==="fx"&&d[0]!=="inprogress"&&c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,a)})},delay:function(a,b){a=c.fx?c.fx.speeds[a]||a:a;b=b||"fx";return this.queue(b,function(){var d=this;setTimeout(function(){c.dequeue(d,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var Aa=/[\n\t]/g,ca=/\s+/,Za=/\r/g,$a=/href|src|style/,ab=/(button|input)/i,bb=/(button|input|object|select|textarea)/i,
cb=/^(a|area)$/i,Ba=/radio|checkbox/;c.fn.extend({attr:function(a,b){return X(this,a,b,true,c.attr)},removeAttr:function(a){return this.each(function(){c.attr(this,a,"");this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(c.isFunction(a))return this.each(function(n){var r=c(this);r.addClass(a.call(this,n,r.attr("class")))});if(a&&typeof a==="string")for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1)if(e.className){for(var j=" "+e.className+" ",
i=e.className,o=0,k=b.length;o<k;o++)if(j.indexOf(" "+b[o]+" ")<0)i+=" "+b[o];e.className=c.trim(i)}else e.className=a}return this},removeClass:function(a){if(c.isFunction(a))return this.each(function(k){var n=c(this);n.removeClass(a.call(this,k,n.attr("class")))});if(a&&typeof a==="string"||a===w)for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1&&e.className)if(a){for(var j=(" "+e.className+" ").replace(Aa," "),i=0,o=b.length;i<o;i++)j=j.replace(" "+b[i]+" ",
" ");e.className=c.trim(j)}else e.className=""}return this},toggleClass:function(a,b){var d=typeof a,f=typeof b==="boolean";if(c.isFunction(a))return this.each(function(e){var j=c(this);j.toggleClass(a.call(this,e,j.attr("class"),b),b)});return this.each(function(){if(d==="string")for(var e,j=0,i=c(this),o=b,k=a.split(ca);e=k[j++];){o=f?o:!i.hasClass(e);i[o?"addClass":"removeClass"](e)}else if(d==="undefined"||d==="boolean"){this.className&&c.data(this,"__className__",this.className);this.className=
this.className||a===false?"":c.data(this,"__className__")||""}})},hasClass:function(a){a=" "+a+" ";for(var b=0,d=this.length;b<d;b++)if((" "+this[b].className+" ").replace(Aa," ").indexOf(a)>-1)return true;return false},val:function(a){if(a===w){var b=this[0];if(b){if(c.nodeName(b,"option"))return(b.attributes.value||{}).specified?b.value:b.text;if(c.nodeName(b,"select")){var d=b.selectedIndex,f=[],e=b.options;b=b.type==="select-one";if(d<0)return null;var j=b?d:0;for(d=b?d+1:e.length;j<d;j++){var i=
e[j];if(i.selected){a=c(i).val();if(b)return a;f.push(a)}}return f}if(Ba.test(b.type)&&!c.support.checkOn)return b.getAttribute("value")===null?"on":b.value;return(b.value||"").replace(Za,"")}return w}var o=c.isFunction(a);return this.each(function(k){var n=c(this),r=a;if(this.nodeType===1){if(o)r=a.call(this,k,n.val());if(typeof r==="number")r+="";if(c.isArray(r)&&Ba.test(this.type))this.checked=c.inArray(n.val(),r)>=0;else if(c.nodeName(this,"select")){var u=c.makeArray(r);c("option",this).each(function(){this.selected=
c.inArray(c(this).val(),u)>=0});if(!u.length)this.selectedIndex=-1}else this.value=r}})}});c.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(a,b,d,f){if(!a||a.nodeType===3||a.nodeType===8)return w;if(f&&b in c.attrFn)return c(a)[b](d);f=a.nodeType!==1||!c.isXMLDoc(a);var e=d!==w;b=f&&c.props[b]||b;if(a.nodeType===1){var j=$a.test(b);if(b in a&&f&&!j){if(e){b==="type"&&ab.test(a.nodeName)&&a.parentNode&&c.error("type property can't be changed");
a[b]=d}if(c.nodeName(a,"form")&&a.getAttributeNode(b))return a.getAttributeNode(b).nodeValue;if(b==="tabIndex")return(b=a.getAttributeNode("tabIndex"))&&b.specified?b.value:bb.test(a.nodeName)||cb.test(a.nodeName)&&a.href?0:w;return a[b]}if(!c.support.style&&f&&b==="style"){if(e)a.style.cssText=""+d;return a.style.cssText}e&&a.setAttribute(b,""+d);a=!c.support.hrefNormalized&&f&&j?a.getAttribute(b,2):a.getAttribute(b);return a===null?w:a}return c.style(a,b,d)}});var O=/\.(.*)$/,db=function(a){return a.replace(/[^\w\s\.\|`]/g,
function(b){return"\\"+b})};c.event={add:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){if(a.setInterval&&a!==A&&!a.frameElement)a=A;var e,j;if(d.handler){e=d;d=e.handler}if(!d.guid)d.guid=c.guid++;if(j=c.data(a)){var i=j.events=j.events||{},o=j.handle;if(!o)j.handle=o=function(){return typeof c!=="undefined"&&!c.event.triggered?c.event.handle.apply(o.elem,arguments):w};o.elem=a;b=b.split(" ");for(var k,n=0,r;k=b[n++];){j=e?c.extend({},e):{handler:d,data:f};if(k.indexOf(".")>-1){r=k.split(".");
k=r.shift();j.namespace=r.slice(0).sort().join(".")}else{r=[];j.namespace=""}j.type=k;j.guid=d.guid;var u=i[k],z=c.event.special[k]||{};if(!u){u=i[k]=[];if(!z.setup||z.setup.call(a,f,r,o)===false)if(a.addEventListener)a.addEventListener(k,o,false);else a.attachEvent&&a.attachEvent("on"+k,o)}if(z.add){z.add.call(a,j);if(!j.handler.guid)j.handler.guid=d.guid}u.push(j);c.event.global[k]=true}a=null}}},global:{},remove:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){var e,j=0,i,o,k,n,r,u,z=c.data(a),
C=z&&z.events;if(z&&C){if(b&&b.type){d=b.handler;b=b.type}if(!b||typeof b==="string"&&b.charAt(0)==="."){b=b||"";for(e in C)c.event.remove(a,e+b)}else{for(b=b.split(" ");e=b[j++];){n=e;i=e.indexOf(".")<0;o=[];if(!i){o=e.split(".");e=o.shift();k=new RegExp("(^|\\.)"+c.map(o.slice(0).sort(),db).join("\\.(?:.*\\.)?")+"(\\.|$)")}if(r=C[e])if(d){n=c.event.special[e]||{};for(B=f||0;B<r.length;B++){u=r[B];if(d.guid===u.guid){if(i||k.test(u.namespace)){f==null&&r.splice(B--,1);n.remove&&n.remove.call(a,u)}if(f!=
null)break}}if(r.length===0||f!=null&&r.length===1){if(!n.teardown||n.teardown.call(a,o)===false)Ca(a,e,z.handle);delete C[e]}}else for(var B=0;B<r.length;B++){u=r[B];if(i||k.test(u.namespace)){c.event.remove(a,n,u.handler,B);r.splice(B--,1)}}}if(c.isEmptyObject(C)){if(b=z.handle)b.elem=null;delete z.events;delete z.handle;c.isEmptyObject(z)&&c.removeData(a)}}}}},trigger:function(a,b,d,f){var e=a.type||a;if(!f){a=typeof a==="object"?a[G]?a:c.extend(c.Event(e),a):c.Event(e);if(e.indexOf("!")>=0){a.type=
e=e.slice(0,-1);a.exclusive=true}if(!d){a.stopPropagation();c.event.global[e]&&c.each(c.cache,function(){this.events&&this.events[e]&&c.event.trigger(a,b,this.handle.elem)})}if(!d||d.nodeType===3||d.nodeType===8)return w;a.result=w;a.target=d;b=c.makeArray(b);b.unshift(a)}a.currentTarget=d;(f=c.data(d,"handle"))&&f.apply(d,b);f=d.parentNode||d.ownerDocument;try{if(!(d&&d.nodeName&&c.noData[d.nodeName.toLowerCase()]))if(d["on"+e]&&d["on"+e].apply(d,b)===false)a.result=false}catch(j){}if(!a.isPropagationStopped()&&
f)c.event.trigger(a,b,f,true);else if(!a.isDefaultPrevented()){f=a.target;var i,o=c.nodeName(f,"a")&&e==="click",k=c.event.special[e]||{};if((!k._default||k._default.call(d,a)===false)&&!o&&!(f&&f.nodeName&&c.noData[f.nodeName.toLowerCase()])){try{if(f[e]){if(i=f["on"+e])f["on"+e]=null;c.event.triggered=true;f[e]()}}catch(n){}if(i)f["on"+e]=i;c.event.triggered=false}}},handle:function(a){var b,d,f,e;a=arguments[0]=c.event.fix(a||A.event);a.currentTarget=this;b=a.type.indexOf(".")<0&&!a.exclusive;
if(!b){d=a.type.split(".");a.type=d.shift();f=new RegExp("(^|\\.)"+d.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)")}e=c.data(this,"events");d=e[a.type];if(e&&d){d=d.slice(0);e=0;for(var j=d.length;e<j;e++){var i=d[e];if(b||f.test(i.namespace)){a.handler=i.handler;a.data=i.data;a.handleObj=i;i=i.handler.apply(this,arguments);if(i!==w){a.result=i;if(i===false){a.preventDefault();a.stopPropagation()}}if(a.isImmediatePropagationStopped())break}}}return a.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
fix:function(a){if(a[G])return a;var b=a;a=c.Event(b);for(var d=this.props.length,f;d;){f=this.props[--d];a[f]=b[f]}if(!a.target)a.target=a.srcElement||s;if(a.target.nodeType===3)a.target=a.target.parentNode;if(!a.relatedTarget&&a.fromElement)a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;if(a.pageX==null&&a.clientX!=null){b=s.documentElement;d=s.body;a.pageX=a.clientX+(b&&b.scrollLeft||d&&d.scrollLeft||0)-(b&&b.clientLeft||d&&d.clientLeft||0);a.pageY=a.clientY+(b&&b.scrollTop||
d&&d.scrollTop||0)-(b&&b.clientTop||d&&d.clientTop||0)}if(!a.which&&(a.charCode||a.charCode===0?a.charCode:a.keyCode))a.which=a.charCode||a.keyCode;if(!a.metaKey&&a.ctrlKey)a.metaKey=a.ctrlKey;if(!a.which&&a.button!==w)a.which=a.button&1?1:a.button&2?3:a.button&4?2:0;return a},guid:1E8,proxy:c.proxy,special:{ready:{setup:c.bindReady,teardown:c.noop},live:{add:function(a){c.event.add(this,a.origType,c.extend({},a,{handler:oa}))},remove:function(a){var b=true,d=a.origType.replace(O,"");c.each(c.data(this,
"events").live||[],function(){if(d===this.origType.replace(O,""))return b=false});b&&c.event.remove(this,a.origType,oa)}},beforeunload:{setup:function(a,b,d){if(this.setInterval)this.onbeforeunload=d;return false},teardown:function(a,b){if(this.onbeforeunload===b)this.onbeforeunload=null}}}};var Ca=s.removeEventListener?function(a,b,d){a.removeEventListener(b,d,false)}:function(a,b,d){a.detachEvent("on"+b,d)};c.Event=function(a){if(!this.preventDefault)return new c.Event(a);if(a&&a.type){this.originalEvent=
a;this.type=a.type}else this.type=a;this.timeStamp=J();this[G]=true};c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=Z;var a=this.originalEvent;if(a){a.preventDefault&&a.preventDefault();a.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=Z;var a=this.originalEvent;if(a){a.stopPropagation&&a.stopPropagation();a.cancelBubble=true}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z;this.stopPropagation()},isDefaultPrevented:Y,isPropagationStopped:Y,
isImmediatePropagationStopped:Y};var Da=function(a){var b=a.relatedTarget;try{for(;b&&b!==this;)b=b.parentNode;if(b!==this){a.type=a.data;c.event.handle.apply(this,arguments)}}catch(d){}},Ea=function(a){a.type=a.data;c.event.handle.apply(this,arguments)};c.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){c.event.special[a]={setup:function(d){c.event.add(this,b,d&&d.selector?Ea:Da,a)},teardown:function(d){c.event.remove(this,b,d&&d.selector?Ea:Da)}}});if(!c.support.submitBubbles)c.event.special.submit=
{setup:function(){if(this.nodeName.toLowerCase()!=="form"){c.event.add(this,"click.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="submit"||d==="image")&&c(b).closest("form").length)return na("submit",this,arguments)});c.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="text"||d==="password")&&c(b).closest("form").length&&a.keyCode===13)return na("submit",this,arguments)})}else return false},teardown:function(){c.event.remove(this,".specialSubmit")}};
if(!c.support.changeBubbles){var da=/textarea|input|select/i,ea,Fa=function(a){var b=a.type,d=a.value;if(b==="radio"||b==="checkbox")d=a.checked;else if(b==="select-multiple")d=a.selectedIndex>-1?c.map(a.options,function(f){return f.selected}).join("-"):"";else if(a.nodeName.toLowerCase()==="select")d=a.selectedIndex;return d},fa=function(a,b){var d=a.target,f,e;if(!(!da.test(d.nodeName)||d.readOnly)){f=c.data(d,"_change_data");e=Fa(d);if(a.type!=="focusout"||d.type!=="radio")c.data(d,"_change_data",
e);if(!(f===w||e===f))if(f!=null||e){a.type="change";return c.event.trigger(a,b,d)}}};c.event.special.change={filters:{focusout:fa,click:function(a){var b=a.target,d=b.type;if(d==="radio"||d==="checkbox"||b.nodeName.toLowerCase()==="select")return fa.call(this,a)},keydown:function(a){var b=a.target,d=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(d==="checkbox"||d==="radio")||d==="select-multiple")return fa.call(this,a)},beforeactivate:function(a){a=a.target;c.data(a,
"_change_data",Fa(a))}},setup:function(){if(this.type==="file")return false;for(var a in ea)c.event.add(this,a+".specialChange",ea[a]);return da.test(this.nodeName)},teardown:function(){c.event.remove(this,".specialChange");return da.test(this.nodeName)}};ea=c.event.special.change.filters}s.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(f){f=c.event.fix(f);f.type=b;return c.event.handle.call(this,f)}c.event.special[b]={setup:function(){this.addEventListener(a,
d,true)},teardown:function(){this.removeEventListener(a,d,true)}}});c.each(["bind","one"],function(a,b){c.fn[b]=function(d,f,e){if(typeof d==="object"){for(var j in d)this[b](j,f,d[j],e);return this}if(c.isFunction(f)){e=f;f=w}var i=b==="one"?c.proxy(e,function(k){c(this).unbind(k,i);return e.apply(this,arguments)}):e;if(d==="unload"&&b!=="one")this.one(d,f,e);else{j=0;for(var o=this.length;j<o;j++)c.event.add(this[j],d,i,f)}return this}});c.fn.extend({unbind:function(a,b){if(typeof a==="object"&&
!a.preventDefault)for(var d in a)this.unbind(d,a[d]);else{d=0;for(var f=this.length;d<f;d++)c.event.remove(this[d],a,b)}return this},delegate:function(a,b,d,f){return this.live(b,d,f,a)},undelegate:function(a,b,d){return arguments.length===0?this.unbind("live"):this.die(b,null,d,a)},trigger:function(a,b){return this.each(function(){c.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){a=c.Event(a);a.preventDefault();a.stopPropagation();c.event.trigger(a,b,this[0]);return a.result}},
toggle:function(a){for(var b=arguments,d=1;d<b.length;)c.proxy(a,b[d++]);return this.click(c.proxy(a,function(f){var e=(c.data(this,"lastToggle"+a.guid)||0)%d;c.data(this,"lastToggle"+a.guid,e+1);f.preventDefault();return b[e].apply(this,arguments)||false}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Ga={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};c.each(["live","die"],function(a,b){c.fn[b]=function(d,f,e,j){var i,o=0,k,n,r=j||this.selector,
u=j?this:c(this.context);if(c.isFunction(f)){e=f;f=w}for(d=(d||"").split(" ");(i=d[o++])!=null;){j=O.exec(i);k="";if(j){k=j[0];i=i.replace(O,"")}if(i==="hover")d.push("mouseenter"+k,"mouseleave"+k);else{n=i;if(i==="focus"||i==="blur"){d.push(Ga[i]+k);i+=k}else i=(Ga[i]||i)+k;b==="live"?u.each(function(){c.event.add(this,pa(i,r),{data:f,selector:r,handler:e,origType:i,origHandler:e,preType:n})}):u.unbind(pa(i,r),e)}}return this}});c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),
function(a,b){c.fn[b]=function(d){return d?this.bind(b,d):this.trigger(b)};if(c.attrFn)c.attrFn[b]=true});A.attachEvent&&!A.addEventListener&&A.attachEvent("onunload",function(){for(var a in c.cache)if(c.cache[a].handle)try{c.event.remove(c.cache[a].handle.elem)}catch(b){}});(function(){function a(g){for(var h="",l,m=0;g[m];m++){l=g[m];if(l.nodeType===3||l.nodeType===4)h+=l.nodeValue;else if(l.nodeType!==8)h+=a(l.childNodes)}return h}function b(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];
if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1&&!p){t.sizcache=l;t.sizset=q}if(t.nodeName.toLowerCase()===h){y=t;break}t=t[g]}m[q]=y}}}function d(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1){if(!p){t.sizcache=l;t.sizset=q}if(typeof h!=="string"){if(t===h){y=true;break}}else if(k.filter(h,[t]).length>0){y=t;break}}t=t[g]}m[q]=y}}}var f=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
e=0,j=Object.prototype.toString,i=false,o=true;[0,0].sort(function(){o=false;return 0});var k=function(g,h,l,m){l=l||[];var q=h=h||s;if(h.nodeType!==1&&h.nodeType!==9)return[];if(!g||typeof g!=="string")return l;for(var p=[],v,t,y,S,H=true,M=x(h),I=g;(f.exec(""),v=f.exec(I))!==null;){I=v[3];p.push(v[1]);if(v[2]){S=v[3];break}}if(p.length>1&&r.exec(g))if(p.length===2&&n.relative[p[0]])t=ga(p[0]+p[1],h);else for(t=n.relative[p[0]]?[h]:k(p.shift(),h);p.length;){g=p.shift();if(n.relative[g])g+=p.shift();
t=ga(g,t)}else{if(!m&&p.length>1&&h.nodeType===9&&!M&&n.match.ID.test(p[0])&&!n.match.ID.test(p[p.length-1])){v=k.find(p.shift(),h,M);h=v.expr?k.filter(v.expr,v.set)[0]:v.set[0]}if(h){v=m?{expr:p.pop(),set:z(m)}:k.find(p.pop(),p.length===1&&(p[0]==="~"||p[0]==="+")&&h.parentNode?h.parentNode:h,M);t=v.expr?k.filter(v.expr,v.set):v.set;if(p.length>0)y=z(t);else H=false;for(;p.length;){var D=p.pop();v=D;if(n.relative[D])v=p.pop();else D="";if(v==null)v=h;n.relative[D](y,v,M)}}else y=[]}y||(y=t);y||k.error(D||
g);if(j.call(y)==="[object Array]")if(H)if(h&&h.nodeType===1)for(g=0;y[g]!=null;g++){if(y[g]&&(y[g]===true||y[g].nodeType===1&&E(h,y[g])))l.push(t[g])}else for(g=0;y[g]!=null;g++)y[g]&&y[g].nodeType===1&&l.push(t[g]);else l.push.apply(l,y);else z(y,l);if(S){k(S,q,l,m);k.uniqueSort(l)}return l};k.uniqueSort=function(g){if(B){i=o;g.sort(B);if(i)for(var h=1;h<g.length;h++)g[h]===g[h-1]&&g.splice(h--,1)}return g};k.matches=function(g,h){return k(g,null,null,h)};k.find=function(g,h,l){var m,q;if(!g)return[];
for(var p=0,v=n.order.length;p<v;p++){var t=n.order[p];if(q=n.leftMatch[t].exec(g)){var y=q[1];q.splice(1,1);if(y.substr(y.length-1)!=="\\"){q[1]=(q[1]||"").replace(/\\/g,"");m=n.find[t](q,h,l);if(m!=null){g=g.replace(n.match[t],"");break}}}}m||(m=h.getElementsByTagName("*"));return{set:m,expr:g}};k.filter=function(g,h,l,m){for(var q=g,p=[],v=h,t,y,S=h&&h[0]&&x(h[0]);g&&h.length;){for(var H in n.filter)if((t=n.leftMatch[H].exec(g))!=null&&t[2]){var M=n.filter[H],I,D;D=t[1];y=false;t.splice(1,1);if(D.substr(D.length-
1)!=="\\"){if(v===p)p=[];if(n.preFilter[H])if(t=n.preFilter[H](t,v,l,p,m,S)){if(t===true)continue}else y=I=true;if(t)for(var U=0;(D=v[U])!=null;U++)if(D){I=M(D,t,U,v);var Ha=m^!!I;if(l&&I!=null)if(Ha)y=true;else v[U]=false;else if(Ha){p.push(D);y=true}}if(I!==w){l||(v=p);g=g.replace(n.match[H],"");if(!y)return[];break}}}if(g===q)if(y==null)k.error(g);else break;q=g}return v};k.error=function(g){throw"Syntax error, unrecognized expression: "+g;};var n=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(g){return g.getAttribute("href")}},
relative:{"+":function(g,h){var l=typeof h==="string",m=l&&!/\W/.test(h);l=l&&!m;if(m)h=h.toLowerCase();m=0;for(var q=g.length,p;m<q;m++)if(p=g[m]){for(;(p=p.previousSibling)&&p.nodeType!==1;);g[m]=l||p&&p.nodeName.toLowerCase()===h?p||false:p===h}l&&k.filter(h,g,true)},">":function(g,h){var l=typeof h==="string";if(l&&!/\W/.test(h)){h=h.toLowerCase();for(var m=0,q=g.length;m<q;m++){var p=g[m];if(p){l=p.parentNode;g[m]=l.nodeName.toLowerCase()===h?l:false}}}else{m=0;for(q=g.length;m<q;m++)if(p=g[m])g[m]=
l?p.parentNode:p.parentNode===h;l&&k.filter(h,g,true)}},"":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("parentNode",h,m,g,p,l)},"~":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("previousSibling",h,m,g,p,l)}},find:{ID:function(g,h,l){if(typeof h.getElementById!=="undefined"&&!l)return(g=h.getElementById(g[1]))?[g]:[]},NAME:function(g,h){if(typeof h.getElementsByName!=="undefined"){var l=[];
h=h.getElementsByName(g[1]);for(var m=0,q=h.length;m<q;m++)h[m].getAttribute("name")===g[1]&&l.push(h[m]);return l.length===0?null:l}},TAG:function(g,h){return h.getElementsByTagName(g[1])}},preFilter:{CLASS:function(g,h,l,m,q,p){g=" "+g[1].replace(/\\/g,"")+" ";if(p)return g;p=0;for(var v;(v=h[p])!=null;p++)if(v)if(q^(v.className&&(" "+v.className+" ").replace(/[\t\n]/g," ").indexOf(g)>=0))l||m.push(v);else if(l)h[p]=false;return false},ID:function(g){return g[1].replace(/\\/g,"")},TAG:function(g){return g[1].toLowerCase()},
CHILD:function(g){if(g[1]==="nth"){var h=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2]==="even"&&"2n"||g[2]==="odd"&&"2n+1"||!/\D/.test(g[2])&&"0n+"+g[2]||g[2]);g[2]=h[1]+(h[2]||1)-0;g[3]=h[3]-0}g[0]=e++;return g},ATTR:function(g,h,l,m,q,p){h=g[1].replace(/\\/g,"");if(!p&&n.attrMap[h])g[1]=n.attrMap[h];if(g[2]==="~=")g[4]=" "+g[4]+" ";return g},PSEUDO:function(g,h,l,m,q){if(g[1]==="not")if((f.exec(g[3])||"").length>1||/^\w/.test(g[3]))g[3]=k(g[3],null,null,h);else{g=k.filter(g[3],h,l,true^q);l||m.push.apply(m,
g);return false}else if(n.match.POS.test(g[0])||n.match.CHILD.test(g[0]))return true;return g},POS:function(g){g.unshift(true);return g}},filters:{enabled:function(g){return g.disabled===false&&g.type!=="hidden"},disabled:function(g){return g.disabled===true},checked:function(g){return g.checked===true},selected:function(g){return g.selected===true},parent:function(g){return!!g.firstChild},empty:function(g){return!g.firstChild},has:function(g,h,l){return!!k(l[3],g).length},header:function(g){return/h\d/i.test(g.nodeName)},
text:function(g){return"text"===g.type},radio:function(g){return"radio"===g.type},checkbox:function(g){return"checkbox"===g.type},file:function(g){return"file"===g.type},password:function(g){return"password"===g.type},submit:function(g){return"submit"===g.type},image:function(g){return"image"===g.type},reset:function(g){return"reset"===g.type},button:function(g){return"button"===g.type||g.nodeName.toLowerCase()==="button"},input:function(g){return/input|select|textarea|button/i.test(g.nodeName)}},
setFilters:{first:function(g,h){return h===0},last:function(g,h,l,m){return h===m.length-1},even:function(g,h){return h%2===0},odd:function(g,h){return h%2===1},lt:function(g,h,l){return h<l[3]-0},gt:function(g,h,l){return h>l[3]-0},nth:function(g,h,l){return l[3]-0===h},eq:function(g,h,l){return l[3]-0===h}},filter:{PSEUDO:function(g,h,l,m){var q=h[1],p=n.filters[q];if(p)return p(g,l,h,m);else if(q==="contains")return(g.textContent||g.innerText||a([g])||"").indexOf(h[3])>=0;else if(q==="not"){h=
h[3];l=0;for(m=h.length;l<m;l++)if(h[l]===g)return false;return true}else k.error("Syntax error, unrecognized expression: "+q)},CHILD:function(g,h){var l=h[1],m=g;switch(l){case "only":case "first":for(;m=m.previousSibling;)if(m.nodeType===1)return false;if(l==="first")return true;m=g;case "last":for(;m=m.nextSibling;)if(m.nodeType===1)return false;return true;case "nth":l=h[2];var q=h[3];if(l===1&&q===0)return true;h=h[0];var p=g.parentNode;if(p&&(p.sizcache!==h||!g.nodeIndex)){var v=0;for(m=p.firstChild;m;m=
m.nextSibling)if(m.nodeType===1)m.nodeIndex=++v;p.sizcache=h}g=g.nodeIndex-q;return l===0?g===0:g%l===0&&g/l>=0}},ID:function(g,h){return g.nodeType===1&&g.getAttribute("id")===h},TAG:function(g,h){return h==="*"&&g.nodeType===1||g.nodeName.toLowerCase()===h},CLASS:function(g,h){return(" "+(g.className||g.getAttribute("class"))+" ").indexOf(h)>-1},ATTR:function(g,h){var l=h[1];g=n.attrHandle[l]?n.attrHandle[l](g):g[l]!=null?g[l]:g.getAttribute(l);l=g+"";var m=h[2];h=h[4];return g==null?m==="!=":m===
"="?l===h:m==="*="?l.indexOf(h)>=0:m==="~="?(" "+l+" ").indexOf(h)>=0:!h?l&&g!==false:m==="!="?l!==h:m==="^="?l.indexOf(h)===0:m==="$="?l.substr(l.length-h.length)===h:m==="|="?l===h||l.substr(0,h.length+1)===h+"-":false},POS:function(g,h,l,m){var q=n.setFilters[h[2]];if(q)return q(g,l,h,m)}}},r=n.match.POS;for(var u in n.match){n.match[u]=new RegExp(n.match[u].source+/(?![^\[]*\])(?![^\(]*\))/.source);n.leftMatch[u]=new RegExp(/(^(?:.|\r|\n)*?)/.source+n.match[u].source.replace(/\\(\d+)/g,function(g,
h){return"\\"+(h-0+1)}))}var z=function(g,h){g=Array.prototype.slice.call(g,0);if(h){h.push.apply(h,g);return h}return g};try{Array.prototype.slice.call(s.documentElement.childNodes,0)}catch(C){z=function(g,h){h=h||[];if(j.call(g)==="[object Array]")Array.prototype.push.apply(h,g);else if(typeof g.length==="number")for(var l=0,m=g.length;l<m;l++)h.push(g[l]);else for(l=0;g[l];l++)h.push(g[l]);return h}}var B;if(s.documentElement.compareDocumentPosition)B=function(g,h){if(!g.compareDocumentPosition||
!h.compareDocumentPosition){if(g==h)i=true;return g.compareDocumentPosition?-1:1}g=g.compareDocumentPosition(h)&4?-1:g===h?0:1;if(g===0)i=true;return g};else if("sourceIndex"in s.documentElement)B=function(g,h){if(!g.sourceIndex||!h.sourceIndex){if(g==h)i=true;return g.sourceIndex?-1:1}g=g.sourceIndex-h.sourceIndex;if(g===0)i=true;return g};else if(s.createRange)B=function(g,h){if(!g.ownerDocument||!h.ownerDocument){if(g==h)i=true;return g.ownerDocument?-1:1}var l=g.ownerDocument.createRange(),m=
h.ownerDocument.createRange();l.setStart(g,0);l.setEnd(g,0);m.setStart(h,0);m.setEnd(h,0);g=l.compareBoundaryPoints(Range.START_TO_END,m);if(g===0)i=true;return g};(function(){var g=s.createElement("div"),h="script"+(new Date).getTime();g.innerHTML="<a name='"+h+"'/>";var l=s.documentElement;l.insertBefore(g,l.firstChild);if(s.getElementById(h)){n.find.ID=function(m,q,p){if(typeof q.getElementById!=="undefined"&&!p)return(q=q.getElementById(m[1]))?q.id===m[1]||typeof q.getAttributeNode!=="undefined"&&
q.getAttributeNode("id").nodeValue===m[1]?[q]:w:[]};n.filter.ID=function(m,q){var p=typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id");return m.nodeType===1&&p&&p.nodeValue===q}}l.removeChild(g);l=g=null})();(function(){var g=s.createElement("div");g.appendChild(s.createComment(""));if(g.getElementsByTagName("*").length>0)n.find.TAG=function(h,l){l=l.getElementsByTagName(h[1]);if(h[1]==="*"){h=[];for(var m=0;l[m];m++)l[m].nodeType===1&&h.push(l[m]);l=h}return l};g.innerHTML="<a href='#'></a>";
if(g.firstChild&&typeof g.firstChild.getAttribute!=="undefined"&&g.firstChild.getAttribute("href")!=="#")n.attrHandle.href=function(h){return h.getAttribute("href",2)};g=null})();s.querySelectorAll&&function(){var g=k,h=s.createElement("div");h.innerHTML="<p class='TEST'></p>";if(!(h.querySelectorAll&&h.querySelectorAll(".TEST").length===0)){k=function(m,q,p,v){q=q||s;if(!v&&q.nodeType===9&&!x(q))try{return z(q.querySelectorAll(m),p)}catch(t){}return g(m,q,p,v)};for(var l in g)k[l]=g[l];h=null}}();
(function(){var g=s.createElement("div");g.innerHTML="<div class='test e'></div><div class='test'></div>";if(!(!g.getElementsByClassName||g.getElementsByClassName("e").length===0)){g.lastChild.className="e";if(g.getElementsByClassName("e").length!==1){n.order.splice(1,0,"CLASS");n.find.CLASS=function(h,l,m){if(typeof l.getElementsByClassName!=="undefined"&&!m)return l.getElementsByClassName(h[1])};g=null}}})();var E=s.compareDocumentPosition?function(g,h){return!!(g.compareDocumentPosition(h)&16)}:
function(g,h){return g!==h&&(g.contains?g.contains(h):true)},x=function(g){return(g=(g?g.ownerDocument||g:0).documentElement)?g.nodeName!=="HTML":false},ga=function(g,h){var l=[],m="",q;for(h=h.nodeType?[h]:h;q=n.match.PSEUDO.exec(g);){m+=q[0];g=g.replace(n.match.PSEUDO,"")}g=n.relative[g]?g+"*":g;q=0;for(var p=h.length;q<p;q++)k(g,h[q],l);return k.filter(m,l)};c.find=k;c.expr=k.selectors;c.expr[":"]=c.expr.filters;c.unique=k.uniqueSort;c.text=a;c.isXMLDoc=x;c.contains=E})();var eb=/Until$/,fb=/^(?:parents|prevUntil|prevAll)/,
gb=/,/;R=Array.prototype.slice;var Ia=function(a,b,d){if(c.isFunction(b))return c.grep(a,function(e,j){return!!b.call(e,j,e)===d});else if(b.nodeType)return c.grep(a,function(e){return e===b===d});else if(typeof b==="string"){var f=c.grep(a,function(e){return e.nodeType===1});if(Ua.test(b))return c.filter(b,f,!d);else b=c.filter(b,f)}return c.grep(a,function(e){return c.inArray(e,b)>=0===d})};c.fn.extend({find:function(a){for(var b=this.pushStack("","find",a),d=0,f=0,e=this.length;f<e;f++){d=b.length;
c.find(a,this[f],b);if(f>0)for(var j=d;j<b.length;j++)for(var i=0;i<d;i++)if(b[i]===b[j]){b.splice(j--,1);break}}return b},has:function(a){var b=c(a);return this.filter(function(){for(var d=0,f=b.length;d<f;d++)if(c.contains(this,b[d]))return true})},not:function(a){return this.pushStack(Ia(this,a,false),"not",a)},filter:function(a){return this.pushStack(Ia(this,a,true),"filter",a)},is:function(a){return!!a&&c.filter(a,this).length>0},closest:function(a,b){if(c.isArray(a)){var d=[],f=this[0],e,j=
{},i;if(f&&a.length){e=0;for(var o=a.length;e<o;e++){i=a[e];j[i]||(j[i]=c.expr.match.POS.test(i)?c(i,b||this.context):i)}for(;f&&f.ownerDocument&&f!==b;){for(i in j){e=j[i];if(e.jquery?e.index(f)>-1:c(f).is(e)){d.push({selector:i,elem:f});delete j[i]}}f=f.parentNode}}return d}var k=c.expr.match.POS.test(a)?c(a,b||this.context):null;return this.map(function(n,r){for(;r&&r.ownerDocument&&r!==b;){if(k?k.index(r)>-1:c(r).is(a))return r;r=r.parentNode}return null})},index:function(a){if(!a||typeof a===
"string")return c.inArray(this[0],a?c(a):this.parent().children());return c.inArray(a.jquery?a[0]:a,this)},add:function(a,b){a=typeof a==="string"?c(a,b||this.context):c.makeArray(a);b=c.merge(this.get(),a);return this.pushStack(qa(a[0])||qa(b[0])?b:c.unique(b))},andSelf:function(){return this.add(this.prevObject)}});c.each({parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},parents:function(a){return c.dir(a,"parentNode")},parentsUntil:function(a,b,d){return c.dir(a,"parentNode",
d)},next:function(a){return c.nth(a,2,"nextSibling")},prev:function(a){return c.nth(a,2,"previousSibling")},nextAll:function(a){return c.dir(a,"nextSibling")},prevAll:function(a){return c.dir(a,"previousSibling")},nextUntil:function(a,b,d){return c.dir(a,"nextSibling",d)},prevUntil:function(a,b,d){return c.dir(a,"previousSibling",d)},siblings:function(a){return c.sibling(a.parentNode.firstChild,a)},children:function(a){return c.sibling(a.firstChild)},contents:function(a){return c.nodeName(a,"iframe")?
a.contentDocument||a.contentWindow.document:c.makeArray(a.childNodes)}},function(a,b){c.fn[a]=function(d,f){var e=c.map(this,b,d);eb.test(a)||(f=d);if(f&&typeof f==="string")e=c.filter(f,e);e=this.length>1?c.unique(e):e;if((this.length>1||gb.test(f))&&fb.test(a))e=e.reverse();return this.pushStack(e,a,R.call(arguments).join(","))}});c.extend({filter:function(a,b,d){if(d)a=":not("+a+")";return c.find.matches(a,b)},dir:function(a,b,d){var f=[];for(a=a[b];a&&a.nodeType!==9&&(d===w||a.nodeType!==1||!c(a).is(d));){a.nodeType===
1&&f.push(a);a=a[b]}return f},nth:function(a,b,d){b=b||1;for(var f=0;a;a=a[d])if(a.nodeType===1&&++f===b)break;return a},sibling:function(a,b){for(var d=[];a;a=a.nextSibling)a.nodeType===1&&a!==b&&d.push(a);return d}});var Ja=/ jQuery\d+="(?:\d+|null)"/g,V=/^\s+/,Ka=/(<([\w:]+)[^>]*?)\/>/g,hb=/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,La=/<([\w:]+)/,ib=/<tbody/i,jb=/<|&#?\w+;/,ta=/<script|<object|<embed|<option|<style/i,ua=/checked\s*(?:[^=]|=\s*.checked.)/i,Ma=function(a,b,d){return hb.test(d)?
a:b+"></"+d+">"},F={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};F.optgroup=F.option;F.tbody=F.tfoot=F.colgroup=F.caption=F.thead;F.th=F.td;if(!c.support.htmlSerialize)F._default=[1,"div<div>","</div>"];c.fn.extend({text:function(a){if(c.isFunction(a))return this.each(function(b){var d=
c(this);d.text(a.call(this,b,d.text()))});if(typeof a!=="object"&&a!==w)return this.empty().append((this[0]&&this[0].ownerDocument||s).createTextNode(a));return c.text(this)},wrapAll:function(a){if(c.isFunction(a))return this.each(function(d){c(this).wrapAll(a.call(this,d))});if(this[0]){var b=c(a,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var d=this;d.firstChild&&d.firstChild.nodeType===1;)d=d.firstChild;return d}).append(this)}return this},
wrapInner:function(a){if(c.isFunction(a))return this.each(function(b){c(this).wrapInner(a.call(this,b))});return this.each(function(){var b=c(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){c(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.appendChild(a)})},
prepend:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,this)});else if(arguments.length){var a=c(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,
this.nextSibling)});else if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,c(arguments[0]).toArray());return a}},remove:function(a,b){for(var d=0,f;(f=this[d])!=null;d++)if(!a||c.filter(a,[f]).length){if(!b&&f.nodeType===1){c.cleanData(f.getElementsByTagName("*"));c.cleanData([f])}f.parentNode&&f.parentNode.removeChild(f)}return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++)for(b.nodeType===1&&c.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);
return this},clone:function(a){var b=this.map(function(){if(!c.support.noCloneEvent&&!c.isXMLDoc(this)){var d=this.outerHTML,f=this.ownerDocument;if(!d){d=f.createElement("div");d.appendChild(this.cloneNode(true));d=d.innerHTML}return c.clean([d.replace(Ja,"").replace(/=([^="'>\s]+\/)>/g,'="$1">').replace(V,"")],f)[0]}else return this.cloneNode(true)});if(a===true){ra(this,b);ra(this.find("*"),b.find("*"))}return b},html:function(a){if(a===w)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Ja,
""):null;else if(typeof a==="string"&&!ta.test(a)&&(c.support.leadingWhitespace||!V.test(a))&&!F[(La.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Ka,Ma);try{for(var b=0,d=this.length;b<d;b++)if(this[b].nodeType===1){c.cleanData(this[b].getElementsByTagName("*"));this[b].innerHTML=a}}catch(f){this.empty().append(a)}}else c.isFunction(a)?this.each(function(e){var j=c(this),i=j.html();j.empty().append(function(){return a.call(this,e,i)})}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&
this[0].parentNode){if(c.isFunction(a))return this.each(function(b){var d=c(this),f=d.html();d.replaceWith(a.call(this,b,f))});if(typeof a!=="string")a=c(a).detach();return this.each(function(){var b=this.nextSibling,d=this.parentNode;c(this).remove();b?c(b).before(a):c(d).append(a)})}else return this.pushStack(c(c.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,true)},domManip:function(a,b,d){function f(u){return c.nodeName(u,"table")?u.getElementsByTagName("tbody")[0]||
u.appendChild(u.ownerDocument.createElement("tbody")):u}var e,j,i=a[0],o=[],k;if(!c.support.checkClone&&arguments.length===3&&typeof i==="string"&&ua.test(i))return this.each(function(){c(this).domManip(a,b,d,true)});if(c.isFunction(i))return this.each(function(u){var z=c(this);a[0]=i.call(this,u,b?z.html():w);z.domManip(a,b,d)});if(this[0]){e=i&&i.parentNode;e=c.support.parentNode&&e&&e.nodeType===11&&e.childNodes.length===this.length?{fragment:e}:sa(a,this,o);k=e.fragment;if(j=k.childNodes.length===
1?(k=k.firstChild):k.firstChild){b=b&&c.nodeName(j,"tr");for(var n=0,r=this.length;n<r;n++)d.call(b?f(this[n],j):this[n],n>0||e.cacheable||this.length>1?k.cloneNode(true):k)}o.length&&c.each(o,Qa)}return this}});c.fragments={};c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){c.fn[a]=function(d){var f=[];d=c(d);var e=this.length===1&&this[0].parentNode;if(e&&e.nodeType===11&&e.childNodes.length===1&&d.length===1){d[b](this[0]);
return this}else{e=0;for(var j=d.length;e<j;e++){var i=(e>0?this.clone(true):this).get();c.fn[b].apply(c(d[e]),i);f=f.concat(i)}return this.pushStack(f,a,d.selector)}}});c.extend({clean:function(a,b,d,f){b=b||s;if(typeof b.createElement==="undefined")b=b.ownerDocument||b[0]&&b[0].ownerDocument||s;for(var e=[],j=0,i;(i=a[j])!=null;j++){if(typeof i==="number")i+="";if(i){if(typeof i==="string"&&!jb.test(i))i=b.createTextNode(i);else if(typeof i==="string"){i=i.replace(Ka,Ma);var o=(La.exec(i)||["",
""])[1].toLowerCase(),k=F[o]||F._default,n=k[0],r=b.createElement("div");for(r.innerHTML=k[1]+i+k[2];n--;)r=r.lastChild;if(!c.support.tbody){n=ib.test(i);o=o==="table"&&!n?r.firstChild&&r.firstChild.childNodes:k[1]==="<table>"&&!n?r.childNodes:[];for(k=o.length-1;k>=0;--k)c.nodeName(o[k],"tbody")&&!o[k].childNodes.length&&o[k].parentNode.removeChild(o[k])}!c.support.leadingWhitespace&&V.test(i)&&r.insertBefore(b.createTextNode(V.exec(i)[0]),r.firstChild);i=r.childNodes}if(i.nodeType)e.push(i);else e=
c.merge(e,i)}}if(d)for(j=0;e[j];j++)if(f&&c.nodeName(e[j],"script")&&(!e[j].type||e[j].type.toLowerCase()==="text/javascript"))f.push(e[j].parentNode?e[j].parentNode.removeChild(e[j]):e[j]);else{e[j].nodeType===1&&e.splice.apply(e,[j+1,0].concat(c.makeArray(e[j].getElementsByTagName("script"))));d.appendChild(e[j])}return e},cleanData:function(a){for(var b,d,f=c.cache,e=c.event.special,j=c.support.deleteExpando,i=0,o;(o=a[i])!=null;i++)if(d=o[c.expando]){b=f[d];if(b.events)for(var k in b.events)e[k]?
c.event.remove(o,k):Ca(o,k,b.handle);if(j)delete o[c.expando];else o.removeAttribute&&o.removeAttribute(c.expando);delete f[d]}}});var kb=/z-?index|font-?weight|opacity|zoom|line-?height/i,Na=/alpha\([^)]*\)/,Oa=/opacity=([^)]*)/,ha=/float/i,ia=/-([a-z])/ig,lb=/([A-Z])/g,mb=/^-?\d+(?:px)?$/i,nb=/^-?\d/,ob={position:"absolute",visibility:"hidden",display:"block"},pb=["Left","Right"],qb=["Top","Bottom"],rb=s.defaultView&&s.defaultView.getComputedStyle,Pa=c.support.cssFloat?"cssFloat":"styleFloat",ja=
function(a,b){return b.toUpperCase()};c.fn.css=function(a,b){return X(this,a,b,true,function(d,f,e){if(e===w)return c.curCSS(d,f);if(typeof e==="number"&&!kb.test(f))e+="px";c.style(d,f,e)})};c.extend({style:function(a,b,d){if(!a||a.nodeType===3||a.nodeType===8)return w;if((b==="width"||b==="height")&&parseFloat(d)<0)d=w;var f=a.style||a,e=d!==w;if(!c.support.opacity&&b==="opacity"){if(e){f.zoom=1;b=parseInt(d,10)+""==="NaN"?"":"alpha(opacity="+d*100+")";a=f.filter||c.curCSS(a,"filter")||"";f.filter=
Na.test(a)?a.replace(Na,b):b}return f.filter&&f.filter.indexOf("opacity=")>=0?parseFloat(Oa.exec(f.filter)[1])/100+"":""}if(ha.test(b))b=Pa;b=b.replace(ia,ja);if(e)f[b]=d;return f[b]},css:function(a,b,d,f){if(b==="width"||b==="height"){var e,j=b==="width"?pb:qb;function i(){e=b==="width"?a.offsetWidth:a.offsetHeight;f!=="border"&&c.each(j,function(){f||(e-=parseFloat(c.curCSS(a,"padding"+this,true))||0);if(f==="margin")e+=parseFloat(c.curCSS(a,"margin"+this,true))||0;else e-=parseFloat(c.curCSS(a,
"border"+this+"Width",true))||0})}a.offsetWidth!==0?i():c.swap(a,ob,i);return Math.max(0,Math.round(e))}return c.curCSS(a,b,d)},curCSS:function(a,b,d){var f,e=a.style;if(!c.support.opacity&&b==="opacity"&&a.currentStyle){f=Oa.test(a.currentStyle.filter||"")?parseFloat(RegExp.$1)/100+"":"";return f===""?"1":f}if(ha.test(b))b=Pa;if(!d&&e&&e[b])f=e[b];else if(rb){if(ha.test(b))b="float";b=b.replace(lb,"-$1").toLowerCase();e=a.ownerDocument.defaultView;if(!e)return null;if(a=e.getComputedStyle(a,null))f=
a.getPropertyValue(b);if(b==="opacity"&&f==="")f="1"}else if(a.currentStyle){d=b.replace(ia,ja);f=a.currentStyle[b]||a.currentStyle[d];if(!mb.test(f)&&nb.test(f)){b=e.left;var j=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;e.left=d==="fontSize"?"1em":f||0;f=e.pixelLeft+"px";e.left=b;a.runtimeStyle.left=j}}return f},swap:function(a,b,d){var f={};for(var e in b){f[e]=a.style[e];a.style[e]=b[e]}d.call(a);for(e in b)a.style[e]=f[e]}});if(c.expr&&c.expr.filters){c.expr.filters.hidden=function(a){var b=
a.offsetWidth,d=a.offsetHeight,f=a.nodeName.toLowerCase()==="tr";return b===0&&d===0&&!f?true:b>0&&d>0&&!f?false:c.curCSS(a,"display")==="none"};c.expr.filters.visible=function(a){return!c.expr.filters.hidden(a)}}var sb=J(),tb=/<script(.|\s)*?\/script>/gi,ub=/select|textarea/i,vb=/color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,N=/=\?(&|$)/,ka=/\?/,wb=/(\?|&)_=.*?(&|$)/,xb=/^(\w+:)?\/\/([^\/?#]+)/,yb=/%20/g,zb=c.fn.load;c.fn.extend({load:function(a,b,d){if(typeof a!==
"string")return zb.call(this,a);else if(!this.length)return this;var f=a.indexOf(" ");if(f>=0){var e=a.slice(f,a.length);a=a.slice(0,f)}f="GET";if(b)if(c.isFunction(b)){d=b;b=null}else if(typeof b==="object"){b=c.param(b,c.ajaxSettings.traditional);f="POST"}var j=this;c.ajax({url:a,type:f,dataType:"html",data:b,complete:function(i,o){if(o==="success"||o==="notmodified")j.html(e?c("<div />").append(i.responseText.replace(tb,"")).find(e):i.responseText);d&&j.each(d,[i.responseText,o,i])}});return this},
serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ub.test(this.nodeName)||vb.test(this.type))}).map(function(a,b){a=c(this).val();return a==null?null:c.isArray(a)?c.map(a,function(d){return{name:b.name,value:d}}):{name:b.name,value:a}}).get()}});c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
function(a,b){c.fn[b]=function(d){return this.bind(b,d)}});c.extend({get:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b=null}return c.ajax({type:"GET",url:a,data:b,success:d,dataType:f})},getScript:function(a,b){return c.get(a,null,b,"script")},getJSON:function(a,b,d){return c.get(a,b,d,"json")},post:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b={}}return c.ajax({type:"POST",url:a,data:b,success:d,dataType:f})},ajaxSetup:function(a){c.extend(c.ajaxSettings,a)},ajaxSettings:{url:location.href,
global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:A.XMLHttpRequest&&(A.location.protocol!=="file:"||!A.ActiveXObject)?function(){return new A.XMLHttpRequest}:function(){try{return new A.ActiveXObject("Microsoft.XMLHTTP")}catch(a){}},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},etag:{},ajax:function(a){function b(){e.success&&
e.success.call(k,o,i,x);e.global&&f("ajaxSuccess",[x,e])}function d(){e.complete&&e.complete.call(k,x,i);e.global&&f("ajaxComplete",[x,e]);e.global&&!--c.active&&c.event.trigger("ajaxStop")}function f(q,p){(e.context?c(e.context):c.event).trigger(q,p)}var e=c.extend(true,{},c.ajaxSettings,a),j,i,o,k=a&&a.context||e,n=e.type.toUpperCase();if(e.data&&e.processData&&typeof e.data!=="string")e.data=c.param(e.data,e.traditional);if(e.dataType==="jsonp"){if(n==="GET")N.test(e.url)||(e.url+=(ka.test(e.url)?
"&":"?")+(e.jsonp||"callback")+"=?");else if(!e.data||!N.test(e.data))e.data=(e.data?e.data+"&":"")+(e.jsonp||"callback")+"=?";e.dataType="json"}if(e.dataType==="json"&&(e.data&&N.test(e.data)||N.test(e.url))){j=e.jsonpCallback||"jsonp"+sb++;if(e.data)e.data=(e.data+"").replace(N,"="+j+"$1");e.url=e.url.replace(N,"="+j+"$1");e.dataType="script";A[j]=A[j]||function(q){o=q;b();d();A[j]=w;try{delete A[j]}catch(p){}z&&z.removeChild(C)}}if(e.dataType==="script"&&e.cache===null)e.cache=false;if(e.cache===
false&&n==="GET"){var r=J(),u=e.url.replace(wb,"$1_="+r+"$2");e.url=u+(u===e.url?(ka.test(e.url)?"&":"?")+"_="+r:"")}if(e.data&&n==="GET")e.url+=(ka.test(e.url)?"&":"?")+e.data;e.global&&!c.active++&&c.event.trigger("ajaxStart");r=(r=xb.exec(e.url))&&(r[1]&&r[1]!==location.protocol||r[2]!==location.host);if(e.dataType==="script"&&n==="GET"&&r){var z=s.getElementsByTagName("head")[0]||s.documentElement,C=s.createElement("script");C.src=e.url;if(e.scriptCharset)C.charset=e.scriptCharset;if(!j){var B=
false;C.onload=C.onreadystatechange=function(){if(!B&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){B=true;b();d();C.onload=C.onreadystatechange=null;z&&C.parentNode&&z.removeChild(C)}}}z.insertBefore(C,z.firstChild);return w}var E=false,x=e.xhr();if(x){e.username?x.open(n,e.url,e.async,e.username,e.password):x.open(n,e.url,e.async);try{if(e.data||a&&a.contentType)x.setRequestHeader("Content-Type",e.contentType);if(e.ifModified){c.lastModified[e.url]&&x.setRequestHeader("If-Modified-Since",
c.lastModified[e.url]);c.etag[e.url]&&x.setRequestHeader("If-None-Match",c.etag[e.url])}r||x.setRequestHeader("X-Requested-With","XMLHttpRequest");x.setRequestHeader("Accept",e.dataType&&e.accepts[e.dataType]?e.accepts[e.dataType]+", */*":e.accepts._default)}catch(ga){}if(e.beforeSend&&e.beforeSend.call(k,x,e)===false){e.global&&!--c.active&&c.event.trigger("ajaxStop");x.abort();return false}e.global&&f("ajaxSend",[x,e]);var g=x.onreadystatechange=function(q){if(!x||x.readyState===0||q==="abort"){E||
d();E=true;if(x)x.onreadystatechange=c.noop}else if(!E&&x&&(x.readyState===4||q==="timeout")){E=true;x.onreadystatechange=c.noop;i=q==="timeout"?"timeout":!c.httpSuccess(x)?"error":e.ifModified&&c.httpNotModified(x,e.url)?"notmodified":"success";var p;if(i==="success")try{o=c.httpData(x,e.dataType,e)}catch(v){i="parsererror";p=v}if(i==="success"||i==="notmodified")j||b();else c.handleError(e,x,i,p);d();q==="timeout"&&x.abort();if(e.async)x=null}};try{var h=x.abort;x.abort=function(){x&&h.call(x);
g("abort")}}catch(l){}e.async&&e.timeout>0&&setTimeout(function(){x&&!E&&g("timeout")},e.timeout);try{x.send(n==="POST"||n==="PUT"||n==="DELETE"?e.data:null)}catch(m){c.handleError(e,x,null,m);d()}e.async||g();return x}},handleError:function(a,b,d,f){if(a.error)a.error.call(a.context||a,b,d,f);if(a.global)(a.context?c(a.context):c.event).trigger("ajaxError",[b,a,f])},active:0,httpSuccess:function(a){try{return!a.status&&location.protocol==="file:"||a.status>=200&&a.status<300||a.status===304||a.status===
1223||a.status===0}catch(b){}return false},httpNotModified:function(a,b){var d=a.getResponseHeader("Last-Modified"),f=a.getResponseHeader("Etag");if(d)c.lastModified[b]=d;if(f)c.etag[b]=f;return a.status===304||a.status===0},httpData:function(a,b,d){var f=a.getResponseHeader("content-type")||"",e=b==="xml"||!b&&f.indexOf("xml")>=0;a=e?a.responseXML:a.responseText;e&&a.documentElement.nodeName==="parsererror"&&c.error("parsererror");if(d&&d.dataFilter)a=d.dataFilter(a,b);if(typeof a==="string")if(b===
"json"||!b&&f.indexOf("json")>=0)a=c.parseJSON(a);else if(b==="script"||!b&&f.indexOf("javascript")>=0)c.globalEval(a);return a},param:function(a,b){function d(i,o){if(c.isArray(o))c.each(o,function(k,n){b||/\[\]$/.test(i)?f(i,n):d(i+"["+(typeof n==="object"||c.isArray(n)?k:"")+"]",n)});else!b&&o!=null&&typeof o==="object"?c.each(o,function(k,n){d(i+"["+k+"]",n)}):f(i,o)}function f(i,o){o=c.isFunction(o)?o():o;e[e.length]=encodeURIComponent(i)+"="+encodeURIComponent(o)}var e=[];if(b===w)b=c.ajaxSettings.traditional;
if(c.isArray(a)||a.jquery)c.each(a,function(){f(this.name,this.value)});else for(var j in a)d(j,a[j]);return e.join("&").replace(yb,"+")}});var la={},Ab=/toggle|show|hide/,Bb=/^([+-]=)?([\d+-.]+)(.*)$/,W,va=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];c.fn.extend({show:function(a,b){if(a||a===0)return this.animate(K("show",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");
this[a].style.display=d||"";if(c.css(this[a],"display")==="none"){d=this[a].nodeName;var f;if(la[d])f=la[d];else{var e=c("<"+d+" />").appendTo("body");f=e.css("display");if(f==="none")f="block";e.remove();la[d]=f}c.data(this[a],"olddisplay",f)}}a=0;for(b=this.length;a<b;a++)this[a].style.display=c.data(this[a],"olddisplay")||"";return this}},hide:function(a,b){if(a||a===0)return this.animate(K("hide",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");!d&&d!=="none"&&c.data(this[a],
"olddisplay",c.css(this[a],"display"))}a=0;for(b=this.length;a<b;a++)this[a].style.display="none";return this}},_toggle:c.fn.toggle,toggle:function(a,b){var d=typeof a==="boolean";if(c.isFunction(a)&&c.isFunction(b))this._toggle.apply(this,arguments);else a==null||d?this.each(function(){var f=d?a:c(this).is(":hidden");c(this)[f?"show":"hide"]()}):this.animate(K("toggle",3),a,b);return this},fadeTo:function(a,b,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,d)},
animate:function(a,b,d,f){var e=c.speed(b,d,f);if(c.isEmptyObject(a))return this.each(e.complete);return this[e.queue===false?"each":"queue"](function(){var j=c.extend({},e),i,o=this.nodeType===1&&c(this).is(":hidden"),k=this;for(i in a){var n=i.replace(ia,ja);if(i!==n){a[n]=a[i];delete a[i];i=n}if(a[i]==="hide"&&o||a[i]==="show"&&!o)return j.complete.call(this);if((i==="height"||i==="width")&&this.style){j.display=c.css(this,"display");j.overflow=this.style.overflow}if(c.isArray(a[i])){(j.specialEasing=
j.specialEasing||{})[i]=a[i][1];a[i]=a[i][0]}}if(j.overflow!=null)this.style.overflow="hidden";j.curAnim=c.extend({},a);c.each(a,function(r,u){var z=new c.fx(k,j,r);if(Ab.test(u))z[u==="toggle"?o?"show":"hide":u](a);else{var C=Bb.exec(u),B=z.cur(true)||0;if(C){u=parseFloat(C[2]);var E=C[3]||"px";if(E!=="px"){k.style[r]=(u||1)+E;B=(u||1)/z.cur(true)*B;k.style[r]=B+E}if(C[1])u=(C[1]==="-="?-1:1)*u+B;z.custom(B,u,E)}else z.custom(B,u,"")}});return true})},stop:function(a,b){var d=c.timers;a&&this.queue([]);
this.each(function(){for(var f=d.length-1;f>=0;f--)if(d[f].elem===this){b&&d[f](true);d.splice(f,1)}});b||this.dequeue();return this}});c.each({slideDown:K("show",1),slideUp:K("hide",1),slideToggle:K("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(a,b){c.fn[a]=function(d,f){return this.animate(b,d,f)}});c.extend({speed:function(a,b,d){var f=a&&typeof a==="object"?a:{complete:d||!d&&b||c.isFunction(a)&&a,duration:a,easing:d&&b||b&&!c.isFunction(b)&&b};f.duration=c.fx.off?0:typeof f.duration===
"number"?f.duration:c.fx.speeds[f.duration]||c.fx.speeds._default;f.old=f.complete;f.complete=function(){f.queue!==false&&c(this).dequeue();c.isFunction(f.old)&&f.old.call(this)};return f},easing:{linear:function(a,b,d,f){return d+f*a},swing:function(a,b,d,f){return(-Math.cos(a*Math.PI)/2+0.5)*f+d}},timers:[],fx:function(a,b,d){this.options=b;this.elem=a;this.prop=d;if(!b.orig)b.orig={}}});c.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(c.fx.step[this.prop]||
c.fx.step._default)(this);if((this.prop==="height"||this.prop==="width")&&this.elem.style)this.elem.style.display="block"},cur:function(a){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];return(a=parseFloat(c.css(this.elem,this.prop,a)))&&a>-10000?a:parseFloat(c.curCSS(this.elem,this.prop))||0},custom:function(a,b,d){function f(j){return e.step(j)}this.startTime=J();this.start=a;this.end=b;this.unit=d||this.unit||"px";this.now=this.start;
this.pos=this.state=0;var e=this;f.elem=this.elem;if(f()&&c.timers.push(f)&&!W)W=setInterval(c.fx.tick,13)},show:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());c(this.elem).show()},hide:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(a){var b=J(),d=true;if(a||b>=this.options.duration+this.startTime){this.now=
this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var f in this.options.curAnim)if(this.options.curAnim[f]!==true)d=false;if(d){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;a=c.data(this.elem,"olddisplay");this.elem.style.display=a?a:this.options.display;if(c.css(this.elem,"display")==="none")this.elem.style.display="block"}this.options.hide&&c(this.elem).hide();if(this.options.hide||this.options.show)for(var e in this.options.curAnim)c.style(this.elem,
e,this.options.orig[e]);this.options.complete.call(this.elem)}return false}else{e=b-this.startTime;this.state=e/this.options.duration;a=this.options.easing||(c.easing.swing?"swing":"linear");this.pos=c.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||a](this.state,e,0,1,this.options.duration);this.now=this.start+(this.end-this.start)*this.pos;this.update()}return true}};c.extend(c.fx,{tick:function(){for(var a=c.timers,b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||
c.fx.stop()},stop:function(){clearInterval(W);W=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){c.style(a.elem,"opacity",a.now)},_default:function(a){if(a.elem.style&&a.elem.style[a.prop]!=null)a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit;else a.elem[a.prop]=a.now}}});if(c.expr&&c.expr.filters)c.expr.filters.animated=function(a){return c.grep(c.timers,function(b){return a===b.elem}).length};c.fn.offset="getBoundingClientRect"in s.documentElement?
function(a){var b=this[0];if(a)return this.each(function(e){c.offset.setOffset(this,a,e)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);var d=b.getBoundingClientRect(),f=b.ownerDocument;b=f.body;f=f.documentElement;return{top:d.top+(self.pageYOffset||c.support.boxModel&&f.scrollTop||b.scrollTop)-(f.clientTop||b.clientTop||0),left:d.left+(self.pageXOffset||c.support.boxModel&&f.scrollLeft||b.scrollLeft)-(f.clientLeft||b.clientLeft||0)}}:function(a){var b=
this[0];if(a)return this.each(function(r){c.offset.setOffset(this,a,r)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);c.offset.initialize();var d=b.offsetParent,f=b,e=b.ownerDocument,j,i=e.documentElement,o=e.body;f=(e=e.defaultView)?e.getComputedStyle(b,null):b.currentStyle;for(var k=b.offsetTop,n=b.offsetLeft;(b=b.parentNode)&&b!==o&&b!==i;){if(c.offset.supportsFixedPosition&&f.position==="fixed")break;j=e?e.getComputedStyle(b,null):b.currentStyle;
k-=b.scrollTop;n-=b.scrollLeft;if(b===d){k+=b.offsetTop;n+=b.offsetLeft;if(c.offset.doesNotAddBorder&&!(c.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(b.nodeName))){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=d;d=b.offsetParent}if(c.offset.subtractsBorderForOverflowNotVisible&&j.overflow!=="visible"){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=j}if(f.position==="relative"||f.position==="static"){k+=o.offsetTop;n+=o.offsetLeft}if(c.offset.supportsFixedPosition&&
f.position==="fixed"){k+=Math.max(i.scrollTop,o.scrollTop);n+=Math.max(i.scrollLeft,o.scrollLeft)}return{top:k,left:n}};c.offset={initialize:function(){var a=s.body,b=s.createElement("div"),d,f,e,j=parseFloat(c.curCSS(a,"marginTop",true))||0;c.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});b.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
a.insertBefore(b,a.firstChild);d=b.firstChild;f=d.firstChild;e=d.nextSibling.firstChild.firstChild;this.doesNotAddBorder=f.offsetTop!==5;this.doesAddBorderForTableAndCells=e.offsetTop===5;f.style.position="fixed";f.style.top="20px";this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15;f.style.position=f.style.top="";d.style.overflow="hidden";d.style.position="relative";this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5;this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==j;a.removeChild(b);
c.offset.initialize=c.noop},bodyOffset:function(a){var b=a.offsetTop,d=a.offsetLeft;c.offset.initialize();if(c.offset.doesNotIncludeMarginInBodyOffset){b+=parseFloat(c.curCSS(a,"marginTop",true))||0;d+=parseFloat(c.curCSS(a,"marginLeft",true))||0}return{top:b,left:d}},setOffset:function(a,b,d){if(/static/.test(c.curCSS(a,"position")))a.style.position="relative";var f=c(a),e=f.offset(),j=parseInt(c.curCSS(a,"top",true),10)||0,i=parseInt(c.curCSS(a,"left",true),10)||0;if(c.isFunction(b))b=b.call(a,
d,e);d={top:b.top-e.top+j,left:b.left-e.left+i};"using"in b?b.using.call(a,d):f.css(d)}};c.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),d=this.offset(),f=/^body|html$/i.test(b[0].nodeName)?{top:0,left:0}:b.offset();d.top-=parseFloat(c.curCSS(a,"marginTop",true))||0;d.left-=parseFloat(c.curCSS(a,"marginLeft",true))||0;f.top+=parseFloat(c.curCSS(b[0],"borderTopWidth",true))||0;f.left+=parseFloat(c.curCSS(b[0],"borderLeftWidth",true))||0;return{top:d.top-
f.top,left:d.left-f.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||s.body;a&&!/^body|html$/i.test(a.nodeName)&&c.css(a,"position")==="static";)a=a.offsetParent;return a})}});c.each(["Left","Top"],function(a,b){var d="scroll"+b;c.fn[d]=function(f){var e=this[0],j;if(!e)return null;if(f!==w)return this.each(function(){if(j=wa(this))j.scrollTo(!a?f:c(j).scrollLeft(),a?f:c(j).scrollTop());else this[d]=f});else return(j=wa(e))?"pageXOffset"in j?j[a?"pageYOffset":
"pageXOffset"]:c.support.boxModel&&j.document.documentElement[d]||j.document.body[d]:e[d]}});c.each(["Height","Width"],function(a,b){var d=b.toLowerCase();c.fn["inner"+b]=function(){return this[0]?c.css(this[0],d,false,"padding"):null};c.fn["outer"+b]=function(f){return this[0]?c.css(this[0],d,false,f?"margin":"border"):null};c.fn[d]=function(f){var e=this[0];if(!e)return f==null?null:this;if(c.isFunction(f))return this.each(function(j){var i=c(this);i[d](f.call(this,j,i[d]()))});return"scrollTo"in
e&&e.document?e.document.compatMode==="CSS1Compat"&&e.document.documentElement["client"+b]||e.document.body["client"+b]:e.nodeType===9?Math.max(e.documentElement["client"+b],e.body["scroll"+b],e.documentElement["scroll"+b],e.body["offset"+b],e.documentElement["offset"+b]):f===w?c.css(e,d):this.css(d,typeof f==="string"?f:f+"px")}});A.jQuery=A.$=c})(window);





// JScript File

/* fix iPad offset calculation */

if (/webkit.*mobile/i.test(navigator.userAgent)) {
    (function ($) {
        $.fn.offsetOld = $.fn.offset;
        $.fn.offset = function () {
            var result = this.offsetOld();
            result.top -= window.scrollY;
            result.left -= window.scrollX;
            return result;
        };
    })(jQuery);
}

/*
Checkbox function
*/

function checkUncheckAll(self, attri, value){
    $(String.format("input:checkbox[{0}={1}]", attri, value)).each(function() { this.checked = self.checked});
}

function anyChecked(attri, value) {
    return ($(String.format("input:checkbox[{0}={1}]:checked", attri, value)).length > 0);
}

/*
General Image functions
*/

function getThumbScale(maxWidth){
    var thumbScales = [1600, 1280, 1024, 800, 640, 400];
    
    for (var i = 0; i < thumbScales.length; i++){
        if (maxWidth < thumbScales[i]){
            continue;
        }
        else {
            return thumbScales [i];
        }
    }
    
    return thumbScales [thumbScales.length-1];
    
}

function resizeImage(imgId, w, h) {
    var currentheight, currentwidth, tempMultiplier;
    var myBitmap = (typeof imgId == "string") ? document.getElementById(imgId) : imgId;
    //alert(typeof imgId);
    if (!myBitmap || w == 0 || h == 0) return; //otherwise IE will trigger error;

    currentheight = $(myBitmap).height();
    currentwidth = $(myBitmap).width();

    //alert("currentWidth: " + currentwidth + "; currentheight: " + currentheight);
    //alert('resizeImage2');
    if (h <= currentheight || w <= currentwidth) {
        if ((currentheight / h) > (currentwidth / w)) {
            tempMultiplier = h / currentheight;
        } else {
            tempMultiplier = w / currentwidth;
        }

        $(myBitmap).height(currentheight * tempMultiplier);
        $(myBitmap).width(currentwidth * tempMultiplier);
        //alert('resizeImage3');
    } else {
        //alert('resizeImage4');
        return;
    }

}

/*
General Radtooltip Function
*/

function popTip(txt, width, height, modal, manualClose, autoCloseDelayInms, specialFormat, specialClientID){
    
    var finalClientID = (typeof specialClientID == "undefined") ? RadManagerToolTipClientID : specialClientID;
    //alert(finalClientID);
    var RadToolTip = $find(finalClientID);
    
    if (typeof modal == "undefined") modal = false;
    if (typeof manualClose == "undefined") manualClose = false;
    if (typeof autoCloseDelayInms == "undefined") autoCloseDelayInms = 4000;
    if (typeof specialFormat == "undefined") specialFormat = false;
    
    with(RadToolTip){

        //if(isVisible()) hide();

        set_relativeTo(Telerik.Web.UI.ToolTipRelativeDisplay.BrowserWindow);
        set_position(Telerik.Web.UI.ToolTipPosition.Center);
        
        set_manualClose(manualClose);
        set_modal(modal);

        set_text(specialFormat ? txt : String.format(" <h3 style='margin: {1}10px;'> {0} </h3> ", txt, manualClose ? '20px ' : '')); 
        
        show(); 
        
        set_width(width);
        set_height(height); 
        
        
       
        if (!manualClose) setTimeout("$find(RadManagerToolTipClientID).hide();", autoCloseDelayInms);

    }    
}

function SignalNewPM(str){

    popTip(str, 450, 260, false, true, 30*1000);
    
}


/*
General RadWindow Function
*/
function popwin(url,winname,width,height) {

	var reOpera = /opera/i ;
	var winnameRequired = ((navigator.appName == "Netscape" && parseInt(navigator.appVersion) == 4) || reOpera.test(navigator.userAgent));
	var leftPo = (screen.availWidth-width)/2
	var topPo = (screen.availHeight-height)/2

	if (!winnameRequired) winname = '';
	
	window.open(url, winname, "scrollbars=yes,toolbar=no,status=no,location=no,menubar=no,resizable=yes,height="+(height-20)+",width="+(width-10)+",left="+leftPo+",top="+topPo)
	return false;
}

function popRadWin(url,w,h){
     var oWin = showWindow(url, RadManagerWindowClientID, w, h);
     return oWin;
}

function showWindow(url, radID, w, h){ //use this on the parent to open a popup
    
    var oWin; 
    
    if (!w || !h) {
        var maxWidth = 1152; var maxHeight = 864; var sizeShrinkFactor = 0.75;
    
        var vportSize = getViewportSize();
        var desiredWidth = (vportSize[0] * sizeShrinkFactor); var desiredHeight = (vportSize[1] * sizeShrinkFactor);
        
        var finalWidth = desiredWidth > maxWidth ? maxWidth : desiredWidth ; 
        var finalHeight= desiredHeight > maxHeight ? maxHeight : desiredHeight ;    
        
        if (!w) w = finalWidth;
        if (!h) h = finalHeight; 
    }    

    oWin = $find(radID);

    with (oWin) {
    
        if (isPinned()) togglePin();
    
        show();
        
        setSize(w, h);

        var bounds = getWindowBounds();

        var verticalDiff = ($(window).scrollTop() + ($(window).height() - h) / 2);

        moveTo((($(window).width() - w) / 2), verticalDiff);

        set_behaviors(Telerik.Web.UI.WindowBehaviors.Move + Telerik.Web.UI.WindowBehaviors.Close + 
                        Telerik.Web.UI.WindowBehaviors.Resize + 
                        Telerik.Web.UI.WindowBehaviors.Minimize + Telerik.Web.UI.WindowBehaviors.Pin) ;
        
        if (url!='') setUrl(url);
                
    	argument = 0;
    }

            
    return oWin;
}

function GetRadWindow() // use this in the popup itself
{
	var oWindow = null;
	if (window.radWindow) oWindow = window.radWindow;
	else if (window.frameElement.radWindow) oWindow = window.frameElement.radWindow;
	return oWindow;
}	

function sendMasterSearchString(){
        self.location.href = 'search.aspx?phrase=' + escape(theForm.masterphrase.value.replace(/\</gi, ''));
} 

/*

    Keyboard enter to Update
*/

function enterToClickButton(event, btnClientID){
    if (typeof event == "undefined") event = window.event;
    if(event.which || event.keyCode){if ((event.which == 13) || (event.keyCode == 13)) {document.getElementById(btnClientID).click(); stopDefaultAction(event);}} ; 
}

function enterToSubmitLinkButton(event, btnUniqueID){
    if (typeof event == "undefined") event = window.event;
    if(event.which || event.keyCode){if ((event.which == 13) || (event.keyCode == 13)) {__doPostBack(btnUniqueID,''); stopDefaultAction(event);}} ; 
}

function enterToAjaxRequestLinkButton(event, btnUniqueID, AjaxPanel){
    if (typeof event == "undefined") event = window.event;
    if(event.which || event.keyCode){if ((event.which == 13) || (event.keyCode == 13)) {AjaxPanel.ajaxRequestWithTarget(btnUniqueID,''); stopDefaultAction(event);}} ; 
}

function enterToExecuteScript(event, script){
    if (typeof event == "undefined") event = window.event;
    if(event.which || event.keyCode){if ((event.which == 13) || (event.keyCode == 13)) {eval(script); stopDefaultAction(event);}} ;     
}

var yellAlert = true;

function msgbox (str){
    if (yellAlert) {alert(str);}
}

/* Cookies Functions */
function createCookie(name,value,days) {
    var expires = "";

	if (days)
	{
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		expires = "; expires="+date.toGMTString();
	}
	document.cookie = name+"="+value+expires+"; path=/";
	//alert(name+"="+value+expires+"; path=/");
}

function readCookie(name)
{
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++)
	{
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name)
{
	createCookie(name,"",-1);
}



/*
 Jump Menu
*/

function jumpMenu(j){
    var jval = j.options[j.selectedIndex].value;
    if (jval!="") self.location.href = jval;
}

function changeTheme(s) {
    createCookie("settheme", s.options[s.selectedIndex].value, 30); //save cookie on browser so we can have per device theme
    self.location.replace(clientScriptPathInfo.RawUrl.replace(/settheme=[^\&]+/i, ''));
}

/*
Webmonkey GET Parsing Module
Language: JavaScript 1.0
The parsing of GET queries is fundamental
to the basic functionality of HTTP/1.0.
This module parses GET with JavaScript 1.0.
Source: Webmonkey Code Library
(http://www.hotwired.com/webmonkey/javascript/code_library/)
Author: Patrick Corcoran
Author Email: patrick@taylor.org
*/


function createRequestObject() {
  FORM_DATA = new Object();
    // The Object ("Array") where our data will be stored.
  separator = ',';
    // The token used to separate data from multi-select inputs
  query = '' + this.location;
  qu = query
    // Get the current URL so we can parse out the data.
    // Adding a null-string '' forces an implicit type cast
    // from property to string, for NS2 compatibility.
  query = query.substring((query.indexOf('?')) + 1);
    // Keep everything after the question mark '?'.
  if (query.length < 1) { return false; }  // Perhaps we got some bad data?
  //msgbox(query);
  //query.replace("&amp;","&");
  keypairs = new Object();
  numKP = 1;
    // Local vars used to store and keep track of name/value pairs
    // as we parse them back into a usable form.
  while (query.indexOf('&') > -1) {
    keypairs[numKP] = query.substring(0,query.indexOf('&'));
    query = query.substring((query.indexOf('&')) + 1);
    numKP++;
      // Split the query string at each '&', storing the left-hand side
      // of the split in a new keypairs[] holder, and chopping the query
      // so that it gets the value of the right-hand string.
  }
  keypairs[numKP] = query;
    // Store what's left in the query string as the final keypairs[] data.<
  for (i in keypairs) {
    keyName = keypairs[i].substring(0,keypairs[i].indexOf('='));
      // Left of '=' is name.
    keyValue = keypairs[i].substring((keypairs[i].indexOf('=')) + 1);
      // Right of '=' is value.
    while (keyValue.indexOf('+') > -1) {
      keyValue = keyValue.substring(0,keyValue.indexOf('+')) + ' ' + keyValue.substring(keyValue.indexOf('+') + 1);
        // Replace each '+' in data string with a space.
    }
    keyValue = unescape(keyValue);
      // Unescape non-alphanumerics
    if (FORM_DATA[keyName]) {
      FORM_DATA[keyName] = FORM_DATA[keyName] + separator + keyValue;
        // Object already exists, it is probably a multi-select input,
        // and we need to generate a separator-delimited string
        // by appending to what we already have stored.
    } else {
      FORM_DATA[keyName] = keyValue;
        // Normal case: name gets value.
    }
  }
  return FORM_DATA;
}

// JScript File

/* Event Handling Functions */
 // Getting viewport size 
function getViewportSize(win)
{
  if (typeof win == 'undefined') win = self.window;
  
  var size = [0, 0];

  if (typeof win.innerWidth != 'undefined')
  {
    size = [
        win.innerWidth,
        win.innerHeight
    ];
    //alert("innerWidth");
  }
  else if (typeof win.document.documentElement != 'undefined'
      && typeof win.document.documentElement.clientWidth != 'undefined'
      && win.document.documentElement.clientWidth != 0)
  {
    size = [
        win.document.documentElement.clientWidth,
        win.document.documentElement.clientHeight
    ];
    //alert("clientWidth");
  }
  else
  {
    size = [
        win.document.getElementsByTagName('body')[0].clientWidth,
        win.document.getElementsByTagName('body')[0].clientHeight
    ];
    //alert("body.clientWidth");
  }

  return size;
}

function addLoadListener(fn)
{
    $(document).ready(fn);
}


function stopDefaultAction(event)
{
  event.returnValue = false;

  if (typeof event.preventDefault != "undefined")
  {
    event.preventDefault();
  }

  return true;
}

function stopPropagation(event)
{
  event.cancelBubble = true;

  if (event.stopPropagation) event.stopPropagation();

  return true;
}

function getCursorPosition(event){

    if(typeof event == "undefined"){
        event = window.event;
    }

    var scrollingPosition = getScrollingPosition();
    var cursorPosition = [0, 0];

    if (typeof event.pageX != "undefined" && typeof event.x != "undefined")
    {
        cursorPosition[0] = event.pageX;
        cursorPosition[1] = event.pageY;
    }
    else
    {
        cursorPosition[0] = event.clientX + scrollingPosition[0];
        cursorPosition[1] = event.clientY + scrollingPosition[1];
    }
    
    return cursorPosition;
}

function getScrollingPosition()
{
  //array for X and Y scroll position
  var position = [0, 0];

  //if the window.pageYOffset property is supported
  if(typeof window.pageYOffset != 'undefined')
  {
    //store position values
    position = [
        window.pageXOffset,
        window.pageYOffset
    ];
  }

  //if the documentElement.scrollTop property is supported
  //and the value is greater than zero
  if(typeof document.documentElement.scrollTop != 'undefined'
    && document.documentElement.scrollTop > 0)
  {
    //store position values
    position = [
        document.documentElement.scrollLeft,
        document.documentElement.scrollTop
    ];
  }

  //if the body.scrollTop property is supported
  else if(typeof document.body.scrollTop != 'undefined')
  {
    //store position values
    position = [
        document.body.scrollLeft,
        document.body.scrollTop
    ];
  }

  //return the array
  return position;
}

function getEventTarget(event)
{

    if(typeof event == "undefined"){
        event = window.event;
    }

  var targetElement = null;

  if (typeof event.target != "undefined")
  {
    targetElement = event.target;
  }
  else
  {
    targetElement = event.srcElement;
  }

  while (targetElement.nodeType == 3 && targetElement.parentNode != null)
  {
    targetElement = targetElement.parentNode;
  }

  return targetElement;
}

var __defaultFired = false;

function MyWebForm_FireDefaultButton(event, target) {
    
    var element = event.target || event.srcElement;
    
    if (!__defaultFired && event.keyCode == 13 && !(element && (element.tagName.toLowerCase() == "textarea"))) {
        
        var defaultButton;
        
        if (__nonMSDOMBrowser)
            defaultButton = document.getElementById(target);
        else
            defaultButton = document.all[target];

        if (typeof(defaultButton.click) != "undefined") {
            __defaultFired = true;

            defaultButton.click();

            stopPropagation(event);
            
            return false;
        }

        if (typeof(defaultButton.href) != "undefined") {
            __defaultFired = true;
            
            eval(unescape(defaultButton.href.substr(11)));

            stopPropagation(event);
            
            return false;
        }

    }
    return true;
}

addLoadListener(
    function () {
        _originalFireDefaultButton = window.WebForm_FireDefaultButton;

        if (_originalFireDefaultButton) {
            window.WebForm_FireDefaultButton = window.MyWebForm_FireDefaultButton;
        }

        if (typeof (Sys) !== "undefined") {
            Sys.Application.notifyScriptLoaded();
            Sys.Application.add_load(function() { __defaultFired = false; });
        }
    }
);

addLoadListener(function() { $("input[name^='__']").attr('autocomplete', 'off'); });

function JQCallWebService(location, data, success, failure, ctex) {

    $.ajax({
        type: "POST",
        url: location, //"ServiceName.asmx/WebMethodName"; "PageName.aspx/MethodName"
        data: data, //"{'fname':'dave','lname':'ward'}"
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        context: ctex,
        success: success,
        error: failure
    });
}

function JQOnCallError(XMLHttpRequest, ajaxOptions, thrownError) {

    var trapError = true;

    if (!trapError || XMLHttpRequest.readyState == 0 || XMLHttpRequest.status == 0)
        return;  // it's not really an error or we don't trap error

    try {

        alert(String.format('There was an error calling the service: {3}HTTP {0} {1}{3}{2}{3}readyState: {4}',
            XMLHttpRequest.status, XMLHttpRequest.statusText, XMLHttpRequest.responseText, '\r\n\r\n', XMLHttpRequest.readyState));
        
    } catch (e) {
        
    }

}

function createJsonRqForNET(data) { //receving the javascript array
    var forArray = [];
    for (var key in data) {
        forArray[forArray.length] = String.format("'{0}' : '{1}'", key, data[key].toString().replace(/([\\\'])/gi, "\\$1"));
    }

    return String.format("{{{0}}}", forArray.join(','));
}

var createElement = (function () {
    // Detect IE using conditional compilation
    if (/*@cc_on@*//*@if (@_win32)!/*@end@*/false) {
        // Translations for attribute names which IE would otherwise choke on
        var attrTranslations =
        {
            "class": "className",
            "for": "htmlFor"
        };

        var setAttribute = function (element, attr, value) {
            if (attrTranslations.hasOwnProperty(attr)) {
                element[attrTranslations[attr]] = value;
            }
            else if (attr == "style") {
                element.style.cssText = value;
            }
            else {
                element.setAttribute(attr, value);
            }
        };

        return function (tagName, attributes) {
            attributes = attributes || {};
            var element;

            // See http://channel9.msdn.com/Wiki/InternetExplorerProgrammingBugs
            if (attributes.hasOwnProperty("name") ||
                attributes.hasOwnProperty("checked") ||
                attributes.hasOwnProperty("multiple")) {
                var tagParts = ["<" + tagName];
                if (attributes.hasOwnProperty("name")) {
                    tagParts[tagParts.length] =
                        ' name="' + attributes.name + '"';
                    delete attributes.name;
                }
                if (attributes.hasOwnProperty("checked") &&
                    "" + attributes.checked == "true") {
                    tagParts[tagParts.length] = " checked";
                    delete attributes.checked;
                }
                if (attributes.hasOwnProperty("multiple") &&
                    "" + attributes.multiple == "true") {
                    tagParts[tagParts.length] = " multiple";
                    delete attributes.multiple;
                }
                tagParts[tagParts.length] = ">";

                element =
                    document.createElement(tagParts.join(""));
            }
            else {
                element = document.createElement(tagName);
            }

            for (var attr in attributes) {
                if (attributes.hasOwnProperty(attr)) {
                    setAttribute(element, attr, attributes[attr]);
                }
            }

            return element;
        };
    }
    // All other browsers
    else {
        return function (tagName, attributes) {
            attributes = attributes || {};
            var element = document.createElement(tagName);
            for (var attr in attributes) {
                if (attributes.hasOwnProperty(attr)) {
                    element.setAttribute(attr, attributes[attr]);
                }
            }
            return element;
        };
    }
})();






    var menuTimeout;
    var menuShown = false;

    var menuShowTimeout;

	function menuShow(e, theMenu, theTarget, rightToLeft){
        
	    PreventMenuHide();

	    var elementClicked = (typeof theTarget != 'undefined') ? theTarget : (e.currentTarget) ? e.currentTarget : getEventTarget(e);
	    var jqElementClicked = $(elementClicked);

	    var coordinate = jqElementClicked.offset();

        var theX = coordinate.left, theY =  coordinate.top + elementClicked.offsetHeight;

        if (typeof rightToLeft == 'undefind') rightToLeft = false;

        try {

            theMenu.showAt(theX, theY);

            var contextMenuIem = $(theMenu.get_contextMenuElement());
            var outOfViewPortMarginX = contextMenuIem.width() + theX - $(window).width();

            if (outOfViewPortMarginX > 0) theMenu.showAt(theX - contextMenuIem.width() + jqElementClicked.outerWidth(), theY);

        }
        
        catch (error) {
        
        }
	}
	
    function PreventMenuHide()
    {
        if (menuTimeout)
        {
            window.clearTimeout(menuTimeout);
        }
    }	
	
	function menuHide(menu){

        menuTimeout = window.setTimeout(
        function()
        {
            menu.hide();
            menuShown = false;
        }, 
        1000
        ); 
	}
	
	function menuMouseOut(s,e){
	    menuHide(e.get_item().get_menu());
	}
	

	function setNono(menu, widthForImg, force){
	    return;
    
	    if (!force && (!/MSIE (\d+\.\d+);/.test(navigator.userAgent) || window.opera)){
	        return;
	    }
	    
	    widthForImg = (widthForImg) ? widthForImg : 150;

        var theItem = menu.findItemByValue("nono");
        var img;
        var menuImgURL = clientScriptPathInfo.ApplicationPath + '/' + pageThemeImageURL;
        
        if (!theItem){
   
            theItem = new Telerik.Web.UI.RadMenuItem(); 
            menu.get_items().add(theItem);
            
            theItem.set_imageUrl(menuImgURL + 'blank.gif');
            theItem.set_value("nono");
            
        } 
        
        img = theItem.get_imageElement();

        img.style.height = '1px';
        img.style.visibilty = 'hidden'; 
	    img.style.width = widthForImg + 'px';
	}
	

	/* this function used to be inside those menu js files. The menu variable inside the function is declared on the page, not on the js file.*/
	function hideMenu(){
	    if (typeof menu == 'undefined' || !menu) return;

	    if (menuShowTimeout) {
	        window.clearTimeout(menuShowTimeout); // prevent delayed menu from popping up
	    } else {
	        menuHide(menu); 
	    } 
	    
	}	





    var forumMenuParams = [];

    function setForumMenuParams(id, viewerIsGuest, guestMemListPermission, guestSearchPemission, takeNewRegistrant, 
	        viewerIsAdmin, isBMan, isUMan, isFMan){
	        
        forumMenuParams.id = id;
        forumMenuParams.viewerIsGuest = viewerIsGuest;
        forumMenuParams.guestMemListPermission = guestMemListPermission;
        forumMenuParams.guestSearchPemission = guestSearchPemission;
        forumMenuParams.takeNewRegistrant = takeNewRegistrant;
        forumMenuParams.viewerIsAdmin = viewerIsAdmin;
        forumMenuParams.isBMan = isBMan;
        forumMenuParams.isUMan = isUMan;
        forumMenuParams.isFMan = isFMan;
	    
	}

	var ASPPGForumHeadMenu;
    
    function onForumMenuFirstLoad(menu){
        
        ASPPGForumHeadMenu = menu;
        
        var urlBase = clientScriptPathInfo.ApplicationPath + '/';
        var menuImgURL = clientScriptPathInfo.ApplicationPath + '/' + pageThemeImageURL;         
    
        with (menu){
            var Mainitem = findItemByValue("mainmenu") ; //new Telerik.Web.UI.RadMenuItem(); get_items().insert(0, Mainitem);
            
            /* New in 3.4 */
            var Photoitem = findItemByValue("photo");
            
            if (Photoitem && ForumMenuGalleryActive) {

                //new Telerik.Web.UI.RadMenuItem(); Mainitem.get_items().add(Photoitem);

                //Photoitem.set_text(ForumMenuPhotoText);Photoitem.set_imageUrl(menuImgURL + 'menuGallery.gif');
                Photoitem.set_navigateUrl(urlBase + 'gallery.aspx');

                menu.add_mouseOver(getGalleryMenuItems);
                menu.add_mouseOut(detectGalleryMouseOut);
            }
            
            if (ForumMenuCalendarActive) {
                var Calitem = new Telerik.Web.UI.RadMenuItem(); Mainitem.get_items().add(Calitem); 
     
                Calitem.set_text(ForumMenuCalendarText); Calitem.set_navigateUrl(urlBase + 'calendar.aspx');
                Calitem.set_imageUrl(menuImgURL + 'menuCal.gif');               
            }
         
            
            if (!forumMenuParams.viewerIsGuest){

                var Ticketitem = new Telerik.Web.UI.RadMenuItem(); Mainitem.get_items().add(Ticketitem); 
                var NewPostitem = new Telerik.Web.UI.RadMenuItem(); Mainitem.get_items().add(NewPostitem);
                var TodayPostItem = new Telerik.Web.UI.RadMenuItem(); Mainitem.get_items().add(TodayPostItem);
                var SubPostitem = new Telerik.Web.UI.RadMenuItem(); NewPostitem.get_items().add(SubPostitem);
                var ActivePostitem = new Telerik.Web.UI.RadMenuItem(); Mainitem.get_items().add(ActivePostitem);
                var NoReplyitem = new Telerik.Web.UI.RadMenuItem(); Mainitem.get_items().add(NoReplyitem);
                var AllPollitem = new Telerik.Web.UI.RadMenuItem(); Mainitem.get_items().add(AllPollitem);
                var AllFaqitem = new Telerik.Web.UI.RadMenuItem(); Mainitem.get_items().add(AllFaqitem);
                         

                NewPostitem.set_text(ForumMenuNewPostText); NewPostitem.set_navigateUrl(urlBase + 'search.aspx?searchfor=lastvisit'); 
                NewPostitem.set_imageUrl(menuImgURL + 'menuLastVisit.gif');
                
                TodayPostItem.set_text(ForumMenuTodayPostText); TodayPostItem.set_navigateUrl(urlBase + 'search.aspx?searchfor=today'); 
                TodayPostItem.set_imageUrl(menuImgURL + 'menuToday.gif');

                ActivePostitem.set_text(ForumMenuActivePostText); ActivePostitem.set_navigateUrl(urlBase + 'search.aspx?searchfor=active');
                ActivePostitem.set_imageUrl(menuImgURL + 'menuActivePost.gif');

                NoReplyitem.set_text(ForumMenuNoReplyText); NoReplyitem.set_navigateUrl(urlBase + 'search.aspx?searchfor=NoReply');
                NoReplyitem.set_imageUrl(menuImgURL + 'notice.gif');

                SubPostitem.set_text(ForumMenuSubPostText); SubPostitem.set_navigateUrl(urlBase + 'search.aspx?searchfor=subscribe');
                SubPostitem.set_imageUrl(menuImgURL + 'menuSubscribe.gif');

                AllPollitem.set_text(ForumMenuPollText); AllPollitem.set_navigateUrl(urlBase + 'search.aspx?searchfor=poll');
                AllPollitem.set_imageUrl(menuImgURL + 'menuPoll.gif');

                AllFaqitem.set_text(ForumMenuFaqText); AllFaqitem.set_navigateUrl(urlBase + 'search.aspx?searchfor=faq');
                AllFaqitem.set_imageUrl(menuImgURL + 'faq.gif');

                Ticketitem.set_text(ForumMenuTicketText); Ticketitem.set_navigateUrl(urlBase + 'ticket.aspx');
                Ticketitem.set_imageUrl(menuImgURL + 'menuTicket.gif');

                if (forumMenuParams.viewerIsAdmin) {
                    var ApprovalPostitem = new Telerik.Web.UI.RadMenuItem(); NewPostitem.get_items().add(ApprovalPostitem);
                    var RecyclePostitem = new Telerik.Web.UI.RadMenuItem(); NewPostitem.get_items().add(RecyclePostitem);

                    ApprovalPostitem.set_text(ForumMenuApprovalText); ApprovalPostitem.set_navigateUrl(urlBase + 'search.aspx?searchfor=approve');
                    ApprovalPostitem.set_imageUrl(menuImgURL + 'GreenFlag.gif');

                    RecyclePostitem.set_text(ForumMenuRecycleText); RecyclePostitem.set_navigateUrl(urlBase + 'search.aspx?searchfor=recycle');
                    RecyclePostitem.set_imageUrl(menuImgURL + 'recycle.gif');                    
                }               
            }
            
            var IniPMitem = findItemByValue("iniPM");
            if (IniPMitem) IniPMitem.set_navigateUrl(urlBase + 'pm.aspx');

            if (!forumMenuParams.viewerIsGuest) {
                var ComposeNewPMitem = new Telerik.Web.UI.RadMenuItem(); IniPMitem.get_items().add(ComposeNewPMitem);
                ComposeNewPMitem.set_text(ForumMenuComposeNewPM);

                if (currentMemberInfo.popupPosting) {
                    ComposeNewPMitem.set_navigateUrl("javascript:void(popRadWin('" + urlBase + "pmsend.aspx?pop=true'))");
                } else {
                    ComposeNewPMitem.set_navigateUrl(urlBase + 'pmsend.aspx');
                } 
                               
                ComposeNewPMitem.set_imageUrl(menuImgURL + 'menuPMAdd.gif');
            }
            
            /*
            var Searchitem = findItemByValue("sr");
            if (Searchitem) Searchitem.set_navigateUrl(urlBase + 'search.aspx');
            */

            var UserCPitem = findItemByValue("usercp"); //new Telerik.Web.UI.RadMenuItem(); get_items().add(UserCPitem);
            if(UserCPitem) {
                var EditProfileitem = new Telerik.Web.UI.RadMenuItem(); 
                var HideForumitem = new Telerik.Web.UI.RadMenuItem(); 
                var Subscriptionitem = new Telerik.Web.UI.RadMenuItem(); 
                var PMitem = new Telerik.Web.UI.RadMenuItem(); 
                var Contactitem = new Telerik.Web.UI.RadMenuItem(); 
                
                UserCPitem.get_items().add(EditProfileitem); EditProfileitem.set_text(ForumMenuEditProfileText); EditProfileitem.set_navigateUrl(urlBase + 'editprofile.aspx'); EditProfileitem.set_imageUrl(menuImgURL + 'menuProfile.gif');
                UserCPitem.get_items().add(HideForumitem); HideForumitem.set_text(ForumMenuHideForumText); HideForumitem.set_navigateUrl(urlBase + 'myforums.aspx'); HideForumitem.set_imageUrl(menuImgURL + 'menuFilter.gif'); 
                if (ForumMenuSubscriptionActive) {UserCPitem.get_items().add(Subscriptionitem);Subscriptionitem.set_text(ForumMenuSubscriptionText); Subscriptionitem.set_navigateUrl(urlBase + 'subscription.aspx'); Subscriptionitem.set_imageUrl(menuImgURL + 'menuSubscription.gif');}
                UserCPitem.get_items().add(PMitem);PMitem.set_text(ForumMenuPMText); PMitem.set_navigateUrl(urlBase + 'pm.aspx'); PMitem.set_imageUrl(menuImgURL + 'menuPM.gif'); 
                UserCPitem.get_items().add(Contactitem);Contactitem.set_text(ForumMenuContactText); Contactitem.set_navigateUrl(urlBase + 'address.aspx'); Contactitem.set_imageUrl(menuImgURL + 'menuContact.gif');

                /* New in 3.4 */
                var PublicProfileitem = new Telerik.Web.UI.RadMenuItem(); UserCPitem.get_items().add(PublicProfileitem);
                PublicProfileitem.set_text(ForumMenuPublicProfile); PublicProfileitem.set_imageUrl(menuImgURL + 'menuPProfile.gif');
                PublicProfileitem.set_navigateUrl(urlBase + 'showprofile.aspx?memid=' + forumMenuParams.id); 
            }

            
            var MemListitem = findItemByValue("memlist"); //new Telerik.Web.UI.RadMenuItem(); get_items().add(MemListitem);
            if (MemListitem){
                var OnlineListitem = new Telerik.Web.UI.RadMenuItem(); MemListitem.get_items().add(OnlineListitem);
                var GroupListitem = new Telerik.Web.UI.RadMenuItem(); MemListitem.get_items().add(GroupListitem);
                
                MemListitem.set_navigateUrl(urlBase + 'memberlist.aspx'); 
                GroupListitem.set_text(ForumMenuGroupListText); GroupListitem.set_navigateUrl(urlBase + 'groupinfo.aspx'); 
                OnlineListitem.set_text(ForumMenuOnlineListText); OnlineListitem.set_navigateUrl(urlBase + 'onlineuser.aspx');                            
            }

            /* new in 3.4 */
            //var PublicProfileitem = findItemByValue("publicprofile"); //new Telerik.Web.UI.RadMenuItem(); get_items().add(PublicProfileitem);
            //if (PublicProfileitem) PublicProfileitem.set_navigateUrl(urlBase + 'showprofile.aspx?memid=' + forumMenuParams.id);
            
            var Logoutitem = findItemByValue("logout"); //new Telerik.Web.UI.RadMenuItem(); get_items().add(Logoutitem);
            if (Logoutitem) Logoutitem.set_navigateUrl(urlBase + 'logout.aspx'); 
            
            var Loginitem = findItemByValue("login"); //new Telerik.Web.UI.RadMenuItem(); get_items().add(Loginitem);
            if (Loginitem) Loginitem.set_navigateUrl(urlBase + 'login.aspx');
            
            var Registeritem = findItemByValue("register"); //new Telerik.Web.UI.RadMenuItem(); get_items().add(Registeritem);
            if (Registeritem) Registeritem.set_navigateUrl(urlBase + 'register.aspx');
            
            var AdminCPitem = findItemByValue("admincp"); //new Telerik.Web.UI.RadMenuItem(); get_items().add(AdminCPitem);
            
            if (AdminCPitem){

                if (forumMenuParams.viewerIsAdmin) {
                    
                    var mTitles = [ForumMenuSiteCPText, 'News Announcement', ForumMenuForumCPText, ForumMenuUserAdminCPText, 'Security Related Options',
                                    'Gallery Options', 'Calendar Options', 'System Related Options', 'All Server Messages', 'Software Activation'];

                    var mURLs = ['#', 'news.aspx?tabval=editnews', '#', '#', '#', 'gallery.aspx?tabval=gallery', 'calendars.aspx?tabval=calendar', 
                                    '#', 'allsrvmsg.aspx?tabval=allsrvmsg', 'activation.aspx?tabval=activate'];

                    var subTitleUrls = {
                        admin0: { titles: ["Site Parameters", "Forum Viewing Options", "User Features 1", "User Features 2"],
                                    urls: ["site.aspx?tabval=site", "site.aspx?tabval=view", "site.aspx?tabval=feature1", "site.aspx?tabval=feature2"]
                        },
                        admin2: { titles: ["Forum Management", "Moderator / Private Users / Group Permission", "Message Pruning & Locking", "Topic Type System", "Custom PGDCode", "Custom Smiley Upload", "Related Server Messages"],
                                    urls: ["forummanager.aspx?tabval=forum", "forumpermission.aspx?tabval=permission", "mdelete.aspx?tabval=prune", "topictype.aspx?tabval=topictype", "pgdcode.aspx?tabval=pgdcode", "smiley.aspx?tabval=smiley", "fsrvmsg.aspx?tabval=fsrvmsg"]
                        },
                        admin3: { titles: ["User Management", "User Registration", "User Groups", "User Deletion", "User Rankings", "Bot Detection", "Custom Registration Fields", "Stock Avatar Upload", "Mailing List Builder", "Fast Member Import"],
                                    urls: ["user.aspx?tabval=user", "reg.aspx?tabval=reg", "ugroup.aspx?tabval=group", "udelete.aspx?tabval=udelete", "urank.aspx?tabval=rank", "bot.aspx?tabval=bot", "customreg.aspx?tabval=customreg", "avatarupload.aspx?tabval=avatar", "maillist.aspx?tabval=maillist", "memimport.aspx?tabval=memimport"]
                        },
                        admin4: { titles: ["Forum Filters", "Moderator Ticket System", "Flag / Ban System", "Link / PM Spam"],
                                    urls: ["forumfilter.aspx?tabval=filters", "modticket.aspx?tabval=moderator", "warn.aspx?tabval=warn", "linkpmspam.aspx?tabval=lpspam"]
                        },
                        admin7: { titles: ["Custom Stats", "Basic Maintenance", "Error Log", "Server Checker"],
                                    urls: ["stats.aspx?tabval=stats", "maintenance.aspx?tabval=maintain", "errorlog.aspx?tabval=error", "serverchecker.aspx?tabval=srvcehck"]
                        }                        
                    };
                                    
                    var AllAdminCPitems = AdminCPitem.get_items();

                    for (var i = 0; i < mTitles.length; i++) {

                        if (!forumMenuParams.isBMan) {
                            if (forumMenuParams.isUMan && forumMenuParams.isFMan) {
                                if (i != 2 && i != 3) continue;
                            } 
                            else if (forumMenuParams.isUMan && i != 3) {
                                continue;
                            }
                            else if (forumMenuParams.isFMan && i != 2) {
                                continue;
                            } 
                        }
                                            
                        var item = new Telerik.Web.UI.RadMenuItem();
                        item.set_text(mTitles[i]); item.set_navigateUrl(urlBase + 'admincp/' + mURLs[i]);
                        item.set_value('admin' + i.toString());
                        
                        if (i == (mTitles.length - 1)) {
                            if (currentMemberInfo.memID == 0) AllAdminCPitems.add(item); 
                        } else {
                            AllAdminCPitems.add(item);
                        }
                    }

                    for (var key in subTitleUrls) {
                        var subMenuItem = findItemByValue(key);
                        
                        if (subMenuItem) {

                            for (var ii = 0; ii < subTitleUrls[key].titles.length; ii++) {
                                
                                if (key == 'admin7' && ii == 0 && currentMemberInfo.memID != 0) continue;
                                
                                var subsubMenu = new Telerik.Web.UI.RadMenuItem();
                                subsubMenu.set_text(subTitleUrls[key].titles[ii]); subsubMenu.set_navigateUrl(urlBase + 'admincp/' + subTitleUrls[key].urls[ii]);

                                subMenuItem.get_items().add(subsubMenu);
                            }

                        }
                    }
                    
                }
                
            }
            
            /*
            
                New Addition in 3.0.1
            
            */
            
            // if(AdminCPitem) AdminCPitem.set_navigateUrl(urlBase + 'admincp/site.aspx?tabval=site');
            if(UserCPitem) UserCPitem.set_navigateUrl(urlBase + 'editprofile.aspx');
            if(Mainitem) Mainitem.set_navigateUrl(urlBase + clientScriptPathInfo.ForumBreadCrumbHome.replace('~/', ''));

             /*  test
            menu.findItemByValue("sr").open();
            menu.add_itemClosing(function (menu, args) { args.set_cancel(true); });
             
            */

        }
    }

    

    function getGalleryMenuItems(menu, args) {

        var theItem = args.get_item();

        if (theItem.get_value() != 'photo') return;

        if (theItem && ForumMenuGalleryActive) {
            //default.aspx/GetGalleryList
            forumMenuParams.inGallery = true;
            JQCallWebService("ASPPGWS.aspx/GetGalleryList", createJsonRqForNET({ 'memID': currentMemberInfo.memID }),
                generateMenuItems, JQOnCallError,
                [ASPPGForumHeadMenu, theItem, clientScriptPathInfo.ForumDir + 'album.aspx?galleryid={0}', 'gallery', true]); 
                // context = [parentMenu,menuItemToAddTo,linkFormat,subitemValuePrefix, removeAfterDone]
        }
    }

    function detectGalleryMouseOut(menu, args) {
        var theItem = args.get_item();

        if (theItem.get_value() != 'photo') return;

        forumMenuParams.inGallery = false;
    }

    function generateMenuItems(results) {
        var returnedVal = results.d;

        if (returnedVal == null) return; // no gallery present;

        var returnedMenuItemList = returnedVal.split(String.fromCharCode(3));
        var parentMenuItem = this[1];

        parentMenuItem.get_items().clear();
        
        for (var i = 0; i < returnedMenuItemList.length; i++) {
            var returnedItem = returnedMenuItemList[i].split(String.fromCharCode(2));
            // ID, title, parent

            var item = new Telerik.Web.UI.RadMenuItem();
            item.set_value(this[3] + returnedItem[0]);
            item.set_navigateUrl(String.format(this[2], returnedItem[0]));
            item.set_text(returnedItem[1]);

            if (returnedItem[2] == '0') {
                parentMenuItem.get_items().add(item);
            } else {
                var subParentItem = this[0].findItemByValue(this[3] + returnedItem[2]); // parent is private
                if (subParentItem != null) subParentItem.get_items().add(item);
            }

        }

        if (forumMenuParams.inGallery === true) parentMenuItem.open();

        if (this[4]) {
            this[0].remove_mouseOver(getGalleryMenuItems);
            this[0].remove_mouseOut(getGalleryMenuItems); 
        }
        
    }




/*!
 * jQuery UI 1.8
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI
 *//*
 * jQuery UI 1.8
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI
 */
jQuery.ui||(function(a){a.ui={version:"1.8",plugin:{add:function(c,d,f){var e=a.ui[c].prototype;for(var b in f){e.plugins[b]=e.plugins[b]||[];e.plugins[b].push([d,f[b]])}},call:function(b,d,c){var f=b.plugins[d];if(!f||!b.element[0].parentNode){return}for(var e=0;e<f.length;e++){if(b.options[f[e][0]]){f[e][1].apply(b.element,c)}}}},contains:function(d,c){return document.compareDocumentPosition?d.compareDocumentPosition(c)&16:d!==c&&d.contains(c)},hasScroll:function(e,c){if(a(e).css("overflow")=="hidden"){return false}var b=(c&&c=="left")?"scrollLeft":"scrollTop",d=false;if(e[b]>0){return true}e[b]=1;d=(e[b]>0);e[b]=0;return d},isOverAxis:function(c,b,d){return(c>b)&&(c<(b+d))},isOver:function(g,c,f,e,b,d){return a.ui.isOverAxis(g,f,b)&&a.ui.isOverAxis(c,e,d)},keyCode:{BACKSPACE:8,CAPS_LOCK:20,COMMA:188,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38}};a.fn.extend({_focus:a.fn.focus,focus:function(b,c){return typeof b==="number"?this.each(function(){var d=this;setTimeout(function(){a(d).focus();(c&&c.call(d))},b)}):this._focus.apply(this,arguments)},enableSelection:function(){return this.attr("unselectable","off").css("MozUserSelect","").unbind("selectstart.ui")},disableSelection:function(){return this.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){return false})},scrollParent:function(){var b;if((a.browser.msie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){b=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(a.curCSS(this,"position",1))&&(/(auto|scroll)/).test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0)}else{b=this.parents().filter(function(){return(/(auto|scroll)/).test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0)}return(/fixed/).test(this.css("position"))||!b.length?a(document):b},zIndex:function(e){if(e!==undefined){return this.css("zIndex",e)}if(this.length){var c=a(this[0]),b,d;while(c.length&&c[0]!==document){b=c.css("position");if(b=="absolute"||b=="relative"||b=="fixed"){d=parseInt(c.css("zIndex"));if(!isNaN(d)&&d!=0){return d}}c=c.parent()}}return 0}});a.extend(a.expr[":"],{data:function(d,c,b){return !!a.data(d,b[3])},focusable:function(c){var d=c.nodeName.toLowerCase(),b=a.attr(c,"tabindex");return(/input|select|textarea|button|object/.test(d)?!c.disabled:"a"==d||"area"==d?c.href||!isNaN(b):!isNaN(b))&&!a(c)["area"==d?"parents":"closest"](":hidden").length},tabbable:function(c){var b=a.attr(c,"tabindex");return(isNaN(b)||b>=0)&&a(c).is(":focusable")}})})(jQuery);;/*!
 * jQuery UI Widget 1.8
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Widget
 *//*
 * jQuery UI Widget 1.8
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(b){var a=b.fn.remove;b.fn.remove=function(c,d){return this.each(function(){if(!d){if(!c||b.filter(c,[this]).length){b("*",this).add(this).each(function(){b(this).triggerHandler("remove")})}}return a.call(b(this),c,d)})};b.widget=function(d,f,c){var e=d.split(".")[0],h;d=d.split(".")[1];h=e+"-"+d;if(!c){c=f;f=b.Widget}b.expr[":"][h]=function(i){return !!b.data(i,d)};b[e]=b[e]||{};b[e][d]=function(i,j){if(arguments.length){this._createWidget(i,j)}};var g=new f();g.options=b.extend({},g.options);b[e][d].prototype=b.extend(true,g,{namespace:e,widgetName:d,widgetEventPrefix:b[e][d].prototype.widgetEventPrefix||d,widgetBaseClass:h},c);b.widget.bridge(d,b[e][d])};b.widget.bridge=function(d,c){b.fn[d]=function(g){var e=typeof g==="string",f=Array.prototype.slice.call(arguments,1),h=this;g=!e&&f.length?b.extend.apply(null,[true,g].concat(f)):g;if(e&&g.substring(0,1)==="_"){return h}if(e){this.each(function(){var i=b.data(this,d),j=i&&b.isFunction(i[g])?i[g].apply(i,f):i;if(j!==i&&j!==undefined){h=j;return false}})}else{this.each(function(){var i=b.data(this,d);if(i){if(g){i.option(g)}i._init()}else{b.data(this,d,new c(g,this))}})}return h}};b.Widget=function(c,d){if(arguments.length){this._createWidget(c,d)}};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(d,e){this.element=b(e).data(this.widgetName,this);this.options=b.extend(true,{},this.options,b.metadata&&b.metadata.get(e)[this.widgetName],d);var c=this;this.element.bind("remove."+this.widgetName,function(){c.destroy()});this._create();this._init()},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled")},widget:function(){return this.element},option:function(e,f){var d=e,c=this;if(arguments.length===0){return b.extend({},c.options)}if(typeof e==="string"){if(f===undefined){return this.options[e]}d={};d[e]=f}b.each(d,function(g,h){c._setOption(g,h)});return c},_setOption:function(c,d){this.options[c]=d;if(c==="disabled"){this.widget()[d?"addClass":"removeClass"](this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").attr("aria-disabled",d)}return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(d,e,f){var h=this.options[d];e=b.Event(e);e.type=(d===this.widgetEventPrefix?d:this.widgetEventPrefix+d).toLowerCase();f=f||{};if(e.originalEvent){for(var c=b.event.props.length,g;c;){g=b.event.props[--c];e[g]=e.originalEvent[g]}}this.element.trigger(e,f);return !(b.isFunction(h)&&h.call(this.element[0],e,f)===false||e.isDefaultPrevented())}}})(jQuery);;/*!
 * jQuery UI Mouse 1.8
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 *//*
 * jQuery UI Mouse 1.8
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function(a){a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.bind("mousedown."+this.widgetName,function(c){return b._mouseDown(c)}).bind("click."+this.widgetName,function(c){if(b._preventClickEvent){b._preventClickEvent=false;c.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(d){d.originalEvent=d.originalEvent||{};if(d.originalEvent.mouseHandled){return}(this._mouseStarted&&this._mouseUp(d));this._mouseDownEvent=d;var c=this,e=(d.which==1),b=(typeof this.options.cancel=="string"?a(d.target).parents().add(d.target).filter(this.options.cancel).length:false);if(!e||b||!this._mouseCapture(d)){return true}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){c.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(d)&&this._mouseDelayMet(d)){this._mouseStarted=(this._mouseStart(d)!==false);if(!this._mouseStarted){d.preventDefault();return true}}this._mouseMoveDelegate=function(f){return c._mouseMove(f)};this._mouseUpDelegate=function(f){return c._mouseUp(f)};a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);(a.browser.safari||d.preventDefault());d.originalEvent.mouseHandled=true;return true},_mouseMove:function(b){if(a.browser.msie&&!b.button){return this._mouseUp(b)}if(this._mouseStarted){this._mouseDrag(b);return b.preventDefault()}if(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,b)!==false);(this._mouseStarted?this._mouseDrag(b):this._mouseUp(b))}return !this._mouseStarted},_mouseUp:function(b){a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;this._preventClickEvent=(b.target==this._mouseDownEvent.target);this._mouseStop(b)}return false},_mouseDistanceMet:function(b){return(Math.max(Math.abs(this._mouseDownEvent.pageX-b.pageX),Math.abs(this._mouseDownEvent.pageY-b.pageY))>=this.options.distance)},_mouseDelayMet:function(b){return this.mouseDelayMet},_mouseStart:function(b){},_mouseDrag:function(b){},_mouseStop:function(b){},_mouseCapture:function(b){return true}})})(jQuery);;/*
 * jQuery UI Resizable 1.8
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Resizables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */(function(c){c.widget("ui.resizable",c.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1000},_create:function(){var e=this,j=this.options;this.element.addClass("ui-resizable");c.extend(this,{_aspectRatio:!!(j.aspectRatio),aspectRatio:j.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:j.helper||j.ghost||j.animate?j.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){if(/relative/.test(this.element.css("position"))&&c.browser.opera){this.element.css({position:"relative",top:"auto",left:"auto"})}this.element.wrap(c('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("resizable",this.element.data("resizable"));this.elementIsWrapper=true;this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});this.originalResizeStyle=this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css({margin:this.originalElement.css("margin")});this._proportionallyResize()}this.handles=j.handles||(!c(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});if(this.handles.constructor==String){if(this.handles=="all"){this.handles="n,e,s,w,se,sw,ne,nw"}var k=this.handles.split(",");this.handles={};for(var f=0;f<k.length;f++){var h=c.trim(k[f]),d="ui-resizable-"+h;var g=c('<div class="ui-resizable-handle '+d+'"></div>');if(/sw|se|ne|nw/.test(h)){g.css({zIndex:++j.zIndex})}if("se"==h){g.addClass("ui-icon ui-icon-gripsmall-diagonal-se")}this.handles[h]=".ui-resizable-"+h;this.element.append(g)}}this._renderAxis=function(p){p=p||this.element;for(var m in this.handles){if(this.handles[m].constructor==String){this.handles[m]=c(this.handles[m],this.element).show()}if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var n=c(this.handles[m],this.element),o=0;o=/sw|ne|nw|se|n|s/.test(m)?n.outerHeight():n.outerWidth();var l=["padding",/ne|nw|n/.test(m)?"Top":/se|sw|s/.test(m)?"Bottom":/^e$/.test(m)?"Right":"Left"].join("");p.css(l,o);this._proportionallyResize()}if(!c(this.handles[m]).length){continue}}};this._renderAxis(this.element);this._handles=c(".ui-resizable-handle",this.element).disableSelection();this._handles.mouseover(function(){if(!e.resizing){if(this.className){var i=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)}e.axis=i&&i[1]?i[1]:"se"}});if(j.autoHide){this._handles.hide();c(this.element).addClass("ui-resizable-autohide").hover(function(){c(this).removeClass("ui-resizable-autohide");e._handles.show()},function(){if(!e.resizing){c(this).addClass("ui-resizable-autohide");e._handles.hide()}})}this._mouseInit()},destroy:function(){this._mouseDestroy();var d=function(f){c(f).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){d(this.element);var e=this.element;e.after(this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")})).remove()}this.originalElement.css("resize",this.originalResizeStyle);d(this.originalElement);return this},_mouseCapture:function(e){var f=false;for(var d in this.handles){if(c(this.handles[d])[0]==e.target){f=true}}return !this.options.disabled&&f},_mouseStart:function(f){var i=this.options,e=this.element.position(),d=this.element;this.resizing=true;this.documentScroll={top:c(document).scrollTop(),left:c(document).scrollLeft()};if(d.is(".ui-draggable")||(/absolute/).test(d.css("position"))){d.css({position:"absolute",top:e.top,left:e.left})}if(c.browser.opera&&(/relative/).test(d.css("position"))){d.css({position:"relative",top:"auto",left:"auto"})}this._renderProxy();var j=b(this.helper.css("left")),g=b(this.helper.css("top"));if(i.containment){j+=c(i.containment).scrollLeft()||0;g+=c(i.containment).scrollTop()||0}this.offset=this.helper.offset();this.position={left:j,top:g};this.size=this._helper?{width:d.outerWidth(),height:d.outerHeight()}:{width:d.width(),height:d.height()};this.originalSize=this._helper?{width:d.outerWidth(),height:d.outerHeight()}:{width:d.width(),height:d.height()};this.originalPosition={left:j,top:g};this.sizeDiff={width:d.outerWidth()-d.width(),height:d.outerHeight()-d.height()};this.originalMousePosition={left:f.pageX,top:f.pageY};this.aspectRatio=(typeof i.aspectRatio=="number")?i.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);var h=c(".ui-resizable-"+this.axis).css("cursor");c("body").css("cursor",h=="auto"?this.axis+"-resize":h);d.addClass("ui-resizable-resizing");this._propagate("start",f);return true},_mouseDrag:function(d){var g=this.helper,f=this.options,l={},p=this,i=this.originalMousePosition,m=this.axis;var q=(d.pageX-i.left)||0,n=(d.pageY-i.top)||0;var h=this._change[m];if(!h){return false}var k=h.apply(this,[d,q,n]),j=c.browser.msie&&c.browser.version<7,e=this.sizeDiff;if(this._aspectRatio||d.shiftKey){k=this._updateRatio(k,d)}k=this._respectSize(k,d);this._propagate("resize",d);g.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize()}this._updateCache(k);this._trigger("resize",d,this.ui());return false},_mouseStop:function(g){this.resizing=false;var h=this.options,l=this;if(this._helper){var f=this._proportionallyResizeElements,d=f.length&&(/textarea/i).test(f[0].nodeName),e=d&&c.ui.hasScroll(f[0],"left")?0:l.sizeDiff.height,j=d?0:l.sizeDiff.width;var m={width:(l.size.width-j),height:(l.size.height-e)},i=(parseInt(l.element.css("left"),10)+(l.position.left-l.originalPosition.left))||null,k=(parseInt(l.element.css("top"),10)+(l.position.top-l.originalPosition.top))||null;if(!h.animate){this.element.css(c.extend(m,{top:k,left:i}))}l.helper.height(l.size.height);l.helper.width(l.size.width);if(this._helper&&!h.animate){this._proportionallyResize()}}c("body").css("cursor","auto");this.element.removeClass("ui-resizable-resizing");this._propagate("stop",g);if(this._helper){this.helper.remove()}return false},_updateCache:function(d){var e=this.options;this.offset=this.helper.offset();if(a(d.left)){this.position.left=d.left}if(a(d.top)){this.position.top=d.top}if(a(d.height)){this.size.height=d.height}if(a(d.width)){this.size.width=d.width}},_updateRatio:function(g,f){var h=this.options,i=this.position,e=this.size,d=this.axis;if(g.height){g.width=(e.height*this.aspectRatio)}else{if(g.width){g.height=(e.width/this.aspectRatio)}}if(d=="sw"){g.left=i.left+(e.width-g.width);g.top=null}if(d=="nw"){g.top=i.top+(e.height-g.height);g.left=i.left+(e.width-g.width)}return g},_respectSize:function(k,f){var i=this.helper,h=this.options,q=this._aspectRatio||f.shiftKey,p=this.axis,s=a(k.width)&&h.maxWidth&&(h.maxWidth<k.width),l=a(k.height)&&h.maxHeight&&(h.maxHeight<k.height),g=a(k.width)&&h.minWidth&&(h.minWidth>k.width),r=a(k.height)&&h.minHeight&&(h.minHeight>k.height);if(g){k.width=h.minWidth}if(r){k.height=h.minHeight}if(s){k.width=h.maxWidth}if(l){k.height=h.maxHeight}var e=this.originalPosition.left+this.originalSize.width,n=this.position.top+this.size.height;var j=/sw|nw|w/.test(p),d=/nw|ne|n/.test(p);if(g&&j){k.left=e-h.minWidth}if(s&&j){k.left=e-h.maxWidth}if(r&&d){k.top=n-h.minHeight}if(l&&d){k.top=n-h.maxHeight}var m=!k.width&&!k.height;if(m&&!k.left&&k.top){k.top=null}else{if(m&&!k.top&&k.left){k.left=null}}return k},_proportionallyResize:function(){var j=this.options;if(!this._proportionallyResizeElements.length){return}var f=this.helper||this.element;for(var e=0;e<this._proportionallyResizeElements.length;e++){var g=this._proportionallyResizeElements[e];if(!this.borderDif){var d=[g.css("borderTopWidth"),g.css("borderRightWidth"),g.css("borderBottomWidth"),g.css("borderLeftWidth")],h=[g.css("paddingTop"),g.css("paddingRight"),g.css("paddingBottom"),g.css("paddingLeft")];this.borderDif=c.map(d,function(k,m){var l=parseInt(k,10)||0,n=parseInt(h[m],10)||0;return l+n})}if(c.browser.msie&&!(!(c(f).is(":hidden")||c(f).parents(":hidden").length))){continue}g.css({height:(f.height()-this.borderDif[0]-this.borderDif[2])||0,width:(f.width()-this.borderDif[1]-this.borderDif[3])||0})}},_renderProxy:function(){var e=this.element,h=this.options;this.elementOffset=e.offset();if(this._helper){this.helper=this.helper||c('<div style="overflow:hidden;"></div>');var d=c.browser.msie&&c.browser.version<7,f=(d?1:0),g=(d?2:-1);this.helper.addClass(this._helper).css({width:this.element.outerWidth()+g,height:this.element.outerHeight()+g,position:"absolute",left:this.elementOffset.left-f+"px",top:this.elementOffset.top-f+"px",zIndex:++h.zIndex});this.helper.appendTo("body").disableSelection()}else{this.helper=this.element}},_change:{e:function(f,e,d){return{width:this.originalSize.width+e}},w:function(g,e,d){var i=this.options,f=this.originalSize,h=this.originalPosition;return{left:h.left+e,width:f.width-e}},n:function(g,e,d){var i=this.options,f=this.originalSize,h=this.originalPosition;return{top:h.top+d,height:f.height-d}},s:function(f,e,d){return{height:this.originalSize.height+d}},se:function(f,e,d){return c.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[f,e,d]))},sw:function(f,e,d){return c.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[f,e,d]))},ne:function(f,e,d){return c.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[f,e,d]))},nw:function(f,e,d){return c.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[f,e,d]))}},_propagate:function(e,d){c.ui.plugin.call(this,e,[d,this.ui()]);(e!="resize"&&this._trigger(e,d,this.ui()))},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}});c.extend(c.ui.resizable,{version:"1.8"});c.ui.plugin.add("resizable","alsoResize",{start:function(e,f){var d=c(this).data("resizable"),h=d.options;var g=function(i){c(i).each(function(){c(this).data("resizable-alsoresize",{width:parseInt(c(this).width(),10),height:parseInt(c(this).height(),10),left:parseInt(c(this).css("left"),10),top:parseInt(c(this).css("top"),10)})})};if(typeof(h.alsoResize)=="object"&&!h.alsoResize.parentNode){if(h.alsoResize.length){h.alsoResize=h.alsoResize[0];g(h.alsoResize)}else{c.each(h.alsoResize,function(i,j){g(i)})}}else{g(h.alsoResize)}},resize:function(f,h){var e=c(this).data("resizable"),i=e.options,g=e.originalSize,k=e.originalPosition;var j={height:(e.size.height-g.height)||0,width:(e.size.width-g.width)||0,top:(e.position.top-k.top)||0,left:(e.position.left-k.left)||0},d=function(l,m){c(l).each(function(){var p=c(this),q=c(this).data("resizable-alsoresize"),o={},n=m&&m.length?m:["width","height","top","left"];c.each(n||["width","height","top","left"],function(r,t){var s=(q[t]||0)+(j[t]||0);if(s&&s>=0){o[t]=s||null}});if(/relative/.test(p.css("position"))&&c.browser.opera){e._revertToRelativePosition=true;p.css({position:"absolute",top:"auto",left:"auto"})}p.css(o)})};if(typeof(i.alsoResize)=="object"&&!i.alsoResize.nodeType){c.each(i.alsoResize,function(l,m){d(l,m)})}else{d(i.alsoResize)}},stop:function(e,f){var d=c(this).data("resizable");if(d._revertToRelativePosition&&c.browser.opera){d._revertToRelativePosition=false;el.css({position:"relative"})}c(this).removeData("resizable-alsoresize-start")}});c.ui.plugin.add("resizable","animate",{stop:function(h,m){var n=c(this).data("resizable"),i=n.options;var g=n._proportionallyResizeElements,d=g.length&&(/textarea/i).test(g[0].nodeName),e=d&&c.ui.hasScroll(g[0],"left")?0:n.sizeDiff.height,k=d?0:n.sizeDiff.width;var f={width:(n.size.width-k),height:(n.size.height-e)},j=(parseInt(n.element.css("left"),10)+(n.position.left-n.originalPosition.left))||null,l=(parseInt(n.element.css("top"),10)+(n.position.top-n.originalPosition.top))||null;n.element.animate(c.extend(f,l&&j?{top:l,left:j}:{}),{duration:i.animateDuration,easing:i.animateEasing,step:function(){var o={width:parseInt(n.element.css("width"),10),height:parseInt(n.element.css("height"),10),top:parseInt(n.element.css("top"),10),left:parseInt(n.element.css("left"),10)};if(g&&g.length){c(g[0]).css({width:o.width,height:o.height})}n._updateCache(o);n._propagate("resize",h)}})}});c.ui.plugin.add("resizable","containment",{start:function(e,q){var s=c(this).data("resizable"),i=s.options,k=s.element;var f=i.containment,j=(f instanceof c)?f.get(0):(/parent/.test(f))?k.parent().get(0):f;if(!j){return}s.containerElement=c(j);if(/document/.test(f)||f==document){s.containerOffset={left:0,top:0};s.containerPosition={left:0,top:0};s.parentData={element:c(document),left:0,top:0,width:c(document).width(),height:c(document).height()||document.body.parentNode.scrollHeight}}else{var m=c(j),h=[];c(["Top","Right","Left","Bottom"]).each(function(p,o){h[p]=b(m.css("padding"+o))});s.containerOffset=m.offset();s.containerPosition=m.position();s.containerSize={height:(m.innerHeight()-h[3]),width:(m.innerWidth()-h[1])};var n=s.containerOffset,d=s.containerSize.height,l=s.containerSize.width,g=(c.ui.hasScroll(j,"left")?j.scrollWidth:l),r=(c.ui.hasScroll(j)?j.scrollHeight:d);s.parentData={element:j,left:n.left,top:n.top,width:g,height:r}}},resize:function(f,p){var s=c(this).data("resizable"),h=s.options,e=s.containerSize,n=s.containerOffset,l=s.size,m=s.position,q=s._aspectRatio||f.shiftKey,d={top:0,left:0},g=s.containerElement;if(g[0]!=document&&(/static/).test(g.css("position"))){d=n}if(m.left<(s._helper?n.left:0)){s.size.width=s.size.width+(s._helper?(s.position.left-n.left):(s.position.left-d.left));if(q){s.size.height=s.size.width/h.aspectRatio}s.position.left=h.helper?n.left:0}if(m.top<(s._helper?n.top:0)){s.size.height=s.size.height+(s._helper?(s.position.top-n.top):s.position.top);if(q){s.size.width=s.size.height*h.aspectRatio}s.position.top=s._helper?n.top:0}s.offset.left=s.parentData.left+s.position.left;s.offset.top=s.parentData.top+s.position.top;var k=Math.abs((s._helper?s.offset.left-d.left:(s.offset.left-d.left))+s.sizeDiff.width),r=Math.abs((s._helper?s.offset.top-d.top:(s.offset.top-n.top))+s.sizeDiff.height);var j=s.containerElement.get(0)==s.element.parent().get(0),i=/relative|absolute/.test(s.containerElement.css("position"));if(j&&i){k-=s.parentData.left}if(k+s.size.width>=s.parentData.width){s.size.width=s.parentData.width-k;if(q){s.size.height=s.size.width/s.aspectRatio}}if(r+s.size.height>=s.parentData.height){s.size.height=s.parentData.height-r;if(q){s.size.width=s.size.height*s.aspectRatio}}},stop:function(e,m){var p=c(this).data("resizable"),f=p.options,k=p.position,l=p.containerOffset,d=p.containerPosition,g=p.containerElement;var i=c(p.helper),q=i.offset(),n=i.outerWidth()-p.sizeDiff.width,j=i.outerHeight()-p.sizeDiff.height;if(p._helper&&!f.animate&&(/relative/).test(g.css("position"))){c(this).css({left:q.left-d.left-l.left,width:n,height:j})}if(p._helper&&!f.animate&&(/static/).test(g.css("position"))){c(this).css({left:q.left-d.left-l.left,width:n,height:j})}}});c.ui.plugin.add("resizable","ghost",{start:function(f,g){var d=c(this).data("resizable"),h=d.options,e=d.size;d.ghost=d.originalElement.clone();d.ghost.css({opacity:0.25,display:"block",position:"relative",height:e.height,width:e.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof h.ghost=="string"?h.ghost:"");d.ghost.appendTo(d.helper)},resize:function(e,f){var d=c(this).data("resizable"),g=d.options;if(d.ghost){d.ghost.css({position:"relative",height:d.size.height,width:d.size.width})}},stop:function(e,f){var d=c(this).data("resizable"),g=d.options;if(d.ghost&&d.helper){d.helper.get(0).removeChild(d.ghost.get(0))}}});c.ui.plugin.add("resizable","grid",{resize:function(d,l){var n=c(this).data("resizable"),g=n.options,j=n.size,h=n.originalSize,i=n.originalPosition,m=n.axis,k=g._aspectRatio||d.shiftKey;g.grid=typeof g.grid=="number"?[g.grid,g.grid]:g.grid;var f=Math.round((j.width-h.width)/(g.grid[0]||1))*(g.grid[0]||1),e=Math.round((j.height-h.height)/(g.grid[1]||1))*(g.grid[1]||1);if(/^(se|s|e)$/.test(m)){n.size.width=h.width+f;n.size.height=h.height+e}else{if(/^(ne)$/.test(m)){n.size.width=h.width+f;n.size.height=h.height+e;n.position.top=i.top-e}else{if(/^(sw)$/.test(m)){n.size.width=h.width+f;n.size.height=h.height+e;n.position.left=i.left-f}else{n.size.width=h.width+f;n.size.height=h.height+e;n.position.top=i.top-e;n.position.left=i.left-f}}}}});var b=function(d){return parseInt(d,10)||0};var a=function(d){return !isNaN(parseInt(d,10))}})(jQuery);;




        function keepalive(){
	        var keepAliveFrame = document.createElement("iframe");
	        keepAliveFrame.src = clientScriptPathInfo.ApplicationPath + "/keepalive.ashx";
	        keepAliveFrame.style.display = "none";
	        document.body.appendChild(keepAliveFrame);
        }






function titleAndStar(totalPosts, score, isMod, isAdmin, customTitle, customPic, imgID, titleID) {

    var title;
    var star;
    var separator = String.fromCharCode(1);
	
    if (score==null||score=="") score=0;
	
    if (isMod){
	    title = userLevelNameMod;
	    star = modStar;
    }
    if(isAdmin){
	    title = userLevelNameAdmin;
	    star = adminStar;
    }
    if (typeof title == 'undefined' && strTitle.length > 0) {
	    for (var i=1; i<strTitle.length ; i++){
		    var userL = strTitle[i].split(separator);
		    var evaluation = eval(totalPosts+"<="+userL[0]+userL[1]+score+"<="+userL[2]);
		    if (evaluation){
			    title = userL[3];
			    star = userL[4]+starPicSuffix;
			    break;
		    }
	    }
	    if (title==null){
		    title = strTitle[strTitle.length-1].split(separator)[3];
		    star =  strTitle[strTitle.length-1].split(separator)[4]+starPicSuffix;
	    }

    }
    if (customTitle!="") (title = customTitle);
    //if (customPic!="") (star = customPic);

    var $theImage = $('#' + imgID);
    var $theTitle = $('#' + titleID);

    $theTitle.html((title) ? title : '');
    
    if (customPic != "") $theTitle.html(function(i,html){ return html += "<br /><img src=\"" + clientScriptPathInfo.ApplicationPath + "/image/" + customPic + "\" />"});

    if (typeof star != 'undefined') $theImage.attr('src', clientScriptPathInfo.ApplicationPath + "/image/" + star); else $theImage.hide();

}








/* http://www.kryogenix.org/code/browser/searchhi/ */
/* Modified 20021006 to fix query string parsing and add case insensitivity */
/* Modified 20070316 to stop highlighting inside nosearchhi nodes */

var ASPPG_searchQuery = 'high';

function highlightWord(node,word) {
    if (word.trim().length == 0) return;
	// Iterate into this nodes childNodes
	if (node.hasChildNodes) {
		var hi_cn;
		for (hi_cn=0;hi_cn<node.childNodes.length;hi_cn++) {
			highlightWord(node.childNodes[hi_cn],word);
		}
	}
	
	// And do this node itself
	if (node.nodeType == 3) { // text node
		tempNodeVal = node.nodeValue.toLowerCase();
		tempWordVal = new RegExp('\\b' + word.toLowerCase() + '\\b', "g");
		if (tempNodeVal.search(tempWordVal) != -1) {
			pn = node.parentNode;
			// check if we're inside a "nosearchhi" zone
			checkn = pn;
			while (checkn.nodeType != 9 && 
			checkn.nodeName.toLowerCase() != 'body') { 
			// 9 = top of doc
				if (checkn.className.match(/\bnosearchhi\b/)) { return; }
				checkn = checkn.parentNode;
			}
			if (pn.className != ASPPG_searchQuery) {
				// word has not already been highlighted!
				nv = node.nodeValue;
				ni = tempNodeVal.search(tempWordVal);
				// Create a load of replacement nodes
				before = document.createTextNode(nv.substr(0,ni));
				docWordVal = nv.substr(ni,word.length);
				after = document.createTextNode(nv.substr(ni+word.length));
				hiwordtext = document.createTextNode(docWordVal);
				hiword = document.createElement("span");
				hiword.className = ASPPG_searchQuery;
				hiword.appendChild(hiwordtext);
				pn.insertBefore(before,node);
				pn.insertBefore(hiword,node);
				pn.insertBefore(after,node);
				pn.removeChild(node);
			}
		}
	}
}

addLoadListener(
    function () {
        var qs = createRequestObject();
        var highlitewords = (qs[ASPPG_searchQuery]) ? qs[ASPPG_searchQuery].trim() : '';
        if (typeof highlitewords != 'undefined' && highlitewords != '') {
            var wordList = highlitewords.replace(/\s/gi, ',').split(',');
            var nodes = $(".msg");

            for (j = 0; j < nodes.length; j++) {
                highlightWord(nodes[j], highlitewords);

                for (i = 0; i < wordList.length; i++) {
                    highlightWord(nodes[j], wordList[i]);
                }
            }
        }
    }
);






var userLevelNameMod = "Moderator"
var userLevelNameAdmin = "Administrator"
var starPicSuffix = "star.gif"
var modStar = "forum_mod.gif"
var adminStar = "forum_admin.gif"
var strTitle = new Array()
 strTitle [1] = "30&&5New Member1"
 strTitle [2] = "90&&15Starting Member2"
 strTitle [3] = "120&&25Junior Member3"
 strTitle [4] = "180&&35Senior Member4"
 strTitle [5] = "240&&45Super Member5"





eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}(';(D($){5 q=12.1f(\'A\').q;5 u=q[\'2K\']!==11;5 M=q[\'2s\']!==11;5 k=q[\'2x\']!==11||q[\'2F\']!==11;5 1A=12.2J||0;5 2a=$.1b.1t&&(($.1b.2L<8&&!1A)||1A<8);5 1w=$.1b.1t&&(D(){5 A=12.1f(\'A\');2u{A.q.1v(\'4\',\'0+0\');A.q.2q(\'4\')}2r(e){7 25}7 1X})();D 1u(2e,p){7 P($.b(2e,p))||0};D 1d(s){5 s=P(s).2m(16);7(s.1L<2)?\'0\'+s:s};D 1J(14){2o(14){5 v=$.b(14,\'1m\');h(v&&v!=\'1F\'&&v!=\'2p(0, 0, 0, 0)\'){h(v.2H(\'Z\')>=0){5 Z=v.X(/\\d+/g);7\'#\'+1d(Z[0])+1d(Z[1])+1d(Z[2])}7 v}14=14.19;}7\'#2I\'};D 23(Y,i,4){1l(Y){a\'t\':7 9.t(4*(1-9.13(9.1x(i/4))));a\'1U\':7 9.t(4*(1+9.13(9.1x(i/4))));a\'1I\':7 9.t(4*(1-9.13(9.2w(i/4))));a\'1V\':7 9.t(4*(9.13(9.1x((4-i-1)/4))));a\'1M\':7 9.t(4*(9.2j(i,4/i)));a\'1G\':7 9.t(4*(9.2j(4,(4-i-1))));a\'1E\':7 9.t(4*(9.2n(i)));a\'1O\':7 9.t(4*(9.13(i)));a\'1W\':7 9.t(4*(9.2t(i)));a\'1Q\':7 9.t(4*(9.2v(i)));a\'21\':7 9.t(4*(9.2G((4-i-1),4)));a\'1y\':a\'1T\':7(i&1)?(i+1):4;a\'1S\':7(i&2)?(i+1):4;a\'1P\':7(i&3)?(i+1):4;a\'1Y\':7(i%2)*4;a\'1R\':7 4;a\'1k\':a\'20\':7 i+1}};$.17.K=D(1j){h(6.1L==0){h(!$.2A&&6.1D){5 s=6.1D,c=6.2C;$(D(){$(s,c).K(1j)})}7 6}7 6.2D(D(2E){5 $6=$(6);5 o=[$6.2B($.17.K.1q.1Z)||\'\',1j||\'\'].2y(\' \').2z();5 1p=/1p/.U(o);5 1c=((o.X(/1c:(#[0-22-f]+)/)||[])[1]);5 1e=((o.X(/1e:(#[0-22-f]+)/)||[])[1]);5 4=P((o.X(/(\\d+)m/)||[])[1])||10;5 1K=/t|1k|20|1R|1V|1U|1I|1M|1G|1E|1O|1Y|1W|21|1Q|1P|1S|1y|1T/;5 Y=((o.X(1K)||[\'t\'])[0]);5 2d=/1y|1k/.U(o);5 1r={T:0,B:1};5 l={J:/E|39|x/.U(o),I:/E|38|y/.U(o),G:/C|37|x/.U(o),H:/C|3a|y/.U(o)};h(!l.J&&!l.I&&!l.G&&!l.H)l={J:1,I:1,G:1,H:1};h($.17.K.1q.1H&&Y==\'t\'&&(k||u||M)&&!1c&&!1e){h(l.J)$6.b(k?\'r-E-x-k\':u?\'-u-r-k-34\':\'-M-r-E-x-k\',4+\'m\');h(l.I)$6.b(k?\'r-E-y-k\':u?\'-u-r-k-33\':\'-M-r-E-y-k\',4+\'m\');h(l.G)$6.b(k?\'r-C-x-k\':u?\'-u-r-k-36\':\'-M-r-C-x-k\',4+\'m\');h(l.H)$6.b(k?\'r-C-y-k\':u?\'-u-r-k-35\':\'-M-r-C-y-k\',4+\'m\');7}5 Q=12.1f(\'A\');$(Q).b({2c:\'24\',1o:\'15\',3d:\'15\',3e:\'15\',1m:1e||\'1F\',2l:\'1s\'});5 F={T:P($.b(6,\'3c\'))||0,R:P($.b(6,\'3b\'))||0,B:P($.b(6,\'32\'))||0,L:P($.b(6,\'2R\'))||0};h(2Q 6.q.1N!=11)6.q.1N=1;h(!1p)6.q.r=\'V\';Q.q.26=1c||1J(6.19);5 2i=$(6).2T();1z(5 j 2b 1r){5 z=1r[j];h((z&&(l.G||l.H))||(!z&&(l.J||l.I))){Q.q.2l=\'V \'+(l[j+\'R\']?\'1s\':\'V\')+\' V \'+(l[j+\'L\']?\'1s\':\'V\');5 d=12.1f(\'A\');$(d).2N(\'2k-K\');5 n=d.q;z?6.1h(d):6.2f(d,6.2g);h(z&&2i!=\'2M\'){h($.b(6,\'O\')==\'2h\')6.q.O=\'1i\';n.O=\'1C\';n.C=n.x=n.1B=n.1g=\'0\';h(1w)n.1v(\'4\',\'6.19.27\');1a n.4=\'29%\'}1a h(!z&&$.1b.1t){h($.b(6,\'O\')==\'2h\')6.q.O=\'1i\';n.O=\'1C\';n.E=n.x=n.y=n.1B=n.1g=\'0\';h(1w){5 28=1u(6,\'2P\')+1u(6,\'2O\');n.1v(\'4\',\'6.19.27 - \'+28+\'+ "m"\')}1a n.4=\'29%\'}1a{n.O=\'1i\';n.1g=!z?\'-\'+F.T+\'m -\'+F.R+\'m \'+(F.T-4)+\'m -\'+F.L+\'m\':(F.B-4)+\'m -\'+F.R+\'m -\'+F.B+\'m -\'+F.L+\'m\'}1z(5 i=0;i<4;i++){5 w=9.2Z(0,23(Y,i,4));5 e=Q.2Y(25);e.q.31=\'0 \'+(l[j+\'R\']?w:0)+\'m 0 \'+(l[j+\'L\']?w:0)+\'m\';z?d.1h(e):d.2f(e,d.2g)}h(2d&&$.30.2V){h(z&&2a)18;1z(5 c 2b l){h(!l[c])18;h(z&&(c==\'J\'||c==\'I\'))18;h(!z&&(c==\'G\'||c==\'H\'))18;5 1n={O:\'1C\',r:\'V\',1g:0,1B:0,2c:\'24\',1m:Q.q.26};5 $S=$(\'<A/>\').b(1n).b({4:4+\'m\',1o:\'15\'});1l(c){a\'J\':$S.b({C:0,x:0});N;a\'I\':$S.b({C:0,y:0});N;a\'G\':$S.b({E:0,x:0});N;a\'H\':$S.b({E:0,y:0});N}d.1h($S[0]);5 $W=$(\'<A/>\').b(1n).b({E:0,C:0,4:\'15\',1o:4+\'m\'});1l(c){a\'J\':$W.b({x:4});N;a\'I\':$W.b({y:4});N;a\'G\':$W.b({x:4});N;a\'H\':$W.b({y:4});N}d.1h($W[0])}}}}})};$.17.2U=D(){h(k||u||M)6.b(k?\'r-k\':u?\'-u-r-k\':\'-M-r-k\',0);$(\'A.2k-K\',6).2X();7 6};$.17.K.1q={1H:1X,1Z:\'2W-K\'}})(2S);',62,201,'||||width|var|this|return||Math|case|css||||||if|||radius|opts|px|ds|||style|border||round|moz|||left|right|bot|div||bottom|function|top|pad|BL|BR|TR|TL|corner||webkit|break|position|parseInt|strip||horz||test|none|vert|match|fx|rgb||undefined|document|cos|node|1px||fn|continue|parentNode|else|browser|cc|hex2|sc|createElement|margin|appendChild|relative|options|bevelfold|switch|backgroundColor|common|height|keep|defaults|edges|solid|msie|sz|setExpression|expr|asin|dogfold|for|mode|padding|absolute|selector|curl|transparent|jut|useNative|sharp|gpc|re|length|slide|zoom|tear|dog3|long|notch|dog2|dog|cool|bite|wicked|true|fray|metaAttr|bevel|sculpt|9a|getWidth|hidden|false|borderColor|offsetWidth|bw|100|noBottomFold|in|overflow|fold|el|insertBefore|firstChild|static|cssHeight|atan2|jquery|borderStyle|toString|atan|while|rgba|removeExpression|catch|WebkitBorderRadius|tan|try|sqrt|acos|borderRadius|join|toLowerCase|isReady|attr|context|each|index|BorderRadius|log|indexOf|ffffff|documentMode|MozBorderRadius|version|auto|addClass|borderRightWidth|borderLeftWidth|typeof|paddingLeft|jQuery|outerHeight|uncorner|boxModel|data|remove|cloneNode|max|support|borderWidth|paddingBottom|topright|topleft|bottomright|bottomleft|bl|tr|tl|br|paddingRight|paddingTop|minHeight|fontSize'.split('|'),0,{}))






    var tmSelectString;
    //var selectedFromMsg = false;
    
    function tmSelect(){
        
        //selectedFromMsg = true;
        
        if (window.getSelection)
        {
            tmSelectString = window.getSelection().toString();
        }   
        else if (window.document.selection)
        {
            var rng = window.document.selection.createRange();
            tmSelectString = rng.text;
        }
        else {
            tmSelectString = "";
        }
    }

    function attachSelectionToMsg() {
        $("body").bind("mouseup", tmSelect);
    }

   
    function changeTmSort(value){
        if (isNaN(value)) return;        
        createCookie(dbName + "tmRemember", value);
        self.location.replace(clientScriptPathInfo.RawUrl);
    }
    
    var cannotShowTip = false;
    
	function toolTipWin(url){
	    if(cannotShowTip) return;
	    cannotShowTip = true;
	    var tipwin = popRadWin('showpic.aspx?img=' + url, 300, 300);
	    tipwin.set_behaviors(Telerik.Web.UI.WindowBehaviors.Move + Telerik.Web.UI.WindowBehaviors.Close);
	    setTimeout("cannotShowTip = false;",1000);
	}

    function reloadParent(radWindow){
        //console.log("reloadParent");
        
        var arg = radWindow.argument;
        
        //console.log(arg);
        
        if(typeof(arg) == 'string'){
            if (arg == '') {
                return;
            }
            else if (arg == 'true') {
                refreshButton.click();
            }
            else if (arg == 'del') {
                $get(msgLastMessageForPostHiddenField).value = '0'; // to force rebinding of the posting interface;
                if (!inTreeMode) {
                    refreshButton.click();
                } else {
                    treeProcessAfterDelete();
                }
            }
            else if (arg == 'reload') {
                self.location.replace(clientScriptPathInfo.RawUrl);
            }
            else if (!isNaN(arg)) {
                self.location.replace(clientScriptPathInfo.ApplicationPath + "/tt.aspx?forumID=" + arg);
            }
            
        }
        
    }

    function switchMsgDivOnOff(msgID){
        $('#msg' + msgID).slideToggle('normal');
    }

	function SetMessageID(id){
	    currSelectedMsgID = id;
	}

	var multiQuoteIDs = [];
	
	function AddMultiQuote(msgID){
	    if (isNaN(msgID)) return;
	    
	    for (var i =0; i<multiQuoteIDs.length; i++){
	        if(multiQuoteIDs[i] == msgID) {return;}
        }	
	
	    if (multiQuoteIDs.length<3) {
	        multiQuoteIDs[multiQuoteIDs.length] = msgID;
	        $(".multiquoteImg" + msgID).hide().attr('src', pageThemeImageURL + 'menuUnMultiQuote.gif').show();
        } else {
            alert(tooManyQuotes);
        }
        
        
	}
	
	function RemoveMultiQuote(msgID){
	    if (isNaN(msgID)) return;
	    
	    var indexToDelete = -1;
	    
	    for (var i =0; i<multiQuoteIDs.length; i++){
	        if(multiQuoteIDs[i] == msgID) {indexToDelete = i; break;}
        }
        
        if (indexToDelete!=-1) multiQuoteIDs.splice(indexToDelete,1);
        $(".multiquoteImg" + msgID).fadeOut('slow');        
	}

	function openPreview() {

	    var rwd = popRadWin('preview.aspx');

	    if (typeof tinyMCE != 'undefined') { //WYSIWYG
	        rwd.argument = tinyMCE.activeEditor.getContent();
	    } else { // textbox
	        rwd.argument = $(wysiwygAsTextarea.TextareaSelector).val().replace(/\&/g, '&amp;').replace(/\</g, '&lt;').replace(/\>/g, '&gt;').replace(/\n/g, '<br>');
	    }
        
        return false; 
    }
    
    function replySimulatedClick(msgID, canReply){

        if (!canReply) {
            currentMemberInfo.popupPosting = false;
        }

        var gotoURL = String.format('post.aspx?mq={0}&messageID={1}', multiQuoteIDs.join(), msgID);
        executePostReplyEditLink(gotoURL);

        return false;
    }

    function editSimulatedClick(msgID) {

        var gotoURL = String.format('post.aspx?edit=true&messageID={0}', msgID);
        executePostReplyEditLink(gotoURL);
        return false;
    }

    function executePostReplyEditLink(gotoURL) {

        gotoURL = clientScriptPathInfo.ApplicationPath + '/' + gotoURL;

        if (currentMemberInfo.popupPosting) {
            popRadWin(gotoURL + '&pop=true');
        } else {
            self.location.href = gotoURL;
        }

        return false;
    }

    function showMsgNum(msgID) {
        popTip("<div style='margin:20px 10px;'>URL: <br /><input type='text' onfocus='this.select()' size='45' value='" +
	                 clientScriptPathInfo.ForumDir + "fb.ashx?m=" + msgID + "' /></div>", 
	                 450, 250, false, true, 5000, true, messageIDToolTipClientID);
    }

    function showIP(ip) {
        popTip("<div style='margin:20px 10px;'>IP: <br /><input type='text' onfocus='this.select()' size='45' value='" +
	                 ip + "' /></div>", 450, 250, false, true, 5000, true, messageIDToolTipClientID);

    }

    function setNextPrevLinkInHeader() {
        var html = String.format('<a href="fb.ashx?go=prev&m={0}"><< {1}</a> | <a href="fb.ashx?go=next&m={0}">{2} >></a>', currentThreadID, tmPrevThread, tmNextThread);
        $("div.nxtprv").html(html);
    }

    function correctCSS() { 
        if ($.browser.msie && parseInt($.browser.version) < 8) $('ul.subMsgButtonList > li').css('display', 'inline');
    }

    $(document).ready(
        function () {
            attachSelectionToMsg();
            setNextPrevLinkInHeader();
            correctCSS();
            if (typeof wysiwygAsTextarea != 'undefined') wysiwygAsTextarea.TextareaSelector = 'div#postdiv textarea:first';
            if (currentMemberInfo.usingMobileTheme) $('div#postdiv').css({'width' : '95%', 'margin' : '15px auto'}).find('textarea').css('width', '100%');
        }
    );

    Sys.Application.add_load(function() {
        setRewardAnswerCorner();
    });


    function setRewardAnswerCorner() {
        if (!$.browser.msie) $('.helpful, .reward', 'td.msgside').corner();
        $('.msgARMark, .msgStatus', 'td.msgside').corner('left');
    }

    function showmsgoptionswhenhover() {
        var selecterspecs = 'div.topmsgoptions';

        $('td.msgside')
        .mouseenter(function() {
            $(this).find(selecterspecs).css('visibility', 'visible');
        })
        .mouseleave(function() {
            $(this).find(selecterspecs).css('visibility', 'hidden');
        })
        .find(selecterspecs).css('visibility', 'hidden');
    }
    
    function showSubOptionsWhenHover() {
        var selecterSpecs = 'tr:eq(1) td:eq(1) div:eq(1)';

        $('table.msgtable')
            .mouseenter(function() {
                $(this).find(selecterSpecs).css('visibility', 'visible');
            })
            .mouseleave(function() {
                $(this).find(selecterSpecs).css('visibility', 'hidden');
            })
            .find(selecterSpecs).css('visibility', 'hidden');
    }




var JQMenuLink;

function SetThreadRead(self, lastVisit) {

    JQMenuLink = self;

    $(self).css('cursor', 'wait');
    setTimeout("hideOptionalMenu('markread')", 200);

    JQCallWebService("tm.aspx/ReadTrackThread", createJsonRqForNET({ 'ThreadID': currentThreadID, 'lastVisit': lastVisit }),
	        function() {
	            setTimeout("$(JQMenuLink).css('cursor', 'default'); $(OptionalMenu.get_childListElement()).show()", 400);
	        }
	    );

}

function SetThreadSubscription(self, action) {

    JQMenuLink = self;

    $(self).css('cursor', 'wait');
    setTimeout("hideOptionalMenu('subscription')", 200);

    JQCallWebService("tm.aspx/SubscribeToThread", createJsonRqForNET({ 'threadID': currentThreadID, 'action': action }),
            function(rtn) {
                setTimeout(String.format("updateSubscriptionMenuItem({0});", action), 400);
            }

        );
}

function hideOptionalMenu(itemToHide) {

    OptionalMenu.close();

    $(OptionalMenu.get_childListElement()).hide();

    OptionalMenu.findItemByValue(itemToHide).blur();
}


function updateSubscriptionMenuItem(action) {

    $(JQMenuLink).css('cursor', 'default');

    $(OptionalMenu.get_childListElement()).show();

    var imgBaseLocation = clientScriptPathInfo.ApplicationPath + '/' + pageThemeImageURL;

    var subscriptionItem = OptionalMenu.findItemByValue('subscription');

    subscriptionItem.set_text((action == -1) ? SubscribeMenuText : UnSubscribeMenuText);

    subscriptionItem.set_imageUrl(imgBaseLocation +
            ((action == -1) ? 'menuSubscribe.gif' : 'menuUnSubscribe.gif'));

    if (action > -2 && action < 4) {
        //alert(action);
        for (var i = 0; i < 4; i++) {
            var subItem = OptionalMenu.findItemByValue('Sub' + i.toString());

            if (action == i) {
                subItem.set_imageUrl(imgBaseLocation + 'menuSubscription.gif');
            } else {
                subItem.set_imageUrl(imgBaseLocation + 'blank.gif');
            }

        }

    }

    $(subscriptionItem.get_linkElement()).unbind('click').attr('onclick', '')
            .click(function() {
                if (action == -1) return false; SetThreadSubscription(this, -1);

            });

        }

function markApproval(msg, self) {

    $(self).css('cursor', 'wait');

    JQCallWebService("tm.aspx/MarkApproval", createJsonRqForNET({ 'msgID': msg }),
    function(rtn) {
        var returnedResult = rtn.d;
        if (returnedResult == 'success') {
            refreshButton.click();
        }
    });

}

function markHelpful(msg, self) {
    $(self).css('cursor', 'wait');
    ajaxMarkHelpfulRewardRequest(msg, false);
}

function markReward(msg, self) {
    $(self).css('cursor', 'wait');
    ajaxMarkHelpfulRewardRequest(msg, true);
}

function ajaxMarkHelpfulRewardRequest(msg, isReward) {
    JQCallWebService("tm.aspx/MarkMessageHelpful", createJsonRqForNET({ 'msgID': msg, 'isReward': isReward }),
        function(rtn) {
            var returnedResult = rtn.d;
            if (returnedResult == 'success') refreshButton.click();
        });    
}



var rewardMsgID;

function findRewardMsg(msg) {

    if (typeof rewardMsgID != 'undefined') {

        var elePosition = $($get(rewardMsgID)).offset();
        scrollTo(0, elePosition.top);

        return;

    }

    JQCallWebService("tm.aspx/FindRewardMsg", createJsonRqForNET({ 'msgID': msg }),
            function(rtn) {
                var returnedMsgID = rtn.d;

                if (returnedMsgID == 0) return;

                if ($get(returnedMsgID)) {

                    var elePosition = $($get(returnedMsgID)).offset();
                    scrollTo(0, elePosition.top);

                    rewardMsgID = returnedMsgID;

                } else {
                    self.location.href = 'fb.ashx?m=' + returnedMsgID;
                }
            },
            JQOnCallError
     );

}

function listSolution(msgID, bool, self) {

    $(self).css('cursor', 'wait');

    var cookieName = dbName + 'tmSolution';

    if (bool) {
        var cookieStr = String.format("only=true&msgID={0}", msgID);
        createCookie(cookieName, cookieStr);
        
        /* scroll to the first table sibling */
        if (!inTreeMode) Sys.Application.add_load(moveToFirstMsg);
        
    } else {
        eraseCookie(cookieName);

    }

    if (!inTreeMode) refreshButton.click(); else window.location.replace($('link[rel=canonical]').attr('href'));

    return false;
    // maybe a scroll to first solution after postback is complete?
}

function moveToFirstMsg() {
    Sys.Application.remove_load(moveToFirstMsg);
    scrollTo(0, $('table.msgtable').eq(1).offset().top);
    //alert('listSolution true');
}

Sys.Application.add_load(function() {
    /*
    blank out rewardMsgID to prevent error when
    1) reward message is not on the first page
    2) list solution link is clicked and then
    3) list all message link is clicked
    */
    rewardMsgID = undefined;
});

function HandlerRatingBegin() {
    //alert($(this).val() + $(this).attr('id'));
    var msgID = parseInt($(this).attr('id').replace(/[^\d]/gi, ''));
    var rating;

    if (this.tagName.toLowerCase() == 'select') {
        rating = parseInt($(this).val());
    }
    else {
        rating = ($(this).hasClass('up')) ? 1 : -1;
//        alert(msgID.toString() + rating.toString());
//        return;
        
    }

    JQCallWebService("tm.aspx/RateMessage", createJsonRqForNET({ 'msgID': msgID, 'rating': rating }),
            function(rtn) {
                var returnedVal = rtn.d;
                var successFailureFlag = returnedVal[0];

                if (successFailureFlag == 'fail') {

                    popTip(ratingFailureMsg, 350, 150, false, false, 6000);

                    if (this.tagName.toLowerCase() == 'select') {

                        // get a jq object for the stars
                        var $_stars = $(this);

                        // unbind handler
                        $_stars.unbind('change.ajaxhandle');

                        // remove current
                        $_stars.next().remove();

                        // disable the select
                        
                        if (!$_stars.attr('disabled')) $_stars.attr('disabled', 'disabled');
                        
                        // retrieve original value

                        var originalSelectValue;
                        var ResultSpan = $('#ratingResult' + msgID);

                        if (ResultSpan.children('a').size() == 0) { // not admin or mod so no link
                            originalSelectValue = ResultSpan.text();
                        } else {
                            originalSelectValue = ResultSpan.children('a').text();
                        }

                        // restart rating
                        $_stars.rating({ showCancel: false });

                        //return to original value
                        $_stars.val((Math.round(originalSelectValue) - 3)).change();

                        $_stars.next().fadeTo(300, 0.25);

                    } else {

                        // disable onclick handler
                        var $_thumbs = $('a#thumbRating' + msgID, 'div.msg');

                        $_thumbs.unbind('click.ajaxhandle');
                        $_thumbs.fadeTo(300, 0.25);

                    }

                    return;
                }

                // end of failed attempts


                var totalRating = parseInt(returnedVal[1]);
                var totalRateCount = parseInt(returnedVal[2]);
                var avgRating;

                if (totalRateCount == 0) totalRateCount = 1;

                if (this.tagName.toLowerCase() == 'select') {

                    // calculate the avgValue for star
                    avgRating = (totalRating / totalRateCount).toFixed(2);
                    var selectValueToSet = Math.round(avgRating) - 3;

                    // get a jq object for the stars
                    var $_stars = $(this);

                    // prevent repeating the ajax action
                    $_stars.unbind('change.ajaxhandle');

                    // set select to disabled
                    if (!$_stars.attr('disabled')) $_stars.attr('disabled', 'disabled');

                    // remove current stars
                    $_stars.next().fadeOut('slow', function() {

                        $(this).remove();

                        // rebuild the star; set select to avgRating;
                        $_stars.rating({ showCancel: false });
                        $_stars.val(selectValueToSet).change();

                        //$_stars.next().fadeTo(300, 0.25);
                    });

                }
                else {

                    // prevent repeating the ajax action
                    var $_thumbs = $('a#thumbRating' + msgID, 'div.msg');

                    $_thumbs.unbind('click.ajaxhandle');
                    $_thumbs.fadeTo(300, 0.25);

                    // set avgRating
                    avgRating = ((totalRating > 0) ? '+' : '') + totalRating.toString();

                }

                // set text
                var ResultSpan = $('#ratingResult' + msgID);

                if (ResultSpan.children('a').size() == 0) { // not admin or mod so no link
                    ResultSpan.text(avgRating);
                } else {
                    ResultSpan.children('a').text(avgRating);
                }

                //setting rate count to the div
                $('#ratingDiv' + msgID).attr('title', String.format(((totalRateCount > 1) ? ratingCount_pl : ratingCount_sing), totalRateCount));

                //pop success msg
                popTip(ratingSuccessMsg, 350, 150, false, false, 2000);

            },
            JQOnCallError, this // this refers to the event target passed to as context of the Ajax framework
        );
}







// Tree loading

var treeDivASelector = 'div#treeIframeDiv a.msg';
var treeDivSelector = 'div#treeIframeDiv';
var currentRequestTreeMsgID = 0;

$(document).ready(function() {
    if (inTreeMode) {
        setTreeDivResizable();
        setPrevNextLinkHandler();
        $('#' + msgTreeHiddenField).val(currentThreadID); // this is required otherwise on initial load the hidden field is empty
    }
});

Sys.Application.add_load(function() {

    var prm = Sys.WebForms.PageRequestManager.getInstance();

    if (inTreeMode && !prm.get_isInAsyncPostBack()) {

        if (currentRequestTreeMsgID == 0) loadTree(currentThreadID, currentThreadID); // load tree regular mode

        if (currentRequestTreeMsgID != 0) performFindMsg(currentRequestTreeMsgID, false); //find msg mode

        setTimeout(function() { // need delaying, as append is kind of slow in loadTree

            var $theFirstLink = $(treeDivASelector + ':first');
            var $theTreeDiv = $(treeDivSelector);

            $theFirstLink.addClass('bold');
            $theTreeDiv.click(treeMsgClick);
            readyToPerformScroll = true;
            
        }, 1000);

        setScrollHandler();
    }
})

function performFindMsg(msgID, rebindScrollHandler) {

    loadTree(msgID, currentThreadID, null, true);
    //console.log('loadTree');
    
    //click to load the first msg
    setTimeout(function() { $(treeDivSelector + ' a#treelink' + msgID.toString()).click(); }, 1500);
    //console.log('first setTimeout');
    
    //load the tree above the clicked msg
    setTimeout(function() { loadTree(msgID, currentThreadID, null, false, true); }, 1800);
    //console.log('second setTimeout');
    
    if (rebindScrollHandler === true) { // this is when we find msg after delete
        //console.log('rebindScrollHandler === true');
        dontCheckScrollDown = false;
        dontCheckScrollUp = false;
        setScrollHandler();
    }
}

function setTreeDivResizable() {
    var $treeContainer, currentHeight, currentWidth;
    $treeContainer = $('#' + treeIframeContainment);

    if ($treeContainer.size() == 0) return;

    currentHeight = $treeContainer.height();
    currentWidth = $treeContainer.width();

    $treeContainer.resizable(
        {
            alsoResize: treeDivSelector,
            distance: 10,
            delay: 20,
            containment: 'div#main',
            minHeight: currentHeight,
            maxHeight: $(window).height() / 2,
            maxWidth: currentWidth, minWidth: currentWidth,
            start: function(e, ui) {
                readyToPerformScroll = false;
            },
            stop: function(e, ui) {
                setTimeout(function() {
                    readyToPerformScroll = true;
                }, 2000);
            }
        }
     );

    setDivResizingBehavior();
        
}

function setDivResizingBehavior() {
    var tempCounter = 0;
    var windowResizeTimeout;

    window.onresize = function() {
        window.clearTimeout(windowResizeTimeout);
        windowResizeTimeout = window.setTimeout(DelayedResize, 100);
    };

    /*
    elaborated windows Resize test to enure consistent cross browser behavior
    */
    var sizeBeforeResize = 0;
    var iframeSizeDiff = $('#' + treeIframeContainment).width() - $(treeDivSelector).width();

    function DelayedResize() {
        window.status = ++tempCounter;
        // Add your original window.onresize implementation here

        var mainWidth = $('div#main').children('div:first').width();

        if (mainWidth != sizeBeforeResize) { // size is changed on the resize event

            setTimeout(function() {
                // set new minwidth and maxwidth for the resizable element due to change in window size
                $('#' + treeIframeContainment).resizable("option", "minWidth", mainWidth)
                            .resizable("option", "maxWidth", mainWidth);
            }, 100);

            setTimeout(function() {
                // resize the resizable element
                $('#' + treeIframeContainment).animate({ width: mainWidth.toString() + 'px' }, 200);
            }, 400);

            setTimeout(function() {
                //resize the div and the iframe
                $(treeDivSelector).animate(
                            { width: ($('#' + treeIframeContainment).width() - iframeSizeDiff).toString() + 'px' }, 200);
            }, 700);

            sizeBeforeResize = mainWidth;
        }

    }
}

function setPrevNextLinkHandler() {
    $('a#treePrevLink').click(function(e) { treeNavigateTo('prev'); e.preventDefault(); });
    $('a#treeNextLink').click(function(e) { treeNavigateTo('next'); e.preventDefault(); });
    $('a#treeReloadLink').click(function(e) { treeReload(); e.preventDefault(); });
}

var readyToPerformScroll = false;

var newScrollTimeout;

function setScrollHandler() {
    $(treeDivSelector).unbind('scroll').scroll(function() {
        var _self = this;
        window.clearTimeout(newScrollTimeout);
        newScrollTimeout = setTimeout(function() { checkScroll($(_self)); }, 400);
    });
}

var dontCheckScrollDown = false;
var dontCheckScrollUp = false;

function checkScroll($treeDiv) {
    // this function performs 2 checks
    // 1) when scrolled to bottom, check if 'last' is present and if so, auto fetch
    // 2) when scrolled to top, check if 'first' is present and if NOT, auto fetch
    // if while fetching, we do nothing

    //console.log('checkScroll');
    
    if (!readyToPerformScroll || stillInAjaxProgress) return false;

    if (!dontCheckScrollDown && $treeDiv[0].scrollHeight - $treeDiv.height() - $treeDiv.scrollTop() <= 14) {
        
        var $lastLink = $treeDiv.find('a.last');

        if ($lastLink.size() != 0) {
            fetchNextTreePage(parseInt($lastLink.attr('id').replace('treelink', '')), $lastLink); // supply jqTarget to rid of the last on existing link, simulating click
        } else {
            dontCheckScrollDown = true;
        }
    }

    else if (!dontCheckScrollUp && $treeDiv.scrollTop() <= 14) {

        var $firstLink = $treeDiv.find('a.msg:first');

        if (!$firstLink.hasClass('first')) {
            signalTreeState('loading');
            $treeDiv.css({'overflow':'hidden', 'visibility' : 'hidden'});
            loadTree(parseInt($firstLink.attr('id').replace('treelink', '')), currentThreadID, null, false, true);
            
        } else {
            dontCheckScrollUp = true;
        }
    }

    if (dontCheckScrollUp && dontCheckScrollDown) {
        $(treeDivSelector).unbind('scroll');
    }
    
}

var stillInAjaxProgress = false;

function loadTree(msgID, threadID, jqTarget, findmsg, prepend) {
    /*
    We are treating the last and first designation differently. when there is a class='last' link, 
    it means we can still try to find if there is more links in the thread. If there is no class='last', then we reached the end.
    
    the 'first' designation is only given to the first post. when there is no first in the entire link list, then we can go look for
    "previous page" in the tree.
    
    jqTarget is only used when fetching next page.
    */
    
    stillInAjaxProgress = true;

    JQCallWebService("tm.aspx/GetTree", createJsonRqForNET({ 'msgID': msgID, 'threadID': threadID,
        'findmsg': (findmsg ? findmsg : false), 'direction': (prepend === true ? 1 : 0)
    }),

    function(rtn) {
        var returnedVal = rtn.d;

        var finalLinksHTML = buildTreeHTML(returnedVal);

        if (jqTarget && prepend !== true) jqTarget.removeClass('last'); // there can be more so the 'last' designation is gonna change

        if (finalLinksHTML != '') {
            var $treeDiv = $(treeDivSelector);

            if (prepend === true) $treeDiv.prepend(finalLinksHTML); else $treeDiv.append(finalLinksHTML);
            if (prepend !== true && returnedVal.length == tpg) $(treeDivASelector + ':last').addClass('last'); //there is still possibility to have more pages

            if (prepend === true) {
                // scroll the found msg into view
                setTimeout(function() {
                    var $theFirstLinkBeforeFetch = $(treeDivSelector + ' a#treelink' + msgID.toString());
                    $treeDiv.animate({ scrollTop: $theFirstLinkBeforeFetch.position().top - $theFirstLinkBeforeFetch.height() }, 'slow');
                    $theFirstLinkBeforeFetch.focus();
                }, 1000);
            }

            setTimeout(function() {
                $treeDiv.css({ 'overflow': 'auto', 'visibility': 'visible' });
            }, 1100);
        }

        setTimeout(function() { stillInAjaxProgress = false; }, 2000);

    }, JQOnCallError);
}

function buildTreeHTML(listdata) {
    var linkTemplate = "<div style='margin:5px auto 5px {1}px;'> <img src='{2}' /> <a href='#' id='treelink{0}' class='msg {12}' style='{10}'>" +
        "{3}</a> {9} {11} {13} <span style='margin-left:5px;' class='small'>{8} <a href='shoprofile.aspx?memid={4}' target='_blank' {7}>{5}</a> - {6}</span></div>";

    var totalLinks = [];

    for (var i = 0; i < listdata.length; i++) {
    
        var currentMsg = listdata[i];
        //	messageID	llevel	subject msgIcons	dateCreated	login	mem	Ignored isAnswer isRewarded moderated Deleted
        
        totalLinks[totalLinks.length] = String.format(linkTemplate,
            currentMsg.messageID, 15 + 20 * parseInt(currentMsg.llevel), pageThemeImageURL + 'mIcons/m' + currentMsg.msgIcons + '.gif',
            currentMsg.subject, currentMsg.mem, currentMsg.login, currentMsg.dateCreated,
            ((currentMsg.Ignored == '1') ? 'class="ignored" title="' + ignoredDesc + '"' : ''), byDesc,
            ((currentMsg.isRewarded == 1) ? '<img src="' + pageThemeImageURL + 'rewardedQ.gif" />' : ((currentMsg.isAnswer == 1) ? '<img src="' + pageThemeImageURL + 'helpfulA.gif" />' : '')),
            ((currentMsg.Deleted == 1) ? 'text-decoration: line-through;' : ''),
            ((currentMsg.Moderated == 1) ? '<img src="' + pageThemeImageURL + 'GreenFlag.gif" />' : ''),
            ((currentMsg.llevel == 0) ? 'first' : ''),
            ((currentMsg.HasAttachment == 1) ? '<img src="' + pageThemeImageURL + 'attachment.gif" />' : '')
            );
    }

    return totalLinks.join('');
}

function treeMsgClick(e) {
    
    //console.log('treeMsgClick');
    
    var $target = $(e.target);

    if ($target.hasClass('msg')) {

        $(treeDivASelector).filter(function() { return $(this).hasClass('bold'); }).removeClass('bold');

        $target.addClass('bold');

        var currMsgID = parseInt($target.attr('id').replace('treelink', ''));

        $('#' + msgTreeHiddenField).val(currMsgID);

        //console.log(currMsgID);

        $target.focus();
        
        refreshButton.click();

        if ($target.hasClass('last')) fetchNextTreePage(currMsgID, $target);

    }

    return false;
}

function treeNavigateTo(dir) { // handler for the previous / next link on tm.aspx

    var $allMsgLinks = $(treeDivASelector);
    var currentIndex;

    $allMsgLinks.each(function(i, val) {
        if ($(this).hasClass('bold')) {
            currentIndex = i;
            return false;
        }

    });

    if (dir == 'next') {

        if (currentIndex == $allMsgLinks.size() - 1) { // last link on page
            if (!$allMsgLinks.eq(currentIndex).hasClass('last')) signalTreeState('last');   // we are not fetching page here as we should have fetched when the previous link is clicked;
        } else {
            $allMsgLinks.eq(currentIndex + 1).click();
        }

    } else {

        if (currentIndex == 0) {
            signalTreeState('first');
        } else {
            $allMsgLinks.eq(currentIndex - 1).click();
        }
    }

}

function treeReload(msgID) {

    if (isNaN(msgID)) {
        msgID = parseInt($(treeDivASelector).filter(function() { return $(this).hasClass('bold'); }).eq(0).attr('id').replace('treelink', ''));
    }

    //console.log($(treeDivSelector).find('a.msg:last').height());
    signalTreeState('loading');
    $(treeDivSelector).html('').css({'visibility' : 'visible' });
    performFindMsg(msgID, true);
    //console.log('in treeReload');
}

function fetchNextTreePage(currentMsgID, jqTarget) {
    loadTree(currentMsgID, currentThreadID, jqTarget);
}

function signalTreeState(state) {

    var signal = '<div class="endOfTreeNotice"></div>'
    var finalStringSelector = 'div#treePrevNextLinks div.endOfTreeNotice';
    var treePrevNextLinkSelector = 'div#treePrevNextLinks';

    if ($(finalStringSelector).size() == 0) {
        $(signal).prependTo(treePrevNextLinkSelector);
    }

    var $finalString = $(finalStringSelector);

    $finalString.text(function() {
    return ((state == 'first') ? reachedFirstInTree : ((state == 'last') ? reachedLastInTree : treeInLoadingState));
    })
    .css({
        'top': function() {
            var $treeDiv = $(treeDivSelector);
            var finalTop = '-' + ($(treePrevNextLinkSelector).offset().top - ($treeDiv.offset().top + $treeDiv.height()) + ($treeDiv.height() / 2)).toString() + 'px';
            return finalTop;
        }
    ,
        'left': function() {
            var finalLeft = ($(treeDivSelector).width() - $finalString.width()) / 2;
            return finalLeft.toString() + 'px';
        }
    })
    .fadeIn('normal', function() { setTimeout(function() { $finalString.fadeOut(); }, ((state == 'loading') ? 750 : 1500)); });
}

function treeProcessAfterDelete() {

    var $firstLinkInTree = $(treeDivASelector).eq(0);
    
    if ($firstLinkInTree.hasClass('bold') && $firstLinkInTree.hasClass('first')) { // topic message deleted
    
        self.location.replace(clientScriptPathInfo.ApplicationPath + "/tt.aspx?forumID=" + currentForumID.toString());
        //console.log('self.location.replace');
    } else {

        var $prevLink = $(treeDivASelector).filter('.bold').parent().prev().children('a.msg');
        var msgID = parseInt($prevLink.attr('id').replace('treelink', ''));
        //console.log('deleted msgID = ' + msgID.toString());
        treeReload(msgID);
    }
    
}




/**
* hoverIntent r5 // 2007.03.27 // jQuery 1.1.2+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne <brian@cherne.net>
*/
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY;};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev]);}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev]);};var handleHover=function(e){var p=(e.type=="mouseover"?e.fromElement:e.toElement)||e.relatedTarget;while(p&&p!=this){try{p=p.parentNode;}catch(e){p=this;}}if(p==this){return false;}var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);}if(e.type=="mouseover"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob);},cfg.timeout);}}};return this.mouseover(handleHover).mouseout(handleHover);};})(jQuery);




    var menuFired = false;

	function OnMenuItemClick(s, e){
	    
	    menuFired = true;
	    
	    setTimeout("menuFired = false;",1000);
	    
	    var item = e.get_item();
	    var baseURL = clientScriptPathInfo.ApplicationPath + '/';
	    var attributes = item.get_attributes();
        var itemArg = attributes.getAttribute('arg');
	    
	    switch (attributes.getAttribute('command')){
    
	        case 'friend':
	            return true;
	            break;	        
	        case 'ignore':
	            if (confirm(blockMemberWarn)) { return true; }
	            break;
	        case 'unignore':
                return true;
	            break;
       	            
	        case 'pm':
	            var gotoURL = baseURL + 'pmsend.aspx?toMemId=' + itemArg ;
	            if (currentMemberInfo.popupPosting) {
	                popRadWin(gotoURL + '&pop=true');
	            } else {
	                self.location.href = gotoURL;
	            }
	            
	            break;	 
	        case 'reply':
	            var gotoURL = baseURL + String.format('post.aspx?mq={0}&messageID=', multiQuoteIDs.join()) + itemArg ;
	            if (currentMemberInfo.popupPosting) {
	                popRadWin(gotoURL + '&pop=true');
	            } else {
	                self.location.href = gotoURL;
	            }
	            
	            break;	
	        case 'quote':
	            var gotoURL = baseURL + String.format('post.aspx?quote=true&mq={0}&messageID=', multiQuoteIDs.join()) + itemArg ;
	            if (currentMemberInfo.popupPosting) {
	                popRadWin(gotoURL + '&pop=true');
	            } else {
	                self.location.href = gotoURL;
	            }
	            
	            break;	
	        case 'edit':
	            var gotoURL = baseURL + 'post.aspx?edit=true&messageID=' + itemArg ;
	            if (currentMemberInfo.popupPosting) {
	                popRadWin(gotoURL + '&pop=true');
	            } else {
	                self.location.href = gotoURL;
	            }
	            
	            break;		            

	        case 'ban':
	            var gotoURL = baseURL + 'tempban.aspx?messageID=' + itemArg;
	            popRadWin(gotoURL, 600, 450);

	            break;	            
	            
	        case 'multiquote':
	            AddMultiQuote(itemArg);
	            break;

	        case 'search':
	            self.location.href = item.get_navigateUrl();
	            break;

	    }

	    e.set_cancel(true);
	    hideAllMenus();
	    return false;
	}


	function ShowMenu(e, id, isSelf, login, isFriend, isIgnored, viewerIsGuest, memberPMable, isBanAllowed, isDeleted, msgID, theTarget) {
	    
	    if (menuFired || typeof menu == 'undefined' || !menu) return;

	    menuShowTimeout = setTimeout(function () {

	        hideAllMenus(190);

	        with (menu) {
	            var frienditem = findItemByValue("friend");
	            var pmitem = findItemByValue("pm");
	            var blockitem = findItemByValue("block");
	            var banitem = findItemByValue("ban");
	            var searchpostitem = findItemByValue("searchposts");
	        }

	        var menuImgURL = clientScriptPathInfo.ApplicationPath + '/' + pageThemeImageURL;

	        var oneItemVisible = false;

	        with (frienditem) {
	            set_imageUrl(menuImgURL + 'menuAdd.gif');
	            set_text(String.format(FriendMemText, ''));

	            menu.trackChanges();
	            get_attributes().setAttribute('command', 'friend'); get_attributes().setAttribute('arg', id);
	            if (isFriend || isIgnored || isSelf || viewerIsGuest) hide(); else { show(); oneItemVisible = true; }
	            menu.commitChanges();
	        }

	        with (blockitem) {
	            var blockItemText = isIgnored ? UnBlockMemText : BlockMemText;
	            var blockItemCommand = isIgnored ? 'unignore' : 'ignore';
	            set_imageUrl(menuImgURL + (isIgnored ? 'menuUnblock.gif' : 'menuBlock.gif'));
	            set_text(String.format(blockItemText, ''));

	            menu.trackChanges();
	            get_attributes().setAttribute('command', blockItemCommand); get_attributes().setAttribute('arg', id);
	            if (isSelf || viewerIsGuest) hide(); else { show(); oneItemVisible = true; }
	            menu.commitChanges();
	        }

	        with (pmitem) {
	            set_imageUrl(menuImgURL + 'menuPM.gif');

	            set_text(String.format(PmMemText, login));
	            set_text(String.format(PmMemText, ''));
	            get_attributes().setAttribute('command', 'pm'); get_attributes().setAttribute('arg', id);

	            if (isSelf || viewerIsGuest || !memberPMable) hide(); else { show(); oneItemVisible = true; }

	        }

	        with (searchpostitem) {
	            set_imageUrl(menuImgURL + 'menuSearch.gif');

	            set_text(RecentPostText);

	            set_navigateUrl(clientScriptPathInfo.ApplicationPath + '/search.aspx?author=' + escape(login));
	            get_attributes().setAttribute('command', 'search');

	            if (isIgnored || viewerIsGuest || isDeleted) hide(); else { show(); oneItemVisible = true; }

	        }

	        if (typeof isBanAllowed != "undefined") {

	            with (banitem) {
	                set_text(TempBanText); get_attributes().setAttribute('command', 'ban'); get_attributes().setAttribute('arg', msgID);
	                set_imageUrl(menuImgURL + 'menuBan.gif');
	                if (isBanAllowed && !isDeleted && !isSelf) { show(); oneItemVisible = true; } else { hide(); }
	            }

	        }

	        if (oneItemVisible) menuShow(e, menu, theTarget);

	    }, 200);
    }

    function showOptionMenu(e, id, showReply, showMultiQuote, showEdit, isSelfPost, hasReplyPermission, theTarget) {

        if (menuFired || typeof menu == 'undefined' || !menu) return;

        menuShowTimeout = setTimeout(function () {

            hideAllMenus(110);
            SetMessageID(id);

            var oneItemVisible = false;

            with (menu) {
                var edititem = findItemByValue("edit");
                var quoteitem = findItemByValue("quote");
                var multiquoteitem = findItemByValue("multiquote");
            }

            var menuImgURL = clientScriptPathInfo.ApplicationPath + '/' + pageThemeImageURL;

            if (showReply && !isSelfPost) {
                // this is the click handler for the first menu item "Reply To Message"
                $(theTarget).unbind('click').bind('click.replyclick', function () { replySimulatedClick(id, hasReplyPermission); hideAllMenus(); return false; });
            }
            else if (showEdit && isSelfPost) {
                // this is the click handler for the first menu item "Edit Message"
                $(theTarget).unbind('click').bind('click.editclick', function () { editSimulatedClick(id); hideAllMenus(); return false; });
            }

            with (quoteitem) {
                set_text(QuoteMessageText); get_attributes().setAttribute('command', 'quote'); get_attributes().setAttribute('arg', id);
                set_imageUrl(menuImgURL + 'menuQuote.gif');
                if (showReply && !isSelfPost) { show(); oneItemVisible = true; } else { hide(); }
            }

            with (multiquoteitem) {
                set_text(MultiquoteText); get_attributes().setAttribute('command', 'multiquote'); get_attributes().setAttribute('arg', id);
                set_imageUrl(menuImgURL + 'menuMultiQuote.gif');
                if (showMultiQuote) { show(); oneItemVisible = true; } else { hide(); }
            }

            with (edititem) { //this item works as a Reply when isSelfPost is true, and Edit when showReply is true

                // the reason we check the isSelfPost param is we already have the Reply / Edit button as the first Menu Item 
                // and therefore there is no need to show same sub item again

                if (showReply && isSelfPost) {
                    set_text(ReplyToMessageText); get_attributes().setAttribute('command', 'reply'); get_attributes().setAttribute('arg', id);
                    set_imageUrl(menuImgURL + 'menuReply.gif');
                    show();
                    oneItemVisible = true;                
                }
                else if (showEdit && !isSelfPost) {

                    set_text(EditMessageText); get_attributes().setAttribute('command', 'edit'); get_attributes().setAttribute('arg', id);
                    set_imageUrl(menuImgURL + 'menuEdit.gif');
                    show();
                    oneItemVisible = true;
                } else {
                    hide();
                }
            }

            if (oneItemVisible) menuShow(e, menu, theTarget);
        }, 200);
	}


	function hideAllMenus(widthForImg){
	
	    if (typeof menu == 'undefined' || !menu) return;
        
        setNono(menu, widthForImg);
        
        for (var i = 0; i < menu.get_items().get_count(); i++)
        {
           var theItem = menu.get_items().getItem(i);
           if (theItem.get_value() != 'nono') theItem.hide();
        }

        menu.hide();

    }







Sys.Application.add_load(function () { // breadCrumb Menu Construction
    
    if (currentMemberInfo.usingMobileTheme) return;

    var prm = Sys.WebForms.PageRequestManager.getInstance();

    if (!prm.get_isInAsyncPostBack()) {
        setupBottomBreadCrumb();
    }

    var totalSize = $('div.breadcrumb a').size();
    // select the breadcrumb a items first, and on mouseover of the links, produce
    // the lorder value from the select menu
    if (totalSize <= 1) return; // error handling when only All Forums is present
    //console.log(totalSize);

    $('div.breadcrumb .breadcrumbitem').filter(function (index) {
        return (index != 0 || index != (totalSize / 2) || index != (totalSize / 2 - 1) || index != (totalSize - 1));
    })
    .hoverIntent(
        function (e) {
            breadcrumbMenu.remove_itemClicked(search_onSearchItemClick);
            //console.log('remove_itemClicked'); 
            breadcrumbMenu.hide();
            var theSelectMenuOptions = $('select').filter(function (index) { return ($(this).get(0).id.endsWith('ForumJumpMenu')); }).children('option');
            var _theLinkText = $(this).text();

            //now first of all, get the lorder
            var theLorderForCurrent;
            theSelectMenuOptions.each(function () { if (this.text.endsWith(_theLinkText)) { theLorderForCurrent = $(this).attr('lorder'); return false; } });

            if (typeof theLorderForCurrent == "undefined") return true; // error handling

            //now collect a list of related by take away last 3 digits, and find those who starts the remaining and with same length;
            var parentLorder = theLorderForCurrent.substr(0, (theLorderForCurrent.length - 3));
            var theOptionsCollections = theSelectMenuOptions.filter(function (i) {
                var _lorder = $(this).attr('lorder');
                if (typeof _lorder == "undefined") return false;
                return (_lorder.startsWith(parentLorder) && _lorder.length == theLorderForCurrent.length && !$(this).get(0).text.endsWith(_theLinkText));
            });

            breadcrumbMenu.get_items().clear();

            var _menuItemAdded = false;
            theOptionsCollections.each(
                function (index) {
                    var optionItem = $(this).get(0);
                    var item = new Telerik.Web.UI.RadMenuItem();
                    //item.set_value('quicknav' + index.toString());
                    item.set_navigateUrl(optionItem.value);
                    item.set_text(optionItem.text.replace(/^(\-\s)+/gi, ''));
                    breadcrumbMenu.get_items().add(item);
                    _menuItemAdded = true;
                });

            var _theTarget = this;
            menuShow(null, breadcrumbMenu, _theTarget);
        }
    , function () { });

});

function setupBottomBreadCrumb() { // this is using add_load due to the use of drop down menu on the breadcrumb;
    $('#bottomItemsConsolidator').before($('div.breadcrumb:first').parent().html()).css('min-height', '30px');
    $('div.breadcrumb:last').addClass('altItem').css({ 'padding': '8px 10px', 'border-bottom': '0' });
}

function setSearchDropDown(searchSpecs) {
    setTimeout(function () {
        var masterphrasebox = $('input[name=masterphrase]');
        if (masterphrasebox.is(':visible')) {
            //console.log('visible');

            masterphrasebox.hoverIntent(
            function (e) {
                //breadcrumbMenu.hide();
                breadcrumbMenu.get_items().clear();
                breadcrumbMenu.remove_itemClicked(search_onSearchItemClick);
                breadcrumbMenu.add_itemClicked(search_onSearchItemClick);
                //console.log('add_itemClicked');
                $(searchSpecs).each(
                    function (index) {
                        breadcrumbMenu.get_items().add(search_createItem(this[0], this[1], this[2]));
                        //[forumOrmessage, itemtitle, id]
                    });
                     
                    menuShow(null, breadcrumbMenu, masterphrasebox.get(0));

                },
            function (e) {
                return false; }
            )
            .click(function (e) { return false; }); // this prevents menu to be closed when box is clicked
             
        } 
    }, 0);
}

function search_createItem(theType, itemTitle, theId) {
    if (currentMemberInfo.usingMobileTheme) return;

    var item = new Telerik.Web.UI.RadMenuItem();

    //item.set_navigateUrl('search.aspx');

    item.set_text(itemTitle);
    item.set_value(String.format('{0}={1}', ((theType == 'f') ? 'forumid' : 'threadid'), theId));
    item.set_imageUrl(pageThemeImageURL + 'menuSearch.gif');
    return item;
}

function search_onSearchItemClick(sender, args) {
    //console.log('onSearchItemClick');
    self.location.href = String.format("search.aspx?phrase={0}&{1}",
                    escape(theForm.masterphrase.value.replace(/\</gi, '')),
                    args.get_item().get_value());
}




eval(function(p, a, c, k, e, d) { e = function(c) { return (c < a ? "" : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) }; if (!''.replace(/^/, String)) { while (c--) d[e(c)] = k[c] || e(c); k = [function(e) { return d[e] } ]; e = function() { return '\\w+' }; c = 1; }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p; } ('(9($){$.Y.1=9(V){8 i={N:t,D:x,E:x,G:X};$.11(i,V);8 d={W:9(6){8 3=$(6.n);e(3.C("2-1-5")){3.F("2-1-5-H")}v{3.B().z().y(".2-1-5").F("2-1-U")}},R:9(6){8 3=$(6.n);e(3.C("2-1-5")){3.F("2-1-5-f").T("2-1-5-H")}v{3.B().z().y(".2-1-5").T("2-1-U")}},p:9(6){8 3=$(6.n);8 c=i.D;e(3.C("2-1-5")){d.f(3)}v{3.K(".2-1-k").B().z().y(".2-1-5").b("g","2-1-k 2-1-H");3.K(".2-1-k").I().y(".2-1-5").b("g","2-1-k 2-1-f");3.Z(".2-1-5").b("g","2-1-5 2-1-5-f");c=3.b("c")}e(!6.h.J){$(6.h.4).m(c).10("s")}},s:9(6){8 c=$(l).m();d.w(c,6.h.q,6.h.4)},w:9(c,q,4){8 6={"n":x,"h":{}};6.n=$(".2-1-k[c="+c+"]",q);6.h.4=4;6.h.J=t;d.p(6)},f:9(3){3.b("g","2-1-5 2-1-5-f").I().b("g","2-1-k 2-1-f")}};8 u={S:9(3){8 7=$("<7/>").b({o:3.o,g:"2-1"}).1c(3);A 7},Q:9(3,7){$("<a/>").b({g:"2-1-k 2-1-f",o:$(3).1b(),c:3.c}).L(7)},M:9(3,7){$("<a/>").b({g:"2-1-5 2-1-5-f",o:"1a"}).L(7)}};A l.O(9(){e($(l).b("1f")!=="1e-1d"){A}8 4=l;$(4).19("14","13");8 j=$(4).b("j");e(""===j){j="2-1-"+$.h(4);$(4).b("j",j)}8 7=u.S(4);e(t!==i.G&&$(4).b("G")!==t){$(7).r("15",d.W).r("18",d.R).r("p",{"4":4},d.p)}e(i.N){u.M(l,7)}$("P",4).O(9(){u.Q(l,7)});e(0!==$("#"+j+" P:17").16()){d.w($(4).m(),7,4)}v{8 m=x!==i.E?i.E:i.D;d.w(m,7,4);$(4).m(m)}$(l).r("s",{"4":4,"q":7},d.s)})}})(12);', 62, 78, '|rating|ui|elm|selectBox|cancel|evt|div|var|function||attr|value|events|if|empty|className|data|settings|id|star|this|val|target|title|click|container|bind|change|true|HTML|else|setValue|null|not|andSelf|return|prevAll|hasClass|cancelValue|startValue|addClass|disabled|full|nextAll|hasChanged|closest|appendTo|createCancel|showCancel|each|option|createStar|hoverOut|createContainer|removeClass|hover|options|hoverOver|false|fn|siblings|trigger|extend|jQuery|none|display|mouseover|size|selected|mouseout|css|Cancel|text|insertAfter|one|select|type'.split('|'), 0, {}));





function ASPPGFormatMsgBody(msgID, enableImg, enableLink){
var msgArea = $get('msg' + msgID);
sbody = msgArea.innerHTML;
if (!((false && !enableImg) || (false && !enableLink))) sbody = sbody.replace(/\[(\/?(?:[bius]|[ou]l|hr|strike|pre|sub|sup))\]/gi,"<$1>");
if (!((false && !enableImg) || (false && !enableLink))) sbody = sbody.replace(/\[(?:align=)?(right|center|left)\]/gi,"<div align=\"$1\">");
if (!((false && !enableImg) || (false && !enableLink))) sbody = sbody.replace(/\[\/(?:right|center|left|align)\]/gi,"</div>");
if (!((false && !enableImg) || (false && !enableLink))) sbody = sbody.replace(/\[(\/)?\*\]/gi,"<$1li>");
if (!((false && !enableImg) || (false && !enableLink))) sbody = sbody.replace(/\[(\/?h[1-6]{1})\]/gi,"<$1>");
if (!((false && !enableImg) || (false && !enableLink))) sbody = sbody.replace(/\[(\/?h[1-6]{1} align\="\w+?")\]/gi,"<$1>");
if (!((false && !enableImg) || (false && !enableLink))) sbody = sbody.replace(/\[quote(?:=([^\]]+))?\]/gi,"<blockquote class=\"quote\"><i>$1</i><br>");
if (!((false && !enableImg) || (false && !enableLink))) sbody = sbody.replace(/\[\/quote\]/gi,"</blockquote>");
if (!((false && !enableImg) || (false && !enableLink))) sbody = sbody.replace(/\[(\/)?blockquote\]/gi,"<$1blockquote>");
if (!((false && !enableImg) || (false && !enableLink))) sbody = sbody.replace(/\[(size|color)\=((?:&quot;|")\s?)?([\+\-\#\w]+?)\2\]/gi,"<font $1=\"$3\">");
if (!((false && !enableImg) || (false && !enableLink))) sbody = sbody.replace(/\[font\=((?:&quot;|")\s?)?([\w\s\,\-]+?)\1\]/gi,"<font face=\"$2\">");
if (!((false && !enableImg) || (false && !enableLink))) sbody = sbody.replace(/\[\/(?:font|size|color)\]/gi,"</font>");
if (!((false && !enableImg) || (true && !enableLink))) sbody = sbody.replace(/\[(url|link)\=(\&quot\;)?((?:ftp|https?)\:\/\/.+?)\2\](.+?)\[\/\1\]/gi,"<a href=\"$3\" target=\"_blank\" rel=\"nofollow\">$4</a>");
if (!((false && !enableImg) || (true && !enableLink))) sbody = sbody.replace(/\[(url|link)\=?\]((?:ftp|https?)\:\/\/.+?)\[\/\1\]/gi,"<a href=\"$2\" target=\"_blank\" rel=\"nofollow\">$2</a>");
if (!((false && !enableImg) || (true && !enableLink))) sbody = sbody.replace(/\[email\=(\&quot\;)?([\w\.]+\@[\w\-\.]+\.[a-zA-Z]{2,4})\1\](.+?)\[\/email\]/gi,"<a href=\"mailto:$2\">$3</a>");
if (!((true && !enableImg) || (false && !enableLink))) sbody = sbody.replace(/\[(im(?:g|age))\]((?:https?\:\/\/)(?:[^\?])+?\.(?:jpg|gif|jpeg|bmp|png))\[\/\1\]/gi,"<img src=\"$2\">");
if (!((false && !enableImg) || (false && !enableLink))) sbody = sbody.replace(/ <br> \[(im(?:g|age))\](?:local\:\/\/(?:upfiles\/)?)([\-\w\.\/]+?)\[\/\1\]/gi,"");
if (!((true && !enableImg) || (false && !enableLink))) sbody = sbody.replace(/\[(im(?:g|age))\](download\.axd\?[^\]]+)\[\/\1\]/gi,"<img src=\"$2\" />");
msgArea.innerHTML = sbody;
}


function ASPPGRestoreCodePGDCode(msgID, toReplace, replaceWith){
var msgArea = $get('msg' + msgID);
sbody = msgArea.innerHTML;
sbody = sbody.replace(toReplace, replaceWith.replace(/\$\'/gi, '$<span>\'</span>').replace(/\[code lang\=([a-z]{1,5})\]/gi, '<pre class="prettyprint lang-$1">').replace(/\[code\]/gi, '<pre class="prettyprint">').replace(/\[\/code\]/gi, '</pre>').replace(/\s?<br>\s?/gi, '\r\n'));
msgArea.innerHTML = sbody;
}


function ASPPGRestoreHTMLPGDCode(msgID, toReplace, replaceWith){
var msgArea = $get('msg' + msgID);
sbody = msgArea.innerHTML;
sbody = sbody.replace(toReplace, replaceWith.replace(/\$\'/gi, '$<span>\'</span>').replace(/\[(\/)?html\]/gi, '').replace(/\s?<br>\s?/gi, '\r\n').replace(/&lt;/gi, '<').replace(/&gt;/gi, '>').replace(/&quot;/gi, '"').replace(/&amp;/gi, '&'));
msgArea.innerHTML = sbody;
}






window.PR_SHOULD_USE_CONTINUATION=true,window.PR_TAB_WIDTH=8,window.PR_normalizedHtml=window.PR=window.prettyPrintOne=window.prettyPrint=void
0,window._pr_isIE6=function(){var a=navigator&&navigator.userAgent&&navigator.userAgent.match(/\bMSIE ([678])\./);return a=a?+a[1]:false,window._pr_isIE6=function(){return a},a},(function(){var
a=true,b=null,c='break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof ',d=c+'alignof align_union asm axiom bool '+'concept concept_map const_cast constexpr decltype '+'dynamic_cast explicit export friend inline late_check '+'mutable namespace nullptr reinterpret_cast static_assert static_cast '+'template typeid typename using virtual wchar_t where ',e=c+'abstract boolean byte extends final finally implements import '+'instanceof null native package strictfp super synchronized throws '+'transient ',f=e+'as base by checked decimal delegate descending event '+'fixed foreach from group implicit in interface internal into is lock '+'object out override orderby params partial readonly ref sbyte sealed '+'stackalloc string select uint ulong unchecked unsafe ushort var ',g=c+'debugger eval export function get null set undefined var with '+'Infinity NaN ',h='caller delete die do dump elsif eval exit foreach for goto if import last local my next no our print package redo require sub undef unless until use wantarray while BEGIN END ',i='break continue do else for if return while and as assert class def del elif except exec finally from global import in is lambda nonlocal not or pass print raise try with yield False True None ',j='break continue do else for if return while alias and begin case class def defined elsif end ensure false in module next nil not or redo rescue retry self super then true undef unless until when yield BEGIN END ',k='break continue do else for if return while case done elif esac eval fi function in local set then until ',l=d+f+g+h+i+j+k,m=(function(){var
a=['!','!=','!==','#','%','%=','&','&&','&&=','&=','(','*','*=','+=',',','-=','->','/','/=',':','::',';','<','<<','<<=','<=','=','==','===','>','>=','>>','>>=','>>>','>>>=','?','@','[','^','^=','^^','^^=','{','|','|=','||','||=','~','break','case','continue','delete','do','else','finally','instanceof','return','throw','try','typeof'],b='(?:^^|[+-]',c;for(c=0;c<a.length;++c)b+='|'+a[c].replace(/([^=<>:&a-z])/g,'\\$1');return b+=')\\s*',b})(),n=/&/g,o=/</g,p=/>/g,q=/\"/g,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F;function
G(a){return a.replace(n,'&amp;').replace(o,'&lt;').replace(p,'&gt;').replace(q,'&quot;')}function
H(a){return a.replace(n,'&amp;').replace(o,'&lt;').replace(p,'&gt;')}C=/&lt;/g,B=/&gt;/g,w=/&apos;/g,E=/&quot;/g,v=/&amp;/g,D=/&nbsp;/g;function
I(a){var b=a.indexOf('&'),c,d,e,f;if(b<0)return a;for(--b;(b=a.indexOf('&#',b+1))>=0;)d=a.indexOf(';',b),d>=0&&(e=a.substring(b+3,d),f=10,e&&e.charAt(0)==='x'&&(e=e.substring(1),f=16),c=parseInt(e,f),isNaN(c)||(a=a.substring(0,b)+String.fromCharCode(c)+a.substring(d+1)));return a.replace(C,'<').replace(B,'>').replace(w,'\'').replace(E,'\"').replace(D,' ').replace(v,'&')}function
J(a){return'XMP'===a.tagName}u=/[\r\n]/g;function K(c,d){var e;return'PRE'===c.tagName?a:u.test(d)?(e='',c.currentStyle?(e=c.currentStyle.whiteSpace):window.getComputedStyle&&(e=window.getComputedStyle(c,b).whiteSpace),!e||e==='pre'):a}function
L(a,b){var c,d,e,f;switch(a.nodeType){case 1:f=a.tagName.toLowerCase(),b.push('<',f);for(e=0;e<a.attributes.length;++e){c=a.attributes[e];if(!c.specified)continue;b.push(' '),L(c,b)}b.push('>');for(d=a.firstChild;d;d=d.nextSibling)L(d,b);(a.firstChild||!/^(?:br|link|img)$/.test(f))&&b.push('</',f,'>');break;case
2:b.push(a.name.toLowerCase(),'=\"',G(a.value),'\"');break;case 3:case 4:b.push(H(a.nodeValue))}}function
M(b){var c=0,d=false,e=false,f,g,h,i;for(f=0,g=b.length;f<g;++f){h=b[f];if(h.ignoreCase)e=a;else
if(/[a-z]/i.test(h.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,''))){d=a,e=false;break}}function
j(a){if(a.charAt(0)!=='\\')return a.charCodeAt(0);switch(a.charAt(1)){case'b':return 8;case't':return 9;case'n':return 10;case'v':return 11;case'f':return 12;case'r':return 13;case'u':case'x':return parseInt(a.substring(2),16)||a.charCodeAt(1);case'0':case'1':case'2':case'3':case'4':case'5':case'6':case'7':return parseInt(a.substring(1),8);default:return a.charCodeAt(1)}}function
k(a){var b;return a<32?(a<16?'\\x0':'\\x')+a.toString(16):(b=String.fromCharCode(a),(b==='\\'||b==='-'||b==='['||b===']')&&(b='\\'+b),b)}function
l(a){var b=a.substring(1,a.length-1).match(new RegExp('\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]','g')),c=[],d=[],e=b[0]==='^',f,g,h,i,m,n,o,p,q;for(h=e?1:0,m=b.length;h<m;++h){o=b[h];switch(o){case'\\B':case'\\b':case'\\D':case'\\d':case'\\S':case'\\s':case'\\W':case'\\w':c.push(o);continue}q=j(o),h+2<m&&'-'===b[h+1]?(g=j(b[h+2]),h+=2):(g=q),d.push([q,g]),g<65||q>122||(g<65||q>90||d.push([Math.max(65,q)|32,Math.min(g,90)|32]),g<97||q>122||d.push([Math.max(97,q)&-33,Math.min(g,122)&-33]))}d.sort(function(a,b){return a[0]-b[0]||b[1]-a[1]}),f=[],i=[NaN,NaN];for(h=0;h<d.length;++h)p=d[h],p[0]<=i[1]+1?(i[1]=Math.max(i[1],p[1])):f.push(i=p);n=['['],e&&n.push('^'),n.push.apply(n,c);for(h=0;h<f.length;++h)p=f[h],n.push(k(p[0])),p[1]
>p[0]&&(p[1]+1>p[0]&&n.push('-'),n.push(k(p[1])));return n.push(']'),n.join('')}function
m(a){var b=a.source.match(new RegExp('(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)','g')),e=b.length,f=[],g,h,i,j,k;for(j=0,i=0;j<e;++j)k=b[j],k==='('?++i:'\\'===k.charAt(0)&&(h=+k.substring(1),h&&h<=i&&(f[h]=-1));for(j=1;j<f.length;++j)-1===f[j]&&(f[j]=++c);for(j=0,i=0;j<e;++j)k=b[j],k==='('?(++i,f[i]===void
0&&(b[j]='(?:')):'\\'===k.charAt(0)&&(h=+k.substring(1),h&&h<=i&&(b[j]='\\'+f[i]));for(j=0,i=0;j<e;++j)'^'===b[j]&&'^'!==b[j+1]&&(b[j]='');if(a.ignoreCase&&d)for(j=0;j<e;++j)k=b[j],g=k.charAt(0),k.length>=2&&g==='['?(b[j]=l(k)):g!=='\\'&&(b[j]=k.replace(/[a-zA-Z]/g,function(a){var
b=a.charCodeAt(0);return'['+String.fromCharCode(b&-33,b|32)+']'}));return b.join('')}i=[];for(f=0,g=b.length;f<g;++f){h=b[f];if(h.global||h.multiline)throw new
Error(''+h);i.push('(?:'+m(h)+')')}return new RegExp(i.join('|'),e?'gi':'g')}r=b;function
N(a){var c,d,e,f;b===r&&(f=document.createElement('PRE'),f.appendChild(document.createTextNode('<!DOCTYPE foo PUBLIC \"foo bar\">\n<foo />')),r=!/</.test(f.innerHTML));if(r)return d=a.innerHTML,J(a)?(d=H(d)):K(a,d)||(d=d.replace(/(<br\s*\/?>)[\r\n]+/g,'$1').replace(/(?:[\r\n]+[ \t]*)+/g,' ')),d;e=[];for(c=a.firstChild;c;c=c.nextSibling)L(c,e);return e.join('')}function
O(a){var c=0;return function(d){var e=b,f=0,g,h,i,j;for(h=0,i=d.length;h<i;++h){g=d.charAt(h);switch(g){case'	':e||(e=[]),e.push(d.substring(f,h)),j=a-c%a,c+=j;for(;j>=0;j-='                '.length)e.push('                '.substring(0,j));f=h+1;break;case'\n':c=0;break;default:++c}}return e?(e.push(d.substring(f)),e.join('')):d}}z=new
RegExp('[^<]+|<!--[\\s\\S]*?-->|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>|</?[a-zA-Z](?:[^>\"\']|\'[^\']*\'|\"[^\"]*\")*>|<','g'),A=/^<\!--/,y=/^<!\[CDATA\[/,x=/^<br\b/i,F=/^<(\/?)([a-zA-Z][a-zA-Z0-9]*)/;function
P(a){var b=a.match(z),c=[],d=0,e=[],f,g,h,i,j,k,l,m;if(b)for(g=0,k=b.length;g<k;++g){j=b[g];if(j.length>1&&j.charAt(0)==='<'){if(A.test(j))continue;if(y.test(j))c.push(j.substring(9,j.length-3)),d+=j.length-12;else
if(x.test(j))c.push('\n'),++d;else if(j.indexOf('nocode')>=0&&Q(j)){l=(j.match(F))[2],f=1;for(h=g+1;h<k;++h){m=b[h].match(F);if(m&&m[2]===l)if(m[1]==='/'){if(--f===0)break}else++f}h<k?(e.push(d,b.slice(g,h+1).join('')),g=h):e.push(d,j)}else
e.push(d,j)}else i=I(j),c.push(i),d+=i.length}return{source:c.join(''),tags:e}}function
Q(a){return!!a.replace(/\s(\w+)\s*=\s*(?:\"([^\"]*)\"|'([^\']*)'|(\S+))/g,' $1=\"$2$3$4\"').match(/[cC][lL][aA][sS][sS]=\"[^\"]*\bnocode\b/)}function
R(a,b,c,d){var e;if(!b)return;e={source:b,basePos:a},c(e),d.push.apply(d,e.decorations)}function
S(a,c){var d={},e,f,g,h;return(function(){var e=a.concat(c),f=[],g={},i,j,k,l,m,n,o;for(j=0,l=e.length;j<l;++j){m=e[j],o=m[3];if(o)for(i=o.length;--i>=0;)d[o.charAt(i)]=m;n=m[1],k=''+n,g.hasOwnProperty(k)||(f.push(n),g[k]=b)}f.push(/[\0-\uffff]/),h=M(f)})(),f=c.length,g=/\S/,e=function(a){var
b=a.source,g=a.basePos,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;i=[g,'pln'],s=0,y=b.match(h)||[],u={};for(v=0,q=y.length;v<q;++v){w=y[v],t=u[w],p=void
0;if(typeof t==='string')n=false;else{r=d[w.charAt(0)];if(r)p=w.match(r[1]),t=r[0];else{for(m=0;m<f;++m){r=c[m],p=w.match(r[1]);if(p){t=r[0];break}}p||(t='pln')}n=t.length>=5&&'lang-'===t.substring(0,5),n&&!(p&&typeof
p[1]==='string')&&(n=false,t='src'),n||(u[w]=t)}x=s,s+=w.length,n?(j=p[1],l=w.indexOf(j),k=l+j.length,p[2]&&(k=w.length-p[2].length,l=k-j.length),o=t.substring(5),R(g+x,w.substring(0,l),e,i),R(g+x+l,j,W(o,j),i),R(g+x+k,w.substring(k),e,i)):i.push(g+x,t)}a.decorations=i},e}function
T(a){var c=[],d=[],e,f;return a.tripleQuotedStrings?c.push(['str',/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,b,'\'\"']):a.multiLineStrings?c.push(['str',/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,b,'\'\"`']):c.push(['str',/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,b,'\"\'']),a.verbatimStrings&&d.push(['str',/^@\"(?:[^\"]|\"\")*(?:\"|$)/,b]),a.hashComments&&(a.cStyleComments?(c.push(['com',/^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\r\n]*)/,b,'#']),d.push(['str',/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/,b])):c.push(['com',/^#[^\r\n]*/,b,'#'])),a.cStyleComments&&(d.push(['com',/^\/\/[^\r\n]*/,b]),d.push(['com',/^\/\*[\s\S]*?(?:\*\/|$)/,b])),a.regexLiterals&&(e='/(?=[^/*])(?:[^/\\x5B\\x5C]|\\x5C[\\s\\S]|\\x5B(?:[^\\x5C\\x5D]|\\x5C[\\s\\S])*(?:\\x5D|$))+/',d.push(['lang-regex',new
RegExp('^'+m+'('+e+')')])),f=a.keywords.replace(/^\s+|\s+$/g,''),f.length&&d.push(['kwd',new
RegExp('^(?:'+f.replace(/\s+/g,'|')+')\\b'),b]),c.push(['pln',/^\s+/,b,' \r\n	\xa0']),d.push(['lit',/^@[a-z_$][a-z_$@0-9]*/i,b],['typ',/^@?[A-Z]+[a-z][A-Za-z_$@0-9]*/,b],['pln',/^[a-z_$][a-z_$@0-9]*/i,b],['lit',new
RegExp('^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*','i'),b,'0123456789'],['pun',/^.[^\s\w\.$@\'\"\`\/\#]*/,b]),S(c,d)}s=T({keywords:l,hashComments:a,cStyleComments:a,multiLineStrings:a,regexLiterals:a});function
U(c){var d=c.source,e=c.extractedTags,f=c.decorations,g=[],h=0,i=b,j=b,k=0,l=0,m=O(window.PR_TAB_WIDTH),n=/([\r\n ]) /g,o=/(^| ) /gm,p=/\r\n?|\n/g,q=/[ \r\n]$/,r=a,s;function
t(a){var c,e;a>h&&(i&&i!==j&&(g.push('</span>'),i=b),!i&&j&&(i=j,g.push('<span class=\"',i,'\">')),c=H(m(d.substring(h,a))).replace(r?o:n,'$1&nbsp;'),r=q.test(c),e=window._pr_isIE6()?'&nbsp;<br />':'<br />',g.push(c.replace(p,e)),h=a)}while(a){k<e.length?l<f.length?(s=e[k]<=f[l]):(s=a):(s=false);if(s)t(e[k]),i&&(g.push('</span>'),i=b),g.push(e[k+1]),k+=2;else
if(l<f.length)t(f[l]),j=f[l+1],l+=2;else break}t(d.length),i&&g.push('</span>'),c.prettyPrintedHtml=g.join('')}t={};function
V(a,b){var c,d;for(d=b.length;--d>=0;)c=b[d],t.hasOwnProperty(c)?'console'in window&&console.warn('cannot override language handler %s',c):(t[c]=a)}function
W(a,b){return a&&t.hasOwnProperty(a)||(a=/^\s*</.test(b)?'default-markup':'default-code'),t[a]}V(s,['default-code']),V(S([],[['pln',/^[^<?]+/],['dec',/^<!\w[^>]*(?:>|$)/],['com',/^<\!--[\s\S]*?(?:-\->|$)/],['lang-',/^<\?([\s\S]+?)(?:\?>|$)/],['lang-',/^<%([\s\S]+?)(?:%>|$)/],['pun',/^(?:<[%?]|[%?]>)/],['lang-',/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],['lang-js',/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],['lang-css',/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],['lang-in.tag',/^(<\/?[a-z][^<>]*>)/i]]),['default-markup','htm','html','mxml','xhtml','xml','xsl']),V(S([['pln',/^[\s]+/,b,' 	\r\n'],['atv',/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,b,'\"\'']],[['tag',/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],['atn',/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],['lang-uq.val',/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],['pun',/^[=<>\/]+/],['lang-js',/^on\w+\s*=\s*\"([^\"]+)\"/i],['lang-js',/^on\w+\s*=\s*\'([^\']+)\'/i],['lang-js',/^on\w+\s*=\s*([^\"\'>\s]+)/i],['lang-css',/^style\s*=\s*\"([^\"]+)\"/i],['lang-css',/^style\s*=\s*\'([^\']+)\'/i],['lang-css',/^style\s*=\s*([^\"\'>\s]+)/i]]),['in.tag']),V(S([],[['atv',/^[\s\S]+/]]),['uq.val']),V(T({keywords:d,hashComments:a,cStyleComments:a}),['c','cc','cpp','cxx','cyc','m']),V(T({keywords:'null true false'}),['json']),V(T({keywords:f,hashComments:a,cStyleComments:a,verbatimStrings:a}),['cs']),V(T({keywords:e,cStyleComments:a}),['java']),V(T({keywords:k,hashComments:a,multiLineStrings:a}),['bsh','csh','sh']),V(T({keywords:i,hashComments:a,multiLineStrings:a,tripleQuotedStrings:a}),['cv','py']),V(T({keywords:h,hashComments:a,multiLineStrings:a,regexLiterals:a}),['perl','pl','pm']),V(T({keywords:j,hashComments:a,multiLineStrings:a,regexLiterals:a}),['rb']),V(T({keywords:g,cStyleComments:a,regexLiterals:a}),['js']),V(S([],[['str',/^[\s\S]+/]]),['regex']);function
X(a){var b=a.sourceCodeHtml,c=a.langExtension,d,e;a.prettyPrintedHtml=b;try{e=P(b),d=e.source,a.source=d,a.basePos=0,a.extractedTags=e.tags,W(c,d)(a),U(a)}catch(f){'console'in
window&&(console.log(f),console.trace())}}function Y(a,b){var c={sourceCodeHtml:a,langExtension:b};return X(c),c.prettyPrintedHtml}function
Z(c){var d=window._pr_isIE6(),e=d===6?'\r\n':'\r',f=[document.getElementsByTagName('pre'),document.getElementsByTagName('code'),document.getElementsByTagName('xmp')],g=[],h,i,j,k,l,m;for(i=0;i<f.length;++i)for(j=0,l=f[i].length;j<l;++j)g.push(f[i][j]);f=b,h=Date,h.now||(h={now:function(){return(new
Date).getTime()}}),k=0;function n(){var b=window.PR_SHOULD_USE_CONTINUATION?h.now()+250:Infinity,d,e,f,i,j;for(;k<g.length&&h.now()<b;++k){e=g[k];if(e.className&&e.className.indexOf('prettyprint')>=0){f=e.className.match(/\blang-(\w+)\b/),f&&(f=f[1]),i=false;for(j=e.parentNode;j;j=j.parentNode)if((j.tagName==='pre'||j.tagName==='code'||j.tagName==='xmp')&&j.className&&j.className.indexOf('prettyprint')>=0){i=a;break}i||(d=N(e),d=d.replace(/(?:\r\n?|\n)$/,''),m={sourceCodeHtml:d,langExtension:f,sourceNode:e},X(m),o())}}k<g.length?setTimeout(n,250):c&&c()}function
o(){var a=m.prettyPrintedHtml,b,c,f,g,h,i,j,k;if(!a)return;f=m.sourceNode;if(!J(f))f.innerHTML=a;else{k=document.createElement('PRE');for(g=0;g<f.attributes.length;++g)b=f.attributes[g],b.specified&&(c=b.name.toLowerCase(),c==='class'?(k.className=b.value):k.setAttribute(b.name,b.value));k.innerHTML=a,f.parentNode.replaceChild(k,f),f=k}if(d&&f.tagName==='PRE'){j=f.getElementsByTagName('br');for(h=j.length;--h>=0;)i=j[h],i.parentNode.replaceChild(document.createTextNode(e),i)}}n()}window.PR_normalizedHtml=L,window.prettyPrintOne=Y,window.prettyPrint=Z,window.PR={combinePrefixPatterns:M,createSimpleLexer:S,registerLangHandler:V,sourceDecorator:T,PR_ATTRIB_NAME:'atn',PR_ATTRIB_VALUE:'atv',PR_COMMENT:'com',PR_DECLARATION:'dec',PR_KEYWORD:'kwd',PR_LITERAL:'lit',PR_NOCODE:'nocode',PR_PLAIN:'pln',PR_PUNCTUATION:'pun',PR_SOURCE:'src',PR_STRING:'str',PR_TAG:'tag',PR_TYPE:'typ'}})()




PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[\t\n\r \xA0\u2028\u2029]+/,null,'	\n\r \xa0\u2028\u2029'],[PR.PR_STRING,/^(?:[\"\u201C\u201D](?:[^\"\u201C\u201D]|[\"\u201C\u201D]{2})(?:[\"\u201C\u201D]c|$)|[\"\u201C\u201D](?:[^\"\u201C\u201D]|[\"\u201C\u201D]{2})*(?:[\"\u201C\u201D]|$))/i,null,'\"\u201c\u201d'],[PR.PR_COMMENT,/^[\'\u2018\u2019][^\r\n\u2028\u2029]*/,null,'\'\u2018\u2019']],[[PR.PR_KEYWORD,/^(?:AddHandler|AddressOf|Alias|And|AndAlso|Ansi|As|Assembly|Auto|Boolean|ByRef|Byte|ByVal|Call|Case|Catch|CBool|CByte|CChar|CDate|CDbl|CDec|Char|CInt|Class|CLng|CObj|Const|CShort|CSng|CStr|CType|Date|Decimal|Declare|Default|Delegate|Dim|DirectCast|Do|Double|Each|Else|ElseIf|End|EndIf|Enum|Erase|Error|Event|Exit|Finally|For|Friend|Function|Get|GetType|GoSub|GoTo|Handles|If|Implements|Imports|In|Inherits|Integer|Interface|Is|Let|Lib|Like|Long|Loop|Me|Mod|Module|MustInherit|MustOverride|MyBase|MyClass|Namespace|New|Next|Not|NotInheritable|NotOverridable|Object|On|Option|Optional|Or|OrElse|Overloads|Overridable|Overrides|ParamArray|Preserve|Private|Property|Protected|Public|RaiseEvent|ReadOnly|ReDim|RemoveHandler|Resume|Return|Select|Set|Shadows|Shared|Short|Single|Static|Step|Stop|String|Structure|Sub|SyncLock|Then|Throw|To|Try|TypeOf|Unicode|Until|Variant|Wend|When|While|With|WithEvents|WriteOnly|Xor|EndIf|GoSub|Let|Variant|Wend)\b/i,null],[PR.PR_COMMENT,/^REM[^\r\n\u2028\u2029]*/i],[PR.PR_LITERAL,/^(?:True\b|False\b|Nothing\b|\d+(?:E[+\-]?\d+[FRD]?|[FRDSIL])?|(?:&H[0-9A-F]+|&O[0-7]+)[SIL]?|\d*\.\d+(?:E[+\-]?\d+)?[FRD]?|#\s+(?:\d+[\-\/]\d+[\-\/]\d+(?:\s+\d+:\d+(?::\d+)?(\s*(?:AM|PM))?)?|\d+:\d+(?::\d+)?(\s*(?:AM|PM))?)\s+#)/i],[PR.PR_PLAIN,/^(?:(?:[a-z]|_\w)\w*|\[(?:[a-z]|_\w)\w*\])/i],[PR.PR_PUNCTUATION,/^[^\w\t\n\r \"\'\[\]\xA0\u2018\u2019\u201C\u201D\u2028\u2029]+/],[PR.PR_PUNCTUATION,/^(?:\[|\])/]]),['vb','vbs'])




PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[\t\n\r \xA0]+/,null,'	\n\r \xa0'],[PR.PR_STRING,/^(?:"(?:[^\"\\]|\\.)*"|'(?:[^\'\\]|\\.)*')/,null,'\"\'']],[[PR.PR_COMMENT,/^(?:--[^\r\n]*|\/\*[\s\S]*?(?:\*\/|$))/],[PR.PR_KEYWORD,/^(?:ADD|ALL|ALTER|AND|ANY|AS|ASC|AUTHORIZATION|BACKUP|BEGIN|BETWEEN|BREAK|BROWSE|BULK|BY|CASCADE|CASE|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMN|COMMIT|COMPUTE|CONSTRAINT|CONTAINS|CONTAINSTABLE|CONTINUE|CONVERT|CREATE|CROSS|CURRENT|CURRENT_DATE|CURRENT_TIME|CURRENT_TIMESTAMP|CURRENT_USER|CURSOR|DATABASE|DBCC|DEALLOCATE|DECLARE|DEFAULT|DELETE|DENY|DESC|DISK|DISTINCT|DISTRIBUTED|DOUBLE|DROP|DUMMY|DUMP|ELSE|END|ERRLVL|ESCAPE|EXCEPT|EXEC|EXECUTE|EXISTS|EXIT|FETCH|FILE|FILLFACTOR|FOR|FOREIGN|FREETEXT|FREETEXTTABLE|FROM|FULL|FUNCTION|GOTO|GRANT|GROUP|HAVING|HOLDLOCK|IDENTITY|IDENTITYCOL|IDENTITY_INSERT|IF|IN|INDEX|INNER|INSERT|INTERSECT|INTO|IS|JOIN|KEY|KILL|LEFT|LIKE|LINENO|LOAD|NATIONAL|NOCHECK|NONCLUSTERED|NOT|NULL|NULLIF|OF|OFF|OFFSETS|ON|OPEN|OPENDATASOURCE|OPENQUERY|OPENROWSET|OPENXML|OPTION|OR|ORDER|OUTER|OVER|PERCENT|PLAN|PRECISION|PRIMARY|PRINT|PROC|PROCEDURE|PUBLIC|RAISERROR|READ|READTEXT|RECONFIGURE|REFERENCES|REPLICATION|RESTORE|RESTRICT|RETURN|REVOKE|RIGHT|ROLLBACK|ROWCOUNT|ROWGUIDCOL|RULE|SAVE|SCHEMA|SELECT|SESSION_USER|SET|SETUSER|SHUTDOWN|SOME|STATISTICS|SYSTEM_USER|TABLE|TEXTSIZE|THEN|TO|TOP|TRAN|TRANSACTION|TRIGGER|TRUNCATE|TSEQUAL|UNION|UNIQUE|UPDATE|UPDATETEXT|USE|USER|VALUES|VARYING|VIEW|WAITFOR|WHEN|WHERE|WHILE|WITH|WRITETEXT)(?=[^\w-]|$)/i,null],[PR.PR_LITERAL,/^[+-]?(?:0x[\da-f]+|(?:(?:\.\d+|\d+(?:\.\d*)?)(?:e[+\-]?\d+)?))/i],[PR.PR_PLAIN,/^[a-z_][\w-]*/i],[PR.PR_PUNCTUATION,/^[^\w\t\n\r \xA0\"\'][^\w\t\n\r \xA0+\-\"\']*/]]),['sql'])




PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[ \t\r\n\f]+/,null,' 	\r\n']],[[PR.PR_STRING,/^\"(?:[^\n\r\f\\\"]|\\(?:\r\n?|\n|\f)|\\[\s\S])*\"/,null],[PR.PR_STRING,/^\'(?:[^\n\r\f\\\']|\\(?:\r\n?|\n|\f)|\\[\s\S])*\'/,null],['lang-css-str',/^url\(([^\)\"\']*)\)/i],[PR.PR_KEYWORD,/^(?:url|rgb|\!important|@import|@page|@media|@charset|inherit)(?=[^\-\w]|$)/i,null],['lang-css-kw',/^(-?(?:[_a-z]|(?:\\[0-9a-f]+ ?))(?:[_a-z0-9\-]|\\(?:\\[0-9a-f]+ ?))*)\s*:/i],[PR.PR_COMMENT,/^\/\*[^*]*\*+(?:[^\/*][^*]*\*+)*\//],[PR.PR_COMMENT,/^(?:<!--|-->)/],[PR.PR_LITERAL,/^(?:\d+|\d*\.\d+)(?:%|[a-z]+)?/i],[PR.PR_LITERAL,/^#(?:[0-9a-f]{3}){1,2}/i],[PR.PR_PLAIN,/^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i],[PR.PR_PUNCTUATION,/^[^\s\w\'\"]+/]]),['css']),PR.registerLangHandler(PR.createSimpleLexer([],[[PR.PR_KEYWORD,/^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i]]),['css-kw']),PR.registerLangHandler(PR.createSimpleLexer([],[[PR.PR_STRING,/^[^\)\"\']+/]]),['css-str'])




 /* Category Show/Hide Functions */
 
function openOrClose (theid){

    var $obj = $('#' + theid + '_mainTable');

    $obj.toggle();
    $('#' + theid + '_img').attr('src', function() { return (pageThemeImageURL + ($obj.is(':hidden') ? ImageOpenFile : ImageCloseFile)); });

    RecordCatState(theid, $obj.css('display'));
    
    return false;
}

function RecordCatState(theid, state){
    var currCookieValue = readCookie("catState");
    
    if (currCookieValue=="null" || currCookieValue== null) currCookieValue = "";
    
    currCookieValue = currCookieValue.replace("|" + theid, "").replace("null", "");
    
    if (state=="none") currCookieValue += "|" + theid;
    
    createCookie("catState", currCookieValue, 30);
    
}

function setCatState(){
    var currCookieValue = readCookie("catState");

    if (currCookieValue=="" || currCookieValue=="null" || currCookieValue== null) return;
    
    var arrCurrCookieValue = currCookieValue.split("|");

    if (typeof pageThemeImageURL != 'undefined') {
        for (i = 0; i < arrCurrCookieValue.length; i++) {

            if (arrCurrCookieValue[i] == '') continue;

            $('#' + arrCurrCookieValue[i] + "_img").attr('src', pageThemeImageURL + ImageOpenFile);

            $('#' + arrCurrCookieValue[i] + "_mainTable").hide();


        }
    }
}


