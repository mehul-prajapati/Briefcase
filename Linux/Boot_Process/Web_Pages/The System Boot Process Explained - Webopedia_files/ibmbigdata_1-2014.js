if (typeof jQuery == 'undefined' || typeof $ == 'undefined') { 
	document.write( '<script type=\"text/javascript\" src=\"http://code.jquery.com/jquery-1.11.0.min.js\"></' );
	document.write( 'script>' );
	document.write( '<script type=\"text/javascript\" src=\"http://code.jquery.com/jquery-migrate-1.2.1.min.js\"></' );
	document.write( 'script>' );	
} 
	
document.write( '<style> .rightNavNew {overflow:visible;} </style>' );
//document.write( '<!-- third-party impression tracker --><IMG SRC=\"http://ad.doubleclick.net/ad/N815.112817.QUINSTREET/B7051876.2;sz=1x1;ord=12345?\" BORDER=0 WIDTH=1 HEIGHT=1 ALT=\"Advertisement\">' );

document.write( '<!-- BOB Image and link ---><style> .mainimg { cursor:pointer; cursor: hand; } </style>' );
document.write( '<div id=\"triLevelExpansionAdId\" class=\"triLevelExpansionAdClass\"><a id=\"mainimg_12812\" class=\"mainimg\" target=\"_blank\" onMouseOver=\"expandBobOnMouseOver();\"' );
document.write( ' onclick=\"expandBobOnClick();\"><img src=\"http://b2badcenter.quinstreet.com/ads/ibmbigdata/imgs/IBM-Big-Data_Bob_v2.jpg\" border=\"0\" height=\"250\" vspace=\"0\" hspace=\"0\" width=\"300\" title=\"\" style=\"\"></a>	<div id=\"MO_12812\" class=\"flyou' );
document.write( 't\" style=\"z-index:999900;position: absolute;width:511px;height:426px;');

if ( location.href.indexOf("webdeveloper") != -1 ) { 
	document.write('margin-left:-150px;');
}
else {
	document.write('margin-left:-450px;');
}

document.write('margin-top:-180px;display:none;border: 1px 1px 1px 1px solid black;\">	<img src=\"http://b2badcenter.quinstreet.com/ads/ibmbigdata/imgs/IBM-Big-Data_Main_v2.jpg\" ' );
document.write( 'border=\"0\" height=\"426\" vspace=\"0\" hspace=\"0\" width=\"511\" title=\"\" style=\"\" usemap=\"#button_map\"> ');
document.write( '<map id=\"button_map_id\" name=\"button_map\">' );
document.write( '<area class=\"ad_map_area\" href=\"javascript:\" id=\"close_btn_element\" shape=\"rect\" coords=\"485,0,511,25\" onclick=\"displayOff(\'MO_12812\');setReopenDelay();return false;\" alt=\"\" />' );
//document.write( '<area class=\"ad_map_area\" href=\"javascript:\" id=\"top_banner_element\" shape=\"rect\" coords=\"0,0,480,55\" onclick=\"openClientHome();\" alt=\"\" />' );
document.write( '<area class=\"ad_map_area\" href=\"javascript:\" id=\"tab1_element\" shape=\"rect\" coords=\"380,58,511,115\" onclick=\"displayOff(\'MO_12812\');displayOn(\'frame1\');return false;\" alt=\"\" />' );
document.write( '<area class=\"ad_map_area\" href=\"javascript:\" id=\"tab2_element\" shape=\"rect\" coords=\"380,120,511,175\" onclick=\"displayOff(\'MO_12812\');displayOn(\'frame2\');return false;\" alt=\"\" />	<area class=\"ad_map_area\" href=\"javascript:\" id=\"tab3_element\" shape=\"rect\" co' );
document.write( 'ords=\"380,180,511,235\" onclick=\"displayOff(\'MO_12812\');displayOn(\'frame3\');return false;\" alt=\"\" />	<area class=\"ad_map_area\" href=\"javascript:\" id=\"tab4_element\" shape=\"rect\" coords=\"380,240,511,295\" onclick=\"displayOff(\'MO_1281' );
document.write( '2\');displayOn(\'frame4\');return false;\" alt=\"\" />	<area class=\"ad_map_area\" href=\"javascript:\" id=\"tab5_element\" shape=\"rect\" coords=\"380,300,511,355\" onclick=\"displayOff(\'MO_12812\');displayOn(\'frame5\');return false;\" alt=\"\" />	' );
document.write( '	<area class=\"ad_map_area\" href=\"javascript:\" id=\"tab6_element\" shape=\"rect\" coords=\"380,360,511,420\" onclick=\"displayOff(\'MO_12812\');displayOn(\'frame6\');return false;\" alt=\"\" />	</map> </div>' );
document.write( '<div id=\"frame1\" class=\"flyout\" style=\"z-index:999999;position: absolute;width:511px;height:426px;margin-left:-450px;margin-top:-180px;display:none;border: 1px 1px 1px 1px solid black;\">' );
document.write( '<img src=\"http://b2badcenter.quinstreet.com/ads/ibmbigdata/jan-2014/InfoInt_panel.jpg\" width=\"511\" border=\"0\" usemap=\"#frame1_map\">' );

