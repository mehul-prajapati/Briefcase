﻿var click_block=0,IsMob=0,IsApp=0,abp=false;
var IsTFD=0,PageLang='en',Locale='en_US',UCC='US',GDom='google.com';Help='Help';
var word='';
var Domain='thefreedictionary.com';
var Sources,sources=[];
var AdResults=0;var OvResults=0;var OResults='';var GResults='';var IsG=false;var IsMSN=false;IsY=false;
var AdsNum = 1, MoreAds=1, Ads = [], RAd,  kw = '', kw2 = '', g_kw = 1, CurrentAd = 0, CurrentRad = 0, AdBlocks = [];
var g_client=google_ad_client = "ca-pub-2694630391511205";google_kw_type="broad";google_ad_output = "js";google_encoding="utf-8";google_color_url = google_color_link =color_link= "#1D4994";google_color_text = "#000000";google_color_bg = "#FFFFFF";g_cf=0;
var google_afs_client = "pub-2694630391511205", afs_pageOptions = null, ch_c="8922314704";
google_num_radlinks = '10';google_max_radlink_len = '17';
var ImgAd='';
var ad_channel='', ads_blocked=1;
var CanonicalURL = URL = location.href.replace(location.hash, '')
var loc = encodeURIComponent(URL);
var IE=(navigator.appName=='Microsoft Internet Explorer' && navigator.userAgent.indexOf("Opera")==-1?1:0);
function ById(id){return document.getElementById(id)}
function langHost(){return 'http://'+(PageLang=='en'?'www':PageLang)+'.thefreedictionary.com/'}
function dictionary(){
if (click_block){
click_block=0;
return;
}
if (!IE){
t = (typeof(window["getSelection"])=="undefined"?document.getSelection():window.getSelection().toString());
opennewdictwin(t);
}
else {
t = document.selection.createRange();
if (document.selection.type == 'Text' && t.text != '') {
document.selection.empty();
opennewdictwin(t.text);
}}}
function opennewdictwin(text){
text=text.replace(/[́!.:?,;"]/g, '').replace(/[\n\t ]/g, ' ').replace(/^\s+|\s+$/, '');
if (text > '') {
var newloc;
if (text.toUpperCase()==word.toUpperCase()) return;
if (PageLang!='en') newloc='/'+encodeURIComponent(text);
else newloc='http:/'+'/www.'+Domain+'/'+encodeURIComponent(text);
if (URL.toLowerCase()!=newloc.toLowerCase()) document.location=newloc;
}}
function dw(t){document.write(t)}
var Langs ={
'af':['Afrikaans','Afrikaans',''],
'ar':['Arabic','العربية','اختر لغة'],
'bg':['Bulgarian','Български','Изберете език'],
'ca':['Catalan','Català',''],
'zh':['Chinese Simplified','中文简体','选择一种语言'],
'tw':['Chinese Traditional','中文繁體','選擇一種語言'],
'hr':['Croatian','Hrvatski','Odaberite jezik'],
'cs':['Czech','Česky','Zvolte si jazyk'],
'da':['Danish','Dansk','Vælg et sprog'],
'nl':['Dutch','Nederlands','Selecteer een taal'],
'en':['English','','Select a language'],
'eo':['Esperanto','Esperanto',''],
'et':['Estonian','eesti keel',''],
'fa':['Farsi','فارسی',''],
'fi':['Finnish','Suomi','Valitse kieli'],
'fr':['French','Français','Sélectionnez une langue'],
'de':['German','Deutsch','Wählen Sie eine Sprache'],
'el':['Greek','Ελληνική','Για χρήστες'],
'he':['Hebrew','עִבְרִית',''],
'hi':['Hindi','हिन्दी','कोई भाषा चुनें'],
'hu':['Hungarian','magyar',''],
'is':['Icelandic','íslenska',''],
'id':['Indonesian','Indonesia',''],
'ia':['Interlingua','Interlingua',''],
'it':['Italian','Italiano','Seleziona una lingua'],
'ja':['Japanese','日本語','希望の言語を選択'],
'ko':['Korean','한국어','언어를 선택'],
'la':['Latin','Lingua Latina',''],
'lv':['Latvian','Latviešu',''],
'lt':['Lithuanian','Lietuvių',''],
'ml':['Malay','Bahasa Melayu',''],
'no':['Norwegian','Norsk','Velg et språk'],
'pl': ['Polish', 'Polski', 'Wybierz język'],
'ps': ['Pashto', 'پښتو,پشتو', ''],
'pt':['Portuguese','Português','Selecione um idioma'],
'ro':['Romanian','Română','Selectaţi o limbă'],
'ru':['Russian','Русский','Выберите язык'],
'sr':['Serbian','српски',''],
'sk':['Slovak','slovenčina',''],
'sl':['Slovenian','slovenski',''],
'es':['Spanish','Español','Seleccione un idioma'],
'sw':['Swahili','Kiswahili',''],
'sv':['Swedish','Svenska','Välj ett språk'],
'th':['Thai','ภาษาไทย',''],
'tr':['Turkish','Türkçe','Bir dil seç'],
'uk':['Ukrainian','українська',''],
'ur':['Urdu','اردو',''],
'vi':['Vietnamese','Tiếng Việt','']
}
function srp(s) {sources.push(s);if(MoreAds) write_ads(1, 1, 10)}
function wiki(){srp('wiki')}
function foldoc(){dw('<br><div class=brand_copy>This article is provided by FOLDOC - Free Online Dictionary of Computing (<a target=_blank href="http:/'+'/foldoc.org">foldoc.org</a>)</div><br>');srp('foldoc')};
function cde(){dw('<br><div class=brand_copy>Computer Desktop Encyclopedia copyright ©1981-2013 by <a target=_blank href=http:/'+'/www.computerlanguage.com/tfd.html>The Computer Language Company Inc</a>. All Right reserved. THIS DEFINITION IS FOR PERSONAL USE ONLY. All other reproduction is strictly prohibited without permission from the publisher.</div><br>');srp('cde')}
function law(){dw('<div class=brand_copy>Copyright © 1981-2005 by <a target=_blank href=http:/'+'/www.farlex.com/hills.htm>Gerald N. Hill and Kathleen T. Hill</a>. All Right reserved.</div>');srp('hills')};
function hm(){dw('<p class=brand_copy>The American Heritage&reg; Dictionary of the English Language, Fourth Edition copyright ©2000 by Houghton Mifflin Company. Updated in 2009. Published by <a target=_blank href="http:/'+'/www.eref-trade.hmco.com/">Houghton Mifflin Company</a>. All rights reserved.</p>');srp('hm')}
function hut(f){location='http://www.thefreedictionary.com';
var t=' please sign-in or <a href="https:/'+'/secure.farlex.com/protected/subscribe.aspx?url='+loc+'">register</a> for a free trial.</p>'
if (!SignedIn)
	switch(f){
	case 1:dw('<p><b><font color=red>This article is available to subscribers only.</font></b> To read this article'+t);break;
	case 3:dw('<p><b><font color=red>Only a portion of this article is shown. The entire article is available to subscribers.</font></b> To read this article in its entirety'+t);break;
	}
hutch();
}
function hutch(){dw('<div class=brand_copy>This article is © Research Machines plc 2009. All rights reserved. <a target=_blank href=http:/'+'/www.helicon.co.uk>Helicon Publishing</a> is a division of Research Machines plc.</div>');srp('hutch')};
function chron(){dw('<div class=brand_copy>This chronology is © Research Machines plc 2009. All rights reserved. <a target=_blank href=http:/'+'/www.helicon.co.uk>Helicon Publishing</a> is a division of Research Machines plc.</div>');srp('chron')};
function columbia(){dw('<br><div class=brand_copy>The Columbia Electronic Encyclopedia&reg; Copyright © 2013, Columbia University Press. Licensed from Columbia University Press. All rights reserved. <A target=_blank href="http:/'+'/www.cc.columbia.edu/cu/cup/">www.cc.columbia.edu/cu/cup/</A></div>');srp('columbia')}
function harvey(){dw('<p class=brand_copy>Copyright © 2012, <A target=_blank href="http:/'+'/www.duke.edu/~charvey/">Campbell R. Harvey</A>. All Rights Reserved.</p>');srp('harvey')};
function hm_med(){dw('<div class=brand_copy>The American Heritage&reg; Medical Dictionary Copyright © 2007, 2004 by Houghton Mifflin Company. Published by <a target=_blank href="http:/'+'/www.eref-trade.hmco.com/">Houghton Mifflin Company</a>. All rights reserved.</div>');srp('hm_med')}
function dorland(){dw('<br><div class=brand_copy>Dorland\'s Medical Dictionary for Health Consumers. © 2007 by Saunders, an imprint of Elsevier, Inc. All rights reserved.</div>');srp('dorland')};
function acr(){dw('<p><a target=_blank href="http:/'+'/www.acronymfinder.com/add.asp?acronym='+encodeURIComponent(word)+'">submit new definition</a></p>');acr_copy()};
function acr_copy(){dw('<div class=brand_copy>Copyright 1988-2008 <a target=_blank href="http:/'+'/www.acronymfinder.com">AcronymFinder.com</a>, All rights reserved.</div>');srp('af');};
function acro_nav(a,c,i,m,s,o,j,b){if (a>15) dw('Category filter: <select onchange="acro_cat(this)"><option selected value=0>Show All ('+a+')<option value=1>Most Common ('+c+')<option value=2>Technology ('+i+')<option value=4>Government & Military ('+m+')<option value=8>Science & Medicine ('+s+')<option value=64>Business ('+b+')<option value=16>Organizations ('+o+')<option value=32>Slang / Jargon ('+j+')</select>')};
function acro_cat(sel){
	var cat=Number(sel.options[sel.selectedIndex].value);
	var tr=ById('AcrFinder').childNodes[0].childNodes;
	for (i in tr){
		var n=tr[i];
		if (n.getAttribute && n.getAttribute('cat')) n.style.display=(!cat || (Number(n.getAttribute('cat')) & cat)?'':'none');
	}
}
function IdiI(){dw('<p class=brand_copy><i><a target=_blank href="http:/'+'/www.cambridge.org/elt/elt_projectpage.asp?id=2501153">Cambridge Idioms Dictionary, 2nd ed.</a></i> Copyright © Cambridge University Press 2006. Reproduced with permission.</p>');srp('IdiI')};
function IdiA(){dw('<p class=brand_copy><i><a target=_blank href="http:/'+'/www.cambridge.org/cdai">Cambridge Dictionary of American Idioms</a></i> Copyright © Cambridge University Press 2003. Reproduced with permission.</p>');srp('IdiA')};
function aboutAskALawyer(){dw('<span onmouseover="t_i(1)" onmouseout="t_o(1)" style="margin-left:12pt;font-size:8pt;font-weight:normal;text-decoration:underline;cursor:help">what\'s this?</span>')}
function wld_ask(){return}
function wld_ask2(){dw('<div style="margin-top:18pt">Do you have a legal question? <a href="/_/gr.aspx?url=http:/'+'/www.worldlawdirect.com/asklawyer/">Ask a lawyer now</a>.</div>')};//<div><a href="/_/gr.aspx?url=http:/'+'/www.uslegalforms.com/?auslf=thefreedict">Download legal forms for all your legal needs</a>.  Wills, Power of Attorney, Living Will, Real Estate, Landlord Tenant, Corporate and more!</div>')};
function wld(){wld_ask2();dw('<div class=brand_copy style="margin-top:18pt">These questions and answers are provided by WORLDLawDirect.com. ©2000 - 2007 by WORLDLawDirect.com, Inc.</div>');
	dw('<span ID=Tp1 class=hint>This is a sample question from the WORLDLawDirect database. WLD is the leading interactive provider of U.S.and international legal solutions. WLD has resolved legal issues for over 110,000 clients. Click the link below to ask your own question. Experienced attorneys will personally answer and advise you--within hours.</span>');
	srp('wld')};
function vet() {dw('<div class=brand_copy>Saunders Comprehensive Veterinary Dictionary, 3 ed. © 2007 Elsevier, Inc. All rights reserved</div>');srp('vet')};
function millodot() {dw('<div class=brand_copy>Millodot: Dictionary of Optometry and Visual Science, 7th edition. © 2009 Butterworth-Heinemann</div>');srp('millodot')};
function hm_sci() {dw('<p class=brand_copy>The American Heritage&reg; Science Dictionary Copyright © 2005 by Houghton Mifflin Company. Published by <a target=_blank href="http:/'+'/www.eref-trade.hmco.com/">Houghton Mifflin Company</a>. All rights reserved.</p>');srp('hm_sci')};
function hm_wsw(){dw('<div class=brand_copy>Wall Street Words: An A to Z Guide to Investment Terms for Today\'s Investor by David L. Scott. Copyright © 2003 by Houghton Mifflin Company. Published by <a target=_blank href="http:/'+'/www.eref-trade.hmco.com/">Houghton Mifflin Company</a>. All rights reserved.</div>');srp('hm_wsw')};
function mosby(){dw('<div class=brand_copy>Mosby\'s Dental Dictionary, 2nd edition. © 2008 Elsevier, Inc. All rights reserved.</div>');srp('mosby')};
function MillerKeane(){dw('<div class=brand_copy>Miller-Keane Encyclopedia and Dictionary of Medicine, Nursing, and Allied Health, Seventh Edition. © 2003 by Saunders, an imprint of Elsevier, Inc. All rights reserved.</div>');srp('millerkeane')};
function mosbyCAM(){dw('<div class=brand_copy>Jonas: Mosby\'s Dictionary of Complementary and Alternative Medicine. (c) 2005, Elsevier.</div>');srp('mosbyCAM')};
function mosbyMD(){dw('<div class=brand_copy>Mosby\'s Medical Dictionary, 8th edition. © 2009, Elsevier.</div>');srp('mosbyMD')};
function Counties(){dw('<div class=brand_copy>Counties USA: A Directory of United States Counties, 3rd Edition. © 2006 by Omnigraphics, Inc.</div>');srp('counties')};
function Holidays(){dw('<div class=brand_copy>Holidays, Festivals, and Celebrations of the World Dictionary, Fourth Edition. © 2010 by Omnigraphics, Inc.</div>');srp('holidays')};
function Parks(){dw('<div class=brand_copy>Parks Directory of the United States, 5th Edition. © 2007 by Omnigraphics, Inc.</div>');srp('parks')};
function Segen(){dw('<div class=brand_copy>Segen\'s Medical Dictionary. © 2012 Farlex, Inc. All rights reserved.</div>');srp('segen')};
function WordTrivia(){dw('<div class=brand_copy>Farlex Trivia Dictionary. © 2012 Farlex, Inc. All rights reserved.</div>');srp('wordtrivia')};
function weal(){dw('<div class=brand_copy>West\'s Encyclopedia of American Law, edition 2. Copyright 2008 The Gale Group, Inc. All rights reserved.</div>');srp('weal')};
function bouvier(){dw('<p class=brand_copy>A Law Dictionary, Adapted to the Constitution and Laws of the United States. By John Bouvier. Published 1856.</p>');srp('bouvier')};
function mili(){dw('<div class=brand_copy>Dictionary of Military and Associated Terms. US Department of Defense 2005.</div>');srp('mili')};
function webster(){dw('<div class=brand_copy>Webster\'s Revised Unabridged Dictionary, published 1913 by C. & G. Merriam Co.</div>');srp('webster')};
function wn(){dw('<div class=brand_copy>Based on WordNet 3.0, Farlex clipart collection. © 2003-2012 Princeton University, Farlex Inc.</div>');srp('wn')};
function gem(){dw('<div class=brand_copy>Gale Encyclopedia of Medicine. Copyright 2008 The Gale Group, Inc. All rights reserved.</div>');srp('gem')};
function dcng(){dw('<div class=brand_copy>Dictionary of Collective Nouns and Group Terms. Copyright 2008 The Gale Group, Inc. All rights reserved.</div>');srp('dcng')};
function allusions(){dw('<div class=brand_copy>Allusions&#x2014;Cultural, Literary, Biblical, and Historical: A Thematic Dictionary. Copyright 2008 The Gale Group, Inc. All rights reserved.</div>');srp('allusions')};
function ologies(){dw('<p class=brand_copy>-Ologies & -Isms. Copyright 2008 The Gale Group, Inc. All rights reserved.</p>');srp('ologies')};
function HC_Discovery(){dw('<p class=brand_copy>Collins Discovery Encyclopedia, 1st edition © HarperCollins Publishers 2005</p>');srp('HC_Discovery')};
function hc_dict(){dw('<p class=brand_copy><a href="/_/misc/HarperCollinsProducts.aspx?English">Collins English Dictionary – Complete and Unabridged</a>  © HarperCollins Publishers 1991, 1994, 1998, 2000, 2003</p>');srp('hc_dict')}
function hc_thes(){dw('<p class=brand_copy><a href="/_/misc/HarperCollinsProducts.aspx?EnglishThesaurus">Collins Thesaurus of the English Language</a> – Complete and Unabridged 2nd Edition. 2002 © HarperCollins Publishers 1995, 2002</p>');srp('hc_thes')};
function hc_En_Es(){dw('<div class=brand_copy><a href="/_/misc/HarperCollinsProducts.aspx?Spanish">Collins Spanish Dictionary</a> - Complete and Unabridged 8th Edition 2005 © William Collins Sons & Co. Ltd.  1971, 1988 © HarperCollins Publishers 1992, 1993, 1996, 1997, 2000, 2003, 2005</div>');srp('hc_Es')};
function hc_En_Fr(){dw('<div class=brand_copy><a href="/_/misc/HarperCollinsProducts.aspx?French">Collins English/French Electronic Resource</a>. © HarperCollins Publishers 2005</div>');srp('hc_Fr')};
function hc_En_De(){dw('<div class=brand_copy><a href="/_/misc/HarperCollinsProducts.aspx?German">Collins German Dictionary</a> – Complete and Unabridged 7th Edition 2005. © William Collins Sons & Co. Ltd. 1980 © HarperCollins Publishers 1991, 1997, 1999, 2004, 2005, 2007</div>');srp('hc_De')};
function hc_En_It(){dw('<div class=brand_copy><a href="/_/misc/HarperCollinsProducts.aspx?Italian">Collins Italian Dictionary</a> 1st Edition © HarperCollins Publishers 1995</div>');srp('hc_It')};
var hc_Es_En=hc_En_Es,hc_Fr_En=hc_En_Fr,hc_De_En=hc_En_De,hc_It_En=hc_En_It;
function hc_mlt(){dw('<div class=brand_copy>Multilingual Translator © HarperCollins Publishers 2009</div>');srp('hc_mlt')};
function eb(l,w){dw('<p class=brand_copy>For more information on <a href="/_/gr.aspx?url='+encodeURIComponent(l)+'&source=Britannica">'+w+'</a>, visit Britannica.com. Britannica Concise Encyclopedia. Copyright © 1994-2008 Encyclop&aelig;dia Britannica, Inc.</p>');srp('eb')};
function cabio(){dw('<p class=brand_copy><a target=_blank href="http:/'+'/www.cambridge.org/us/catalogue/catalogue.asp?isbn=9780521402583">The Cambridge Dictionary of American Biography</a>, by John S. Bowman. Copyright © Cambridge University Press 1995. Reproduced with permission.</p>');srp('cabio')};
function vox1(){dw('<p class=brand_copy>Diccionario Enciclopédico Vox 1. © 2009 Larousse Editorial, S.L.</p>');srp('vox1')};
function vox_manual(){dw('<p class=brand_copy>Diccionario Manual de la Lengua Española Vox. © 2007 Larousse Editorial, S.L.</p>');srp('vox_manual')};
function vox_thes(){dw('<p class=brand_copy>Diccionario Manual de Sinónimos y Antónimos de la Lengua Española Vox. © 2007 Larousse Editorial, S.L.</p>');srp('vox_thes')};
function larousse_thes(){dw('<p class=brand_copy>Larousse Le Grand Dictionnaire des Synonymes et Contraires. © 2004 Editions Larousse.</p>');srp('larousse_thes')};
function larousse_practice(){dw('<p class=brand_copy>Larousse Pratique. © 2005 Editions Larousse.</p>');srp('larousse_practice')};
function larousse_pocket(){dw('<p class=brand_copy>Larousse Maxipoche. © 2007 Editions Larousse.</p>');srp('larousse_pocket')};
function farlex_acr() {dw('<p class=brand_copy>Farlex Acronyms and Abbreviations. © 2012 Farlex, Inc. All Rights Reserved</p>');srp('farlex_acr')};
function Farlex_fin() {dw('<p class=brand_copy>Farlex Financial Dictionary. © 2012 Farlex, Inc. All Rights Reserved</p>');srp('farlex_fin')}
function farlex_partner(n) {dw('<p class=brand_copy>TheFreeDictionary.com '); switch (n) { case 1: dw('Deutsches Wörterbuch'); break; case 2: dw('Dizionario italiano'); break; case 3: dw('Großwörterbuch Deutsch als Fremdsprache') };dw('. © 2009 Farlex, Inc. and partners.</p>');srp('farlex_partner_' + n)};
function lightbulb(){dw('<p class=brand_copy>Dictionary of Financial Terms. Copyright © 2008 <a href="http:/'+'/lightbulbpress.com">Lightbulb Press, Inc.</a> All Rights Reserved.</p>');srp('lightbulb')};
function MGH_Drugs(){dw('<p class=brand_copy>Nursing Spectrum Drug Handbook 2009. © 2009 by The McGraw-Hill Companies, Inc.</p>');srp('MGH_Drugs')};
function MGH_ceb(){dw('<p class=brand_copy>McGraw-Hill Concise Encyclopedia of Bioscience. © 2002 by The McGraw-Hill Companies, Inc.</p>');srp('MGH_ceb')};
function MGH_Idi(){dw('<p class=brand_copy>McGraw-Hill Dictionary of American Idioms and Phrasal Verbs. © 2002 by The McGraw-Hill Companies, Inc.</p>');srp('MGH_Idi')};
function MGH_cep(){dw('<p class=brand_copy>McGraw-Hill Concise Encyclopedia of Physics. © 2002 by The McGraw-Hill Companies, Inc.</p>');srp('MGH_cep')};
function MGH_cee(){dw('<p class=brand_copy>McGraw-Hill Concise Encyclopedia of Engineering. © 2002 by The McGraw-Hill Companies, Inc.</p>');srp('MGH_cee')};
function MGH_Med(){dw('<p class=brand_copy>McGraw-Hill Concise Dictionary of Modern Medicine. © 2002 by The McGraw-Hill Companies, Inc.</p>');srp('MGH_Med')};
function MGH_arc(){dw('<p class=brand_copy>McGraw-Hill Dictionary of Architecture and Construction. Copyright © 2003 by McGraw-Hill Companies, Inc.</p>');srp('MGH_arc')};
function SciTech(){dw('<p class=brand_copy>McGraw-Hill Dictionary of Scientific & Technical Terms, 6E, Copyright © 2003 by The McGraw-Hill Companies, Inc.</p>');srp('SciTech')};
function burton(){dw('<p class=brand_copy>Burton\'s Legal Thesaurus, 4E. Copyright © 2007 by William C. Burton. Used with permission of The McGraw-Hill Companies, Inc.</p>');srp('burton')};
function RealEstateEncyclopedia(){dw('<p class=brand_copy>The Complete Real Estate Encyclopedia by Denise L. Evans, JD & O. William Evans, JD. Copyright © 2007 by The McGraw-Hill Companies, Inc.</p>');srp('RealEstateEncyclopedia')};
function MortgageEncyclopedia(){dw('<p class=brand_copy>The Mortgage Encyclopedia. Copyright © 2004 by Jack Guttentag. Used with permission of The McGraw-Hill Companies, Inc.</p>');srp('MortgageEncyclopedia')};
function Investopedia(){dw('<p class=brand_copy>Investopedia\'s Guide To Wall Speak, Edited by Jack Guinan. Copyright © 2009 by Investopedia®. Used with permission of The McGraw-Hill Companies, Inc.</p>');srp('Investopedia')};
function HRBlock(l){dw('<p class=brand_copy>Copyright © 2008 H&R Block. All Rights Reserved. Reproduced with permission from <a target=_blank href="http:/'+'/www.hrblock.com/taxes/fast_facts/glossary/glossary_detail.jsp?'+l+'">H&R Block Glossary</a></p>');srp('HRBlock')};
function GSE_Pref(){dw('<div style="margin-bottom:6pt"><span class=img style="background-position:-21px -75px;height:23px;width:27px;vertical-align:text-bottom"></span><b>Warning!</b> The following article is from The Great Soviet Encyclopedia (1979). It might be outdated or ideologically biased.</div>')};
function GSE(){dw('<p class=brand_copy>The Great Soviet Encyclopedia, 3rd Edition (1970-1979). © 2010 The Gale Group, Inc. All rights reserved.</p>');srp('GSE')};
function Similes(){dw('<p class=brand_copy>Similes Dictionary, 1st Edition. © 1988 The Gale Group, Inc. All rights reserved.</p>');srp('Similes')};
function Picturesque(){dw('<p class=brand_copy>Picturesque Expressions: A Thematic Dictionary, 1st Edition. © 1980 The Gale Group, Inc. All rights reserved.</p>');srp('Picturesque')};
function iMedixLink(u){open('/_/gr.aspx?url='+encodeURIComponent('http:/'+'/www.imedix.com/lobby?src=farlex&RedirectPage='+encodeURIComponent(u)),'iMedix','')};
function iMedix(t){if(t==2) dw('<p>Read more questions and answers on <a href="javascript'+':iMedixLink(\''+encodeURIComponent(word)+'/questions'+'\')">iMedix website</a></p>');dw('<p class=brand_copy>This content is provided by iMedix and is subject to <a href="javascript:iMedixLink(\'terms\')">iMedix Terms</a>. The Questions and Answers are not endorsed or recommended and are made available by patients, not doctors.</p>');srp('imedix')};
function iMedix2(){dw('<p><b>!!!</b> The questions and answers on this page are written by patients and are not reviewed by health professionals. You can find more information and submit your own questions on <a href="javascript:iMedixLink(\''+encodeURIComponent(word)+'/questions'+'\')">iMedix website</a></p>')};
function open_thes(l) {dw('<p class=brand_copy>'+(PageLang=='de'?'<a href="http:/'+'/www.openthesaurus.de">OpenThesaurus</a>':'OpenThesaurus')+'. Distributed under <a href="http:/'+'/encyclopedia.thefreedictionary.com/GNU+public+licence">GNU General Public License</a>.</p>');srp('open_thes')};
function DictCC(w){dw('<br><a href="/_/gr.aspx?url='+encodeURIComponent('http:/'+'/www.dict.cc/?s='+encodeURIComponent(w))+'" target=_blank>More translations</a> from Dict.cc<p class=brand_copy>© 2002 - 2009 <a href=http:/'+'/www.dict.cc>Paul Hemetsberger</a></p>');srp('DictCC')};
function Chemnitz(){dw('<p class=brand_copy>Beolingus. © <a href="http:/'+'/dict.tu-chemnitz.de/">TU Chemnitz</a>, 2006-2009</p>');srp('Chemnitz')};
function kdict(){dw('<p class=brand_copy>'+(PageLang=='en'?'Kernerman English Multilingual Dictionary © 2006-2013':'Copyright © 2013')+' <a href=http:/'+'/kdictionaries.com>K Dictionaries Ltd</a>.</p>');srp('kdict')};
function wkEpo() {dw('<div class=brand_copy>Medical Eponyms © Farlex 2012</div>');srp('wkEpo')};
function wkDen() {dw('<div class=brand_copy>Medical Dictionary for the Dental Professions © Farlex 2012</div>');srp('wkDen')};
function wkHP() {dw('<div class=brand_copy>Medical Dictionary for the Health Professions and Nursing © Farlex 2012</div>');srp('wkHP')};
function wkMed() {dw('<div class=brand_copy>Farlex Partner Medical Dictionary © Farlex 2012</div>');srp('wkMed')};
function wkEnEs() {dw('<div class=brand_copy>English-Spanish Medical Dictionary © Farlex 2012</div>');srp('wkEnEs')};
function wkEsEn() {dw('<div class=brand_copy>Spanish-English Medical Dictionary © Farlex 2012</div>');srp('wkEsEn')};
function evSport() {dw('<div class=brand_copy>Dictionary of Sport and Exercise Science and Medicine by Churchill Livingstone © 2008 Elsevier Limited. All rights reserved.</div>');srp('evSport')};
function evPod() {dw('<div class=brand_copy>Illustrated Dictionary of Podiatry and Foot Science by Jean Mooney © 2009 Elsevier Limited. All rights reserved.</div>');srp('evPod')};
function rHouse() {dw('<div class=brand_copy>Random House Kernerman Webster\'s College Dictionary, © 2010 K Dictionaries Ltd. Copyright 2005, 1997, 1991 by Random House, Inc. All rights reserved.</div>');srp('rHouse')};

var nsx;
var nsy;
if (!document.all){
	document.captureEvents(Event.MOUSEMOVE);
	document.onmousemove=get_mouse;
};
function get_mouse(e){
	nsx=e.pageX-10;
	nsy=e.pageY+5;
};
function t_i(id){
	var hlp=ById('Tp'+id);
	if (hlp){
	if (document.all){
	 nsy=event.y+document.body.scrollTop;
	 nsx=event.x+document.body.scrollLeft;
	}
	hlp.style.top=nsy+20;
	hlp.style.left=(nsx>610?nsx-470:140);
	hlp.style.visibility='visible';
}};
function t_o(id){
	var hlp=ById('Tp'+id);
	if(hlp) hlp.style.visibility='hidden';
};
function el(a){if (a.indexOf('://')<0) a='http://'+a;open(a, '_blank')}
function eml2(p,n){
	if (! p && URL.indexOf('medical-dictionary')>0) p='dorland';
	var url='/_/viewer.aspx?path='+encodeURIComponent(p)+'&name='+encodeURIComponent(n);
	if (URL.substr(0, 9) == '/_/viewer' || IsMob)
		location=url;
	else
		open(url,'img','');
};
function eml(p,n){eml2(p,n)};
function hil(n){eml2('hut',n)};
function hmil(n){eml2('hm',n)};
function hmil_med(n){eml2('hm/med',n)};
function hmil_wsw(n){eml2('hm/wsw',n)};
function hmil_sci(n){eml2('hm/sci',n)};
function openerlink(l){
opener.location='http:/'+'/encyclopedia.'+Domain+'/'+l;
self.close();
return false;
}
function wklnk(w) {location = 'http:/' + '/encyclopedia.' + Domain + '/' + w;return false}
g_kw=0;
function g_attr(){
var g_fburl=(google_info && google_info.feedback_url?google_info.feedback_url:'http:/'+'/services.google.com/feedback/online_hws_feedback');
return '<a onMouseOver="return m_over(\''+g_fburl+'\')" onMouseOut="m_out()" href="/_/gr.aspx?url='+encodeURIComponent(g_fburl)+'">Ads by Google</a>';
}
function google_radlink_request_done(radlinks) {if(radlinks.length) RAd=radlinks;ads_blocked=0};
function google_ad_request_done(google_ads) {
	ads_blocked=0;
	google_ad_client = g_client; google_kw_type = "broad"; google_ad_output = "js"; google_encoding = "utf-8"; google_page_url = CanonicalURL;google_ad_channel = ad_channel;
	if (!google_ads || google_ads.length == 0) {
		if (g_kw && Ads.length == 0 && !OvResults) {
			google_ad_channel += "+"+ch_c;g_kw = 0;
			dw('<script language="JavaScript1.1" src="http:/' + '/pagead2.googlesyndication.com/pagead/show_ads.js"></script>');
		}
		return;
	}
	if (google_ads[0].type.substring(0,4)=='text' && (Ads.length==0 || (Ads.length<3 && google_ads.length>15))) {
		Ads=google_ads;
		IsG=true;
		GResults=google_ads.length;
	}
	else if (google_ads[0].type == 'image')
		ImgAd='<a href="'+google_ads[0].url+'"><img src="'+google_ads[0].image_url+'" height="'+google_ads[0].image_height+'" width="'+google_ads[0].image_width+'" border="0"></a>';
	else if (google_ads[0].type == "flash") {
		ImgAd='<o'+'bject classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http:/'+'/download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" WIDTH="'+google_ad.image_width+'" HEIGHT="'+google_ad.image_height+'"><PARAM NAME="movie" VALUE="'+google_ad.image_url+'"><PARAM NAME="quality" VALUE="high"><PARAM NAME="AllowScriptAccess" VALUE="never"><EMBED src="'+google_ad.image_url+'" WIDTH="'+google_ad.image_width+'" HEIGHT="'+google_ad.image_height+'" TYPE="application/x-shockwave-flash" AllowScriptAccess="never" PLUGINSPAGE="http:/'+'/www.macromedia.com/go/getflashplayer"></EMBED></OBJECT>';
	}
	else if(google_ads[0].type=="html") {
		ImgAd=google_ads[0].snippet;
	}
}
function ad(url,visible_url,line1,line2,line3){this.url=url;this.visible_url=visible_url;this.line1=line1;this.line2=line2;this.line3=line3;}
function write_ad(ad,pos) {
	var res = '<div class=Ad>';
	var t1=ad.line1, t2=ad.line2+' '+ad.line3;
	var link='<a href="http:/'+'/www.thefreedictionary.com/_/gr.aspx?pos='+pos+'&source='+loc+'&url='+encodeURIComponent(ad.url)+'" onMouseOver="return m_over(\''+(IsG?'go to ':'http://')+encodeURIComponent(ad.visible_url)+'\')" onMouseOut="m_out()">';
	if(IsG) 
		res+=link+'<span class=OvTitle>'+highlight(t1)+'</span></a><br><span class=OvDescr>'+highlight(t2)+'</span><br>'+link+'<span class=OvURL>'+highlight(ad.visible_url)+'</span></a>';
	 else
		res+=link+'<span class=OvTitle>'+highlight(t1)+'</span><br><span class=OvDescr>'+highlight(t2)+'</span><br><span class=OvURL>'+highlight(ad.visible_url)+'</span></a>';
 	return res +'</div>';
 }
 function write_ads(AdsNum,Br,pos) {
 	if(g_cf&&pos==10) {
 		google_ad_client=g_client;google_color_url=google_color_link=color_link;google_override_format=true;google_ad_width=300;google_ad_height=60;
 		dw('<div style="width:300px;height:60px;margin:18px 0 3px -6px"><script type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"></s'+'cript></div>');
 		g_cf-=1;return;
 	};
 	if(!IsMob&&ads_blocked&&google_kw) {
 		if(!ById('alt_ad_'+pos)) dw('<div id="alt_ad_'+pos+'"></div>');
 	}
 	else if(afs_pageOptions) {
 		dw('<div style="margin:6pt 0 0 0" id="afs_adcontainer'+AdBlocks.length+'"></div>');
 		if(Br) dw('<br clear=all>');
 		AdBlocks.push({ 'container': 'afs_adcontainer'+AdBlocks.length,'lines': 3,'width': (pos<3?550:250),'number': AdsNum,'fontSizeDomainLink': 11,'fontSizeTitle': 14,'colorDomainLink': '#000000','colorTitleLink': '#1d4994' });
 	}
 	else dw(populate_ads(AdsNum,Br,pos));
 }

 function populate_ads(AdsNum,Br,pos) {
	if (IsMSN && pos == 2) return '';
	if (Ads.length && Ads.length>CurrentAd){
	var attr='Sponsored links';
	if (IsMSN || IsY) {
		var attrURL=escape('/_/about-sponsored-results.html');
		if (IsMSN) attrURL=escape('http:/'+'/adcenter.microsoft.com/');	
		attr='<a style="font-size:8pt" href="#" onclick="open(\'/_/gr.aspx?url='+attrURL+'\', \'w\',\'width=600,height=330,resizable=1\');return false">Sponsored links</a>';
	}
	if(IsG) attr=g_attr();
	var res;
	res='<div class=Ov'+(pos==3?' style="width:300px;padding:0"':'')+'><div class=OvBorder><span class=by>'+attr+'</span>';
	for(i=0;CurrentAd<Ads.length&&i<AdsNum;i++) {
		if(i) res+='<div class=AdSep></div>';
		res+=write_ad(Ads[CurrentAd],pos);
		CurrentAd+=1;
	}
	res+='</div></div>';
	if (Br) res += '<br>';
	return res;
	}
	return '';
}
function myerror(){
window.onerror=null;
return true;
}
function highlight(t) {
	var k = (kw2 ? kw2 : word);
	if (k) k = k.replace(/[?,.:;"()\[\]]/g, '');
	if (k && t > '') {
		var q = k.split(' ');
		for (var i = 0; i < q.length; i++)
			if (q[i].length > 2) {
				var rexp = new RegExp(q[i], 'ig');
				t = t.replace(rexp, '<b>' + q[i] + '</b>');
			}
	}
return t;
}
function WriteRAd1(p){
	if (RAd && RAd.length && RAd.length>CurrentRad){
	dw('<table width="100%" class=sbox1 cellspacing=0');
	if (PageLang=='ar') dw(' dir="rtl"');
	dw('><tr><th nowrap>'+p+'</th></tr><tr><td><table cellpadding=0 cellspacing=0 width="100%"><tr><td width=50% valign=top>');
	var cnt=Math.min(10,RAd.length-CurrentRad)
	for(i=0;i<cnt;++i) {
		if (i>0 && i==Math.ceil(cnt/2)) dw('</td><td width=50% valign=top>');
		dw('&#x25AA; <a href="/_/related-ads.aspx?w='+encodeURIComponent(word)+'&q='+RAd[CurrentRad].url_escaped_term+'&c='+encodeURIComponent(ad_channel)+'&rt='+RAd[i].radlink_token+'&google_page_url='+loc+'&pub_id='+g_client+'" onmouseout="window.status=\'\'" onmouseover="window.status=\'\';return true;">'+highlight(RAd[CurrentRad].term)+'</a><br>');
		CurrentRad+=1;
	}
	dw('</td></tr></table></td></tr></table>');
} 
}
function aml(target, info) {
    target = (target == undefined) ? "free" : target;
    info = (info == undefined) ? "tfdwebsite" : info;
    return 'http:/'+'/up.thefreedictionary.com/trc.ashx?sender=farlex&target=' + target + '&info=' + info;
}
function MobileSelfPromo() {
	var n=navigator.userAgent;
	function a(u, t) { return '<input type="button" onclick="window.location.href=\'' + u + '\'" style="font-weight:bold;color:darkred;width:95%;white-space:normal;" value="' + t + '" />' };
	function mbad(l){dw('<div style="margin-bottom:14px;margin-top:3px;text-align:center;font-weight:bold">'+l+'</div>')}
	if(n.indexOf('Android')>0) mbad(a(aml(),'Install TheFreeDictionary Android App. It\'s Free!'))
	else if(n.indexOf('like Mac OS')>0) mbad(a(aml(), 'Install a FREE Mobile App') + '<br>or<br>' + a(aml('pro'), 'an ad-free version for just $3.99'));
}
function m_over(url){
window.status=url;
return true;
}
function m_out(){
window.status = '';
}
var sound_timeout=null;
function play(File) {
if(File.indexOf('/')<0) File='http:/'+'/img.tfd.com/hm/mp3/'+File;
var andr = navigator.userAgent.indexOf('Android') > 0;
var s=(andr?File+'.mp3':File.replace('/mp3/','/prons/')+'.wav');
if (sound_timeout) clearTimeout(sound_timeout);
var sndfr = ById("sound_frame");
if (IE && navigator.platform == 'Win32') {
document.all.bgsound.src=s;
sound_timeout=setTimeout('document.all.bgsound.src="about:blank"', 8000);
} else if (sndfr && !andr) {
sndfr.src = 'about:blank';
sndfr.src = s;
sound_timeout=setTimeout('ById("sound_frame").src="about:blank"', 8000);
} else 
location=s;
window.status='';
}
function html5play(s) {var a=document.createElement('audio');a.src=s;a.play();}
function html5aud(src, img) {
if (IsApp && navigator.userAgent.indexOf("MSIE 10.")==0) return '';
var a = document.createElement('audio');
function cp(t){return !!(a.canPlayType && a.canPlayType('audio/'+t+';').replace(/no/, ''))}
if (cp('mpeg')||cp('mp3')) src += '.mp3'; else if (cp('wav')) src = src.replace('/mp3/','/prons/')+'.wav'; else return '';
return '<img src="'+img+'" style="cursor:pointer" onclick="html5play(\''+src+'\')"/> ';
}
function play_w(snd) {
//if (IsApp && navigator.userAgent.indexOf("MSIE 10.")>0) return;
if (snd.indexOf('/')<0)	snd='hm/mp3/'+snd;
snd='http:/'+'/img.tfd.com/'+snd;
if (flashInstalled()) dw('<o'+'bject style="margin:1px;" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http:/'+'/fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="13" height="21"><param name="movie" value="http:/'+'/img.tfd.com/m/sound.swf"><param name="menu" value="false"><param name="wmode" value="transparent"><param name="FlashVars" value="sound_src='+snd+'.mp3"><embed src="http:/'+'/img.tfd.com/m/sound.swf"  FlashVars="sound_src='+snd+'.mp3" menu="false" width="13" height="21" wmode="transparent" type="application/x-shockwave-flash" pluginspage="http:/'+'/www.macromedia.com/go/getflashplayer"></object>');
else if (a=html5aud(snd, 'http:/' + '/img.tfd.com/hm/pron.gif')) dw(a); else play_scr(snd, 13, 21, 'hm/pron.gif');
}
play_w2=play_w;
function playV2(snd) {
//if (IsApp && navigator.userAgent.indexOf("MSIE 10.")>0) return;
var t=snd.substr(3,2);
if (t!='UK' && t!='US') t='plain';
if (flashInstalled()) dw('<o'+'bject style="margin:0 0 0 3px;" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http:/'+'/fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="28" height="18"><param name="movie" value="http:/'+'/img.tfd.com/m/sound.swf"><param name="menu" value="false"><param name="wmode" value="transparent"><param name="FlashVars" value="sound_src=http:/'+'/img2.tfd.com/pron/mp3/'+snd+'.mp3&image_src=http:/'+'/img.tfd.com/m/flags/18_'+t+'.jpg"><embed style="margin:0 0 0 3px;" src="http:/'+'/img.tfd.com/m/sound.swf"  FlashVars="sound_src=http:/'+'/img2.tfd.com/pron/mp3/'+snd+'.mp3&image_src=http:/' + '/img.tfd.com/m/flags/18_'+t+'.jpg" menu="false" width="28" height="18" wmode="transparent" type="application/x-shockwave-flash" pluginspage="http:/'+'/www.macromedia.com/go/getflashplayer"></object>');
else if (a=html5aud('http:/'+'/img2.tfd.com/pron/mp3/'+snd, 'http:/'+'/img.tfd.com/m/flags/18_'+t+'.png')) dw(a); else play_scr('http:/' + '/img2.tfd.com/pron/mp3/' + snd, 28, 18, 'm/flags/18_' + t + '.png');
}
function play_scr(snd, w, h, p) {
	dw('<a href="javascript'+':play(\''+snd+'\')" onMouseOver="return m_over(\'Click to hear pronunciation\')" onMouseOut="m_out()"><img alt="Pronunciation" width="'+w+'" align=absbottom style="margin:0 2px 5px 0" height="'+h+'" border="0" src="http:/' + '/img.tfd.com/'+ p + '"></a>');
	if (typeof (window["sound_frame"]) == "undefined") dw('<i' + 'frame id=sound_frame style="position:absolute;left:-100px" frameborder=0 width=1 height=1></iframe>');
	if (typeof (window["bgsound"]) == "undefined") dw('<bgsound id=bgsound></bgsound>');
}
function flashInstalled() {
if (IsApp && navigator.userAgent.indexOf('Android') > 0) return false;
if(navigator.plugins && navigator.mimeTypes.length){
	if(navigator.plugins["Shockwave Flash"]) return true;
}else{
	try{if(new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) return true;	}catch(e){}
}
return false;
}
function pron_key(t){
var pkw=open('/_/pk.htm'+(URL.indexOf('h=1')>0?'?h=1':''),'pk','width=630,height=675,statusbar=0,menubar=0');
return false;
}
var SignedIn=0;
function toggle(id) {
	if (!ById('toggle_td_' + id)) return;
	var img=ById('toggle_img_'+id);
	var span=ById('toggle_span_'+id);
	if (span) var y=(span.getAttribute('y')?Number(span.getAttribute('y')):115)
	var td=ById('toggle_td_'+id).style;
	if (td.display=='none'){
		td.display='';
		toggle_store(id,0);
		if (img) img.src=img.src.replace('right','down');
		if (span) span.style.backgroundPosition='0 -'+y+'px';
	}
	else {
		td.display='none';
		toggle_store(id,1);
		if (img) img.src=img.src.replace('down','right');
		if (span) span.style.backgroundPosition='0 -'+(y+12)+'px';
	}
}
function toggle_store(id, hide){
	var c='0'+getCookie('t2');
	if (hide)
		c=c|(1<<(id-1));
	else
		c=c & (~(1<<(id-1)));
	setCookie('t2',c);
}
function toggle_retrieve(id){
	var c=getCookie('t2');
	if (c) c=Number(c);
	else c=1;
	if (c&(1<<(id-1))) toggle(id);
}
function getCookie(name,d){
	var dc=document.cookie;
	var prefix=name+'=';
	var s = dc.indexOf('; ' + prefix);
	if (s==-1){
		s=dc.indexOf(prefix);
		if (s != 0) return null;
	}
	else
		 s+=2;
	var e=dc.indexOf(';', s);
	if (e == -1) e = dc.length;
	var xx = dc.substring(s + prefix.length, e);
	if (d) return decodeURI(xx).replace(/\+/g, ' ');
	else return unescape(xx);
} 
var C_GLOBAL = 1;
var C_NOEXP = 2;
var C_NOESC = 4;
function setCookie(name, value, flag) {
    if (typeof flag == 'undefined') {
        document.cookie = name + '=' + escape(value) + (name == 't2' || name == 'lang' || name == 'tfd_popup' ? '; expires=Thu, 1 Jan 2020 05:00:00 UTC' : '') + '; path=/; ' + (name == 'lang' ? '' : 'domain=' + Domain);
    }
    else {
        document.cookie = name + '=' + (flag & C_NOESC ? value : escape(value)) + (flag & C_NOEXP ? '; expires=Thu, 1 Jan 2020 05:00:00 UTC' : '') + '; path=/; ' + (flag & C_GLOBAL ? 'domain=' + Domain : '');
    }
}
function deleteCookie(name) {
    document.cookie = name + "=del; expires=Thu, 5 Feb 2013 05:00:00 UTC; path=/;domain=" + Domain;
    document.cookie = name + "=del; expires=Thu, 5 Feb 2013 05:00:00 UTC; path=/;";
}
function AsyncRequest(url, t, callback) {
	var scr=document.createElement('script');
	scr.type='text/javascript';
	//scr.defer = true;
	scr.async = true;
	if (t) scr.text = t;
	scr.src = url;
	if (callback) { scr.onreadystatechange = callback; scr.onload = callback; }
	document.getElementsByTagName('head').item(0).appendChild(scr);
}
function AddFavorite(url, title){ 
  if(window.sidebar){
	window.sidebar.addPanel(title, url,''); 
  }else if(window.opera){
	var a = document.createElement("A"); 
	a.rel = "sidebar"; 
	a.target = "_search"; 
	a.title = title; 
	a.href = url; 
	a.click(); 
  } else if(document.all){
	window.external.AddFavorite(url, title); 
  } 
}
var tfd_searchby_HTML=null;
var tfd_searchby=0;
function UpdadeSearchForms(){
var SearchCookie=getCookie('searchBy');
if(SearchCookie) tfd_searchby=SearchCookie;

for (var f=1;f<=2;f++){
	var form=eval('document.f'+f);
	if (form) {
		var f_sd=ById('f'+f+'_sd');
		if (f_sd) {		
			if (f_sd.innerHTML.indexOf('worD')<0) tfd_searchby_HTML=f_sd.innerHTML;
			if (tfd_searchby!=8 && tfd_searchby!=9 && f_sd.innerHTML.indexOf('worD')>0) 
				f_sd.innerHTML=tfd_searchby_HTML;
			if (tfd_searchby==8)
				f_sd.innerHTML='<table cellspacing=0 cellpadding=2><tr><td valign=bottom>First Name<div style="font-size:8pt;height:20px"><input type=checkbox name=firstname_begins_with value=1 checked>Begins with</div><input size=8 name=worD maxlength=25><td><td valign=bottom>Last Name<div style="font-size:8pt;height:20px"><input type=checkbox name=name_begins_with value=1>Begins with</div><input size=8 name=name maxlength=25></td><td valign=bottom>Location<div style="font-size:8pt;padding-top:4px;padding-bottom:1px">(City, State, Area code or ZIP)</div><input size=20 name=where maxlength=100></td><td valign=bottom><input type=submit value=Search></td></tr></table>';
			if (tfd_searchby==9)
				f_sd.innerHTML='<table cellspacing=0 cellpadding=2><tr><td valign=bottom>Keyword<div style="font-size:8pt;padding-top:4px;padding-bottom:1px">&nbsp;</div><input size=20 name=worD maxlength=300><td><td valign=bottom>Location<div style="font-size:8pt;padding-top:4px;padding-bottom:1px">(ex: Boston MA, or MA, or 02114)</div><input size=23 name=L maxlength=100></td><td valign=bottom><input type=submit value=Search></td></tr></table>';
		}
		for (var i=0;i<form.elements.length;i++){
			var bt=form.elements[i];
			if (bt.type) if (bt.type=='radio') if (bt.value==tfd_searchby && tfd_searchby!=3) bt.checked=true;
		}
		var search_by_obj=ById('f'+f+'_tfd_searchby');
		if (search_by_obj) search_by_obj.style.visibility=((tfd_searchby>3 && tfd_searchby!=8 && tfd_searchby!=9) || PageLang!='en'?'hidden':'');
		SAYT.disabled =(tfd_searchby!=0);
	}
}}
function _SearchBy(by){
	tfd_searchby=by.value;
	setCookie('searchBy', tfd_searchby);
	UpdadeSearchForms();
}
function scrollPos(){
if (IE) return document.body.scrollTop;
return window.pageYOffset;
}
function homepage(f,txt){
if (txt=='1') txt='Set as Home Page';
var ua=navigator.userAgent;
if (IE && ua.indexOf("Win")!=-1 && !eval('shp.is'+'Homepage(\''+langHost()+'\')')){
	dw('<a href="/" title="'+txt+'" onMouseOver="return m_over(\''+txt.replace("'", "\\'")+'\')" onMouseOut="m_out()" onClick="style.b'+'ehavior=\'url(#'+'default#'+'homepage)\';setHome'+'Page(\''+langHost()+'\');">');
	dw((f?txt+'</a> |':'<span class="img A" style="background-position:-139px 0;width:13px"></span></a>'));
	}
}
function addFav(a2f,hmt){
if (IE) try{
	if (window.external && ("AddFavorite" in window.external))
		dw(' <a title="'+a2f+'" href="javascript'+':external.AddFavorite(\''+langHost()+'\',\''+hmt+'\')"><span class="img A" style="background-position:-121px 0;width:12px"></span></a>')
	}catch(e){}
}
function TestSB(){
if (IE) {try {if (window.external && ("AddSearchProvider" in window.external)) return 1} catch(e){return 0}}
else if (window.sidebar && ("addSearchEngine" in window.sidebar)) return 2;
return 0;
}
function WriteSB(){if (TestSB()) dw('<a href="#" title="Add The Free Dictionary to your search bar" onclick="if(TestSB()==1) window.external.AddSearchProvider(\'http:/'+'/www.thefreedictionary.com/_/open-search.xml\'); else window.sidebar.addSearchEngine(\'http:/'+'/mycroft.mozdev.org/plugins/freedict.src\',\'http:/'+'/mycroft.mozdev.org/plugins/freedict.png\',\'freedict\',\'Language dictionary\');return false"><span class="img A" style="background-position:-160px 0;width:26px"></span></a>');}
function changeTextSize(size){
	if (!size && PageLang=='ar') size=10;
	if (size){
	var customStyles = document.styleSheets.item("mainCSS");
	var Rules;
	if (customStyles.rules)
		Rules=customStyles.rules;
	else
		Rules=customStyles.cssRules;
	if (PageLang=='ar') size+=6;
	Rules[0].style.fontSize=size+(IsMob?'px':'pt');
	setCookie('fontSize', size)
}}
function FontSize() {
	if (IsMob) {
		function op(a,b){return '<option value="'+a+'"'+(a==getCookie('fontSize') || (a==0 && getCookie('fontSize')==null)?' selected':'')+'>'+b+'</option>'};
		dw('<span style="font-size:10px">T</span><span style="font-size:12px">E</span><span style="font-size:14px">X</span><span style="font-size:16px">T</span>: ');
		dw('<select onchange="changeTextSize(Number(this.options[this.selectedIndex].value))">'+op(10,-1)+op(12,0)+op(14,'+1')+op(16,'+2')+op(18,'+3')+op(22,'+4')+'</select>');
	}
	else {
		function WF(s,l) { dw('<a title="Change Text Size" style="text-decoration:none;font-size:'+(s-2)+'pt" href="javascript'+':changeTextSize('+s+')">'+l+'&nbsp;</a>') }
		WF(8,'T');
		WF(10,'E');
		WF(11,'X');
		WF(13,'T');
	}
changeTextSize(Number(getCookie('fontSize')));
}

var social = {
    'titleU': '',
    'descriptionU': '',
    'locU': '',
    'HPlocU': '',
    'like': function (ispage) { this.init(); var w = (PageLang == 'en' ? 90 : (PageLang == 'ru' ? 140 : 120)); dw('<iframe src="http:/' + '/www.facebook.com/plugins/like.php?locale=' + Locale + '&href=' + (ispage ? this.locU : this.HPlocU) + '&layout=button_count&show_faces=false&width=' + w + '&action=like&colorscheme=light&height=21" scrolling="no" frameborder="0" style="border:none;overflow:hidden;width:' + w + 'px;height:21px;margin-top:3px" allowTransparency="true"></iframe>') },
    'gplus': function (u) { dw('<div style="margin-top:6pt;height:30px"><div class="g-plusone" data-size="medium" data-href="' + u + '"></div></div>') },
    'rsslinks_show': function (sh) { ById('rsslinks').style.visibility = (sh ? '' : 'hidden') },
    'init': function () {
        if (this.titleU) return;
        this.titleU = encodeURIComponent(word);
        this.descriptionU = encodeURIComponent(document.title);
        var meta = document.getElementsByTagName('meta');
        for (i in meta)
            if (meta[i].getAttribute) {
                if (meta[i].getAttribute('property') == 'og:title') this.titleU = encodeURIComponent(meta[i].getAttribute('content'));
                if (meta[i].getAttribute('property') == 'og:description') this.descriptionU = encodeURIComponent(meta[i].getAttribute('content'));
            };
        this.locU = encodeURIComponent(CanonicalURL+fconn.shP());
        this.HPlocU = encodeURIComponent(langHost());
    },
    'leftcol': function (ThisSite, ThisPage, Share) {
       var pr = '<a target=_blank href="http:/';
       if (ThisSite) {
            dw('<fieldset><legend>' + ThisSite + '</legend>');
            this.like();
            this.gplus(langHost());
            if (PageLang == 'en') {
                function rss(t, n) { return '<a target=_blank href="http:/' + '/www.thefreedictionary.com/_/WoD/rss.aspx' + t + '" onclick="social.rsslinks_show()">' + n + '</a><br>' };
                dw('Follow: ' +
            pr + '/www.facebook.com/pages/TheFreeDictionary/340660446629" title="Join The Free Dictionary fan page on Facebook"><span class="img A" style="background-position:-129px -15px;width:13px"></span></a>' +
            pr + '/twitter.com/farlex" title="Follow TheFreeDictionary.com on Twitter"><span class="img A" style="background-position:-97px -15px;width:16px"></span></a>' +
            '<a target=_blank href="https:/' + '/plus.google.com/+freedictionary/" title="Add The Free Dictionary to Google+ circles"><span class="img A" style="background-position:-24px 0;width:13px"></span></a>' +
            '<a href="http://www.' + Domain + '/Word-of-the-Day.htm" title="Join the Word of the Day Mailing List"><span class="img A" style="background-position:-86px 0;width:13px;">Join the Word of the Day Mailing List</span></a>' +
            '<a target=_blank onclick="social.rsslinks_show(1)" title="RSS feed source"><span class="img A" style="background-position:-146px -15px;width:14px"></span></a>' +
            '<div style="position:absolute;width:140px;background-color:white;z-index:2;BORDER:1px solid darkgrey;PADDING:2px;VISIBILITY:hidden;left:135px" id=rsslinks><a style="border:1px solid grey;float:right;width:11px;height:11px;text-align:center;font-size:10px;vertical-align:middle;text-decoration:none" href="javascript:social.rsslinks_show()">X</a>' +
            rss('', 'Word of the Day') + rss('?type=article', 'Article of the Day') + rss('?type=history', 'This Day in History') + rss('?type=birthday', 'Today\'s Birthday') + rss('?type=quote', 'Quote of the Day') +
            '</div><br>');
            }
            dw(Share + ' ' +
        pr + '/www.facebook.com/share.php?u=' + this.HPlocU + '" title="Share on Facebook"><span class="img A" style="background-position:-129px -15px;width:13px"></span></a>' +
        '<a target=_blank href="https:/' + '/twitter.com/share?original_referer=' + this.HPlocU + '" title="Share on Twitter"><span class="img A" style="background-position:-97px -15px;width:16px"></span></a>' +
        (PageLang == 'en' ? pr + '/www.linkedin.com/shareArticle?mini=true&url=' + this.HPlocU + '&title=The+Free+Dictionary&summary=The+most+comprehensive+free+online+dictionary+and+encyclopedia&source=TheFreeDictionary.com" title="Share on LinkedIn"><span class="img A" style="background-position:-100px -30px;width:14px"></span></a>' : '') +
        '<a href="mailto' + ':?subject=TheFreeDictionary.com&body=%0d%0a%0d%0aURL%3a ' + this.HPlocU + '" title="E-mail"><span class="img A" style="background-position:-161px -15px;width:19px"></span></a>' +
        '</fieldset>');
        }
        if (ThisPage) {
            dw('<fieldset><legend>' + ThisPage + '</legend>');
            this.like(1); this.gplus('');
            dw(Share + ' ' +
            pr + '/www.facebook.com/share.php?u=' + this.locU + '" title="Share on Facebook"><span class="img A" style="background-position:-129px -15px;width:13px"></span></a>' +
            '<a target=_blank href="https:/' + '/twitter.com/share?original_referer=' + this.locU + '" title="Share on Twitter"><span class="img A" style="background-position:-97px -15px;width:16px"></span></a>' +
            (PageLang == 'en' ? pr + '/www.linkedin.com/shareArticle?mini=true&url=' + this.locU + '&title=' + this.titleU + '&summary=' + this.descriptionU + '&source=TheFreeDictionary.com" title="Share on LinkedIn"><span class="img A" style="background-position:-100px -30px;width:14px"></span></a>' : '') +
            '<a href="mailto' + ':?subject=' + this.titleU + '&body=' + this.descriptionU + '%0d%0a%0d%0aURL%3a ' + this.locU + '" title="E-mail"><span class="img A" style="background-position:-161px -15px;width:19px"></span></a>' +
            '</fieldset>');
        }
    },
    'bottomlinks': function (p) {
        this.init();
        if (PageLang == 'de') dw('<p>Mehr zur Wortbildung, Grammatik und Schreibweise von <a target=_blank href="http:/' + '/www.canoo.net/services/Controller?input=' + encodeURIComponent(word) + '">' + word + ' unter Canoo.net.</a></p>');
        dw('<br><br>');
        dw(p);
        var link = '&lt;a href=&quot;' + URL + '&quot;&gt;' + word + '&lt;/a&gt;';
        if (link.length > 105)
            dw('<br><textarea style="direction:ltr" onDblClick="click_block=1" rows=4 cols=55 readonly=readonly onclick="this.focus(); this.select();">' + link + '</textarea>');
        else
            dw(' <input style="direction:ltr" onDblClick="click_block=1" size=' + Math.ceil(link.length * 1.4 - 55) + ' readonly=readonly value="' + link + '" onclick="this.focus(); this.select();">');
        function img(w, p, h) { return '<span class="img A" style="width:' + w + 'px;height:32px;margin-right:4px;margin-top:4px;background-position:-' + p + 'px -' + h + 'px"></span></a>' };
        var pr = '<a target=_blank href="http:/';
        if (PageLang == 'en') dw('<br><br>Please bookmark with social media, your votes are noticed and appreciated:<br><table style="float:left"><tr><td valign=top>' +
        pr + '/digg.com/submit?phase=2&url=' + this.locU + '&title=' + this.titleU + '" title="Digg it!">' + img(32, 0, 277) +
        pr + '/www.facebook.com/share.php?u=' + this.locU + '" title="Add to Facebook">' + img(32, 35, 277) +
        pr + '/del.icio.us/post?v=4;url=' + this.locU + ';title=' + this.titleU + '" title="Bookmark on del.icio.us">' + img(32, 70, 277) +
        pr + '/www.google.com/bookmarks/mark?op=add&bkmk=' + this.locU + '&title=' + this.titleU + '" title="Bookmark on Google History Bookmarks">' + img(30, 106, 277) +
        pr + '/myweb2.search.yahoo.com/myresults/bookmarklet?u=' + this.locU + '&t=' + this.titleU + '" title="Bookmark on Yahoo!">' + img(36, 138, 277) +
        '<a target=_blank href="https:/' + '/twitter.com/share?original_referer=' + this.locU + '" title="Share on Twitter">' + img(35, 0, 312) +
        pr + '/reddit.com/submit?url=' + this.locU + '&title=' + this.titleU + '" title="Reddit">' + img(35, 177, 277) +
        '</td><td valign=top><iframe src="http:/' + '/www.facebook.com/plugins/like.php?locale=' + Locale + '&href=' + this.locU + '&layout=standard&show_faces=true&width=190&amp;action=like&colorscheme=light&amp;height=100" scrolling="no" frameborder="0" style="border:none;overflow:auto;width:190px;height:100px;margin-top:10px" allowTransparency="true"></iframe></td></tr></table>');
        else dw('<br><br>');
        dw('<div style=""width:65px;display:inline"">&nbsp;<br><div class="g-plusone"></div></div><br clear=all>');
    },
    'TopLinks': function () {
        this.init();
        dw('<a target=_blank href="http:/' + '/www.facebook.com/pages/TheFreeDictionary/340660446629" title="Join The Free Dictionary fan page on Facebook"><span class="img A" style="background-position:-129px -15px;width:13px"></span></a>');
        if (PageLang == 'en') dw('<a target=_blank href="http:/' + '/twitter.com/farlex" title="Follow Farlex on Twitter"><span class="img A" style="background-position:-97px -15px;width:16px"></span></a>');
    }
};

function A2Gu() {
if (PageLang == 'en') {
    if (GDom == 'google.com') return 'http:/'+'/www.google.com/ig/sharetab?source=atgt&atr=The%20Free%20Dictionary&n_32=url%3Dhttp%253A//www.thefreedictionary.com/_/WoD/search-module.xml%26row%3D1%26sect%3D1&n_32=url%3Dhttp%253A//www.thefreedictionary.com/_/WoD/wod-module.xml%26row%3D1%26sect%3D2&n_32=url%3Dhttp%253A//www.thefreedictionary.com/_/WoD/hangman-module.xml%26row%3D1%26sect%3D3&n_32=url%3Dhttp%253A//www.thefreedictionary.com/_/WoD/history-module.xml%26row%3D2%26sect%3D1&n_32=url%3Dhttp%253A//www.thefreedictionary.com/_/WoD/spellbee-module.xml%26row%3D2%26sect%3D2&n_32=url%3Dhttp%253A//www.thefreedictionary.com/_/WoD/matchup-module.xml%26row%3D2%26sect%3D3&n_32=url%3Dhttp%253A//www.thefreedictionary.com/_/WoD/quote-module.xml%26row%3D3%26sect%3D1&n_32=url%3Dhttp%253A//www.thefreedictionary.com/_/WoD/birthday-module.xml%26row%3D3%26sect%3D2&n_32=url%3Dhttp%253A//www.thefreedictionary.com/_/WoD/article-module.xml%26row%3D3%26sect%3D3&n_32=url%3Dhttp%253A//www.thefreedictionary.com/_/WoD/news-module.xml%26row%3D4%26sect%3D1';
    else return 'http:/'+'/www.'+GDom+'/ig/sharetab?source=atgt&atr=The%20Free%20Dictionary&n_32=url%3Dhttp%253A//www.thefreedictionary.com/_/WoD/search-module.xml%26row%3D1%26sect%3D1&n_32=url%3Dhttp%253A//www.thefreedictionary.com/_/WoD/wod-module.xml%26row%3D1%26sect%3D2&n_32=url%3Dhttp%253A//www.thefreedictionary.com/_/WoD/hangman-module.xml%26row%3D1%26sect%3D3&n_32=url%3Dhttp%253A//www.thefreedictionary.com/_/WoD/history-module.xml%26row%3D2%26sect%3D1&n_32=url%3Dhttp%253A//www.thefreedictionary.com/_/WoD/spellbee-module.xml%26row%3D2%26sect%3D2&n_32=url%3Dhttp%253A//www.thefreedictionary.com/_/WoD/matchup-module.xml%26row%3D2%26sect%3D3&n_32=url%3Dhttp%253A//www.thefreedictionary.com/_/WoD/quote-module.xml%26row%3D3%26sect%3D1&n_32=url%3Dhttp%253A//www.thefreedictionary.com/_/WoD/birthday-module.xml%26row%3D3%26sect%3D2&n_32=url%3Dhttp%253A//www.thefreedictionary.com/_/WoD/article-module.xml%26row%3D3%26sect%3D3&n_32=url%3Dhttp%253A//www.thefreedictionary.com/_/WoD/news-module.xml%26row%3D4%26sect%3D1';
} return 'http:/'+'/www.'+GDom+'/ig/sharetab?source=atgt&atr=The%20Free%20Dictionary&n_32=url%3Dhttp%253A//'+PageLang+'.thefreedictionary.com/_/WoD/search-module.xml%26row%3D1%26sect%3D1&n_32=url%3Dhttp%253A//'+PageLang+'.thefreedictionary.com/_/WoD/hangman-module.xml%26row%3D1%26sect%3D2';
}
function Translate(){
	dw('<span class="trFlg">');
	var l=['es','de','fr','it','ar','pl','pt','nl','no','el','ru','tr'];
	for (var i in l) dw('<a href="http://'+l[i]+'.thefreedictionary.com" title="'+Langs[l[i]][1]+'"><span class="img A flag F'+l[i]+'"></span></a>');
	dw('</span>');
}
function Charity(tx){
dw('<table width="100%" class=sbox1 cellspacing=0><tr><th nowrap><a title="'+Help+'" class="help help7" href="http://www.'+Domain+'/_/help/help3.htm#328">?</a>Charity</th></tr><tr><td>');
var code='<a href="http://secure.thefreedictionary.com/FeedChildProgram.aspx?lang='+PageLang+'"><img src=http:/'+'/img.tfd.com/m/child.jpg border=0 align=left>' + tx + '</a>';
dw(code);
dw('</td></tr></table>');
}
function tfl_search(b,w){dw('<div class=MoreResults><a href="http:/'+'/www.thefreelibrary.com/_/search/Search.aspx?By=0&SearchBy='+b+'&q='+encodeURIComponent(w)+'">More results<span class="img A" style="width:12px;height:9px;margin-left:3pt;background-position:-207px -167px"></span></a></div>')}
function wlExcel() {
    dw('<div style="width:16px;float:right;display:none" id=wlExcel><a href="' + fconn.URL + 'api/wordList.ashx?excel=1" title="Export to Excel"><span class="img A" style="width:16px;height:16px;background-position:-24px -18px"></span></a></div>');
}
function WordList(p, a) {
dw('<table width="100%" class=sbox1 cellspacing=0');
if (PageLang=='ar') dw(' dir="rtl"');
dw('><tr><th nowrap><a title="'+Help+'" class="help help7" href="http://www.'+Domain+'/_/help/help2.htm#22115">?</a>'+p+'</th></tr><tr><td>');
wlExcel();
dw('<a style="display:none" id=wlAdd href="javascript' + ':WordListAdd()"><span class="img A ico ico_a"></span>' + a + '</a>');
dw('<div id=word_list>');
fconn.wordList();
dw('</div></td></tr></table>');
};
function WordListAdd() { fc.saveWL('o=add&u=' + CanonicalURL) };
function WordListDelete(i) { fc.saveWL('o=delete&i=' + i) };
function dWL(i){return '&nbsp;<a title=Delete style="font-weight:bold;font-family:Verdana;color:red;text-decoration:none" href="javascript'+':WordListDelete('+i+')">X</a><br>'};
var OnThisPage_tr, OnThisPage_th
function OnThisPage(tl, tr, th, br) { dw('<table class=sbox1 cellspacing=0 style="width:160px"><tr><th nowrap><span class="img" style="margin-right:5px;background-position:-193px -168px;width:9px;height:8px"></span>' + tl + '</th></tr><tr><td><div id=onthispage></div><a href="' + URL + '#Browsers"><span class="img A ico" style="background-position:-120px -36px;"></span>' + br + '</a></td></tr></table>'); OnThisPage_tr = tr; OnThisPage_th=th }
var delayedads_req=null;
var _mt;
function getMobileType() {
	if (_mt) return _mt;
	var ua = navigator.userAgent; _mt = "unknown";
    if (/Windows.(NT|XP|ME|9)/i.test(ua) && !/Phone/i.test(ua) || /Win(9|.9|NT)/i.test(ua) || /Macintosh|PowerPC/i.test(ua) && !/Silk/i.test(ua) || /Linux/i.test(ua) && /X11/i.test(ua) || /Solaris|SunOS|BSD/i.test(ua)) {_mt = "desktop";}
    else if (/Bot|Crawler|Spider|Yahoo|ia_archiver|Covario-IDS|findlinks|DataparkSearch|larbin|Mediapartners-Google|NG-Search|Snappy|Teoma|Jeeves|TinEye/i.test(ua) && !/Mobile/i.test(ua)) {_mt = "desktop";}
    else if (/ipad|sgh-t849|sch-i800|dfp700|nook|mid1|mid4|mid6|mid7|mid8|mid9/i.test(ua) || /tablet/i.test(ua) && !/RX-34/i.test(ua) || /FOLIO/i.test(ua) || /Linux/i.test(ua) && /Android/i.test(ua) && !/Fennec|mobi|HTC.Magic|HTCX06HT|Nexus.One|SC-02B|fone.945/i.test(ua) || /Kindle/i.test(ua) || /Mac.OS/i.test(ua) || /Silk/i.test(ua)) {_mt = "tablet";}
    else if (/GT-P10|SC-01C|SHW-M180S|SGH-T849|SCH-I800|SHW-M180L|SPH-P100|SGH-I987|zt180|HTC(.Flyer|_Flyer)|Sprint.ATP51|ViewPad7|pandigital(sprnova|nova)|Ideos.S7|Dell.Streak.7|Advent.Vega|A101IT|A70BHT|MID7015|Next2|nook/i.test(ua) || /MB511/i.test(ua) && /RUTEM/i.test(ua)) {_mt = "tablet";}
    else if (/BOLT|Fennec|Iris|Maemo|Minimo|Mobi|mowser|NetFront|Novarra|Prism|RX-34|Skyfire|Tear|XV6875|XV6975|Google.Wireless.Transcoder/i.test(ua) || /Opera/i.test(ua) && /Windows.NT.5/i.test(ua) && /HTC|Xda|Mini|Vario|SAMSUNG-GT-i8000|SAMSUNG-SGH-i9/i.test(ua)) {_mt = "mobile";}
    else if (/GoogleTV|SmartTV|Internet.TV|NetCast|NETTV|AppleTV|boxee|Kylo|Roku|DLNADOC|CE-HTML/i.test(ua) || /Xbox|PLAYSTATION.3|Wii/i.test(ua)) {_mt = "tv";}
    return _mt;
}
function KWTrack(wl){
//if (kw>'' && (OResults>0 || GResults>0)) dw('<img width=1 height=1 style="display:none" src=http:/'+'/img2.tfd.com/aa/pix.ashx?w='+encodeURIComponent(kw)+'&o='+OResults+'&g='+GResults+'>');
var otp = ById('onthispage');if (otp) {var ht = (ById('Thesaurus')? '<a href="' + URL + '#Thesaurus"><span class="img A ico" style="background-position:-120px -52px;"></span>' + OnThisPage_th + '</a><br>' : '') + (ById('Translations')? '<a href="' + URL + '#Translations"><span class="img A ico" style="background-position:-120px -68px;"></span>' + OnThisPage_tr + '</a><br>' : ''); if(ht) otp.innerHTML=ht}
var brtd = ById('toggle_td_11'); if (brtd) {toggle_retrieve(11); toggle_retrieve(12); var brh = Math.max(ById('toggle_td_11').parentNode.clientHeight - 40, 250) + 'px'; ById('flow_main1').style.height = brh; ById('flow_main2').style.height = brh;setTimeout('flowSM(1);flowSM(2)', 10)}
UpdadeSearchForms();
if(!IsMob&&ById('alt_ad_1')) {AsyncRequest('/_/search/a-srv.ashx?AdsNum='+AdsNum+'&word='+encodeURIComponent(google_kw)+'&r='+Math.random()); };
if (AdBlocks.length) {
	if(AdBlocks.length==1) new google.ads.search.Ads(afs_pageOptions,AdBlocks[0])
	else if(AdBlocks.length==2) new google.ads.search.Ads(afs_pageOptions,AdBlocks[0],AdBlocks[1])
	else if(AdBlocks.length>2) new google.ads.search.Ads(afs_pageOptions,AdBlocks[0],AdBlocks[1],AdBlocks[2]);
	ById(AdBlocks[0].container).firstChild.onload = delayedads;
	delayedads_req= setTimeout('delayedads2()', 4000);
}
if(document.f1&&!document.location.hash) window.setTimeout('if (scrollPos()==0) document.f1.Word.focus()',300);
if (!getCookie('track')) AsyncRequest('http:/' + '/www.thefreedictionary.com/_/misc/track.ashx?ref=' + encodeURIComponent(document.referrer) + '&loc=' + loc + '&r=' + Math.random());
//dw('<s' + 'cript src="https:/'+'/apis.google.com/js/plusone.js">{"lang": "' + PageLang + '"}</s' + 'cript>');
if (!IsMob) AsyncRequest('https:/' + '/apis.google.com/js/plusone.js', '{"lang": "' + PageLang + '"}');
if (!IsApp && !getCookie('tfd_popup')) {
	var mobType = getMobileType();
    if (mobType == 'tablet' || (mobType == 'mobile' && IsMob)) {
        setCookie('tfd_popup', 1);
		if(Math.random()>.99) r='3'; else r ='3';
        AsyncRequest('http:/'+'/img.tfd.com/popup'+r+'.js');
    }
}
}
function flowSM(i) {var mn = ById('flow_main' + i), c=ById('flow_mid'+i); if (!mn || !c) return;mn.scrollTop=c.offsetTop+c.offsetParent.offsetTop-mn.offsetTop-mn.clientHeight/2+c.scrollHeight/2-(IE?-7:10)}
function delayedads() {if(delayedads_req) clearTimeout(delayedads_req);setTimeout('delayedads2()', 10); }
function delayedads2() {
	if (ById(AdBlocks[0].container).scrollHeight == 0 && Ads.length > 0) {
		for (var i = 0; i < AdBlocks.length; i += 1) {
			var ad_block = ById(AdBlocks[i].container);
			ad_block.style.height = 'auto';
			ad_block.innerHTML = populate_ads(AdBlocks[i].number);
		} 
	}
}

var tm=null,arrnext=' <span class="img A imgnext"></span>&nbsp;',LangNone='-----------------------';
function LangHideUnhide(Node, l){
	if (Node.getAttribute && Node.getAttribute('lang')) {Node.style.display=(Node.getAttribute('lang')==l?'inline':'none');return};
	var children=Node.childNodes;
	for (i in children) LangHideUnhide(children[i], l);
}
function LangChange(l){
	setCookie('lang',l);
	var a = Langs[l];
	if (ById('LangDropdownMob')) {
		var cnt = 0;
		for (var li in Langs) {
			var a = Langs[li];
			if (a.active) {
				if (li == l) {
					ById('LangDropdownMob').selectedIndex = cnt;
					break;
				}
				cnt++;
			}
		}
	}
	else {
		LangHide();
		if(ById('selectedLang'))
			ById('selectedLang').innerHTML = arrnext + (Langs[l] && Langs[l].active ? '<span class="img A flag F' + l + '"></span>' + a[0] + (a[1] ? ' / ' + a[1] : '') : LangNone) + arrnext;
	}
	LangHideUnhide(ById('translbody'), l);
	return false;
}
function LangBar(list) {
	if (!list) return;
	var s = getCookie('lang'); if (!s) s = 'none';
	for (var i = 0; i < list.length; i += 2) {
		var l = list.substr(i, 2);
		Langs[l].active = 1;
	}
	dw('<div id=LangBar>' + Langs[PageLang][2] + ': ');
	if (typeof IsGlass != 'undefined' && IsGlass) {
			var cnt = 0;
			for (var li in Langs) {
				var a = Langs[li];
				if (a.active) {
				    dw('<a href="javascript:" onclick="LangChange(\'' + li + '\')"><span class="img A flag F' + li + '"></span>' + a[0] + (a[1] ? ' / ' + a[1] : '') + '</a>&nbsp; ');
					cnt++;
				}
			}
	}else{
		if (IsMob || getMobileType()=='tablet' || getMobileType()=='mobile') {
			dw('<select id=LangDropdownMob onChange="var s=this.options[this.selectedIndex].value;if(s!=getCookie(\'lang\')) LangChange(s)">');
			var cnt = 0, found=0;
			for (var li in Langs) {
				var a = Langs[li];
				if (a.active) {
					if (li == s) found = 1;
					dw('<option value=' + li + (li == s? ' selected':'') + '>' + a[0] + (a[1] ? ' / ' + a[1] : '') + '</option>');
					cnt++;
				}
			}
			if (!found) dw('<option selected>----------</option>');
			dw('</select>');		
		}
		else {
			dw('<span id=LangDropdown style="overflow-y:auto;position:absolute;height:100px;width:220px;visibility:hidden;margin-top:16pt;padding:3px;background-color:white" onmousemove="if (tm) clearTimeout(tm);clearTimeout(tm)" onmouseout="tm=setTimeout(\'LangHide()\',400)">');
			var cnt = 0;
			for (var li in Langs) {
				var a = Langs[li];
				if (a.active) {
				    dw('<a href="javascript:" onclick="LangChange(\'' + li + '\')"><DIV><span class="img A flag F' + li + '"></span>' + a[0] + (a[1] ? ' / ' + a[1] : '') + '</DIV></a>');
					cnt++;
				}
			}
			dw('</span><span id=selectedLang onDblClick="click_block=1" onmouseover="LangReveal()" onmouseout="if (tm) clearTimeout(tm);tm=setTimeout(\'LangHide()\',800)">' + arrnext + LangNone + arrnext + '</span>')
		}
	}
	dw('</div><br>');
}
function LangReveal(){
if (tm) clearTimeout(tm)
ById('LangDropdown').style.visibility='';
}
function LangHide(){
	var langDropdown = ById('LangDropdown');
	if(langDropdown) 
		langDropdown.style.visibility='hidden';
}
function extLink(u){if (u.indexOf('://')<0) u='http://'+u;open(u);return};
function ToggleKeyboard() {
SAYT.disabled = true;
ById('f1Word').onblur = null;
if (typeof(window["popKeyboard"])=="undefined") AsyncRequest('http:/'+'/img.tfd.com/m/keyboard.js'); else {popKeyboard(!isKbVisible);restoreCaret()};
}
var iSavedCaretIndex=0;
var searchTextfieldID="f1Word";
function restoreCaret() {
var tf=ById(searchTextfieldID);
if(!tf.selectionStart)
setCaretPos(tf,++iSavedCaretIndex,false);
};
function saveCaret(oField) {
	if (IE && !oField.selectionStart) {
		var Sel = document.selection.createRange();
		Sel.moveStart('character', -oField.value.length);
		iSavedCaretIndex = Sel.text.length;
	}
}
function SAYTBind(fn, self, var_args) {
	var ba = fn.boundArgs_ || [];
	ba = ba.concat(Array.prototype.slice.call(arguments, 2));
	if (typeof fn.boundSelf_ != "undefined") self = fn.boundSelf_;
	if (typeof fn.foundFn_ != "undefined") fn = fn.boundFn_;
	var nf = function() {
		var args = ba.concat(Array.prototype.slice.call(arguments));
		return fn.apply(self, args);
	}
	nf.boundArgs_ = ba;
	nf.boundSelf_ = self;
	nf.boundFn_ = fn;
	return nf;
}
function SearchAhead() {
	this.disabled = false;
	this.Tab = 1;
	this.HoverColor = '#E4EAED';
	this.NormalBg = 'white';
	this.QueryURL = 'http:/'+'/www.thefreedictionary.com/_/search/suggest.ashx?jsonp=SAYT.Callback&query=';
	this.LinkURL;
	this.MIN_STRING = 3;

	this.LastTF = null;
	this.SugDiv = null;
	this.SelIndex = -1;
	this.TimeID;
	this.Keys = new Array();
	this.Values = new Array();
	this.Count = new Array();
	this.rsp = null;
}
SearchAhead.prototype = {
	"Disable": function() {		
	    setCookie('sayt', 1);
	    location.reload();
	},	
	"OnBlur": function(event) {
		if (this.disabled) return;
			if (this.LastTF && this.LastTF.savedText != null) setTimeout('SAYT.LastTF.value = SAYT.LastTF.savedText', 800);
			this.JustHide();
	},
	"Morph": function() {
		if (this.SugDiv != null) {
			this.SugDiv.style.width = (this.LastTF.offsetWidth - (IE?1:7)) + "px";
			this.SugDiv.style.left = (this.GetLoc(this.LastTF, true)) + "px";
			this.SugDiv.style.top = (this.GetLoc(this.LastTF, false) + this.LastTF.offsetHeight) + "px";
		}
	},
	"Suggest": function(obj, event) {
		if (getCookie('sayt')) this.disabled=true;
		if (this.disabled) return;		
		this.LinkURL = 'http:/'+'/www.'+Domain+'/_/search.aspx?SearchBy=0&TFDBy=0&Word=';
		if (event.keyCode == 13) {
			var str = this.LinkURL + encodeURIComponent(this.LastTF.value)+'&tab='+this.Tab;
			window.location.href = str;
			return;
		}
		if (this.LastTF && this.LastTF.found) clearTimeout(this.TimeID);
		this.LastTF = obj;
		this.LastTF.onblur = SAYTBind(this.OnBlur, this);
		this.Morph();

		if (event.keyCode == 27) {//esc
			if (this.LastTF != null) {
				if (typeof(this.LastTF.savedText) != 'undefined') this.LastTF.value = this.LastTF.savedText;
				var elem = document.getElementById("SAYTk" + this.SelIndex);
				if (elem != null) {
					elem.style.backgroundColor = this.NormalBg;
				}
			}
			this.Popup(null, false);
			return;
		}

		var sValue = obj.value;
		if (sValue.length < this.MIN_STRING) {
			this.Popup(null, false);
			return;
		}

		if (this.SugDiv == null) {
			this.SugDiv = document.createElement("DIV");
			this.SugDiv.className = "sayt"
			document.body.appendChild(this.SugDiv);
			this.SugDiv.onmouseover = SAYTBind(this.Keep, this);
			this.SugDiv.onmouseout = SAYTBind(this.Hide, this);
		}

		var keyUp = event.keyCode == 38;
		var keyDown = event.keyCode == 40;

		if ((keyUp || keyDown)) this.KeyUp(keyUp);
		else {

			var sKey = this.LastTF.value;
			this.LastTF.savedText = sKey;

			for (var i = this.Keys.length - 1; i >= 0; i--) {
				if (sKey == this.Keys[i]) {
					this.SugDiv.innerHTML = this.Values[i];
					this.LastTF.elCount = this.Count[i];
					this.LastTF.found = true;

					if (event.type != "click") this.Popup(sKey, true);
					return;
				}
			}
			AsyncRequest(this.QueryURL + encodeURIComponent(obj.value));
		}
	},
	"Keep": function(evt) {
		if (!evt) evt = window.event;
		if (this.IsInside(evt)) clearTimeout(this.TimeID);
	},
	"Hide": function(evt) {
		if (!evt) evt = window.event;
		if (this.IsInside(evt)) return;
		this.TimeID = setTimeout(SAYTBind(this.JustHide, this), 2000);
	},
	"IsInside": function(evt) {
		var x = evt.clientX;
		var y = evt.clientY;

		var dx = this.GetLoc(this.SugDiv, true);
		var dy = this.GetLoc(this.SugDiv, false);

		var cornerX = dx + this.SugDiv.offsetWidth;
		var cornerY = dy + this.SugDiv.offsetHeight;

		if (x > dx && x < cornerX && y > dy && y < cornerY) return true;
		return false;
	},
	"JustHide": function() {
		if (this.SugDiv != null) {
			var elem = document.getElementById("SAYTk" + this.SelIndex);
			if (elem != null) elem.style.backgroundColor = this.NormalBg;
			this.SelIndex = -1;
			this.SugDiv.style.visibility = "hidden";
		}
	},
	"GetLoc": function(elem, left) {
		var ret = 0;
		while (elem != null) {
			ret += (left ? elem.offsetLeft : elem.offsetTop);
			elem = elem.offsetParent;
		}
		return ret;
	},
	"KeyUp": function(keyUp) {
		if (this.LastTF.found) this.SugDiv.style.visibility = "visible";
		else return;
		var savedIndex = this.SelIndex;
		if (keyUp) {
			if (this.SelIndex > 0) this.SelIndex--;
			else this.Popup(null, false);
		} else {
			if (this.SelIndex == -1) this.SelIndex = 0;
			else if (this.SelIndex < this.LastTF.elCount - 1) this.SelIndex++;
		}
		if (savedIndex == this.SelIndex) return;
		this.UnSelectAll();
		document.getElementById("SAYTk" + this.SelIndex).style.backgroundColor = this.HoverColor;
		this.LastTF.value = this.LastTF.rsp[1][this.SelIndex][0];
	},
	"UnSelectAll": function() {
		for (var i = 0; i < this.LastTF.elCount; i++)
			document.getElementById("SAYTk" + i).style.backgroundColor = this.NormalBg;
	},
	"Mouse": function(obj, isOver, idx) {
		this.UnSelectAll();
		if (isOver) {
			obj.style.backgroundColor = this.HoverColor;
			this.SelIndex = idx;
		}
	},
	"Submit": function(idx) {
		if (SAYT.LastTF.onblur) {
			this.LastTF.onblur = null;
			location=this.LinkURL+encodeURIComponent(this.LastTF.rsp[1][idx][0])+'&tab='+this.Tab;
		}
	},
	"Callback": function(rsp) {
		var txt = ''
		var iCount = 0;
		var u = this.LinkURL;
		function link(tab, idx) {return '<a href="'+u+encodeURIComponent(rsp[1][idx][0])+'&tab='+tab+'">';}
		for (var idx in rsp[1]) {
			txt += '<div style="clear:both;height:'+(IE?11:14)+'px;cursor:pointer;cursor:hand" onmousedown="SAYT.Submit('+idx+')" onmouseover="SAYT.Mouse(this,true,'+idx+')" onmouseout="SAYT.Mouse(this,false)" id="SAYTk'+idx+'">';
			txt += '<a onmousedown="SAYT.LastTF.onblur=null" style="float:left" href="'+u+encodeURIComponent(rsp[1][idx][0])+'&tab='+this.Tab+'">';
			txt += rsp[1][idx][0] + '</a>';
			function p(n) { return Math.pow(2, n) };
			var l = [['en', 1919], ['es', p(16)], ['de', p(18)], ['fr', p(17)], ['it', p(19)], ['pt', p(24)], ['nl', p(22)], ['no', p(21)], ['el', p(20)], ['zh', p(25)], ['ru', p(23)], ['ar', p(26)], ['tr', p(27)], ['pl', p(28)]];
			for (var i=l.length-1;i>=0;i--) if (rsp[1][idx][1] & l[i][1]) txt += '<a onmousedown="SAYT.LastTF.onblur=null" style="float:right" href="'+u+encodeURIComponent(rsp[1][idx][0])+'&tab='+(rsp[1][idx][1] & l[i][1])+'"><span class="img A flag F' + l[i][0] + '"></span></a>';
			txt += '</div>';
			iCount++;
		}
		txt += '<a style="float:right;font-size:8pt;text-decoration:underline" href="javascript'+':void()" onmousedown="SAYT.Disable()">Disable suggestions</a>'	
		this.SugDiv.innerHTML = txt;
		this.LastTF.elCount = iCount;
		this.LastTF.rsp = rsp;
		this.LastTF.found = iCount > 0;

		if (rsp[1].length > 0) {
			var found = false;
			for (var ix = this.Keys.length - 1; ix >= 0; ix--) {
				if (rsp[0] == this.Keys[ix]) {
					found = true;
					break;
				}
			}
			if (!found) {
				this.Keys.push(rsp[0]);
				this.Values.push(txt);
				this.Count.push(iCount);
			}
			this.Popup(rsp[0], true);
		} else this.Popup(null, false);
	},
	"Popup": function(key, showElem) {
		if (!showElem || (key != this.LastTF.value)) {
			this.JustHide();
			return;
		}
		this.Morph();
		this.SugDiv.style.visibility = "visible";
	}
};
var SAYT = new SearchAhead;
function toolbar() { dw('<div id=toggle_td_30 style="margin-top:-1px;margin-right:-7px;margin-left:-7px;display:block;height:28px;background:#CAD4E4"><a style="display:block;float:right;height:28px;width:28px;line-height:28px;background:transparent url(http:/' + '/img.tfd.com/m/toolbarpromo2.png) no-repeat right 0" href="javascript:toggle(30)" title="remove toolbar banner"></a><a style="background: #CAD4E4 url(http:/' + '/img.tfd.com/m/toolbarpromo2.png) no-repeat 0 0;position:absolute;display:block;width:900px;height:28px;line-height:28px;margin:0 auto;" href="http:/' + '/www.farlex.com/toolbar/download.html"></a></div>'); toggle_retrieve(30) };
function fiveMinVideo(){dw('<i'+'frame id="fiveMinVideoFrame" src="http:/'+'/a.farlex.com/_/misc/fiveMinVideo.html?'+encodeURIComponent(CanonicalURL)+'" marginwidth="0" marginheight="0" hspace="0" vspace="0" border="0" frameborder="0" height="220" scrolling="no" width="710"></iframe><br>')};
function wldbanner(ch) { dw('<div class=banner_ad><a href="/_/gr.aspx?url=' + escape('http:/' + '/www.worldlawdebt.com/promotion/index.php?category=' + ch) + '"><img border=0 width=300 height=75 src="http:/'+'/img.tfd.com/m/wld-banner300x75.jpg"></a></div>') };
var wthr_f_no = 0;
function local_info(n, z) {
	dw('<hr class=hmshort>');
	if (z && z.length == 5) {wthr_f_no+=1;dw('<div id="WTHR_LoadingContent'+wthr_f_no+'"><img width=16 height=16 src=http:/'+'/img.tfd.com/m/wait16.gif></div><iframe src="/_/hp/Controls/AsyncWeatherControl.aspx?location='+z+'&contentId=WTHR_LoadingContent'+wthr_f_no+'&NOD=5&Unit=F" id="wrifrm'+wthr_f_no+'" class="ifrm" style="display:'+(navigator.userAgent && navigator.userAgent.indexOf('Gecko')>0?'inline':'none')+'"></iframe><br>')};
	if (n) {n=encodeURIComponent(n);dw('<img width=320 height=280 src="http:/'+'/maps.google.com/maps/api/staticmap?center='+n+'&zoom=5&size=320x280&maptype=map&markers=color:red|color:red|label:|'+n+'&sensor=false"><img style="margin-left:6pt" width=320 height=280 src="http:/'+'/maps.google.com/maps/api/staticmap?center='+n+'&&size=320x280&maptype=terrain&markers=color:red|color:red|label:|'+n+'&sensor=false">')};
}
function _CPD(destId, data) { var dest = ById(destId); if (dest) { dest.setAttribute("DataLoaded", "1"); dest.innerHTML = data; } }
function loading(contId) {
    ById(contId).innerHTML = '<img id=' + contId + '_ld width="16" height="16" src="http://img.tfd.com/m/wait16.gif"/>';
    setTimeout(function () { if (ById(contId + '_ld')) ById(contId).innerHTML = 'Problem loading data'; }, 10000);
}
var fconn = new function () {
    var th = this;
    var siteId;
    var trsl;
    var evnts = '';
    this.fcShowLoginPanel = function() {
        var b = getCookie('brain');
        if (b) b = Number(b); else b = 0;
        b += 20; if (b > 60) b = 60;
        setCookie('brain', b, C_GLOBAL);
        ById('fcLoginPanel').innerHTML = (Domain == 'tfd.com') ? "<a href='http://thefreedictionary.com'>" + th.tr('login') + "</a>" :
            "<div class=err onclick='fconn.remErr()' id=fcErrLogin></div><form id=fcLogin>"
            + "<table id=login cellpadding=0 cellspacing=0><tr><td>E-mail</td><td><input type=text id=fcUn tabindex='1' onclick='fconn.remErr()' class=login_in maxlength=32></td>"
            + "<td rowspan=3 valign=top id=soclog><a href='" + th.SURL + "ExtLogin/FacebookLogin.aspx'><span class='img A' style='background-position:-129px -15px'></span></a><a href='" + th.SURL + "Login.aspx?twitter'><span class='img A' style='background-position:-97px -15px;'></span></a><div style='display:inline' id='googleLogin'><span class='img A' style='background-position:-24px 0'></span></div><a href='" + th.SURL + "ExtLogin/Yahoo.aspx'><span class='img A' style='width:11px;background-position:-57px -18px;'></span></a></td>"
            + "<td rowspan=3 class=fBrain><a href='" + th.SURL + "Registration.aspx'><span class='img br" + b + "smX'></span><br>" + b + "%</a><div id=fcLd><img id=fcLoading style='display:none' src='http://img.tfd.com/m/wait16.gif'/></div></td>"
            + "</tr><tr><td>" + th.tr('password') + "</td><td><input type=password  tabindex='2' onclick='fconn.remErr()' id=fcPsw class=login_in maxlength=32></td></tr>"
            + "<tr><td colspan=2 class=nw><input tabindex='3' type=checkbox id=fcRem /><label for=fcRem>" + th.tr('rememberMe') + "</label> <input type='submit' tabindex='4' onclick='fconn.login();return false;' value=\"" + th.tr('login') + "\" class=login_btn></td></tr>"
            + "<tr><td colspan=3 class=nw><a tabindex='5' href='" + th.SURL + "Registration.aspx'>" + th.tr('joinUs') + "</a>&nbsp;<a tabindex='6' href='" + th.SURL + "PasswordRecovery.aspx'>" + th.tr('forgotPassword') + "</a></td></tr>"
            + "</table>"
            + "</form>";
        AsyncRequest('https://plus.google.com/js/client:plusone.js?onload=gpRender');
    }
	this.remErr = function() {ById('fcErrLogin').style.display = 'none';}
    function isFC() { return typeof fc != 'undefined'; }
    function isLogin() { return getCookie('userTicket'); }
    function fcReq() { if (!isFC()) AsyncRequest(th.URL + 'static/js/fc.js'); }

    this.URL = 'http://secure.thefreedictionary.com/';
    this.SURL = 'https://secure.thefreedictionary.com/';
    this.tr = function (k) { return trsl[k] ? trsl[k] : '[' + k + ']'; }
    this.go = function(sid, trans) {
        fcSiteId = sid; trsl = trans; if (isLogin()) { loading('fcLoginPanel'); fcReq(); } else th.fcShowLoginPanel();
    }
    this.loginErr = function () {
        ById('fcErrLogin').innerHTML = th.tr('wrongLogin');
        ById('fcErrLogin').style.display = 'inline';
        ById('fcLoading').style.display = 'none';
    }
    this.login = function() {
        var u = ById('fcUn').value;
        var p = ById('fcPsw').value;
        if (!u || !p) {
            th.loginErr();
        } else {
            if (ById('fcRem').checked) r = "&rememberMe=1"; else r = "";
            var hp2 = getCookie('hp2');
            AsyncRequest(th.SURL + 'Login.aspx?js=' + (isFC() ? '1' : '2') + '&usrName=' + u + '&usrPwd=' + p + '&d=' + document.domain.split('.')[0] + r + (hp2 ? '&hp2=' + encodeURIComponent(hp2) : '') + '&x=' + (new Date()).getTime());
            ById('fcLoading').style.display = '';
            ById('fcErrLogin').style.display = 'none';
        }
    }
    this.homepageChanged = function () { if (isFC()) fc.sync(); }
    this.ev = function(event) {
        if (isFC()) fc.regEv(event);
        else { if (evnts.length < 500) evnts += event + ','; }
    }
    this.pushEvts = function (FC) {
        if (!evnts) return;
        var evs = evnts.split(',');
        for (var i in evs) if (evs[i]) FC.regEv(evs[i]);
        evnts = '';
    }
    this.evSh = function (nfo) { setCookie('rff', nfo, C_GLOBAL | C_NOEXP); AsyncRequest(th.URL + 'api/regSh.ashx?d=' + nfo) }
    this.wordList = function() {
        if (isLogin()) {
            if (isFC()) { dw(fc.wordList); if (ById('wlAdd')) ById('wlAdd').style.display = ''; if (fc.wordList && ById('wlExcel')) ById('wlExcel').style.display = ''; } else loading('word_list');
        } else
            dw(th.tr('loginForBookmarks').replace('{0}', "<a href='" + th.SURL + "Login.aspx'>" + th.tr('plzLogin') + "</a>").replace("{1}", "<a href='" + th.SURL + "Registration.aspx'>" + th.tr('plzRegister') + "</a>"));
    }
    this.shP = function() { return (isLogin()) ? "?sr=" + getCookie('userNfo', 1).split('/')[0] : ""; }
    if ((x = location.search.indexOf("?sr=") >= 0)) th.evSh('a' + location.search.substring(x + 3)); 
}
function gpRender() {
    gapi.signin.render('googleLogin', {
        'callback': 'gpSignIn',
        'clientid': '491489187941-li860niuhee17nr5sa8frglin1n7speu.apps.googleusercontent.com',
        'cookiepolicy': 'http://thefreedictionary.com',
        'apppackagename': 'com.tfd.mobile.TfdSearch',
        'scope': 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile'
    });
}
function gpSignIn(authResult) {
    if (authResult['code']) {
        setCookie('gpAT', authResult['access_token'], C_GLOBAL);
        AsyncRequest(fconn.SURL + "ExtLogin/GoogleLogin.ashx?js=2&code=" + authResult['code']);
    }
}
var notif = new function () {
    var PUSH_ID = 'web.thefreedictionary';
    var deviceToken = null;
    var ct = {}; 
    var st = 0; 
    var th = this;
    this.supported = function () { return ('safari' in window && 'pushNotification' in window.safari); }
    this.check = function (data) {
        if (data.permission === 'default') {
            window.safari.pushNotification.requestPermission('https://secure.thefreedictionary.com/push/rq', PUSH_ID, {}, function (d) { notif.check(d); });
            var ii = setInterval(function () { var p; if ((p = window.safari.pushNotification.permission(PUSH_ID)).permission !== 'default') { window.clearInterval(ii); th.check(p); } }, 1000);
            st = 1;
        }
        else if (data.permission === 'denied') {
            st = -1;
            th.refr();

        } else if (data.permission === 'granted') {
            deviceToken = data.deviceToken;
            if (st == 1) th.save('wod', 720);
            st = 2;
            th.refr();
        }
    }
    this.regCrtl = function (t) {
        if (IsMob) return;
        dw('<span id="nf_' + t + '"></span>');
        ct[t] = -1;
        th.refr();
    }
    this.setStatus = function (ss) {
        for (var k in ct) if (ss[k]) ct[k] = ss[k];
        st = 4;
        th.refr();
    }
    this.refr = function () {
        var f = 0;
        for (var k in ct) {
            f = 1;
            if (st == -1) updateNotifControls(k, -2); else if (st == 4) updateNotifControls(k, ct[k]);
        }
        if (f && st == 2) {
            AsyncRequest('http://secure.thefreedictionary.com/push/get.ashx?d=' + deviceToken + '&o=' + (new Date()).getTimezoneOffset());
            st = 3;
        }
    }
    this.save = function (t, v) {
        AsyncRequest('http://secure.thefreedictionary.com/push/save.ashx?d=' + deviceToken+'&t='+t+'&v='+v+'&o='+(new Date()).getTimezoneOffset());
    }
    if (th.supported()) th.check(window.safari.pushNotification.permission(PUSH_ID));
}