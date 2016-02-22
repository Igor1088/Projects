$(document).ready(function(){

	$('#search').keyup(function(){
		var searchInput = $('#search').val();
		$('#result').html('');
		searchWiki(searchInput);
	});

	$('#btn').on('click', function(){
		var searchInput = $('#search').val();
		$('#result').html('');
		searchWiki(searchInput);
	});

	function searchWiki(input){
		$.ajax({
			url: 'https://en.wikipedia.org/w/api.php',
			data: {action: 'query', list: 'search', srsearch: input, format: 'json'},
			dataType: 'jsonp',
			success: function(data){

				// add new results

				$.each(data.query.search, function(index, value){
					$('#result').append('<div class="item"><a href="https://en.wikipedia.org/wiki/'+value.title+'" target="_blank"><h3 class="itemTitle">'+value.title+'</h3><p class="list-item">'+value.snippet+'</p></a></div>');
				});

			}
		});
	}
});