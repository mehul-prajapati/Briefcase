function UBMCommentService(){this.loginSelector=".comments_login";this.postCommentSelector="#post-comments";this.mainSelector="#mainComment";this.counterSelector="#comment-counter";this.counterSelector2="#comment-counter-top";this.socialSelector="#socialCommentDiv";this.listSelector="#comments";this.replySelector="#subdiv";this.counterText="[COUNT] Comments";this.counterText2='<a href="#comments">[COUNT] Comments</a>';this.commentContainer='<div class="comments childcomments[LEVEL]" id="comment-[COMMENT_ID]" data-contentItemId="[CONTENTITEM_ID]">'+'<div class="user"><img src="[USER_IMAGE]" width="75px" height="75px" alt="" /></div>'+'<div class="NNA_CommentTextSubBase Level[LEVEL]"><p>[USER_SCREENNAME]</p><p>[COMMENT_TEXT]</p><p>[COMMENT_DATE]</p></div>'+'<div class="clear"></div>[REPLY_CONTAINER]</div>';this.loginContainer='<p class="reply dark_blue"><a href="javascript:void(0)" onclick="NextGen.loginForm(\'[RETURN_URL]\')">Reply</a></p>';this.replyContainer='<p class="reply dark_blue"><a href="javascript:_commentService.replyToComment([CONTENTITEM_ID], [COMMENT_ID],\'[CONTENTITEM_URL]\', [LEVEL])">Reply</a></p>';this.replyEntryContainer='<div id="subdiv">'+'<p><textarea name="description" id="replyComment" cols="25" rows="4" class="postCommentTextarea" ></textarea></p>'+'<p><input name="submit" type="button" id="replySubmit" onclick="_commentService.postComment([CONTENTITEM_ID], $(\'#replyComment\').val(), [PARENT_COMMENT_ID], \'[CONTENTITEM_URL]\', [LEVEL])" value="Submit Comment" class="button no-float" /> <input type="button" id="cancel" value="Cancel" onclick="_commentService.cancelSubmit()" class="button no-float"/></p>'+"</div>";this.initialize=function(){var e=$(this.postCommentSelector);var t=$(this.mainSelector);$(this.loginSelector).click(function(n){n.preventDefault();e.slideToggle("slow");t.focus()})};this.replyToComment=function(e,t,n,r){$("#replySubmit").attr("disabled","disabled");var i=this.replyEntryContainer.replace("[CONTENTITEM_ID]",e);i=i.replace("[PARENT_COMMENT_ID]",t);i=i.replace("[CONTENTITEM_URL]",n);i=i.replace("[LEVEL]",++r);$("#comment-"+t).find("#subdiv").remove();$("#comment-"+t).append(i);$("#replyComment").focus()};this.postComment=function(e,t,n,r,i){var s=this;var o=$(this.listSelector);var u=$(this.mainSelector);if(t==null||$.trim(t)==""){alert("Comment cannot be blank");return}if(t.indexOf("<")>-1||t.indexOf(">")>-1){alert("Comment cannot contain < or >.");return}if(t.length>2e3){alert("Comment cannot be more than 2000 characters.");return}this.AjaxCall({method:"PostComment",params:{contentItemId:e,comment:t,parentCommentId:n},callback:function(a){if(!a.success&&a.url){window.location=a.url+"?returnUrl="+encodeURIComponent(window.location);return}s.adjustCounter(a.ActiveCommentCount);var f=s.populateCommentContainer(e,a.CommentId,r,a.UserImage,a.userId,a.UserScreenName,s.checkForLinks(t),s.formatDateFromComment(a),i,true);if($("#comment-"+n).length){$("#comment-"+n).after(f);$("#subdiv").remove()}else{o.prepend(f)}$("#submit").removeAttr("disabled");u.val("");Omniture_trackComment()}})};this.loadComments=function(e,t){var n=this;this.AjaxCall({method:"LoadComments",params:{contentItemId:e},callback:function(r){n.commentsLoaded(r,e,t)}})};this.commentsLoaded=function(e,t,n){var r=this;$.each(e.Comments,function(){r.loadCommentTree(this,t,this.returnUrl)});r.adjustCounter(e.ActiveCommentCount)};this.loadCommentTree=function(e,t,n){var r=this;var i=r.populateCommentContainer(t,e.Id,n,e.UserImage,e.UserId,e.UserScreenName,r.checkForLinks(e.CommentText),r.formatDateFromComment(e),e.CommentLevel,e.AllowReply);$(this.listSelector).append(i);if(e.CommentChildren!=null){$.each(e.CommentChildren,function(){r.loadCommentTree(this,t,n)})}};this.populateCommentContainer=function(e,t,n,r,i,s,o,u,a,f){var l=this.commentContainer;if(a<5&&f)l=l.replace("[REPLY_CONTAINER]",this.replyContainer);else if(a<5&&!f){l=l.replace("[REPLY_CONTAINER]",this.loginContainer);l=l.replace("[RETURN_URL]",n)}else l=l.replace("[REPLY_CONTAINER]","");var c=s;if(s!=="anonymous user")c='<a href="/user/'+escape(s)+'">'+s+"</a>";l=l.replace(/\[LEVEL\]/g,a);l=l.replace(/\[COMMENT_ID\]/g,t);l=l.replace(/\[CONTENTITEM_ID\]/g,e);l=l.replace(/\[USER_IMAGE\]/g,r);l=l.replace(/\[USER_SCREENNAME\]/g,c);l=l.replace(/\[COMMENT_TEXT\]/g,o);l=l.replace(/\[COMMENT_DATE\]/g,u);return l};this.adjustCounter=function(e){if(e>0){$(this.counterSelector).html(this.counterText.replace("[COUNT]",e));$(this.counterSelector2).html(this.counterText2.replace("[COUNT]",e));if($(this.socialSelector))$(this.socialSelector).show()}else{$(this.counterSelector).html("");$(this.counterSelector2).html("");if($(this.socialSelector))$(this.socialSelector).hide()}};this.cancelSubmit=function(){$(this.replySelector).remove()};this.formatDateFromComment=function(e){return _dateHelper.formatDate(e.CommentYear,e.CommentMonth,e.CommentDayOfMonth,e.CommentHour,e.CommentMinute)};this.checkForLinks=function(e){e=e.replace(/[\n\r]/g," <br/> ");var t=e.split(" ");for(var n=0;n<t.length;n++){if(t[n].indexOf("https://")>=0||t[n].indexOf("http://")>=0){t[n]='<a href="'+t[n]+'" target="_blank" class="comment-urls">'+t[n]+"</a>"}else if(t[n].indexOf("www.")>=0){t[n]='<a href="http://'+t[n]+' " target="_blank" class="comment-urls">'+t[n]+"</a>"}}return t.join(" ")}}function initComments(){_commentService.commentContainer='<div class="comments childcomments[LEVEL]" id="comment-[COMMENT_ID]" data-contentItemId="[CONTENTITEM_ID]">'+'<div class="user"><img src="[USER_IMAGE]" width="75px" height="75px" alt="" /></div>'+'<div class="NNA_CommentTextSubBase Level[LEVEL]"><p>[USER_SCREENNAME]</p><p>[COMMENT_TEXT]</p><p>[COMMENT_DATE]</p></div>'+'<div class="clear"></div>[REPLY_CONTAINER]</div>';_commentService.loginContainer='<p class="reply dark_blue"><a href="javascript:void(0)" onclick="NextGen.loginForm(\'[RETURN_URL]\')">Reply</a></p>';_commentService.replyContainer='<p class="reply dark_blue"><a href="javascript:_commentService.replyToComment([CONTENTITEM_ID], [COMMENT_ID],\'[CONTENTITEM_URL]\', [LEVEL])">Reply</a></p>';_commentService.replyEntryContainer='<div id="subdiv">'+'<p><textarea name="description" id="replyComment" cols="25" rows="4" class="postCommentTextarea" ></textarea></p>'+'<p><input name="submit" type="button" id="replySubmit" onclick="_commentService.postComment([CONTENTITEM_ID], $(\'#replyComment\').val(), [PARENT_COMMENT_ID], \'[CONTENTITEM_URL]\', [LEVEL])" value="Submit Comment" /> <input type="button" id="cancel" value="Cancel" onclick="_commentService.cancelSubmit()" /></p>'+"</div>";_commentService.counterText="[COUNT] Comments";_commentService.initialize()}$(document).ready(function(){initComments()});UBMCommentService.prototype=new UBMService("/Comment/");var _commentService=new UBMCommentService