document.write( '<map id=\"frame1_map_id\" name=\"frame1_map\">' );
document.write( '<area class=\"ad_map_area\" href=\"javascript:\" id=\"close_btn_element\" shape=\"rect\" coords=\"485,0,511,25\" onclick=\"displayOff(\'frame1\');setReopenDelay();\" alt=\"\" />' );
//document.write( '<area class=\"ad_map_area\" href=\"javascript:\" id=\"top_banner_element\" shape=\"rect\" coords=\"0,0,480,55\" onclick=\"displayOff(\'frame1\');displayOn(\'MO_12812\');openClientHome();\" alt=\"\" />' );
document.write( '<area class=\"ad_map_area\" href=\"javascript:\" id=\"tab1_element\" shape=\"rect\" coords=\"380,58,511,115\" onclick=\"return false;\" alt=\"\" />' );
document.write( '<area class=\"ad_map_area\" href=\"javascript:\" id=\"tab2_element\" shape=\"rect\" coords=\"380,120,511,175\" onclick=\"displayOff(\'frame1\');displayOn(\'frame2\');return false;\" alt=\"\" />' );
document.write( '<area class=\"ad_map_area\" href=\"javascript:\" id=\"tab3_element\" shape=\"rect\" coords=\"380,180,511,235\" onclick=\"displayOff(\'frame1\');displayOn(\'frame3\');return false;\" alt=\"\" />' );
document.write( '<area class=\"ad_map_area\" href=\"javascript:\" id=\"tab4_element\" shape=\"rect\" coords=\"380,240,511,295\" onclick=\"displayOff(\'frame1\');displayOn(\'frame4\');return false;\" alt=\"\" />' );
document.write( '<area class=\"ad_map_area\" href=\"javascript:\" id=\"tab5_element\" shape=\"rect\" coords=\"380,300,511,355\" onclick=\"displayOff(\'frame1\');displayOn(\'frame5\');return false;\" alt=\"\" />' );
document.write( '<area class=\"ad_map_area\" href=\"javascript:\" id=\"tab6_element\" shape=\"rect\" coords=\"380,360,511,420\" onclick=\"displayOff(\'frame1\');displayOn(\'frame6\');return false;\" alt=\"\" />' );

document.write( '<!-- assets frame1 -->	' );
document.write( '<area class=\"ad_map_area\" href=\"http://pubads.g.doubleclick.net/gampad/clk?id=41209730&iu=/5055/B2B/clickTracker\" id=\"asset1_element\" shape=\"rect\" coords=\"0,63,370,198\" target=\"_blank\" alt=\"\" />' );
document.write( '<!-- realize top performance and scalability -->' );
document.write( '<area class=\"ad_map_area\" href=\"http://pubads.g.doubleclick.net/gampad/clk?id=41213690&iu=/5055/B2B/clickTracker\" id=\"asset2_element\" shape=\"rect\" coords=\"0,215,370,270\" target=\"_blank\" alt=\"\" />' );
document.write( '<!-- cleanse and transform --> ' );
document.write( '<area class=\"ad_map_area\" href=\"http://pubads.g.doubleclick.net/gampad/clk?id=41209610&iu=/5055/B2B/clickTracker\" id=\"asset3_element\" shape=\"rect\" coords=\"0,280,370,335\" target=\"_blank\" alt=\"\" />' );
document.write( '<!-- detect and deliver --> ' );
document.write( '<area class=\"ad_map_area\" href=\"http://pubads.g.doubleclick.net/gampad/clk?id=41210810&iu=/5055/B2B/clickTracker\" id=\"asset3_element\" shape=\"rect\" coords=\"0,345,370,400\" target=\"_blank\" alt=\"\" />' );
document.write( '</map>	</div>' );

