mw.loader.implement("ext.visualEditor.viewPageTarget.init",function(){(function(){var conf,tabMessages,uri,pageExists,viewUri,veEditUri,isViewPage,init,support,getTargetDeferred,enable,userPrefEnabled,plugins=[];function getTarget(){var loadTargetDeferred;if(!getTargetDeferred){getTargetDeferred=$.Deferred();loadTargetDeferred=$.Deferred().done(function(){var target=new ve.init.mw.ViewPageTarget();ve.init.mw.targets.push(target);if(mw.track){ve.trackSubscribeAll(function(topic,data){mw.track.call(null,'ve.'+topic,data);});}ve.init.mw.ViewPageTarget.prototype.setupSectionEditLinks=init.setupSectionLinks;target.addPlugins(plugins);getTargetDeferred.resolve(target);}).fail(getTargetDeferred.reject);mw.loader.using('ext.visualEditor.viewPageTarget',loadTargetDeferred.resolve,loadTargetDeferred.reject);}return getTargetDeferred.promise();}conf=mw.config.get('wgVisualEditorConfig');tabMessages=conf.tabMessages;uri=new mw.Uri();pageExists=!!mw.config.get('wgArticleId')||mw.config.get(
'wgNamespaceNumber')<0;viewUri=new mw.Uri(mw.util.getUrl(mw.config.get('wgRelevantPageName')));veEditUri=viewUri.clone().extend({'veaction':'edit'});isViewPage=(mw.config.get('wgIsArticle')&&!('diff'in uri.query));support={es5:!!(Array.isArray&&Array.prototype.filter&&Array.prototype.indexOf&&Array.prototype.map&&Date.now&&Date.prototype.toJSON&&Function.prototype.bind&&Object.create&&Object.keys&&String.prototype.trim&&window.JSON&&JSON.parse&&JSON.stringify),contentEditable:'contentEditable'in document.createElement('div')};init={support:support,blacklist:conf.blacklist,addPlugin:function(plugin){plugins.push(plugin);},setupSkin:function(){init.setupTabs();init.setupSectionLinks();},setupTabs:function(){var caVeEdit,action=pageExists?'edit':'create',pTabsId=$('#p-views').length?'p-views':'p-cactions',$caSource=$('#ca-viewsource'),$caEdit=$('#ca-edit'),$caVeEdit=$('#ca-ve-edit'),$caEditLink=$caEdit.find('a'),$caVeEditLink=$caVeEdit.find('a'),reverseTabOrder=$('body').hasClass('rtl')&&
pTabsId==='p-views',caVeEditNextnode=(reverseTabOrder^conf.tabPosition==='before')?$caEdit.get(0):$caEdit.next().get(0);if(!$caVeEdit.length){if($caEdit.length&&!$caSource.length){caVeEdit=mw.util.addPortletLink(pTabsId,veEditUri,tabMessages[action]!==null?mw.msg(tabMessages[action]):$caEditLink.text(),'ca-ve-edit',mw.msg('tooltip-ca-ve-edit'),mw.msg('accesskey-ca-ve-edit'),caVeEditNextnode);$caVeEdit=$(caVeEdit);$caVeEditLink=$caVeEdit.find('a');}}else{if(reverseTabOrder^conf.tabPosition==='before'){if($caEdit[0].nextSibling===$caVeEdit[0]){$caVeEdit.after($caEdit);}}else{if($caVeEdit[0].nextSibling===$caEdit[0]){$caEdit.after($caVeEdit);}}if(tabMessages[action]!==null){$caVeEditLink.text(mw.msg(tabMessages[action]));}}if(tabMessages[action+'source']!==null){$caEditLink.text(mw.msg(tabMessages[action+'source']));}if(tabMessages[action+'appendix']!==null){$caVeEditLink.append($('<span>').addClass('ve-tabmessage-appendix').text(mw.msg(tabMessages[action+'appendix'])));}if(tabMessages[
action+'sourceappendix']!==null){$caEditLink.append($('<span>').addClass('ve-tabmessage-appendix').text(mw.msg(tabMessages[action+'sourceappendix'])));}if(isViewPage){$caVeEdit.click(init.onEditTabClick);}},setupSectionLinks:function(){var $editsections=$('#mw-content-text .mw-editsection');$editsections.css('direction',$('body').css('direction'));if($editsections.find('.mw-editsection-visualeditor').length===0){$editsections.each(function(){var $editsection=$(this),$editSourceLink=$editsection.find('a').eq(0),$editLink=$editSourceLink.clone(),$divider=$('<span>'),dividerText=mw.msg('pipe-separator');if(tabMessages.editsectionsource!==null){$editSourceLink.text(mw.msg(tabMessages.editsectionsource));}if(tabMessages.editsection!==null){$editLink.text(mw.msg(tabMessages.editsection));}$divider.addClass('mw-editsection-divider').text(dividerText);$editLink.attr('href',function(i,val){return new mw.Uri(veEditUri).extend({'vesection':new mw.Uri(val).query.section});}).addClass(
'mw-editsection-visualeditor');if(conf.tabPosition==='before'){$editSourceLink.before($editLink,$divider);}else{$editSourceLink.after($divider,$editLink);}});}if(tabMessages.editsectionappendix){$editsections.find('.mw-editsection-visualeditor').append($('<span>').addClass('ve-tabmessage-appendix').text(mw.msg(tabMessages.editsectionappendix)));}if(tabMessages.editsectionsourceappendix){$editsections.find('a:not(.mw-editsection-visualeditor)').append($('<span>').addClass('ve-tabmessage-appendix').text(mw.msg(tabMessages.editsectionsourceappendix)));}if(isViewPage){$editsections.addClass('mw-editsection-expanded').find('.mw-editsection-visualeditor').click(init.onEditSectionLinkClick);}},onEditTabClick:function(e){if((e.which&&e.which!==1)||e.shiftKey||e.altKey||e.ctrlKey||e.metaKey){return;}e.preventDefault();getTarget().done(function(target){ve.track('Edit',{action:'edit-link-click'});target.activate();});},onEditSectionLinkClick:function(e){if((e.which&&e.which!==1)||e.shiftKey||e.
altKey||e.ctrlKey||e.metaKey){return;}e.preventDefault();getTarget().done(function(target){ve.track('Edit',{action:'section-edit-link-click'});target.saveEditSection($(e.target).closest('h1, h2, h3, h4, h5, h6').get(0));target.activate();});}};support.visualEditor=support.es5&&support.contentEditable&&(('vewhitelist'in uri.query)||!$.client.test(init.blacklist,null,true));enable=mw.user.options.get('visualeditor-enable',conf.defaultUserOptions.enable);userPrefEnabled=(!(conf.disableForAnons&&mw.config.get('wgUserName')===null)&&(mw.config.get('wgUserName')===null?(conf.defaultUserOptions.enable&&!conf.defaultUserOptions.betatempdisable):(enable&&enable!=='0'&&!mw.user.options.get('visualeditor-betatempdisable',conf.defaultUserOptions.betatempdisable))));init.isAvailable=(support.visualEditor&&!mw.config.get('wgIsRedirect',!!uri.query.redirect)&&$.inArray(mw.config.get('skin'),conf.skins)!==-1&&$.inArray(new mw.Title(mw.config.get('wgRelevantPageName')).getNamespaceId(),conf.namespaces)
!==-1&&mw.config.get('wgPageContentModel')==='wikitext');mw.libs.ve=init;if(init.isAvailable&&userPrefEnabled){$('html').addClass('ve-available');}else{$('html').addClass('ve-not-available');}$(function(){if(init.isAvailable){if(isViewPage&&uri.query.veaction==='edit'){getTarget().done(function(target){target.activate();});}}if(userPrefEnabled){init.setupSkin();}});}());;},{"css":[
".mw-editsection{white-space:nowrap;padding-right:0.25em; unicode-bidi:-moz-isolate;unicode-bidi:-webkit-isolate;unicode-bidi:isolate}.mw-editsection-divider{color:#555} .mw-content-ltr .mw-editsection-expanded .mw-editsection-bracket:first-of-type,.mw-content-rtl .mw-editsection-expanded .mw-editsection-bracket:not(:first-of-type){margin-left:-0.25em;margin-right:0.25em;color:#555} .mw-content-rtl .mw-editsection-expanded .mw-editsection-bracket:first-of-type,.mw-content-ltr .mw-editsection-expanded .mw-editsection-bracket:not(:first-of-type){margin-right:-0.25em;margin-left:0.25em;color:#555}.ve-tabmessage-appendix{font-size:0.7em;vertical-align:top;line-height:1.43em;padding-left:0.5em; background-image:none !important;display:inline !important}\n/* cache key: enwiki:resourceloader:filter:minify-css:7:10d5f32d441941e72673fc73cdfe14a9 */"]},{"accesskey-ca-editsource":"e","accesskey-ca-ve-edit":"v","pipe-separator":"\u00a0| ","tooltip-ca-createsource":
"Create the source code of this page","tooltip-ca-editsource":"Edit the source code of this page","tooltip-ca-ve-edit":"Edit this page with VisualEditor","visualeditor-beta-appendix":"beta","visualeditor-ca-createsource":"Create source","visualeditor-ca-editsource":"Edit source","visualeditor-ca-editsource-section":"edit source"});mw.loader.implement("jquery.cookie",function(){(function($){$.cookie=function(key,value,options){if(arguments.length>1&&(!/Object/.test(Object.prototype.toString.call(value))||value===null||value===undefined)){options=$.extend({},options);if(value===null||value===undefined){options.expires=-1;}if(typeof options.expires==='number'){var days=options.expires,t=options.expires=new Date();t.setDate(t.getDate()+days);}value=String(value);return(document.cookie=[encodeURIComponent(key),'=',options.raw?value:encodeURIComponent(value),options.expires?'; expires='+options.expires.toUTCString():'',options.path?'; path='+options.path:'',options.domain?'; domain='+options
.domain:'',options.secure?'; secure':''].join(''));}options=value||{};var decode=options.raw?function(s){return s;}:decodeURIComponent;var pairs=document.cookie.split('; ');for(var i=0,pair;pair=pairs[i]&&pairs[i].split('=');i++){if(decode(pair[0])===key)return decode(pair[1]||'');}return null;};})(jQuery);;},{},{});mw.loader.implement("jquery.mwExtension",function(){(function($){$.extend({trimLeft:function(str){return str===null?'':str.toString().replace(/^\s+/,'');},trimRight:function(str){return str===null?'':str.toString().replace(/\s+$/,'');},ucFirst:function(str){return str.charAt(0).toUpperCase()+str.substr(1);},escapeRE:function(str){return str.replace(/([\\{}()|.?*+\-\^$\[\]])/g,'\\$1');},isDomElement:function(el){return!!el&&!!el.nodeType;},isEmpty:function(v){var key;if(v===''||v===0||v==='0'||v===null||v===false||v===undefined){return true;}if(v.length===0){return true;}if(typeof v==='object'){for(key in v){return false;}return true;}return false;},compareArray:function(
arrThis,arrAgainst){if(arrThis.length!==arrAgainst.length){return false;}for(var i=0;i<arrThis.length;i++){if($.isArray(arrThis[i])){if(!$.compareArray(arrThis[i],arrAgainst[i])){return false;}}else if(arrThis[i]!==arrAgainst[i]){return false;}}return true;},compareObject:function(objectA,objectB){var prop,type;if(typeof objectA===typeof objectB){if(typeof objectA==='object'){if(objectA===objectB){return true;}else{for(prop in objectA){if(prop in objectB){type=typeof objectA[prop];if(type===typeof objectB[prop]){switch(type){case'object':if(!$.compareObject(objectA[prop],objectB[prop])){return false;}break;case'function':if(objectA[prop].toString()!==objectB[prop].toString()){return false;}break;default:if(objectA[prop]!==objectB[prop]){return false;}break;}}else{return false;}}else{return false;}}for(prop in objectB){if(!(prop in objectA)){return false;}}}}}else{return false;}return true;}});}(jQuery));;},{},{});mw.loader.implement("mediawiki.page.startup",function(){(function(mw,$){
mw.page={};$('html').addClass('client-js').removeClass('client-nojs');$(function(){mw.util.init();mw.hook('wikipage.content').fire($('#mw-content-text'));});}(mediaWiki,jQuery));;},{},{});mw.loader.implement("mediawiki.toc",function(){(function(mw,$){'use strict';mw.hook('wikipage.content').add(function($content){function toggleToc($toggleLink){var $tocList=$content.find('#toc ul:first');if($tocList.length){if($tocList.is(':hidden')){$tocList.slideDown('fast');$toggleLink.text(mw.msg('hidetoc'));$content.find('#toc').removeClass('tochidden');$.cookie('mw_hidetoc',null,{expires:30,path:'/'});}else{$tocList.slideUp('fast');$toggleLink.text(mw.msg('showtoc'));$content.find('#toc').addClass('tochidden');$.cookie('mw_hidetoc','1',{expires:30,path:'/'});}}}var $tocTitle,$tocToggleLink,hideTocCookie;$tocTitle=$content.find('#toctitle');$tocToggleLink=$content.find('#togglelink');if($content.find('#toc').length&&$tocTitle.length&&!$tocToggleLink.length){hideTocCookie=$.cookie('mw_hidetoc');
$tocToggleLink=$('<a href="#" class="internal" id="togglelink"></a>').text(mw.msg('hidetoc')).click(function(e){e.preventDefault();toggleToc($(this));});$tocTitle.append($tocToggleLink.wrap('<span class="toctoggle"></span>').parent().prepend('&nbsp;[').append(']&nbsp;'));if(hideTocCookie==='1'){toggleToc($tocToggleLink);}}});}(mediaWiki,jQuery));;},{},{"hidetoc":"hide","showtoc":"show"});
/* cache key: enwiki:resourceloader:filter:minify-js:7:13e72a3d73031d241e4f96767eecd66b */