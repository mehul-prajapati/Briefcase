if (window['skimWidgetCounter']==undefined){
    window['skimWidgetCounter'] = 0;
} else {
    window['skimWidgetCounter']++;
}

// extending array prototype if needed
if (!Array.prototype.indexOf){
	Array.prototype.indexOf = function(elt /*, from*/) {
		var len = this.length >>> 0;

		var from = Number(arguments[1]) || 0;
		from = (from < 0)
			? Math.ceil(from)
			: Math.floor(from);
		if (from < 0)
			from += len;

		for (; from < len; from++)    {
			if (from in this &&
				this[from] === elt)
			return from;
		}
		return -1;
	};
}

if (window['skimlinksProducts']==undefined){
	window['skimlinksProducts'] = []; 
	window['skimlinksProductsShown'] = 0;
	window['skimlinksPhrases'] = [];
	window['skimlinksWidgets'] = [];
	window['skimlinksWidgetCount'] = 0;
}

(function(){var Y,Z,P,$,la,A,Q,ma,na,oa,pa,qa;function Ma(a){G=a.skimWidget_name||"_default";ra=a.skimWidget_background||"#ffffff";aa=a.skimWidget_color1||"#0042ff";ba=a.skimWidget_color2||"#000000";ca=a.skimWidget_color3||"#a1a1a1";R=a.skimWidget_user_fallback||!1;H=a.skimWidget_extra_class||!1;sa=a.skimWidget_no_branding||!1;ta=a.skimWidget_force_includes||!1;B=a.skimWidget_font||"";v=a.skimWidget_border||!1;widgetAnimate=a.skimWidget_animate||!1;I=a.skimWidget_images||!1;J=a.skimWidget_id||"01";
"rotater"==da&&(v="border: 1px solid #aaa !important;");ua=a.skimWidget_rtb||!1;n.bid=a.skimWidget_bid||0;$=la+G+".css";v?(ea=!0,v="border: 1px solid "+v+" !important; "):(ea=!1,v="border: 0px !important; border-style: none !important;");a.fallback&&(A=Q);""!=B&&(B="font-family: "+B+" !important;")}function Na(){if(0===f.skimlinksWidgetCount){var a=C.getElementsByTagName("script");for(i=0;i<a.length;i++){var b=a[i].getAttribute("src");b&&-1!==b.indexOf(".adunit.js")&&f.skimlinksWidgetCount++}}}function Oa(a){va(a)}
function wa(a){if(a){var b=f.skimWidgetData;b.Nodes||(b.Nodes={});b.Nodes.widgetnode1=a.Nodes["1000000"];f.skimWidgetData=b;w?K(b):L(b)}else f["getFallback"+m]=wa,a=Q+"?callback=getFallback"+m+"&pubcode="+r+"&version=10",S&&(a=a+"&debug="+S),D(a)}function xa(a){var b="{",c=0,e="",d;for(d in a)0<c&&(b+=","),"page"!=d&&"object"==typeof a[d]?e=xa(a[d]):"function"!=typeof a[d]&&(e='"'+a[d]+'"'),b+='"'+d+'":'+e,c++;return b+"}"}function Pa(){ya=(new Date).getTime();n.jsl=ya-za;n.guid=E;n.pag=s;n.pub=r;
n.siz=x+"x"+y;n.typ="w";n.wid=J;var a=ma+"?data="+encodeURIComponent(xa(n));D(a,!1,{async:!0})}function K(a){var b="",c=" slots";if(a){f.skimWidgetData||(f.skimWidgetData=a);if(!E&&a.guid)E=a.guid;var e=Aa(a),a=[],d={};for(i=0;i<e.length;i++)if(!d[e[i].OriginalPhrase]){if(!e[i].Id)e[i].Id=0;d[e[i].OriginalPhrase]=!0;a.push(e[i])}var e=[],o=[];if(a.length)for(var l=M;l>=T;l--){for(var h=Math.floor(Ba/l),d=0;d<a.length&&!(-1==f.skimlinksPhrases.indexOf(a[d].OriginalPhrase)&&a[d].OriginalPhrase.length<=
h?e.push(a[d]):a[d].OriginalPhrase.length<=h&&o.push(a[d]),e.length>=l);d++);if(e.length>=l)break;else if(e.length+o.length>=l){f.skimlinksPhrases=[];for(d=0;d<o.length&&!(e.push(o[d]),e.length>=l);d++);break}else e=[]}if(e.length){for(d=0;d<e.length;d++)phrase=e[d],c+=l,0==d&&(c+=" alignLeft"),d==e.length-1&&(c+=" alignRight"),H&&(c=c+" "+H),a=10<=parseInt(phrase.ActionType)?phrase.ActionType:"0"+phrase.ActionType,b+=fa(ga,{widgetColor1:aa,widgetColor2:ba,widgetColor3:ca,widgetFont:B,widgetId:J,
actionType:a,phraseTitle:phrase.OriginalPhrase,phraseUrl:phrase.Url,extraClass:c,matchedText:encodeURIComponent(phrase.OriginalPhrase)}),f.skimlinksPhrases.push(phrase.OriginalPhrase),n.phr.hasOwnProperty(phrase.Id)||(a={at:phrase.ActionType,gid:0,id:phrase.Id||0,url:phrase.Url,mid:phrase.MerchantId||0,word:phrase.OriginalPhrase},n.phr[phrase.Id]=a,delete a);""!=b&&Ca(b)}}f.skimWidgetCallFinished=1}function Da(a){ha&&clearTimeout(ha);q.show();g(a).find(".ellipsis").each(function(){Qa(g(this))})}function Ra(a,
b,c){b=a.createElement("link");b.setAttribute("rel","stylesheet");b.setAttribute("href",c);b.onload=function(){Da()};a.getElementsByTagName("head")[0].appendChild(b)}function Ca(a){var b=C.createElement("iframe");ea?(b.setAttribute("width",x+2),b.setAttribute("height",y+2)):(b.setAttribute("width",x),b.setAttribute("height",y));b.setAttribute("border","0");b.setAttribute("frameBorder","0");b.setAttribute("scrolling","no");b.setAttribute("hspace","0");b.setAttribute("vspace","0");q[0].appendChild(b);
var c=(b.contentWindow||b.documentWindow).document;c.open();c.write("<html><head><style>body{ padding:0px; margin:0px; }</style></head><body></body></html>");c.close();g(c).find("body").html(U);g(c).find(".skimWidgetMain").html(g(c).find(".skimWidgetMain").html()+a);sa&&g(c).find(".poweredBySkimlinks").hide();f.setTimeout(function(){for(var a=g(c).find(".skimwidgetLink"),b,f=0,l=a.length;f<l;f++)b=g(a[f]),b.click(va),b.bind("contextmenu",Oa)},10);da&&skimWidgetHook(c);Ra(c,q,$);ha=setTimeout(function(){Da()},
1E3);Pa()}function Aa(a){var b=[];if(!a.Nodes)return[];if(f.skimWidgetTextArray)t=f.skimWidgetTextArray,N=f.skimWidgetTextContent;for(node_id in a.Nodes)if(a.Nodes.hasOwnProperty(node_id)&&a.Nodes[node_id].Phrases&&a.Nodes[node_id].Phrases.length){if(t.hasOwnProperty(node_id)){var c=t[node_id].Score,e,d=t[node_id].X,o=t[node_id].Y;q.show();var l=q.position();q.hide();e=l.left;o=Math.abs(l.top-o);d=Math.abs(e-d);e=Math.sqrt(o*o+d*d)}else e=500,c=0;for(d=0;d<a.Nodes[node_id].Phrases.length;d++){a.Nodes[node_id].Phrases[d].Distance=
parseInt(e);a.Nodes[node_id].Phrases[d].NodeScore=c;var o=a.Nodes[node_id].Phrases[d],l=a.Nodes[node_id].Phrases[d],h=0,h=f.skimlinksWidgetCount&&1<f.skimlinksWidgetCount?100:20,h=l.Distance?l.NodeScore*(h/(l.Distance/100)):1;o.Score=h;b.push(a.Nodes[node_id].Phrases[d])}}for(d=0;d<b.length;d++)a=N.toLowerCase().split(b[d].OriginalPhrase.toLowerCase()).length-1,b[d].Score+=a;return b}function ia(a){return a.Title+a.MerchantName+a.Price}function Sa(a,b){return a.GroupPriority<b.GroupPriority}function Ta(a,
b){return a.Score<b.Score}function ia(a){return a.Title+a.MerchantName+a.Price}function L(a){var b,c,e=0,d=0,o=b=0,l="";if(a){f.skimWidgetData||(f.skimWidgetData=a);if(!E&&a.guid)E=a.guid;if((b=Aa(a))&&b.length){c=b=b.sort(Ta);d=[];b=[];a=[];for(i=0;i<c.length;i++)if(c[i].Groups&&c[i].Groups.length){var h=c[i].Groups.sort(Sa);for(j=0;j<h.length;j++)if(h[j].Products&&h[j].Products.length)for(k=0;k<h[j].Products.length;k++)if(-1===b.indexOf(ia(h[j].Products[k]))&&-1===a.indexOf(h[j].Products[k].Image))b.push(ia(h[j].Products[k])),
a.push(h[j].Products[k].Image),h[j].Products[k].ActionType=c[i].ActionType,h[j].Products[k].Word=c[i].OriginalPhrase,h[j].Products[k].PhraseUrl=c[i].Url,h[j].Products[k].GroupId=h[j].GroupId,h[j].Products[k].PhraseId=c[i].PhraseId||0,d.push(h[j].Products[k])}c=d;if(d=c.length)for(i=0;i<d;i++)c[i]&&-1==f.skimlinksProducts.indexOf(c[i].Id)&&e++}ua&&0==d&&A!=Q&&(b=na+"?method=cacheNegative&url="+encodeURIComponent(s)+"&debug=1",D(b,!1,{async:!0}));b=M-e;if(d<T)return R?("hide"==R?q.hide():(q.html(decodeURIComponent(R)),
q.show()),f.skimWidgetCallFinished=1):wa(),!1;f.skimWidgetCallFinished=1;for(i=e=0;i<d;i++)if(a=c[i],o<M&&(0<b||-1==f.skimlinksProducts.indexOf(a.Id))){b--;o++;a.VerticalId=a.VerticalId||0;h={cat:a.VerticalId,cntr:a.Country,gid:a.GroupId,mid:a.MerchantId,price:a.Price,id:a.Id,title:a.Title,url:a.Url};if(9==a.ActionTpe)h.fb=1;else if(h.fb=0,!n.phr.hasOwnProperty(a.PhraseId)){var g={at:a.ActionType,gid:a.GroupId,id:0,url:a.PhraseUrl,mid:a.MerchantId,word:a.Word};n.phr[a.PhraseId]=g;delete g}n.prod[a.Id]=
h;delete h;print_currency="GB"==a.Country?"&pound;":"DE"==a.Country?"&euro;":"$";h="0"+a.ActionType;if(10<=parseInt(a.ActionType))h=a.ActionType;if(I)var g="<div class='imgContainer'><a href='"+a.Url+"' target='_blank' class='skimwidgetLink' data-skim-creative='4"+J+"1"+h+"' data-skim-product='"+a.Id+"' data-skim-word='"+encodeURIComponent(a.Word)+"'><img src='"+a.Image+"' /></a></div>",Ea="";else Ea=g="";var p=a.Title,Ua=a.MerchantName,m=o==M?I?" withImages noborder":" noborder":I?" withImages":
"";H&&(m=m+" "+H);"_shelf"==G&&(m+=" shelf");var r=0==e?"block":"none",l=l+fa(ga,{widgetColor1:aa,widgetColor2:ba,widgetColor3:ca,widgetFont:B,widgetId:J,actionType:h,textStyle:Ea,extraClass:m,productImage:g,productRawImage:a.Image,productRawImageLarge:a.Image+"_300x250",productUrl:a.Url,productTitle:a.Title,productId:a.Id,fullTitle:p.replace(/'/g,""),fullMerchantTitle:Ua,productPrice:print_currency+a.Price,merchantName:a.MerchantName,merchantId:a.MerchantId,matchedText:encodeURIComponent(a.Word),
slideId:e,display:r});e++;f.skimlinksProducts.push(a.Id);f.skimlinksProductsShown++}""!=l&&Ca(l)}}function D(a,b,c){c=c||{};if(!c.charset)c.charset="utf-8";if(!c.target)c.target=this;return function(a,b,c){var f=c.charset,h=c.target,c=c.async,g=h.document,m=g.getElementsByTagName("head")[0],p=g.createElement("script"),n=!1;p.type="text/javascript";p.charset=f;p.onload=p.onreadystatechange=function(){var a=this.readyState;if(!n&&(!a||"complete"===a||"loaded"===a))p.onload=p.onreadystatechange=null,
n=!0,b.call(h)};p.async=!1!==c;p.src=a;m.appendChild(p)}.call(this,a,b||function(){},c)}function Va(a){var b=null;if(g)a(g);else{try{b=f.jQuery}catch(c){}b&&b.fn&&b.fn.jquery&&b.fn.jquery>=oa?(g=b,a(g)):D(pa,function(){g=f.jQuery.noConflict(!0);a(g)},{})}}function Wa(){var a;if(g.browser&&g.browser.msie&&!f.XDomainRequest)sw_instant=!1,F("widgetDataCallback"+m,!1);else{if(!f.skimWidgetTextArray)f.skimWidgetTextArray=t,f.skimWidgetTextContent=N;data_obj={data:'{"instant":"1","pubcode":"'+r+'","page":"'+
s+'",'+(z?'"force_country":"'+z+'",':"")+'"widget":'+(w?'"2",':'"1",')+'"minproducts":"'+T+'"}',debug:S,content:json_stringify(t),dnt:Fa,version:"10",fdnt:Ga?"1":""};data_arr=[];for(a in data_obj)data_obj.hasOwnProperty(a)&&data_arr.push(""+a+"="+encodeURIComponent(data_obj[a]));a=data_arr.join("&");if(!g.browser||!g.browser.msie){var b=!1,c;c=new XMLHttpRequest;c.open("POST",A,!0);c.setRequestHeader("Content-type","application/x-www-form-urlencoded");"withCredentials"in c&&(c.withCredentials=!0);
c.async="true";c.onreadystatechange=function(){if(!b&&4===c.readyState)if(b=!0,200===c.status){var a={},a=JSON&&JSON.parse?JSON.parse(c.responseText):eval("("+c.responseText+")");w?K(a):L(a)}else sw_instant=!1,F("widgetDataCallback"+m,!1)};try{c.send(a)}catch(e){}}else if(f.XDomainRequest){var d=new XDomainRequest;"withCredentials"in d&&(d.withCredentials=!0);if(d){d.open("POST",A,!0);d.onload=function(){var a={};try{a=JSON.parse(d.responseText)}catch(b){a=eval("("+d.responseText+")")}w?K(a):L(a)};
d.onerror=function(){};d.onprogress=function(){};d.ontimeout=function(){};d.async=!0;try{d.send(a)}catch(o){sw_instant=!1,F("widgetDataCallback"+m,!1)}}}else sw_instant=!1,F("widgetDataCallback"+m,!1)}}function Xa(a){var b,c,e;if(a)"img"==a.prop("tagName").toLowerCase()&&(a=a.parent()),c=a[0],b=c.href,(e=a.data("skimlinks-href"))||(e="http://"+qa+"/?id="+r+(u?"&xcust="+u:"")+"&xs=5&isjs=1&url="+encodeURIComponent(b)+"&xguid="+E+"&xjsf="+x+"x"+y+(void 0!==a.attr("data-skim-word")?"&xword="+a.attr("data-skim-word"):
"&xword=")+(void 0!==a.attr("data-skim-creative")?"&xcreo="+a.attr("data-skim-creative"):"&xcreo=0")+(void 0!==a.attr("data-skim-product")?"&xpid="+a.attr("data-skim-product"):"&xpid=0")+"&sref="+encodeURIComponent(s),a.data("skimlinks-href",e)),a.data("skimlinks-orig-link")||a.data("skimlinks-orig-link",b),c.href=e,setTimeout(function(){c.href=a.data("skimlinks-orig-link")},100)}function va(a){var b=a.target;anchor=g(b);if(!b.href)b=a.currentTarget,anchor=g(b);Xa(anchor)}function Ya(){var a="";for(taglist in ja)a+=
","+taglist;return a+","}function Ha(a){function b(a,b,d){if(b=a.nodeName===c?g.trim(a.nodeValue):null){var a=a.parentNode.getBoundingClientRect(),e={};for(taglist in ja)for(var h=taglist.split(","),l=0;l<h.length;l++)e[h[l]]=ja[taglist];d=d.toLowerCase();if(""===d||e.hasOwnProperty(d))return t["widgetnode:"+f]={Contents:b,X:a.left,Y:a.top,W:a.width,H:a.height,Score:e[d]},N+=" "+b,f++,!0}return!1}a=ta||a||[];0==a.length&&(a[0]="html");if(!Za)for(var c=C.createTextNode("").nodeName,e=Ia||Ya(),d=[],
f=0,l=0,h=a.length;l<h;l++)for(var m=g(a[l]),n=0,p=m.length;n<p;n++)for(d.push({data:m[n],node_type:1,node_name:""});0<d.length;)if(node_data=d.shift(),node=node_data.data||!1,node_type=node_data.node_type||1,parent_node_name=node_data.node_name,node)if(node.hasChildNodes()){children_to_callback=[];for(i=0,h=node.childNodes.length;i<h;i++)(child=node.childNodes[i])&&child.nodeName&&!b(child,node_type,parent_node_name)&&-1!==e.indexOf(","+child.nodeName.toLowerCase()+",")&&d.push({data:child,node_type:1,
node_name:child.nodeName})}else b(node,node_type,parent_node_name)}function $a(a){1==a.nc?(g("table[id=threadslist]").size()?Ha(["table[id=threadslist]"],[]):Ha(["html"],[]),Wa()):2!=a.nc&&(w?K(a):L(a))}function F(a,b){f.skimWidgetCallStarted=1;var c=b?encodeURIComponent('{"widget":"1","instant":"1","page":"'+s+'","pubcode":"'+r+'"'+(z?',"force_country":"'+z+'"':"")+"}"):encodeURIComponent('{"widget":"1","page":"'+s+'""pubcode":"'+r+'"'+(z?',"force_country":"'+z+'"':"")+"}"),c=A+"?callback="+a+"&data="+
c+"&version=10&pubcode="+r;f.skimWidgetData?w?K(f.skimWidgetData):L(f.skimWidgetData):D(c)}function Ja(a){f.skimWidgetCallFinished?F("widgetDataCallback"+a,V?!1:!0):setTimeout("waitForCallBack"+a+"("+a+");",100)}function Qa(a){var b=a.data("jqae");b||(b={});var c=b.wrapperElement;c||(c=a.wrapInner("<div/>").find(">div"),c.css({margin:0,padding:0,border:0}));(b=c.data("jqae"))||(b={});var e=b.originalContent;e?c=b.originalContent.clone(!0).data("jqae",{originalContent:e}).replaceAll(c):c.data("jqae",
{originalContent:c.clone(!0)});a.data("jqae",{wrapperElement:c,containerWidth:a.width(),containerHeight:a.height()});var d=a.height(),f=(parseInt(a.css("padding-top"),10)||0)+(parseInt(a.css("border-top-width"),10)||0)-(c.offset().top-a.offset().top),l=!1,a=c;Y&&(a=g(c.find(Y).get().reverse()));a.each(function(){var a=g(this),b=a.text(),e=!1;if(c.innerHeight()-a.innerHeight()>d+f)a.remove();else if(ka(a),a.contents().length){l&&(W(a).get(0).nodeValue+=Z,l=!1);for(;c.innerHeight()>d+f;){e=W(a);if(e.length){var m=
e.get(0).nodeValue,n=m.length-4;-1<n?(m=g.trim(m.substring(0,n)),e.get(0).nodeValue=m):e.get(0).nodeValue="";e=!0}else e=!1;if(e)if(ka(a),a.contents().length)W(a).get(0).nodeValue+=Z;else{l=!0;a.remove();break}else{l=!0;a.remove();break}}"onEllipsis"==P&&e||"always"==P?a.attr("title",b):"never"!=P&&a.removeAttr("title")}})}function W(a){if(a.contents().length)return a=a.contents(),a=a.eq(a.length-1),a.filter(Ka).length?a:W(a);a.append("");a=a.contents();return a.eq(a.length-1)}function ka(a){if(a.contents().length)if(a=
a.contents(),a=a.eq(a.length-1),a.filter(Ka).length){var b=a.get(0).nodeValue,b=g.trim(b);if(""==b)return a.remove(),!0}else{for(;ka(a););if(!a.contents().length)return a.remove(),!0}return!1}function Ka(){return 3===this.nodeType}function ab(a){if(a.template)ga=a.template;if(a.skeleton)U=a.skeleton;if(a.tlength)Ba=a.tlength;if(a.maxproducts)M=a.maxproducts;if(a.minproducts)T=a.minproducts;a.link&&(w=!0);za=(new Date).getTime();Va(function(a){Na();X&&(q=a("#"+X),U=fa(U,{widgetWidth:x,widgetHeight:y,
widgetBackground:ra,widgetBorderColor:v,widgetName:G,disclosureUrl:bb}),q.hide(),a(C).ready(function(){f["widgetDataCallback"+m]=$a;f["waitForCallBack"+m]=Ja;f.skimWidgetCallStarted?Ja(m):F("widgetDataCallback"+m,V?!1:!0)}))})}var fa=function(){var a=RegExp("{{([a-z0-9_][\\.a-z0-9_]*)}}","gi");return function(b,c){return b.replace(a,function(a,b){for(var f=b.split("."),l=f.length,h=c,g=0;g<l;g++)if(h=h[f[g]],g===l-1)return h})}}(),f=this,C=f.document;pa="https://ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js";
oa="1.5.5";qa=f.skimlinks_domain||"go.redirectingat.com";A="//i.skimresources.com/api/index.php";ma="//t.skimresources.com/api/widget.php";na="//b.skimresources.com/bidding/index.php";Q="//i.skimresources.com/api/widget_fallback.php";la="//s.skimresources.com/css/widget_v6";$="";Z="...";P="never";Y=void 0;var r,E,ua,V=!1,Fa=0,Ga=0,w=!1,da=!1,u,m,O="skimab_widget",La=0,s,bb="http://skimlinks.com/showcases-disclosure",x,B="",y,q,X,I,ga,U,aa,ba,ca,v,ea=!1,ra,Ba,H=!1,G,J,S=0,sa=!1,z=!1,R=!1,Ia=!1,ta=
!1,ha=null,ja={"html,p,section,body,div,span,ul,ol,li,table,tbody,td,tr,th,tfoot,col,colgroup,em,strong,big,small,blockquote,cite,b,dl,dfn,dd,dt,ins,form,legend,noframes,pre,noscript,center,font,i,article,a,head":1,title:5,"h1,h2,h3,h4,h5":3,"strong,a":2},M,T=0,za=null,ya=null,t={},Za=0,N="",n={ts:Math.round((new Date).getTime()/1E3),typ:"w",wid:"",pag:"",siz:"",pub:"",jsl:0,jsf:"",guid:"",uc:"",prod:{},phr:{},bid:0},g;(function(){var a=/\bnoskim\b/i;return function(b,c,e){var d=b[0].className||"",
e=e||!1;return!a.test(d)&&!RegExp("\\b"+("no"+c).replace(/[-[\]{}()*+?.,\\^$|#]/g,"\\$&")+"\\b","i").test(d)&&(e||0==b.parents(".no"+c).length&&0==b.parents(".noskim").length)?!0:!1}})();local_stringify=function(a){var b,c,e,d,f,l={}.hasOwnProperty;if("object"===typeof a||a instanceof Array){d="";e=0;c=a instanceof Array;for(f in a)l.call(a,f)&&(b=a[f],0<e&&(d+=","),c?d+=json_stringify(b):(b=json_stringify(b),d+='"'+f+'":'+b),e++);return c?"["+d+"]":"{"+d+"}"}return"string"===typeof a?(b=a.replace(/"/g,
'\\"',a),'"'+b+'"'):isNaN(a)?"null":a.toString()};json_stringify=function(){var a;return"undefined"!==typeof JSON&&null!==JSON&&JSON.stringify&&'["la"]'===JSON.stringify(["la"])?(a=JSON.stringify,function(b){return a(b)}):local_stringify}();f.skimBanner=function(a){a||(a=f);try{f.location!=f.parent.location&&(V=!0)}catch(b){V=!1}if(a.skimWidget_location)s=a.skimWidget_location;else if(f.location!=f.parent.location)try{s=f.parent.location.href}catch(c){s=f.location.href}else s=f.location.href;if(u=
a.skimlinks_tracking||!1)n.uc=u;da=a.skimWidget_hook||!1;r=a.skimlinks_pub_id||"";Fa=a.skimlinks_dnt||0;Ga=a.skimlinks_nocookie||!1;Ia=a.skimWidget_force_tags||!1;x=a.skimWidget_width||300;y=a.skimWidget_height||250;X=a.skimWidget_target||!1;S=a.skimWidget_debug||0;z=a.skimWidget_country||!1;X.split("X");if(a.skimWidget_ab){O=f.skimWidget_ab_prefix||a.skimWidget_ab_prefix||"skimab_widget";for(key in a.testCases)a.testCases.hasOwnProperty(key)&&La++;a:{var e,d,g,l=C.cookie.split(";");for(e=0;e<l.length;e++)if(d=
l[e].substr(0,l[e].indexOf("=")),g=l[e].substr(l[e].indexOf("=")+1),d=d.replace(/^\s+|\s+$/g,""),d==O){u=g;break a}e=Math.floor(Math.random()*La)+1;e=O+e;d=O;g=new Date;g.setTime(g.getTime()+31536E6);g="; expires="+g.toGMTString();C.cookie=d+"="+e+g+"; path=/";u=e}n.uc=u;e=parseInt(u.replace(O,""));try{a=a.testCases[e]}catch(h){a=a.testCases["1"]}}Ma(a);m=Math.floor(1E5*Math.random()+1);f["skimTheme"+m]=ab;a="//i.skimresources.com/api/widget_template.php?callback=skimTheme"+m+"&width="+x+"&height="+
y+"&name="+G+"&version=2";a=I?a+"&images=1":a+"&images=0";D(a)}})();


function prepareWidget(target_id, widget_id, parameters, tries){
    
    var scripts = document.getElementsByTagName('script');
    for (i=0;i<scripts.length;i++){
        var src = scripts[i].getAttribute("src");
        var run = scripts[i].getAttribute("run");
        
        if (src && src.indexOf(widget_id + ".adunit.js") !== -1 && !run){
            
            var divTag = document.createElement("div");
            divTag.setAttribute("id","skimlinks-" + widget_id + "X" + target_id);
        
            if (scripts[i].parentNode && scripts[i].parentNode.nodeName == "HEAD"){
                if (!document.body){
                    tries++;
                    if (tries < 10){
                        setTimeout(function(){
                            prepareWidget(target_id, widget_id, parameters, tries);
                        }, 100);
                    }
                    
                    return false;
                } else {
                    scripts[i].setAttribute("run","1");
                    if (document.body.firstChild){
                        document.body.insertBefore(divTag, document.body.firstChild);
                    } else {
                        document.body.appendChild(divTag);
                    }
                }
            } else {
                scripts[i].setAttribute("run","1");
                if (scripts[i].nextSibling) {
                    scripts[i].parentNode.insertBefore(divTag, scripts[i].nextSibling);
                } else {
                    scripts[i].parentNode.appendChild(divTag);
                }
            }
            
            skimBanner(parameters);
        }
    }
}

prepareWidget(window['skimWidgetCounter'], '21603X797475X981', {
                "skimWidget_target" : "skimlinks-21603X797475X981X" + window['skimWidgetCounter'],
                "skimWidget_width" : 160,
                "skimWidget_height" : 600,
                "skimWidget_ab" : true,
                "skimWidget_ab_prefix" : "skimab_ccef1ac49115",
                "skimWidget_nometa" : true,
                "skimWidget_hook" : false,
                "testCases":{
                    	"1": {
            "skimWidget_border" : "transparent",
            "skimWidget_background" : "#e6e6e6",
            "skimWidget_color1" : "#354f81",
            "skimWidget_color2" : "#297896",
            "skimWidget_color3" : "#7a7a7a",
            "skimWidget_images" : true,
            "skimWidget_name": "_default",
            "skimWidget_id": "02"
        }
                },
                "skimlinks_pub_id" : "21603X797475"
            }, 0);