document.write( '<div id=\"frame2\" class=\"flyout\" style=\"z-index:999999;position: absolute;width:511px;height:426px;margin-left:-450px;margin-top:-180px;display:none' );
document.write( ';border: 1px 1px 1px 1px solid black;\">	<img src=\"http://b2badcenter.quinstreet.com/ads/ibmbigdata/jan-2014/MDM_panel.jpg\" width=\"511\" border=\"0\" usemap=\"#frame2_map\">	<map id=\"frame2_map_id\" name=\"frame2_map\">	<area class=\"ad_map_area\" href=' );
document.write( '\"javascript:\" id=\"close_btn_element\" shape=\"rect\" coords=\"485,0,511,25\" onclick=\"displayOff(\'frame2\');setReopenDelay();return false;\" alt=\"\" />' );
//document.write( '<area class=\"ad_map_area\" href=\"javascript:\" id=\"top_banner_element\" shape=\"rect\" coords=\"0,0,480,55\" onclick=\"displayOff(\'frame2\');displayOn(\'MO_12812\');openClientHome();\" alt=\"\" />' );
document.write( '<area class=\"ad_map_area\" href=\"javascript:\" id=\"tab1_element\" shape=\"rect\" coords=\"380,58,511,115\" onclick=\"displayOff(\'' );
document.write( 'frame2\');displayOn(\'frame1\');return false;\" alt=\"\" />	<area class=\"ad_map_area\" href=\"javascript:\" id=\"tab2_element\" shape=\"rect\" coords=\"380,120,511,175\" onclick=\"return false;\" alt=\"\" />	<area class=\"ad_map_area\" href' );
document.write( '=\"javascript:\" id=\"tab3_element\" shape=\"rect\" coords=\"380,180,511,235\" onclick=\"displayOff(\'frame2\');displayOn(\'frame3\');return false;\" alt=\"\" />	<area class=\"ad_map_area\" href=\"javascript:\" id=\"tab4_element\" shape=\"rect\" coord' );
document.write( 's=\"380,240,511,295\" onclick=\"displayOff(\'frame2\');displayOn(\'frame4\');return false;\" alt=\"\" />	<area class=\"ad_map_area\" href=\"javascript:\" id=\"tab5_element\" shape=\"rect\" coords=\"380,300,511,355\" onclick=\"displayOff(\'frame2\');di' );
document.write( 'splayOn(\'frame5\');return false;\" alt=\"\" />	<area class=\"ad_map_area\" href=\"javascript:\" id=\"tab6_element\" shape=\"rect\" coords=\"380,360,511,420\" onclick=\"displayOff(\'frame2\');displayOn(\'frame6\');return false;\" alt=\"\" />' );

document.write( '<!-- assets frame2 -->' );
document.write( '<area class=\"ad_map_area\" href=\"http://pubads.g.doubleclick.net/gampad/clk?id=41210210&iu=/5055/B2B/clickTracker\" id=\"asset1_element\" shape=\"rect\" coords=\"0,65,370,198\" target=\"_blank\" alt=\"\" />' );
document.write( '<area class=\"ad_map_area\" href=\"http://pubads.g.doubleclick.net/gampad/clk?id=41211170&iu=/5055/B2B/clickTracker\" id=\"asset2_element\" shape=\"rect\" coords=\"0,215,370,270\" target=\"_blank\" alt=\"\" />' );
document.write( '<area class=\"ad_map_area\" href=\"http://pubads.g.doubleclick.net/gampad/clk?id=41210930&iu=/5055/B2B/clickTracker\" id=\"asset3_element\" shape=\"rect\" coords=\"0,280,370,350\" target=\"_blank\" alt=\"\" />' );
document.write( '<area class=\"ad_map_area\" href=\"http://pubads.g.doubleclick.net/gampad/clk?id=41214650&iu=/5055/B2B/clickTracker\" id=\"asset3_element\" shape=\"rect\" coords=\"0,355,370,415\" target=\"_blank\" alt=\"\" />' );
document.write( '</map>	</div>' );
document.write( '<div id=\"frame3\" class=\"flyout\" style=\"z-index:999999;position: absolute;width:511px;height:426px;margin-left:-450px;margin-top:-180px;display:none;border: 1px 1px 1px 1px solid black;\">' );
document.write( '<img src=\"http://b2badcenter.quinstreet.com/ads/ibmbigdata/jan-2014/BDWA_panel.jpg\" widt' );
document.write( 'h=\"511\" border=\"0\" usemap=\"#frame3_map\">	<map id=\"frame3_map_id\" name=\"frame3_map\">	<area class=\"ad_map_area\" href=\"javascript:\" id=\"close_btn_element\" shape=\"rect\" coords=\"485,0,511,25\" onclick=\"displayOff(\'frame3\');setReopen' );
document.write( 'Delay();return false;\" alt=\"\" />' );
//document.write( '<area class=\"ad_map_area\" href=\"javascript:\" id=\"top_banner_element\" shape=\"rect\" coords=\"0,0,480,55\" onclick=\"displayOff(\'frame3\');displayOn(\'MO_12812\');openClientHome();\" alt=\"\" />	' );
document.write( ' <area class=\"ad_map_area\" href=\"javascript:\" id=\"tab1_element\" shape=\"rect\" coords=\"380,58,511,115\" onclick=\"displayOff(\'frame3\');displayOn(\'frame1\');return false;\" alt=\"\" />	<area class=\"ad_map_area\" href=\"javascript:\" id' );
document.write( '=\"tab2_element\" shape=\"rect\" coords=\"380,120,511,175\" onclick=\"displayOff(\'frame3\');displayOn(\'frame2\');return false;\" alt=\"\" />	<area class=\"ad_map_area\" href=\"javascript:\" id=\"tab3_element\" shape=\"rect\" coords=\"380,180,511,235' );
document.write( '\" onclick=\"return false;\" alt=\"\" />	<area class=\"ad_map_area\" href=\"javascript:\" id=\"tab4_element\" shape=\"rect\" coords=\"380,240,511,295\" onclick=\"displayOff(\'frame3\');displayOn(\'frame4\');return false;\" alt=\"\" />	<area class=' );
document.write( '\"ad_map_area\" href=\"javascript:\" id=\"tab5_element\" shape=\"rect\" coords=\"380,300,511,355\" onclick=\"displayOff(\'frame3\');displayOn(\'frame5\');return false;\" alt=\"\" />	<area class=\"ad_map_area\" href=\"javascript:\" id=\"tab6_element\" ' );
document.write( 'shape=\"rect\" coords=\"380,360,511,420\" onclick=\"displayOff(\'frame3\');displayOn(\'frame6\');return false;\" alt=\"\" />' );

