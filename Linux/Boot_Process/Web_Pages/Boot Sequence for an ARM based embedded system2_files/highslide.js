/**
*	Site-specific configuration settings for Highslide JS
*/
hs.graphicsDir = 'http://www.embeddedrelated.com/new/highslide/highslide/graphics/';
hs.showCredits = false;
hs.outlineType = 'custom';		
hs.dimmingOpacity = 0.75;
hs.align = 'center';
hs.allowSizeReduction = false;
hs.allowMultipleInstances = false;
hs.enableKeyListener = false;
hs.numberOfImagesToPreload = 0;
hs.registerOverlay({
	html: '<div class="closebutton" onclick="return hs.close(this)" title="Close"></div>',
	position: 'top right',
	useOnHtml: true,
	fade: 2 // fading the semi-transparent overlay looks bad in IE
});

