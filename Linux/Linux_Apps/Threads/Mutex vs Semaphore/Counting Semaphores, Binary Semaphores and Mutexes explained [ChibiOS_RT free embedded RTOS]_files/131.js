function cCk(nm,vl,mn) {var ex=cdm="";if (mn) {var d=new Date();d.setTime(d.getTime()+(mn*6*1000)); ex="; expires="+d.toGMTString();}document.cookie=nm+"="+vl+ex+"; path=/;"+cdm+"";}
function rCk(nm) {var nEQ=nm+"=";var ca=document.cookie.split(';');for (var i=0;i<ca.length;i++) {var c=ca[i]; while (c.charAt(0)==' ') c=c.substring(1,c.length); if (c.indexOf(nEQ) == 0) return c.substring(nEQ.length,c.length);}return null;}
function ud(t) {var u=""+t.getTime();return(u);}
function uvg(_bu_) {_ort=new Date();_ort.setTime((1000*1389250797)+(1000*3600));_ot=new Date();_ot.setTime(parseInt(_bu_,10)+(1000*3600));if ((_ort.getUTCDay()==_ot.getUTCDay())&&(_ort.getUTCMonth()==_ot.getUTCMonth())&&(_ort.getUTCFullYear()==_ot.getUTCFullYear())) {return 0;}return 1;}
function _vis(uid){var sv;var v=0;var otb_=new Date();if (sv = rCk("MLRV_"+uid)){var det=otb_.getTime()-parseInt(sv,10);if (det>1800000) { v=1;}}else { v=1;}cCk("MLRV_"+uid,otb_.getTime());return v;}
function _ssFngt(){return("");}function artk() {var uid="316759833";var mlr = rCk("MLR"+uid);var v=_vis(uid);cCk("MLR"+uid,1000*1389250797,2592000);
    if (v==1){
    	var mle_=document.createElement('script'); 
    	mle_.type='text/javascript'; 
    	mle_.id="_12mlejs"; 
    	mle_.src="http://d0.shinystat.com/cgi-bin/mle.cgi?nv="+v+"&ud="+uvg(mlr)+_ssFngt()+"&nid=3&dsid=16759833&tid=131&VJS=01MAR&RM="+Math.round(Math.random()*2147483647); 
    	document.getElementsByTagName('head')[0].appendChild(mle_); 
   }
}
artk();
//-->