document.write( '<!-- assets frame3 -->' );
document.write( '<area class=\"ad_map_area\" href=\"http://pubads.g.doubleclick.net/gampad/clk?id=41210090&iu=/5055/B2B/clickTracker\" id=\"asset1_element\" shape=\"rect\" coords=\"0,67,370,198\" target=\"_blank\" alt=\"\" />' );
document.write( '<area class=\"ad_map_area\" href=\"http://pubads.g.doubleclick.net/gampad/clk?id=41211410&iu=/5055/B2B/clickTracker\" id=\"asset2_element\" shape=\"rect\" coords=\"0,215,370,270\" target=\"_blank\" alt=\"\" />' );
document.write( '<area class=\"ad_map_area\" href=\"http://pubads.g.doubleclick.net/gampad/clk?id=41210450&iu=/5055/B2B/clickTracker\" id=\"asset3_element\" shape=\"rect\" coords=\"0,280,370,335\" target=\"_blank\" alt=\"\" />' );
document.write( '<area class=\"ad_map_area\" href=\"http://pubads.g.doubleclick.net/gampad/clk?id=41207090&iu=/5055/B2B/clickTracker\" id=\"asset3_element\" shape=\"rect\" coords=\"0,345,370,400\" target=\"_blank\" alt=\"\" />' );
document.write( '</map>	</div>' );	
document.write( '<div id=\"frame4\" class=\"flyout\" style=\"z-index:999999;position: absolute;width:511px;height:426px;margin-left:-450px;margin' );
document.write( '-top:-180px;display:none;border: 1px 1px 1px 1px solid black;\">	<img src=\"http://b2badcenter.quinstreet.com/ads/ibmbigdata/jan-2014/DM_panel.jpg\" width=\"511\" border=\"0\" usemap=\"#frame4_map\">	<map id=\"frame4_map_id\" name=\"frame4_map\">	<area' );
document.write( ' class=\"ad_map_area\" href=\"javascript:\" id=\"close_btn_element\" shape=\"rect\" coords=\"485,0,511,25\" onclick=\"displayOff(\'frame4\');setReopenDelay();return false;\" alt=\"\" />' );
//document.write( '<area class=\"ad_map_area\" href=\"javascript:\" id=\"top_banner_element\" shape=\"rect\" coords=\"0,0,480,55\" onclick=\"displayOff(\'frame4\');displayOn(\'MO_12812\');openClientHome();\" alt=\"\" />' );
document.write( '<area class=\"ad_map_area\" href=\"javascript:\" id=\"tab1_element\" shape=\"rect\" coords=\"380,58,511,' );
document.write( '115\" onclick=\"displayOff(\'frame4\');displayOn(\'frame1\');return false;\" alt=\"\" />	<area class=\"ad_map_area\" href=\"javascript:\" id=\"tab2_element\" shape=\"rect\" coords=\"380,120,511,175\" onclick=\"displayOff(\'frame4\');displayOn(\'' );
document.write( 'frame2\');return false;\" alt=\"\" />	<area class=\"ad_map_area\" href=\"javascript:\" id=\"tab3_element\" shape=\"rect\" coords=\"380,180,511,235\" onclick=\"displayOff(\'frame4\');displayOn(\'frame3\');return false;\" alt=\"\" />	<area class=\"a' );
document.write( 'd_map_area\" href=\"javascript:\" id=\"tab4_element\" shape=\"rect\" coords=\"380,240,511,295\" onclick=\"return false;\" alt=\"\" />	<area class=\"ad_map_area\" href=\"javascript:\" id=\"tab5_element\" shape=\"rect\" coords=\"380,300,511,355\" onclic' );
document.write( 'k=\"displayOff(\'frame4\');displayOn(\'frame5\');return false;\" alt=\"\" />	<area class=\"ad_map_area\" href=\"javascript:\" id=\"tab6_element\" shape=\"rect\" coords=\"380,360,511,420\" onclick=\"displayOff(\'frame4\');displayOn(\'frame6\');return f' );
document.write( 'alse;\" alt=\"\" />' );

