jQuery(document).ready(function ($) {

	$('.tpp_link').click(function (e) {
		e.preventDefault();
		
		var url = $(this).attr('href');
		var skin = $(this).attr('data-skin')
		var target = $(this).attr('target');
		
		
		
		$.ajax({
			type: "POST",
			url: tpp.ajaxurl,
			data: 'action=tpp_ajax' + '&url=' + url + '&skin=' + skin,
			success: function() {
				if (target == '_blank') {
					window.open(url, '_newtab');
				} else {
					window.location = url;
				}
			},
			failure: function() {
				if (target == '_blank') {
					window.open(url , '_newtab');
				} else {
					window.location = url;
				}
			}
		});
		
		
	});

});