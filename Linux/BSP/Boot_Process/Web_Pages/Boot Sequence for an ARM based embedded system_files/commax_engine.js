jQuery.noConflict();

jQuery(document).ready(function(){
	
	/* The following code is executed once the DOM is loaded */
	
	// Configure your application path please. This is where it's located the Commax files (mainly commax.processor.php and commax_captcha.php)
	var commaxPostUrl	= "/new/Commax/";
	
	// First get all the configuration variables from comment.class.php
	jQuery.post(commaxPostUrl+'include/commax.processor.php?type=getConfig',function(data) {
		// config vars
		maxCharsAllowed 		= data.maxchars;
		maxReplyCharsAllowed 	= data.replymaxchars;
		theDisplayOrder 		= data.display_order;
		// translatable strings
		L_WORKING 				= data.L_WORKING;
		L_SUBMIT 				= data.L_SUBMIT;
		L_YESREM 				= data.L_YESREM;
		L_NO 					= data.L_NO;
		L_REMOVE 				= data.L_REMOVE;
		L_YESAPP 				= data.L_YESAPP;
		L_APPROVE 				= data.L_APPROVE;
		L_LOADING 				= data.L_LOADING;
		L_REPLY 				= data.L_REPLY;
		L_CANCELREPLY 			= data.L_CANCELREPLY;
	},'json');
	
	
	// ACTIVATE reply and admin links
	function activate_replies() {
		jQuery('.reply_btn').each(function(index) {
			jQuery(this).fadeIn("fast");
		});
		jQuery('.admin_tools').each(function(index) {
			jQuery(this).fadeIn("fast");
		});
	}
	activate_replies();
	
	
	// ACTIVATE COMMENT FORM
	function activate_forms() {
		jQuery('.no_javascript_no_form').hide();
		jQuery('.yes_javascript_yes_form').fadeIn();
	}
	activate_forms();
	
	
	
	// Now we set a flag that will prevent multiple submits
	var working = false;
	
	
	/***********************************************
			COMMENT AND REPLY FORM SUBMITS
	***********************************************/
	
	// Comment form submit listener
	jQuery('#addCommentForm').live('submit', function(e){

 		e.preventDefault();
		if(working) return false;
		
		working = true;
		jQuery('#submit').val(L_WORKING);
		jQuery('span.error').remove();
		
		/* Sending the form fileds to commax.processor.php: */
		jQuery.post(commaxPostUrl+'include/commax.processor.php?type=comment',jQuery(this).serialize(),function(msg){

			working = false;
			jQuery('#submit').val(L_SUBMIT);
			
			if(msg.status){

				/*  If the insert was successful, add the comment below the last comment */
				if (theDisplayOrder == "DESC") {
					if (jQuery(".comment:first").length != 0) {
						jQuery(msg.html).hide().insertBefore('.comment:first').slideDown();
					} else {
						jQuery("#commax_container").find("p:first").remove();
						jQuery(msg.html).hide().insertBefore('#addCommentContainer').slideDown();
					}
					
					offsett = jQuery('.comment:first').offset();
					offsett = offsett.top - 500;
					jQuery('html,body').animate({scrollTop: offsett},'fast');
					
				} else {
					if (jQuery(".commax_bottom_paginator").length != 0) {
						jQuery(msg.html).hide().insertBefore('.commax_bottom_paginator').slideDown();
					} else {
						jQuery(msg.html).hide().insertBefore('#addCommentContainer').slideDown();
					}
				}
				jQuery('#body').val('');
				jQuery('.comment_char_counter').html(maxCharsAllowed);
				jQuery(".commax_captcha_img").attr("src", commaxPostUrl+'include/commax_captcha.php?'+Math.random()).animate({ opacity: 1 }, 500);
				
			} else {

				/* If there were errors, loop through the msg.errors object and display them on the page appending spans */
				jQuery.each(msg.errors,function(k,v){
					if ((k.substring(0, 13) == "reply_ref_id_") || (k == "ref_id") || (k.substring(0, 13) == "reply_parent_") || (k == "parent")) {
						jQuery('#addCommentForm').find('#'+k).insertAfter('<span class="error">'+v+'</span>');
					} else {
						jQuery('#addCommentForm').find('label[for='+k+']').append('<span class="error">'+v+'</span>');
					}
				});
			}
			
		},'json');
		
	});
	
	
	
	// Reply form submit listener
	jQuery('.addReplyForm').live('submit', function(e){
 		e.preventDefault();
		
		parentID = jQuery(this).attr('id');
		parentID = parentID.substring(16);
		
		if(working) return false;
		
		working = true;
		jQuery('#reply_submit_'+parentID).val(L_WORKING);
		jQuery('span.error').remove();
		
		// Sending the form fileds to commax.processor.php:
		jQuery.post(commaxPostUrl+'include/commax.processor.php?type=reply&id='+parentID+'',jQuery(this).serialize(),function(msg){

			working = false;
			jQuery('#reply_submit_'+parentID).val(L_SUBMIT);
			
			if(msg.status){
				//  If the insert was successful, add the comment below the last one (from this replies list)
				if (jQuery('.to_'+parentID+':last').length != 0) {
					jQuery(msg.html).hide().insertAfter('.to_'+parentID+':last').slideDown();
				} else {
					jQuery(msg.html).hide().insertAfter('.id_'+parentID+'').slideDown();
				}
				
				
				// Set the textarea to blank
				jQuery('#reply_body_'+parentID).val('');
				
				jQuery('#rpl_count_'+parentID).html(maxReplyCharsAllowed);
				
				jQuery('#replyto_'+parentID).html(L_REPLY);
				jQuery('#replyto_'+parentID).removeClass("cancel_reply");
				jQuery('#replyto_'+parentID).addClass("reply_btn");
				
				jQuery('#rplcont_'+parentID).slideUp("fast", function() {
					offsett = jQuery('.to_'+parentID+':last').offset();
					offsett = offsett.top;
					offsett = offsett - 50;
					if (offsett > 100) {
						jQuery('html,body').animate({scrollTop: offsett},'slow');
					}
				});
				
				jQuery(".commax_captcha_img").attr("src", commaxPostUrl+'include/commax_captcha.php?'+Math.random()).animate({ opacity: 1 }, 500);
				
			} else {
				// If there were errors, loop through the msg.errors object and display them on the page appending spans
				jQuery.each(msg.errors,function(k,v){
					if ((k.substring(0, 13) == "reply_ref_id_") || (k == "ref_id") || (k.substring(0, 13) == "reply_parent_") || (k == "parent")) {
						jQuery('#addCommentReply_'+parentID).find('#'+k).insertAfter('<span class="error">'+v+'</span>');
					} else {
						jQuery('#addCommentReply_'+parentID).find('label[for='+k+']').append('<span class="error">'+v+'</span>');
					}
				});
			}
			
		},'json');
		
		
	});
	
	
	
	
	/***********************************************
			COMMENT AND REPLY MAX CHAR COUNTER
	***********************************************/
	
	// first get the original color value
	C_originalColor = jQuery('.comment_char_counter').css("color");
	// Comment form maximun character counter
	jQuery('#body').keyup(function() {
		var len = this.value.length;
		if (len >= maxCharsAllowed) {
			this.value = this.value.substring(0, maxCharsAllowed);
			jQuery('.comment_char_counter').css("color", "red");
		} else {
			jQuery('.comment_char_counter').css("color", C_originalColor);
		}
		jQuery('.comment_char_counter').text(maxCharsAllowed - len);
	});
	
	
	// first get the original color value
	R_originalColor = jQuery('.reply_char_counter').css("color");
	// Reply form maximun character counter
	jQuery('.reply_text_area').keyup(function() {
		
		parentID 	= jQuery(this).attr("id");
		parentID 	= parentID.substring(11);
		counterSpan = "#rpl_count_" + parentID;
		
		var len = this.value.length;
		if (len >= maxReplyCharsAllowed) {
			this.value = this.value.substring(0, maxReplyCharsAllowed);
			jQuery(counterSpan).css("color", "red");
		} else {
			jQuery(counterSpan).css("color", R_originalColor);
		}
		jQuery(counterSpan).text(maxReplyCharsAllowed - len);
	});
	
	
	
	
	
	/***********************************************
				REPLY BUTTONS INTERFACE
	***********************************************/
	
	// Reply button click listener
	jQuery('.reply_btn').live('click', function(e) {
		
		e.preventDefault();
		
		parentID = jQuery(this).attr("id");
		parentID = parentID.substring(8);
		
		jQuery(this).html(L_CANCELREPLY);
		jQuery(this).addClass("cancel_reply");
		jQuery(this).removeClass("reply_btn");
		
		jQuery('#rplcont_'+parentID).slideDown();
		
	});
	
	
	// Cancel Reply button click listener
	jQuery('.cancel_reply').live('click', function(e) {
		
		e.preventDefault();
		
		parentID = jQuery(this).attr("id");
		parentID = parentID.substring(8);
		
		jQuery(this).html(L_REPLY);
		jQuery(this).removeClass("cancel_reply");
		jQuery(this).addClass("reply_btn");
		
		jQuery('#rplcont_'+parentID).slideUp();
		
	});
	
	
	
	
	
	
	/***********************************************
				ADMIN BUTTONS INTERFACE
	***********************************************/
	
	// Remove comment button listener
	jQuery('.remove_btn').live('click', function(e) {
		e.preventDefault();
		parentID = jQuery(this).attr("id");
		parentID = parentID.substring(8);
		jQuery(this).hide().html(L_YESREM).fadeIn("normal");
		jQuery('<a class="do_not_remove" id="do_not_remove_'+parentID+'" href="#">'+L_NO+'</a>').insertAfter(this);
		jQuery(this).removeClass("remove_btn").addClass("really_remove_btn");
	});
	
	
	// DO NOT Remove comment button listener
	jQuery('.do_not_remove').live('click', function(e) {
		e.preventDefault();
		parentID = jQuery(this).attr("id");
		parentID = parentID.substring(14);
		jQuery("#rem_btn_"+parentID).addClass("remove_btn").removeClass("really_remove_btn");
		jQuery("#rem_btn_"+parentID).hide().html(L_REMOVE).fadeIn("normal");
		jQuery(this).remove();
	});
	
	
	// REALLY comment button listener
	jQuery('.really_remove_btn').live('click', function(e) {
		e.preventDefault();
		parentID = jQuery(this).attr("id");
		parentID = parentID.substring(8);
		// Sending the request to commax.processor.php:
		jQuery.post(commaxPostUrl+'include/commax.processor.php?type=rem&id='+parentID+'', function(msg){
			if(msg.status){
				// Set the textarea to black
				jQuery('.id_'+parentID).slideUp();
			} else {
				// If there were errors, alert
				alert(msg.error);
			}
		},'json');
		
	});
	
	
	// Approve comment button listener
	jQuery('.aprove_btn').live('click', function(e) {
		e.preventDefault();
		parentID = jQuery(this).attr("id");
		parentID = parentID.substring(8);
		jQuery(this).hide().html(L_YESAPP).fadeIn("normal");
		jQuery('<a class="do_not_approve" id="do_not_approve_'+parentID+'" href="#">'+L_NO+'</a>').insertAfter(this);
		jQuery(this).removeClass("aprove_btn").addClass("really_aprove_btn");
	});
	
	
	// DO NOT Remove comment button listener
	jQuery('.do_not_approve').live('click', function(e) {
		e.preventDefault();
		parentID = jQuery(this).attr("id");
		parentID = parentID.substring(15);
		jQuery("#apr_btn_"+parentID).addClass("aprove_btn").removeClass("really_aprove_btn");
		jQuery("#apr_btn_"+parentID).hide().html(L_APPROVE).fadeIn("normal");
		jQuery(this).remove();
	});
	
	
	// REALLY Approve comment button listener
	jQuery('.really_aprove_btn').live('click', function(e) {
		e.preventDefault();
		parentID = jQuery(this).attr("id");
		parentID = parentID.substring(8);
		// Sending the request to commax.processor.php:
		jQuery.post(commaxPostUrl+'include/commax.processor.php?type=app&id='+parentID+'', function(msg){
			if(msg.status){
				jQuery(".id_"+parentID).removeClass("not_accepted_comment");
				jQuery("#apr_btn_"+parentID).hide();
				jQuery("#do_not_approve_"+parentID).hide();
			} else {
				// If there were errors, alert
				alert(msg.error);
			}
		},'json');
	});
	
	
	
	/***********************************************
				PAGINATION INTERFACE
	***********************************************/
	
	
	// Get what page id are we showing
	ajaxPage_ref_id = jQuery("input#ref_id_value").val();
	
	// Loading info show function
	function loading_show() {
		jQuery('#commax_container').html('<div class="loading_content">'+L_LOADING+'</div>').hide().fadeIn('fast');
	}
	
	// Main load data function
	function loadData(ajaxPage_ref_id, page, ipp) {
		jQuery.ajax({
			type: "POST",
			url: commaxPostUrl+"include/commax.processor.php?type=ajax_paginate",
			data: "ref_id="+ajaxPage_ref_id+"&coms_page="+page+"&ipp="+ipp,
			success: function(msg) {
				jQuery("#commax_container").html(msg).hide().fadeIn(500,function(){
					activate_replies();
				});
				activate_forms();
			}
		});
	}
	
	// A simple timer before calling the above loadData function
	function startLoadData(ajaxPage_ref_id, page, ipp) {
		loading_show();
		window.setTimeout(function() {
			loadData(ajaxPage_ref_id, page, ipp);
		}, 1000);
		
	}
	
	// Pagination link listener
	jQuery('.commax_paginator > a').live('click',function(e){
		e.preventDefault();
		var page 	= getParameterByName(jQuery(this).attr("href"), "coms_page");
		var ipp 	= getParameterByName(jQuery(this).attr("href"), "ipp");
		startLoadData(ajaxPage_ref_id, page, ipp);
	});
	
	// Function to extract a parameter from a given url
	function getParameterByName(url, name) {
		name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
		var regexS = "[\\?&]"+name+"=([^&#]*)";
		var regex = new RegExp( regexS );
		var results = regex.exec(url);
		if( results == null )
			return "";
		else
			return decodeURIComponent(results[1].replace(/\+/g, " "));
	}
	
	
	
	
	/***********************************************
				CAPTCHA SYSTEM FUNCTIONS
	***********************************************/
	
	// Comment Change captcha image button listener
	jQuery('.commax_change_image_comm').live('click',function(e){
		e.preventDefault();
		jQuery('.commax_captcha_img_comm').animate({
			opacity: 0.25
		}, 20., function() {
			jQuery(".commax_captcha_img").attr("src", commaxPostUrl+'include/commax_captcha.php?'+Math.random()).animate({ opacity: 1 }, 500);
			jQuery('#commax_anti_bot_input').focus();
		});
	});
	
	
	// Reply Change captcha image button listener
	jQuery('.commax_change_image_repl').live('click',function(e){
		e.preventDefault();
		parentID 	= jQuery(this).attr("id");
		parentID 	= parentID.substring(8);
		jQuery('.cci_rpl_'+parentID).animate({
			opacity: 0.25
		}, 20., function() {
			jQuery(".commax_captcha_img").attr("src", commaxPostUrl+'include/commax_captcha.php?'+Math.random()).animate({ opacity: 1 }, 500);
			jQuery('#commax_anti_bot_input_'+parentID).focus();
		});
	});
	
	
	
	
	
	/***********************************************
				KARMA SYSTEM FUNCTIONS
	***********************************************/
	
	// Main Karma Vote function
	function karmaSetVote(ID, voteUPorDOWN) {
		jQuery.post(commaxPostUrl+'include/commax.processor.php?type=karma_vote&ID='+ID+'&voteUPorDOWN='+voteUPorDOWN, function(data) {
			working = false;
			if (data.status) {
				jQuery("#karma_"+ID).hide().removeClass().addClass("karma").addClass(data.state_class).html(data.final_karma).fadeIn("slow");
				jQuery("#karma_msg_"+ID).addClass("karma_msg_success").hide().html(data.message).fadeIn("slow").delay(2000).fadeOut("fast");
			} else {
				jQuery("#karma_msg_"+ID).addClass("karma_msg_error").hide().html(data.message).fadeIn("slow").delay(2000).fadeOut("fast");
			}
		},'json');
	}
	
	
	// Karma vote UP button listener
	jQuery('.vote_up').live('click',function(e){
		e.preventDefault();
		if(working) return false;
		working = true;
		ID 	= jQuery(this).attr("id");
		ID 	= ID.substring(14);
		karmaSetVote(ID, "up");
	});
	
	
	// Karma vote DOWN button listener
	jQuery('.vote_down').live('click',function(e){
		e.preventDefault();
		if(working) return false;
		working = true;
		ID 	= jQuery(this).attr("id");
		ID 	= ID.substring(16);
		karmaSetVote(ID, "down");
	});
	
	
	
});