document.write( '<!-- assets frame4 -->' );
document.write( '<area class=\"ad_map_area\" href=\"http://pubads.g.doubleclick.net/gampad/clk?id=41213450&iu=/5055/B2B/clickTracker\" id=\"asset1_element\" shape=\"rect\" coords=\"0,67,370,198\" target=\"_blank\" alt=\"\" />' );
document.write( '<area class=\"ad_map_area\" href=\"http://pubads.g.doubleclick.net/gampad/clk?id=41209970&iu=/5055/B2B/clickTracker\" id=\"asset2_element\" shape=\"rect\" coords=\"0,215,370,270\" target=\"_blank\" alt=\"\" />' );
document.write( '<area class=\"ad_map_area\" href=\"http://pubads.g.doubleclick.net/gampad/clk?id=41211050&iu=/5055/B2B/clickTracker\" id=\"asset3_element\" shape=\"rect\" coords=\"0,280,370,335\" target=\"_blank\" alt=\"\" /> ' );
document.write( '<area class=\"ad_map_area\" href=\"http://pubads.g.doubleclick.net/gampad/clk?id=41209490&iu=/5055/B2B/clickTracker\" id=\"asset3_element\" shape=\"rect\" coords=\"0,345,370,400\" target=\"_blank\" alt=\"\" />' );
document.write( '</map>	</div>' );
document.write( '<div id=\"frame5\" class=\"flyout\" style=\"z-index:999999;position: absolute;width:511px;height:426px;margin-left:-450px;margin-top:-180px;display:none;border: 1px 1px 1px 1px solid black;\">	<img src=\"http://b2badcenter.quinstreet.com' );
document.write( '/ads/ibmbigdata/jan-2014/DSP_panel.jpg\" width=\"511\" border=\"0\" usemap=\"#frame5_map\">' );
document.write( '<map id=\"frame5_map_id\" name=\"frame5_map\">' );
document.write( '<area class=\"ad_map_area\" href=\"javascript:\" id=\"close_btn_element\" shape=\"rect\" coords=\"485,0,511,25\" onclick=\"displayOff(\'frame5\');setReopenDelay();return false;\" alt=\"\" />' );
//document.write( '<area class=\"ad_map_area\" href=\"javascript:\" id=\"top_banner_element\" shape=\"rect\" coords=\"0,0,480,55\" onclick=\"displayOff(\'frame5\');displayOn(\'MO_12812\');openClientHome();\" alt=\"\" />' );
document.write( '<area class=\"ad_map_area\" href=\"javascript:\" id=\"tab1_element\" shape=\"rect\" coords=\"380,58,511,115\" onclick=\"displayOff(\'frame5\');displayOn(\'frame1\');return false;\" alt=\"\" />	<area clas' );
document.write( 's=\"ad_map_area\" href=\"javascript:\" id=\"tab2_element\" shape=\"rect\" coords=\"380,120,511,175\" onclick=\"displayOff(\'frame5\');displayOn(\'frame2\');return false;\" alt=\"\" />	<area class=\"ad_map_area\" href=\"javascript:\" id=\"tab3_element\"' );
document.write( ' shape=\"rect\" coords=\"380,180,511,235\" onclick=\"displayOff(\'frame5\');displayOn(\'frame3\');return false;\" alt=\"\" />	<area class=\"ad_map_area\" href=\"javascript:\" id=\"tab4_element\" shape=\"rect\" coords=\"380,240,511,295\" onclick=\"disp' );
document.write( 'layOff(\'frame5\');displayOn(\'frame4\');return false;\" alt=\"\" />	<area class=\"ad_map_area\" href=\"javascript:\" id=\"tab5_element\" shape=\"rect\" coords=\"380,300,511,355\" onclick=\"return false;\" alt=\"\" />	<area class=\"ad_map_area\" h' );
document.write( 'ref=\"javascript:\" id=\"tab6_element\" shape=\"rect\" coords=\"380,360,511,420\" onclick=\"displayOff(\'frame5\');displayOn(\'frame6\');return false;\" alt=\"\" />' );

