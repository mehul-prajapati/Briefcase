if(!yseBadge){var yseBadge={shellTmpl:'<div id="${id}" class="yse-b-${size}"${action}><div class="yse-b-logo"><span>&nbsp;</span></div></div>',innerTmpl:'<div class="yse-b-txt"><span>${count}</span>${caption}</div>',badgeConfigs:[],pageScheme:'',pageDomain:'',pagePath:'',substitute:function(sTmpl,oObj){return sTmpl.replace(/\$\{([^}]+)\}/g,function(){var key=arguments[1],val=oObj[key]||'';return val;});},sanitizeURL:function(url){url=url.replace(/[<>]/g,function(){return(arguments[0]==='<')?'&lt;':'&gt;';});return encodeURIComponent(url);},init:function(){var loc=window.location.href.split('/');this.pageScheme=loc.shift();loc.shift();this.pageDomain=loc.shift();this.pagePath=loc.join('/');yseBadge.init=function(){};},render:function(oConf){var size=(oConf.s===1)?'lg':'sm',track=(oConf.t===1)?1:0,trans=oConf.tr||{},seDom=oConf.d||'siteexplorer.search.yahoo.com',cssUrl=oConf.c||'',apiUrl=oConf.a||'http://search.yahooapis.com/SiteExplorerService/V1/inlinkCount',apiId=oConf.ai||'YahooDemo',indx=1,bId='yseb-'+indx,el,fnName,url,action,output,rex;el=document.getElementById(bId);while(el){indx+=1;bId='yseb-'+indx;el=document.getElementById(bId);}
this.badgeConfigs[bId]=oConf;url=(track)?this.pageScheme+'//'+this.pageDomain+'/':window.location.href;action=' onclick="window.location=\'http://'+seDom+
'/advsearch?p='+this.sanitizeURL(url)+'&bwm=i&bwmf=u\'"';fnName='badge'+indx+'Render';yseBadge[fnName]=function(oRslt){var id=arguments.callee.badgeId,el=document.getElementById(id),cfg=yseBadge.badgeConfigs[id],caption,count;if(cfg.tr){caption=(cfg.t===1)?cfg.tr.s:cfg.tr.p;}
if(!oRslt||oRslt.Error){count='~0~';}else{count=oRslt.ResultSet.totalResultsAvailable;}
el.innerHTML+=yseBadge.substitute(yseBadge.innerTmpl,{count:count,caption:caption});};yseBadge[fnName].badgeId=bId;output='';if(cssUrl){if(this.pageScheme==='https'){cssUrl=cssUrl.replace(/^http:/i,'https:');}else{cssUrl=cssUrl.replace(/^https:/i,'http:');}
output+='<link href="'+cssUrl+'" rel="stylesheet">';}
output+=this.substitute(this.shellTmpl,{id:bId,size:size,action:action,scheme:this.pageScheme});if(apiUrl){output+='<script src="'+apiUrl;output+='?appid='+apiId+'&entire_site='+track+'&query=';output+=this.sanitizeURL(window.location.href);output+='&output=json&callback=yseBadge%2E'+fnName;output+='"><\/script>';}
return output;}};yseBadge.init();}