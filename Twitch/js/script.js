$(document).ready(function(){
	var users =  ['freecodecamp', 'Savjz', 'noobs2ninjas', 'nl_kripp', 'fmscout', 'P4wnyhof', 'Forsenlol', 'medrybw', 'amazhs', 'reynad27', 'TrumpSC'],
		placeholder = 'http://www.avatarsdb.com/avatars/funny_confused_frog.gif';

	users.forEach(function(user){
		$.ajax({
			url: 'https://api.twitch.tv/kraken/streams/' + user,
			type: 'GET',
			dataType: 'jsonp',
			success: function(json){
				$.ajax({
					url: 'https://api.twitch.tv/kraken/channels/' + user,
					type: 'GET',
					dataType: 'jsonp',
					success: function(json2){
						var streaming = json.stream ? '<div class="status online">Online</div>' : '<div class="status offline">Offline</div>';
						var game = json.stream ? json2.game + ': ' + json2.status.slice(0, 15) + '...' : '';
						var name = json2.display_name;
						var logo = json2.logo ? json2.logo : placeholder;
						var image = '<img class="logo" src="' + logo + '"></img>';
						$('#list').append('<div  class="item"><a href="http://www.twitch.tv/' + user + '" target="_blank">' + image + '<div class="item-heading">' + name + '</div>' + streaming +  ' <span class="play">'+game+'</span><a/></div>');
					}
				});
			}	
		});
	});	

	$('.tabOnline').on('click', function(){
		$('.offline').parent().parent().fadeOut();	
		$('.online').parent().parent().fadeIn();
		$('.tabOnline').addClass('onl');
		$('.all').removeClass('active');
		$('.tabOffline').removeClass('offl');
	});

	$('.tabOffline').on('click', function(){
		$('.online').parent().parent().fadeOut();
		$('.offline').parent().parent().fadeIn();
		$('.tabOffline').addClass('offl');
		$('.all').removeClass('active');
		$('.tabOnline').removeClass('onl');
	});

	$('.all').on('click', function(){
		$('.online').parent().parent().fadeIn();
		$('.offline').parent().parent().fadeIn();
		$('.all').addClass('active');
		$('.tabOffline').removeClass('offl');
		$('.tabOnline').removeClass('onl');
	});

	$('.search').keyup(function(){
		var srch = $(this).val();
		$('.item-heading').each(function(){
			if($(this).text().search(new RegExp(srch, 'i')) !== -1){				
				$(this).parent().parent().fadeIn();
			}else{
				$(this).parent().parent().fadeOut();
			}
		});
	});


});