document.write( '<!-- assets frame5 -->' );
document.write( '<area class=\"ad_map_area\" href=\"http://pubads.g.doubleclick.net/gampad/clk?id=41213570&iu=/5055/B2B/clickTracker\" id=\"asset1_element\" shape=\"rect\" coords=\"0,63,370,198\" target=\"_blank\" alt=\"\" />' );
document.write( '<area class=\"ad_map_area\" href=\"http://pubads.g.doubleclick.net/gampad/clk?id=41213330&iu=/5055/B2B/clickTracker\" id=\"asset2_element\" shape=\"rect\" coords=\"0,215,370,270\" target=\"_blank\" alt=\"\" />' );
document.write( '<area class=\"ad_map_area\" href=\"http://pubads.g.doubleclick.net/gampad/clk?id=41214410&iu=/5055/B2B/clickTracker\" id=\"asset3_element\" shape=\"rect\" coords=\"0,280,370,335\" target=\"_blank\" alt=\"\" />' );
document.write( '<area class=\"ad_map_area\" href=\"http://pubads.g.doubleclick.net/gampad/clk?id=41214770&iu=/5055/B2B/clickTracker\" id=\"asset3_element\" shape=\"rect\" coords=\"0,345,370,400\" target=\"_blank\" alt=\"\" />' );
document.write( '</map>	</div>' );

document.write( '<div id=\"frame6\" class=\"flyout\" style=\"z-index:999999;position: absolute;widt' );
document.write( 'h:511px;height:426px;margin-left:-450px;margin-top:-180px;display:none;border: 1px 1px 1px 1px solid black;\">	<img src=\"http://b2badcenter.quinstreet.com/ads/ibmbigdata/jan-2014/DLG_panel.jpg\" width=\"511\" border=\"0\" usemap=\"#frame6_map\">	<map id=\"' );
document.write( 'frame6_map_id\" name=\"frame6_map\">	<area class=\"ad_map_area\" href=\"javascript:\" id=\"close_btn_element\" shape=\"rect\" coords=\"485,0,511,25\" onclick=\"displayOff(\'frame6\');setReopenDelay();return false;\" alt=\"\" />' );
//document.write( '<area class=\"ad_map_area\" href=\"javascript:\" id=\"top_banner_element\" shape=\"rect\" coords=\"0,0,480,55\" onclick=\"displayOff(\'frame6\');displayOn(\'MO_12812\');openClientHome();\" alt=\"\" />' );
document.write( '<area class=\"ad_map_area\" href=\"javascript:\" id=\"tab1_element\" shape=\"rect\" coords=\"380,58,511,115\" onclick=\"displayOff(\'frame6\');displayOn(\'frame1\');return false;\" alt=\"\" />' );
document.write( '<area class=\"ad_map_area\" href=\"javascript:\" id=\"tab2_element\" shape=\"rect\" coords=\"380,120,511,175\"' );
document.write( ' onclick=\"displayOff(\'frame6\');displayOn(\'frame2\');return false;\" alt=\"\" />	<area class=\"ad_map_area\" href=\"javascript:\" id=\"tab3_element\" shape=\"rect\" coords=\"380,180,511,235\" onclick=\"displayOff(\'frame6\');displayOn(\'frame3\');r' );
document.write( 'eturn false;\" alt=\"\" />	<area class=\"ad_map_area\" href=\"javascript:\" id=\"tab4_element\" shape=\"rect\" coords=\"380,240,511,295\" onclick=\"displayOff(\'frame6\');displayOn(\'frame4\');return false;\" alt=\"\" />	<area class=\"ad_map_area\"' );
document.write( ' href=\"javascript:\" id=\"tab5_element\" shape=\"rect\" coords=\"380,300,511,355\" onclick=\"displayOff(\'frame6\');displayOn(\'frame5\');return false;\" alt=\"\" />	<area class=\"ad_map_area\" href=\"javascript:\" id=\"tab6_element\" shape=\"rect\" ' );
document.write( 'coords=\"380,360,511,420\" onclick=\"return false;\" alt=\"\" />' );

