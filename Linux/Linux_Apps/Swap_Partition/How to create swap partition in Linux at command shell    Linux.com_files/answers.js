/*!
 * Community Answers
 * version: 1.0.0 (02-July-2010)
 * @requires jQuery v1.4.2 or later
 *
 * licensed under GPL licenses:
 *   http://www.gnu.org/licenses/gpl.html
 */
var AnswersFactory = {};
(function($){
    AnswersFactory.initAnswersList = function(){
        $('#question_title').inlineFieldLabel({
            label: $('#lbl_ask_question').html()
        });
        $('#ca_search').inlineFieldLabel({
            label: $('#lbl_search').html()
        }).click(function(){
            if(event.keyCode == 13){
                $('#searchform').submit();
            }
        }).addClass("ui-corner-all");
        $('#question_title').bind('keypress', function(event){
            if(event.keyCode == 13){
                $('#askform').submit();
            }
        });
        $('#continuebutton').button();
        $('#continuebutton').bind('click', function(){
            $('#askform').submit();
        });
        $('#navigation_table').hide();
        
        // Navigation buttons
        $("#catoolbar").buttonset();
        $("#btn_home").button( "option", "icons", {primary:'ui-icon-home'});
        $('#btn_open').button( "option", "icons", {primary:'ui-icon-triangle-1-e'});
        $('#btn_resolved').button( "option", "icons", {primary:'ui-icon-triangle-1-e'});
        $('#btn_most_popular').button( "option", "icons", {primary:'ui-icon-triangle-1-e'});
        $('#btn_most_answered').button( "option", "icons", {primary:'ui-icon-triangle-1-e'});
		$("#catoolbar").find(".ui-state-active").mouseover(function(){$(this).removeClass("ui-state-active");}).mouseout(function(){$(this).addClass("ui-state-active");});
        // End navigation buttons
        
        if($("#ca_search").length > 0){
	        $("#ca_search").autocomplete({
	        	minLength: 2,
	        	source:  function(request, response) {
	    			$.ajax({
	    				url: $("#url_search").html(),
	    				data: {
	    					searchkey : request.term
	    				},
	    				dataType: "json",
	    				type: "POST",
	    				success: function(data) {
	    					response(data.questions);
	    				}
	    			});
	    		},
	    		select: function(event, ui) {
	    			window.location.replace(ui.item.href);
	    			return true;
	    		},
	    		open: function() {
	    			$(this).removeClass("ui-corner-all").addClass("ui-corner-top");
	    		},
	    		close: function() {
	    			$(this).removeClass("ui-corner-top").addClass("ui-corner-all");
	    		}
	        }).data( "autocomplete" )._renderItem = function( ul, item ) {
	        	return $( "<li></li>" )
	    			.data( "item.autocomplete", item )
	    			.append( '<a href="'+item.href+'">' + item.title + '</a>' )
	    			.appendTo( ul );
	        };
        }
    };
    AnswersFactory.initAnswerView = function(){
    	$('#answer_form').hide();
        $('#question_title').inlineFieldLabel({
            label: $('#lbl_ask_question').html()
        });
        $('#continuebutton').button();
        $('#continuebutton').bind('click', function(){
            $('#askform').submit();
        });
        $('.answers').children('.accepted_answer').prependTo($('.answers'));
        
        $("#btn_home").button();
        $("#btn_submit_answer").button().click(function(){
    		$("#btn_submit_answer").hide('blind');
    		$('#btn_subscribe').hide('blind');
    		$("#answer_form").slideDown(1000);
        });
        var link = $('#btn_subscribe').button();
        link.click(function(){
        	$('#progress-confirm').insertAfter($(this)).show();
            $.ajax({
                url     : $(this).attr('href'),
                dataType: 'json',
                success	: function(data) {
                	var msg = '';
                	if (data != null && typeof data.error != 'undefined') {
                		msg = data.error;
                	}else{
                		if(data.data == '1'){
                			link.attr('href', $('#url_unsubscribe').html());
                			link.button('option', 'label', $('#lbl_unsubscribe').html());
                			msg = $('#msg_subscribe').html();
                		}else{
                			link.attr('href', $('#url_subscribe').html());
                			link.button('option', 'label', $('#lbl_subscribe').html());
                			msg = $('#msg_unsubscribe').html();
                		}
                	}
    				$("<div>").html(msg).dialog({
    	                resizable: false,
    	                height: "auto",
    	                width: 400,
    	                modal: true,
    	                buttons : {
    	    				Ok: function() {
    							$( this ).dialog( "close" );
    						}
    					}
    				});
                    $('#progress-confirm').hide();
                }
            });
        	return false;
        });
        $("#btn_cancel").button().click(function(){
    		$("#btn_submit_answer").show('blind');
    		$("#btn_subscribe").show('blind');
    		$('#progress-confirm').hide();
    		$("#answer_form").slideUp(1000);
        });
        $("#btn_save_answer").button().click(function(){
            if((typeof tinyMCE != 'undefined') && tinyMCE.getInstanceById('answer')){
            	tinyMCE.triggerSave();
            }
            $("#progress-confirm").show().insertAfter("#btn_cancel");
            $('#answer_form').ajaxSubmit({
                type : "post",
                dataType : "json",
                success : function(result, status, xhr, form) {
                    if (result != null && typeof result.error != 'undefined') {
        				$("<div>").html(result.error).dialog({
        	                resizable: false,
        	                height: "auto",
        	                width: 400,
        	                modal: true,
        	                buttons : {
        	    				Ok: function() {
        							$( this ).dialog( "close" );
        						}
        					},
        	                title : $("#lbl_error").html()
        				});
                    }else if (result != null && typeof result.info != 'undefined') {
        				$("<div>").html(result.info).dialog({
        	                resizable: false,
        	                height: "auto",
        	                width: 400,
        	                modal: true,
        	                buttons : {
        	    				Ok: function() {
        							$( this ).dialog( "close" );
        						}
        					},
        	                title : $("#lbl_info").html()
        				});
                    	$('#answer').val('');
                    	$('#answer_id').val('0');
                    	$('#sources').val('');
                    	$("#attachment").val('');
                    	if((typeof tinyMCE != 'undefined') && tinyMCE.getInstanceById('answer')){
                    		tinyMCE.activeEditor.setContent('');
                    	}
                    }else{
                    	var tmpl;
                    	var answer_id = 0;
                    	
                    	if($('.answers').length == 0){
                    		$('.answers_wrapper').prepend($('<ul>',{'class':'answers'}));
                    	}
                    	
                    	try{
                    		answer_id = parseInt($('#answer_id').val());
                    	}catch(e){}
                    	
                    	if(answer_id > 0){
                    		tmpl = $('#answer-'+answer_id);
                    		tmpl.find('#description-'+answer_id).html(result.data);
                        	$.scrollTo($('#answer-'+answer_id));
                        	$('#answer-'+answer_id).effect('highlight', {}, 3000);
                    	}else{
                    		tmpl = $('#html_answer-temp').clone();
                    		tmpl.find('.description-temp').append(result.data);
                        	$('.answers').append(tmpl.html());
                        	$.scrollTo($('.answers').children().last());
                        	$('.answers').children().last().effect('highlight', {}, 3000);
                    	}
                    	
                    	$('#answer').val('');
                    	$('#answer_id').val('0');
                    	$('#sources').val('');
                    	$("#attachment").val('');
                    	if((typeof tinyMCE != 'undefined') && tinyMCE.getInstanceById('answer')){
                    		tinyMCE.activeEditor.setContent('');
                    	}
                    }
    				if(typeof Recaptcha != 'undefined'){
    					Recaptcha.reload();
    				}
                    $('#progress-confirm').hide();
                }
            });
            
            return false;
        });
        
        $(".thumb_up, .thumb_down").click(function(){
            var element = $(this).get(0);
            $.ajax({
                url         : $(this).attr('href'),
                success     : function(data){
                    if(typeof data.error != 'undefined' && data.error.length > 0){
                        alert(data.error);
                    }else{
                        $(element).children('span:first').html(data.rating);
                    }
                },
                dataType:   'json'
            });
            return false;
        });
        
        $('.btn_accept').click(function(){
            var id = $(this).attr('id');
            var ajax_url = $(this).attr('href');
            $.ajax({
                url:        ajax_url,
                success:    function(data) {
                    if(typeof data.error != 'undefined' && data.error.length > 0){
                        alert(data.error);
                        $('#progress-'+id).hide();
                        $('.btn_accept').remove();
                    }else{
                        $('#'+id).parents('#answer-'+id).addClass('accepted_answer');
                        $('.answers').prepend($('#'+id).parents('#answer-'+id).show('highlight','',1000,''));
                        $('.btn_accept').remove();
                        $('#btn_submit_answer').remove();
                        $('#progress-'+id).hide();
                    }
                },
                beforeSend: function(){
                    $('#progress-'+id).show();
                },
                dataType:   'json'
            });
            return false;
        });
        
        $('.btn_unaccept').click(function(){
            var id = $(this).attr('id');
            var ajax_url = $(this).attr('href');
            $.ajax({
                url: ajax_url,
                success: function(data) {
                    if(typeof data.error != 'undefined' && data.error.length > 0){
                        alert(data.error);
                    }else{
                        $('#'+id).parents('#answer-'+id).removeClass('accepted_answer');
                        $('#'+id).parents('#answer-'+id).addClass('noalt');
                        $('#'+id).parents('#answer-'+id).find('.answer_table').find('tr:first').remove();
                    }
                    $('#progress-'+id).hide();
                    $('.btn_unaccept').remove();
                },
                beforeSend: function(){
                    $('#progress-'+id).show();
                },
                dataType:   'json'
            });
            return false;
        });

        $(".btn_edit").click(function(){
            var id = $(this).attr('id');
            id = parseInt(id.split('-')[1]);
            if(id > 0){
            	$('#progress-confirm').insertAfter($(this)).show();
            	$.ajax({
            		url: $('#url_get_answer').html(),
            		data: {'id': id},
        			dataType:   'json',
            		success: function(data) {
            			if(typeof data.error != 'undefined' && data.error.length > 0){
            				$("<div>").html(data.error).dialog({
            	                resizable: false,
            	                height: "auto",
            	                width: 400,
            	                modal: true,
            	                buttons : {
            	    				Ok: function() {
            							$( this ).dialog( "close" );
            						}
            					}
            				});
            			}else{
            				if ((typeof tinyMCE != 'undefined') && tinyMCE.getInstanceById('answer')){
                                tinyMCE.activeEditor.setContent(data.answer.description);
            				}else{
            					$('#answer').val(data.answer.description);
            				}
                			$('#sources').val(data.answer.source);
                            $("#btn_submit_answer").hide();
                            $("#answer_form_wrapper").show();
                            $("#answer_form").show();
                            $.scrollTo($("#answer"), {duration:1000, offset: -100});
            			}
            			$('#progress-confirm').hide();
        			}
        		});
                $('#answer_form').find('#answer_id').val(id);
            }
        });
        $(".btn_unpublish, .btn_delete").click(function(){
            var id = strid = $(this).attr("id");
            var url = $(this).attr('href');
            id = parseInt(id.split('-')[1]);
            var lbl_cancel = $('#lbl_no').html();
            var lbl_submit_answer = $('#lbl_yes').html();
            var buttonOpts = {};
            buttonOpts[lbl_submit_answer] = function() {
                $.ajax({
                    url     : url,
                    data    : {'id': id},
                    success:    function(data) {
                        if(typeof data.error != 'undefined' && data.error.length > 0){
                            $("#error-msg").html(data.error);
                            $("#error-msg-wrapper").show();
                        }else{
                            if((strid.split("-")[0] == "unpublishq") || (strid.split("-")[0] == "deleteq")){
                                var redirect = '&nbsp;&nbsp;'+$("#url_home").html();
                                $("#error-msg").html($("#lbl_question_deleted").html() + redirect);
                                $("#error-msg-wrapper").show();
                                $("#msg-confirm").hide();
                            }else{
                                $("#answer-"+id).remove();
                                $("#error-msg-wrapper").hide();
                                $("#dialog-confirm").dialog('close');
                            }
                            $('#progress-confirm').hide();
                        }
                    },
                    beforeSend: function(){
                        $('#progress-confirm').show();
                    },
                    dataType:   'json'
                });
            };
            buttonOpts[lbl_cancel] = function() {
                $("#error-msg-wrapper").hide();
                $('#progress-confirm').hide();
                $(this).dialog('close');
            };
            $("#dialog-confirm").dialog({
                resizable: false,
                height:'auto',
                width: 400,
                modal: true,
                buttons     : buttonOpts,
                title       : $('#lbl_confirm').html()
            });
        });
        
        $(".btn_report").click(function(){
            var lbl_submit_report = $('#lbl_submit').html();
            var lbl_cancel = $('#lbl_cancel').html();
            var buttonOpts = {};
            var answer_id = parseInt($(this).attr("id").substr($(this).attr("id").indexOf("_")+1));
            $("#report_answer_id").val(answer_id);
            buttonOpts[lbl_cancel] = function() {
            	$(this).dialog('close');
            };
            buttonOpts[lbl_submit_report] = function() {
            	$("#dlg_report").ajaxSubmit({
                    type : "post",
                    dataType : "json",
                    success : function(result, status, xhr, form) {
                    	if(typeof result.error != 'undefined' && result.error.length > 0){
            				$("<div>").html(result.error).dialog({
            	                resizable: false,
            	                height: "auto",
            	                width: 400,
            	                modal: true,
            	                buttons : {
            	    				Ok: function() {
            							$( this ).dialog( "close" );
            						}
            					},
            					title : $("#lbl_error").html()
            				});                    		
                    	}else{
            				$("<div>").html(result.data).dialog({
            	                resizable: false,
            	                height: "auto",
            	                width: 400,
            	                modal: true,
            	                buttons : {
            	    				Ok: function() {
            							$( this ).dialog( "close" );
            						}
            					}
            				});
            				$( this ).dialog( "close" );
                    	}
                    }            		
            	});
            	$(this).dialog("close");
            };
        	$("<div>", {"title":$("#lbl_report_this").html()}).append($("#dlg_report").show()).dialog({
        		resizable: false, height: "auto", width: 400, modal: true, buttons : buttonOpts, show: "fade" });
        });
        
        $("#btn_login").click(function(){
        	$("#ca-form-login").dialog({show: "fade"});
        });
        
        $(".submenu").find("li:last > a").attr("style","border-right: 0px;");
    };
    AnswersFactory.initNewQuestion = function(displayTitle){
    	$('#askform').validate({
    		  rules: {
    			  question_title: {
    			      required: true,
    			      maxlength: 255
    			    }
    			  }
    			});
        if(displayTitle){
            $('#question_title').inlineFieldLabel({
                label:$('#lbl_ask_question').val()
            });
        }
        $('#submitbutton').button();
        $('#submitbutton').bind('click', function(){
        	if($('#askform').valid()){
        		$('#askform').submit();
        	}
            return false;
        });
        $('#cancelbutton').button();
        $('#rules_of_conduct').click(function(){
        	$('#lbl_rules_of_conduct').dialog({
                maxWidth: 800,
                maxHeight: 400,
                width: 800,
                height: 400,
                title: $(this).html(),
                buttons : {
    				Ok: function() {
						$( this ).dialog( "close" );
					}
				}
			});
			return false;
        });
		$("#question_tags").tagit({
			availableTags : $("#available-tags").html(),
			tagSource : $("#tag-source").html(),
			singleField: true
		});
    };
})(jQuery);