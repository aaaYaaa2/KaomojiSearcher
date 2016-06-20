$(window).on('load', function(){
	$('#search').focus();
	$.getJSON('kaomoji.json', function(kaomojis){
		var container = $('#kaomoji-container');
		Object.keys(kaomojis).forEach(function(key){
			var kaomoji = kaomojis[key];
			var label = '<input type="text" class="kaomoji-icon" value= "'+kaomoji['icon']+'" />' + 
			'<br />' + '<span class="keys-to-be-hide">'+key+'</span>' + '<span class="keywords">' + key + ' ' + kaomoji['keywords'] + kaomoji['category']+
			'</span>';
			container.append('<li class="possible_result">' + label + '</li>'); 
			// set the id of each li to the key of the kaomoji 
		});
		//$(".keys-to-be-hide").toggleClass('.hide-text', localStorage.getItem('kaomoji-text-display')==='false');
	});
	 $(".keys-to-be-hide").toggleClass('.hide-text', localStorage.getItem('kaomoji-text-display')==='false');
	// 'false' should be literal here ? 
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
			window.getSelection().removeAllRanges(); // leave the focusNode properties to null
			alert(this.value + " Copied! ");
		}else{
			alert("Please use Control+C to copy.");
		}
});

// remove text display option
//localStorage.setItem('kaomoji-text-display',!$('.keys-to-be-hide').hasClass('hide-text'));
// even put the localStorage here is going to perform the same function also 
$(document).on('click', '.remove-text', function(){
	$('.keys-to-be-hide').toggleClass('hide-text');
	localStorage.setItem('kaomoji-text-display',!$('.keys-to-be-hide').hasClass('hide-text'));
	// localStorage has a scope of a window and browser life time, it is shared through several window
});

