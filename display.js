$(window).on('load', function(){
	$('#search').focus();
	$.getJSON('kaomoji.json', function(kaomojis){
		var container = $('#kaomoji-container');
		Object.keys(kaomojis).forEach(function(key){
			var kaomoji = kaomojis[key];
			var label = '<input type="text" class="kaomoji-icon" value= "'+kaomoji['icon']+'" />' + 
			'<br />' + key + '<span class="keywords">' + key + ' ' + kaomoji['keywords'] + kaomoji['category']+
			'</span>';
			container.append('<li class="possible_result">' + label + '</li>'); 
			// set the id of each li to the key of the kaomoji 
		});
	});
});

$('#search').on('search keyup',function(){
	window.location.hash = $(this).val().trim().split(' ').join('_');
	// display the search value behind the hash table 
});

// naive copy and paste of javascript 
$(document).on('click', '.kaomoji-icon',function(){
	//if(document.queryCommandSupport('copy')){
		this.select();
		// Selection and execCommand does not support in Safari 
		if(document.queryCommandSupported("copy")){
			document.execCommand('copy');  // copyed!
			window.getSelection().removeAllRanges(); // leave the anchorNode focusNode properties to null
			alert(this.value + " Copied! ");
		}else{
			alert("Please use Control+C to copy.");
		}
});

// 


