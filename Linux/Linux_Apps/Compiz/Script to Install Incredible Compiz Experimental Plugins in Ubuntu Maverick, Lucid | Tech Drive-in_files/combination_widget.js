

function dsqComboTab(tab) {
	document.getElementById('dsq-combo-people').style.display = "none";
	document.getElementById('dsq-combo-popular').style.display = "none";
	document.getElementById('dsq-combo-recent').style.display = "none";
	document.getElementById('dsq-combo-tab-people').className = "dsq-combo-tab";
	document.getElementById('dsq-combo-tab-popular').className = "dsq-combo-tab";
	document.getElementById('dsq-combo-tab-recent').className = "dsq-combo-tab";

	document.getElementById('dsq-combo-' + tab).style.display = "block";
	document.getElementById('dsq-combo-tab-' + tab).className = "dsq-combo-tab dsq-active";
}

document.write(' \
<style type="text/css" media="screen">\
	 #dsq-combo-widget ul,\
	 #dsq-combo-widget li,\
	 #dsq-combo-widget ol,\
	 #dsq-combo-widget div,\
	 #dsq-combo-widget p,\
	 #dsq-combo-widget a,\
	 #dsq-combo-widget cite,\
	 #dsq-combo-widget img {\
	 border: 0;\
	 padding: 0;\
	 margin: 0;\
	 float: none;\
	 text-indent: 0;\
	 background: none;\
	 }\
	 #dsq-combo-widget ul,\
	 #dsq-combo-widget li,\
	 #dsq-combo-widget ol {\
	 list-style-type: none;\
	 list-style-image: none;\
	 background: none;\
	 display: block;\
	 }\
	 #dsq-combo-widget #dsq-combo-content ul,\
	 #dsq-combo-widget #dsq-combo-content li,\
	 #dsq-combo-widget #dsq-combo-content ol,\
	 #dsq-combo-widget #dsq-combo-content div,\
	 #dsq-combo-widget #dsq-combo-content p,\
	 #dsq-combo-widget #dsq-combo-content a,\
	 #dsq-combo-widget #dsq-combo-content cite,\
	 #dsq-combo-widget #dsq-combo-content img {\
	 border: 0;\
	 padding: 0;\
	 margin: 0;\
	 float: none;\
	 text-indent: 0;\
	 background: none;\
	 }\
	 #dsq-combo-widget #dsq-combo-content ul,\
	 #dsq-combo-widget #dsq-combo-content li,\
	 #dsq-combo-widget #dsq-combo-content ol {\
	 list-style-type: none;\
	 list-style-image: none;\
	 background: none;\
	 display: block;\
	 }\
	 .dsq-clearfix:after {\
	 content:".";\
	 display: block;\
	 height: 0;\
	 clear: both;\
	 visibility: hidden;\
	 }\
	 /* end reset */\
	 #dsq-combo-widget { ;\
	 text-align: left;\
	 }\
	 #dsq-combo-widget #dsq-combo-tabs {\
	 float: left;\
	 }\
	 #dsq-combo-widget #dsq-combo-content {\
	 position: static;\
	 }\
	 #dsq-combo-widget #dsq-combo-content h3 {\
	 float: none;\
	 text-indent: 0;\
	 background: none;\
	 padding: 0;\
	 border: 0;\
	 margin: 0 0 10px 0;\
	 font-size: 16px;\
	 }\
	 #dsq-combo-widget #dsq-combo-tabs li {\
	 display: inline;\
	 float: left;\
	 margin-right: 2px;\
	 padding: 0px 5px;\
	 text-transform: uppercase;\
	 }\
	 #dsq-combo-widget #dsq-combo-tabs li a {\
	 text-decoration: none;\
	 font-weight: bold;\
	 font-size: 10px;\
	 }\
	 #dsq-combo-widget #dsq-combo-content .dsq-combo-box {\
	 margin: 0 0 20px;\
	 padding: 12px;\
	 clear: both;\
	 }\
	 #dsq-combo-widget #dsq-combo-content .dsq-combo-box li {\
	 padding-bottom: 10px;\
	 margin-bottom: 10px;\
	 overflow: hidden;\
	 word-wrap: break-word;\
	 }\
	 #dsq-combo-widget #dsq-combo-content .dsq-combo-avatar {\
	 float: left;\
	 height: 48px;\
	 width: 48px;\
	 margin-right: 15px;\
	 }\
	 #dsq-combo-widget #dsq-combo-content .dsq-combo-box cite {\
	 font-weight: bold;\
	 font-size: 14px;\
	 }\
	 span.dsq-widget-clout {\
	 background-color:#FF7300;\
	 color:#FFFFFF;\
	 padding:0pt 2px;\
	 }\
	 #dsq-combo-logo { text-align: right; }\
	 /* Blue */\
	 #dsq-combo-widget.blue #dsq-combo-tabs li.dsq-active { background: #E1F3FC; }\
	 #dsq-combo-widget.blue #dsq-combo-content .dsq-combo-box { background: #E1F3FC; }\
	 #dsq-combo-widget.blue #dsq-combo-tabs li { background: #B5E2FD; }\
	 #dsq-combo-widget.blue #dsq-combo-content .dsq-combo-box li { border-bottom: 1px dotted #B5E2FD; }\
	 /* Grey */\
	 #dsq-combo-widget.grey #dsq-combo-tabs li.dsq-active { background: #f0f0f0; }\
	 #dsq-combo-widget.grey #dsq-combo-content .dsq-combo-box { background: #f0f0f0; }\
	 #dsq-combo-widget.grey #dsq-combo-tabs li { background: #ccc; }\
	 #dsq-combo-widget.grey #dsq-combo-content .dsq-combo-box li { border-bottom: 1px dotted #ccc; }\
	 /* Green */\
	 #dsq-combo-widget.green #dsq-combo-tabs li.dsq-active { background: #f4ffea; }\
	 #dsq-combo-widget.green #dsq-combo-content .dsq-combo-box { background: #f4ffea; }\
	 #dsq-combo-widget.green #dsq-combo-tabs li { background: #d7edce; }\
	 #dsq-combo-widget.green #dsq-combo-content .dsq-combo-box li { border-bottom: 1px dotted #d7edce; }\
	 /* Red */\
	 #dsq-combo-widget.red #dsq-combo-tabs li.dsq-active { background: #fad8d8; }\
	 #dsq-combo-widget.red #dsq-combo-content .dsq-combo-box { background: #fad8d8; }\
	 #dsq-combo-widget.red #dsq-combo-tabs li { background: #fdb5b5; }\
	 #dsq-combo-widget.red #dsq-combo-content .dsq-combo-box li { border-bottom: 1px dotted #fdb5b5; }\
	 /* Orange */\
	 #dsq-combo-widget.orange #dsq-combo-tabs li.dsq-active { background: #fae6d8; }\
	 #dsq-combo-widget.orange #dsq-combo-content .dsq-combo-box { background: #fae6d8; }\
	 #dsq-combo-widget.orange #dsq-combo-tabs li { background: #fddfb5; }\
	 #dsq-combo-widget.orange #dsq-combo-content .dsq-combo-box li { border-bottom: 1px dotted #fddfb5; }\
	 </style>\
	 <div id="dsq-combo-widget" class="grey">\
	 <ul id="dsq-combo-tabs">\
	 <li id="dsq-combo-tab-people" ><a href="#" onclick="dsqComboTab(\'people\'); return false">People</a></li>\
	 <li id="dsq-combo-tab-recent" class="dsq-active"><a href="#" onclick="dsqComboTab(\'recent\'); return false">Recent</a></li>\
	 <li id="dsq-combo-tab-popular" ><a href="#" onclick="dsqComboTab(\'popular\'); return false">Popular</a></li>\
	 </ul>\
	 <div id="dsq-combo-content">\
	 <div id="dsq-combo-people" class="dsq-combo-box" style="display:none">\
	 <h3>Top Commenters</h3>\
	 <ul>\
	 <li class="dsq-clearfix">\
	 <a href="http://disqus.com/extremizt/">\
	 <img class="dsq-combo-avatar" src="//a.disquscdn.com/uploads/users/133/4259/avatar92.jpg?1302335721">\
	 </a>\
	 <cite><a href="http://disqus.com/extremizt/">Manuel</a></cite>\
	 <div><span class="dsq-widget-clout" title="Clout: Reputation on Disqus"></span>&nbsp;&middot;&nbsp;368 posts</div>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a href="http://disqus.com/madjr/">\
	 <img class="dsq-combo-avatar" src="//a.disquscdn.com/1404927520/images/noavatar92.png">\
	 </a>\
	 <cite><a href="http://disqus.com/madjr/">madjr</a></cite>\
	 <div><span class="dsq-widget-clout" title="Clout: Reputation on Disqus"></span>&nbsp;&middot;&nbsp;79 posts</div>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a href="http://disqus.com/tinhed/">\
	 <img class="dsq-combo-avatar" src="//a.disquscdn.com/uploads/users/36/8481/avatar92.jpg?1403895284">\
	 </a>\
	 <cite><a href="http://disqus.com/tinhed/">tinhed</a></cite>\
	 <div><span class="dsq-widget-clout" title="Clout: Reputation on Disqus"></span>&nbsp;&middot;&nbsp;43 posts</div>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a href="http://disqus.com/satchitb/">\
	 <img class="dsq-combo-avatar" src="//a.disquscdn.com/uploads/users/476/7896/avatar92.jpg?1289395360">\
	 </a>\
	 <cite><a href="http://disqus.com/satchitb/">Satchit Bhogle</a></cite>\
	 <div><span class="dsq-widget-clout" title="Clout: Reputation on Disqus"></span>&nbsp;&middot;&nbsp;39 posts</div>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a href="http://disqus.com/samuelloy/">\
	 <img class="dsq-combo-avatar" src="//a.disquscdn.com/uploads/users/5234/1198/avatar92.jpg?1369499769">\
	 </a>\
	 <cite><a href="http://disqus.com/samuelloy/">Samuel Loy</a></cite>\
	 <div><span class="dsq-widget-clout" title="Clout: Reputation on Disqus"></span>&nbsp;&middot;&nbsp;28 posts</div>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a href="http://disqus.com/musl1m/">\
	 <img class="dsq-combo-avatar" src="//a.disquscdn.com/1404927520/images/noavatar92.png">\
	 </a>\
	 <cite><a href="http://disqus.com/musl1m/">musl1m</a></cite>\
	 <div><span class="dsq-widget-clout" title="Clout: Reputation on Disqus"></span>&nbsp;&middot;&nbsp;22 posts</div>\
	 </li>\
	 </ul>\
	 <div id="dsq-combo-logo"><a href="http://disqus.com"><img src="//a.disquscdn.com/1404927520/images/embed/widget-logo.png"></a></div>\
	 </div>\
	 <div id="dsq-combo-recent" class="dsq-combo-box" >\
	 <h3>Recent Comments</h3>\
	 <ul>\
	 <li class="dsq-clearfix">\
	 <a href="http://disqus.com/RajeshKSV/"><img class="dsq-combo-avatar" src="//a.disquscdn.com/uploads/users/1887/6038/avatar92.jpg?1381563494"></a>\
	 <a class="dsq-widget-user" href="http://disqus.com/RajeshKSV/">Rajesh KSV</a>\
	 <span class="dsq-widget-comment"><p>Hey which icon theme are u using ? (in last but one screenshot)</p></span>\
	 <p class="dsq-widget-meta"><a href="http://www.techdrivein.com/2010/07/top-10-empathy-themes-for-ubuntugnome.html">Top 10 Empathy Themes For Ubuntu/Gnome</a>&nbsp;&middot;&nbsp;<a href="http://www.techdrivein.com/2010/07/top-10-empathy-themes-for-ubuntugnome.html#comment-1475975801">21 hours ago</a></p>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a href="http://disqus.com/KateTheAwesome/"><img class="dsq-combo-avatar" src="//a.disquscdn.com/uploads/users/5199/5307/avatar92.jpg?1404689404"></a>\
	 <a class="dsq-widget-user" href="http://disqus.com/KateTheAwesome/">Katharina Sabel</a>\
	 <span class="dsq-widget-comment"><p>Riiiiight....lol. Right. I know how much Linux is being used by big companies. I worked at multiple. And I only use Linux on my computers and servers. And I\'m not just a user. I\'m a software...</p></span>\
	 <p class="dsq-widget-meta"><a href="http://www.techdrivein.com/2011/05/10-commercial-apps-for-linux-that-i.html">10 Commercial Apps for Linux That I Never Knew Existed</a>&nbsp;&middot;&nbsp;<a href="http://www.techdrivein.com/2011/05/10-commercial-apps-for-linux-that-i.html#comment-1471347443">3 days ago</a></p>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a href="http://disqus.com/disqus_vSApsKicm3/"><img class="dsq-combo-avatar" src="//a.disquscdn.com/1404927520/images/noavatar92.png"></a>\
	 <a class="dsq-widget-user" href="http://disqus.com/disqus_vSApsKicm3/">Wendell Anderson</a>\
	 <span class="dsq-widget-comment"><p>Fortunately Katharina, your statement about big companies not wanting to bring their software to Linux is Not correct. Most the research and engineering entities - like US Depart of Energy research...</p></span>\
	 <p class="dsq-widget-meta"><a href="http://www.techdrivein.com/2011/05/10-commercial-apps-for-linux-that-i.html">10 Commercial Apps for Linux That I Never Knew Existed</a>&nbsp;&middot;&nbsp;<a href="http://www.techdrivein.com/2011/05/10-commercial-apps-for-linux-that-i.html#comment-1456012762">1 week ago</a></p>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a href="http://disqus.com/KateTheAwesome/"><img class="dsq-combo-avatar" src="//a.disquscdn.com/uploads/users/5199/5307/avatar92.jpg?1404689404"></a>\
	 <a class="dsq-widget-user" href="http://disqus.com/KateTheAwesome/">Katharina Sabel</a>\
	 <span class="dsq-widget-comment"><p>We can hope. But right now it seems that commercial software is being brought to Windows mostly and Mac OS X sometimes. Because those are the crowds that pay money for their software. Most linux...</p></span>\
	 <p class="dsq-widget-meta"><a href="http://www.techdrivein.com/2011/05/10-commercial-apps-for-linux-that-i.html">10 Commercial Apps for Linux That I Never Knew Existed</a>&nbsp;&middot;&nbsp;<a href="http://www.techdrivein.com/2011/05/10-commercial-apps-for-linux-that-i.html#comment-1453503233">2 weeks ago</a></p>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a href="http://disqus.com/avcutie_com/"><img class="dsq-combo-avatar" src="//a.disquscdn.com/uploads/users/11126/2192/avatar92.jpg?1404706636"></a>\
	 <a class="dsq-widget-user" href="http://disqus.com/avcutie_com/">avcutie.com</a>\
	 <span class="dsq-widget-comment"><p>Ubuntu in chinese should be 五闷毒</p></span>\
	 <p class="dsq-widget-meta"><a href="http://www.techdrivein.com/2014/06/meizu-mx3-ubuntu-phone-to-be-showcased-mobile-asia-expo-2014.html">Meizu MX3 Ubuntu phone to be showcased at Mobile Asia Expo 2014</a>&nbsp;&middot;&nbsp;<a href="http://www.techdrivein.com/2014/06/meizu-mx3-ubuntu-phone-to-be-showcased-mobile-asia-expo-2014.html#comment-1449666355">2 weeks ago</a></p>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a href="http://disqus.com/toddye/"><img class="dsq-combo-avatar" src="//a.disquscdn.com/1404927520/images/noavatar92.png"></a>\
	 <a class="dsq-widget-user" href="http://disqus.com/toddye/">Toddy E</a>\
	 <span class="dsq-widget-comment"><p>thanks for this review. I have been looking for a player to integrate google play and my desktop - Nuvola Music Player does it so well. Pity none of the others do...well least not that I can work out.</p></span>\
	 <p class="dsq-widget-meta"><a href="http://www.techdrivein.com/2013/02/6-most-good-looking-music-players-for-ubuntu-linux.html">6 Most Good Looking Music Players for Linux</a>&nbsp;&middot;&nbsp;<a href="http://www.techdrivein.com/2013/02/6-most-good-looking-music-players-for-ubuntu-linux.html#comment-1441391902">3 weeks ago</a></p>\
	 </li>\
	 </ul>\
	 <div id="dsq-combo-logo"><a href="http://disqus.com"><img src="//a.disquscdn.com/1404927520/images/embed/widget-logo.png"></a></div>\
	 </div>\
	 <div id="dsq-combo-popular" class="dsq-combo-box" style="display:none">\
	 <h3>Most Discussed</h3>\
	 <ul>\
	 <li class="dsq-clearfix">\
	 <a class="dsq-widget-thread" href="http://www.techdrivein.com/2014/06/synergy-keyboard-mouse-sharing-ubuntu-linux.html">Synergy could be the coolest Open Source App I have tried in a long time</a>\
	 <p class="dsq-widget-meta">11 comments &middot; 4 weeks ago</p>\
	 </li>\
	 </ul>\
	 <div id="dsq-combo-logo"><a href="http://disqus.com"><img src="//a.disquscdn.com/1404927520/images/embed/widget-logo.png"></a></div>\
	 </div>\
	 </div>\
	 </div>\
');