document.write( '<!-- assets frame6 -->' );
document.write( '<area class=\"ad_map_area\" href=\"http://pubads.g.doubleclick.net/gampad/clk?id=41210690&iu=/5055/B2B/clickTracker\" id=\"asset1_element\" shape=\"rect\" coords=\"0,63,370,198\" target=\"_blank\" alt=\"\" />' );
document.write( '<area class=\"ad_map_area\" href=\"http://pubads.g.doubleclick.net/gampad/clk?id=41213210&iu=/5055/B2B/clickTracker\" shape=\"rect\" coords=\"0,215,370,270\" target=\"_blank\" alt=\"\" />' );
document.write( '<area class=\"ad_map_area\" href=\"http://pubads.g.doubleclick.net/gampad/clk?id=41214530&iu=/5055/B2B/clickTracker\" id=\"asset3_element\" shape=\"rect\" coords=\"0,280,370,335\" target=\"_blank\" alt=\"\" />' );
document.write( '<area class=\"ad_map_area\" href=\"http://pubads.g.doubleclick.net/gampad/clk?id=41209370&iu=/5055/B2B/clickTracker\" id=\"asset3_element\" shape=\"rect\" coords=\"0,345,370,400\" target=\"_blank\" alt=\"\" />' );
document.write( '</map>	</div></div>' );
document.write('');

theMainExpandedDiv = document.getElementById("MO_12812");
theFrame1Div = document.getElementById("frame1");
theFrame2Div = document.getElementById("frame2");
theFrame3Div = document.getElementById("frame3");
theFrame4Div = document.getElementById("frame4");
theFrame5Div = document.getElementById("frame5");
theFrame6Div = document.getElementById("frame6");
BOBOpen = false;
delaySet = 0;

//Site Specific Layout Adjustments argh
if ( location.href.indexOf("sharepointbriefing") != -1 && navigator.appVersion.indexOf("MSIE") != -1) { fix_1(); }
if ( location.href.indexOf("4guysfromrolla") != -1 ) { fix_1(); }
if ( location.href.indexOf("enterprisemobiletoday") != -1 && navigator.appVersion.indexOf("MSIE") != -1) { fix_1(); }
if ( location.href.indexOf("linuxplanet") != -1 && navigator.appVersion.indexOf("MSIE") != -1) { fix_1(); }
if ( location.href.indexOf("smallbusinesscomputing") != -1 && navigator.appVersion.indexOf("MSIE") != -1) { fix_1(); }
if ( location.href.indexOf("eweek") != -1 && navigator.appVersion.indexOf("MSIE")  != -1) { fix_1(); } else { fix_3(); }
if ( location.href.indexOf("vbforums") != -1 || location.href.indexOf("webdeveloper") != -1 ) { fix_2(); }

if ( location.href.indexOf("databasejournal") != -1 && navigator.appVersion.indexOf("MSIE") != -1) { fix_1(); }
if ( location.href.indexOf("datamation") != -1 && navigator.appVersion.indexOf("MSIE") != -1) { fix_1(); }
if ( location.href.indexOf("dbasupport") != -1 && navigator.appVersion.indexOf("MSIE") != -1) { fix_1(); }
if ( location.href.indexOf("ecommerce-guide") != -1 && navigator.appVersion.indexOf("MSIE") != -1) { fix_1(); }
if ( location.href.indexOf("itchannelplanet") != -1 && navigator.appVersion.indexOf("MSIE") != -1) { fix_1(); } else { fix_3(); }
if ( location.href.indexOf("justtechjobs") != -1 && navigator.appVersion.indexOf("MSIE") != -1) { fix_1(); }
if ( location.href.indexOf("linuxtoday") != -1 && navigator.appVersion.indexOf("MSIE") != -1) { fix_1(); }
if ( location.href.indexOf("practicallynetworked") != -1 && navigator.appVersion.indexOf("MSIE") != -1) { fix_1(); }
if ( location.href.indexOf("smallbusinesscomputing") != -1 ) { if( navigator.appVersion.indexOf("MSIE") != -1) { fix_1(); } else { fix_3(); } }	
if ( location.href.indexOf("serverwatch") != -1 && navigator.appVersion.indexOf("MSIE") != -1) { fix_1(); }
if ( location.href.indexOf("antionline") != -1 && navigator.appVersion.indexOf("MSIE") != -1) { fix_3(); }

