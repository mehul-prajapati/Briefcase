/*
Copyright (c) 2014, comScore Inc. All rights reserved.
version: 5.0.3
*/
COMSCORE.SiteRecruit.Builder.config = {
	version: "5.0.3",
	
	// invitations' settings
	invitation: [
							
											{ 	methodology: 2,
					projectId: 'p218260443',
					weight: 100,
					isRapidCookie: false,
					acceptUrl: 'http://survey2.surveysite.com/wix/p218260443.aspx',
					secureUrl: '',
					acceptParams: {
						raw: '',
						siteCode: '1176',
												cookie: [
													],
												otherVariables: [
													]
					},
					viewUrl: 'http://b.scorecardresearch.com/b',
					viewParams: 'log=comscore/view/p218260443-view.log',
					content: '<div style="width:366px; border: 1px solid #3b3b3b;background-color:#FFF;"><div style="position:relative; top:12px; left:56px"> 	<div style="height:44px;font-family:\'Segoe UI Light\'; font-size:24px; color:#000;"> 		Please help us improve  		<div style="position:relative; top: -17pt; left:250px; width: 26; height: 26;"><a href="javascript:void(0);" onclick="@declineHandler"><img src="close_v3.gif" border="0"/></a></div> 	</div> 	<div style="font-family:\'Segoe UI\'; font-size:12px; color:#000; width:250px;line-height:14px;"> 		Microsoft is conducting an online survey to understand your opinion of the MSDN Web. If you choose to participate, the online survey will be presented to you when you leave the MSDN Web.<br /><br />Would you like to participate in this survey?     	</div> 	 	<div style="width:300px;height:38px;margin-top:28px;"> 		 		<div style="width:91px;" > 			       <input name="button" type="button" value=" I want to " style="border-style:none; background-color:#000000; font-family:\'Segoe UI\'; font-size:12px; color:#FFF; height:34px;width:91px;cursor:pointer;" onclick="@acceptHandler;"/>     </div> 	       <div style="position:relative; top: -34px; left:147px; width:91px;height:34px;">     	<input name="button" type="button" value=" No thanks " style="border-style:none; background-color:#000000; font-family:\'Segoe UI\'; font-size:12px; color:#FFF; height:34px;width:91px;cursor:pointer;" onclick="@declineHandler;"/>	     </div> 	  		   </div> 	     <div style="margin-top:10px;"> 	  	   	<img src="msdn-logo-stripe2.gif" style="display:inline">  	  	     <div style="position:relative; top: -20px; left:147px;width:150px;"><a href="http://privacy.microsoft.com/en-us/default.mspx" style="font-family:\'Segoe UI\'; font-size:10px; color:#0072bc; text-decoration:none;" target="_blank">Privacy Statement</a></div> 	     </div><br />  </div></div>',
					height: 310,
					width: 368,
					revealDelay: 1000,
					horizontalAlignment: 2,
					verticalAlignment: 2,
					horizontalMargin: 0,
					verticalMargin: 0,
					startingHorizontalAlignment: 2,
					startingVerticalAlignment: 2,
					startingHorizontalMargin: 0,
					startingVerticalMargin: 0,
					isHideBlockingElements: false,
					isAutoCentering: false,
					url: 'SiteRecruit_Tracker.htm',
					trackerGracePeriod: 5,
					usesSilverlight: false
					
					//silverlight config
										
											,trackerWindow: {
							width: 400,
							height: 270,
							orientation: 4,
							offsetX: 0,
							offsetY: 0,
							hideToolBars: true,
							trackerPageConfigUrl: 'trackerConfig_MSDN-p218260443.js'
							// future feature: 
							//features: "location=0,menubar=0,resizable=1,scrollbars=1,toolbar=0"
						}
																				,Events: {
						beforeRender: function() {
														if(_pipeIn){
var _cont = COMSCORE.SiteRecruit.Builder.invitation.config.content;
COMSCORE.SiteRecruit.Builder.invitation.config.content = 	_cont.replace(/MSDN Web/g, _pipeIn);
}
if(/38|39|40|41|42/.test(_Hweight.toString())){
	var _cont = COMSCORE.SiteRecruit.Builder.invitation.config.content;	
	COMSCORE.SiteRecruit.Builder.invitation.config.content = 	_cont.replace(/msdn-logo-stripe2/gi, "logo-stripeSmall");
	COMSCORE.SiteRecruit.Builder.invitation.config.trackerWindow.trackerPageConfigUrl = "trackerConfig_MSDN-p218260443-MSLogo.js";
	setTimeout("COMSCORE.SiteRecruit.Builder.invitation.decline(this);", 20000);
}
COMSCORE.SiteRecruit.Builder.invitation.config.acceptParams.siteCode = _Site;
COMSCORE.SiteRecruit.Builder.invitation.config.acceptParams.raw = _raw_params;
													}
						,beforeDestroy: function() {
														
													}
						,beforeAccept: function() {
														
													}
						,beforeDecline: function() {
														
													}
						,beforeRenderUpdate: function() {
														
													}
						,afterRender: function() {
														
													}
					}
				}
						]
};
COMSCORE.SiteRecruit.Builder.run();
