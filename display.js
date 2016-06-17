$(window).on('load', function(){
	$.getJSON('kaomoji.json', function(kaomojis){
		var container = $('#kaomoji-container');
		Object.keys(kaomojis).forEach(function(key){
			var kaomoji = kaomojis[key];
			var label = kaomoji['icon'] + '&nbsp;&nbsp;&nbsp;' + key + '<span class="keywords">' + key + ' ' + kaomoji['keywords'] + '</span>';
			container.append('<li class="possible_result">' + label + '</li>'); 
			// set the id of each li to the key of the kaomoji 
		});
	});
});

$('#search').on('search keyup',function(){
	window.location.hash = $(this).val().trim().split(' ').join('_');
	// display the search value behind the hash table 
});