if ( location.href.indexOf("codeguru") != -1 ) {
 $(".ad").removeClass("ad");
}

function fix_1() {
	//alert("1");
	theMainExpandedDiv.style.marginLeft = "-750px";
	theFrame1Div.style.marginLeft = "-750px";
	theFrame2Div.style.marginLeft = "-750px";
	theFrame3Div.style.marginLeft = "-750px";
	theFrame4Div.style.marginLeft = "-750px";
	theFrame5Div.style.marginLeft = "-750px";
	theFrame6Div.style.marginLeft = "-750px";
	theMainExpandedDiv.style.marginTop = "70px";
	theFrame1Div.style.marginTop = "70px";
	theFrame2Div.style.marginTop = "70px";
	theFrame3Div.style.marginTop = "70px";
	theFrame4Div.style.marginTop = "70px";
	theFrame5Div.style.marginTop = "70px";
	theFrame6Div.style.marginTop = "70px";
}
function fix_2() {
	//alert("2");
	theMainExpandedDiv.style.marginLeft = "-150px";
	theFrame1Div.style.marginLeft = "-150px";
	theFrame2Div.style.marginLeft = "-150px";
	theFrame3Div.style.marginLeft = "-150px";
	theFrame4Div.style.marginLeft = "-150px";
	theFrame5Div.style.marginLeft = "-150px";
	theFrame6Div.style.marginLeft = "-150px";
}
function fix_3() {
	//alert("3");
	theMainExpandedDiv.style.marginLeft = "-400px";
	theFrame1Div.style.marginLeft = "-400px";
	theFrame2Div.style.marginLeft = "-400px";
	theFrame3Div.style.marginLeft = "-400px";
	theFrame4Div.style.marginLeft = "-400px";
	theFrame5Div.style.marginLeft = "-400px";
	theFrame6Div.style.marginLeft = "-400px";
	theMainExpandedDiv.style.marginTop = "-120px";
	theFrame1Div.style.marginTop = "-120px";
	theFrame2Div.style.marginTop = "-120px";
	theFrame3Div.style.marginTop = "-120px";
	theFrame4Div.style.marginTop = "-120px";
	theFrame5Div.style.marginTop = "-120px";
	theFrame6Div.style.marginTop = "-120px";
}

function displayOn(theID) {
	var theElem = document.getElementById(theID);
	$("#" + theID).fadeIn('slow');
	return false;
}
function displayOff(theID) {
var theElem = document.getElementById(theID);
$("#" + theID).fadeOut('slow');
return false;
}
function setReopenDelay() {
delaySet=setTimeout("reactivate_BobOpen();",6000);
BOBOpen = false;
return false;
}
function turnOffBobOpen() {
var theMainBobImgAnchor = document.getElementById("mainimg_12812");
theMainBobImgAnchor.onmouseover = function(event) { }
return;
}
function reactivate_BobOpen() {
var theMainBobImgAnchor = document.getElementById("mainimg_12812");
theMainBobImgAnchor.onmouseover = function(event) { expandBobOnMouseOver(); }
return;
}
function openClientHome() {
//Title bar click tracker
//window.open('http://o1.qnsr.com/cgi/r?;n=203;c=1363072;s=8986;x=7936;f=201208092027180;u=j;q=1;z=TIMESTAMP;');
}
function expandBobOnMouseOver() {
if(!BOBOpen) {
displayOn('MO_12812');
BOBOpen = true;
var theMainBobImgAnchor = document.getElementById("mainimg_12812");
theMainBobImgAnchor.onmouseover = function(event) { }
if(delaySet) {
delaySet=window.clearInterval(delaySet);
}
//	rollover imp tracker
// var img=document.createElement("img");
// img.src="http://l1.cdn.qnsr.com/log/p.gif?;a=20211888;x=8192;c=204363013;n=203;s=8986;e=i;z=TIMESTAMP;";
// document.body.appendChild(img);
}
}
function expandBobOnClick() {
if(!BOBOpen) {
displayOn('MO_12812');
BOBOpen = true;
var theMainBobImgAnchor = document.getElementById("mainimg_12812");
theMainBobImgAnchor.onmouseover = function(event) { }
if(delaySet) {
delaySet=window.clearInterval(delaySet);
}
//	click-to-open imp tracker
// var img=document.createElement("img");
// img.src="http://l1.cdn.qnsr.com/log/p.gif?;a=20212463;x=8192;c=204364068;n=203;s=8986;e=i;z=TIMESTAMP;";
// document.body.appendChild(img);
}
}
