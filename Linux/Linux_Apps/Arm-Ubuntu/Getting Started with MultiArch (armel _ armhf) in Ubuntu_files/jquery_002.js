(function($){$.fn.gslider=function(settings){var config={groupid:0,speed:3000};if(settings)$.extend(true,config,settings)
this.each(function(i){var $cont=$(this);var gallery=$(this).children();var length=gallery.length;var timer=0;var counter=1;if(length>1){for(n=1;n<length;n++){$cont.find(".c-"+ n).hide();}
$cont.find(".c-"+ Math.floor(Math.random()*length+1)).show();timer=setInterval(function(){play();},config.speed);}
function transitionTo(gallery,index){if((counter>=length)||(index>=length)){counter=1;}else{counter++;}
$cont.find(".c-"+ counter).fadeIn(300)
if(length>1){$cont.find(".c-"+ index).fadeOut(300);}}
function play(){if(length>1)transitionTo(gallery,counter);}});return this;};}(jQuery));