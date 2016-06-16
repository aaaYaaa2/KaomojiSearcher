$(window).on('load', function(){
	$.getJSON('kaomoji.json', function(kaomojis){
		var container = $('#kaomoji-container');
		Object.keys(kaomojis).forEach(function(key){
			var kaomoji = kaomojis[key];
			var label = kaomoji['icon'] + '&nbsp;&nbsp;&nbsp' + key.replace('_',' ');
			container.append('<li id="' + key + '">' + label + '</li>'); 
			// set the id of each li to the key of the kaomoji 
		});
	});
});