$('#search').on('keyup', function(){
	if(window.location.hash.length){
		search($('#search').val(window.location.hash.substr(1)).val().toLowerCase()); 
		// get the input from user from the hash tag and transform to LowerCase
	}else{
		search();
	}
});

function search(input){
	input = typeof input === 'undefined' ? '' : input;
	// test if the input is empty or invalid 
	if(input.length){
		$('.possible_result').hide();
		// switch to '#result will not work in this place
		$('.possible_result').each(function(){
			if($(this).text().indexOf(input)>-1){
				$(this).show();
			}
		});
	}else{
		$('.possible_result').show();
	}
	foundOrNotFound();
}

function foundOrNotFound(){
	var foundStatus = Boolean($('.possible_result:visible').length); // test if there are some result displaying 
	$('.not-found').toggle(!foundStatus);
	
}
// function for category search 
$(document).on('click','.cate-button', function(){
	$('#search').val('#' + $(this).text().trim().toLowerCase()); // show the category on search bar 
	search($(this).text().trim().toLowerCase()); // get the category value;
});

// clear the search and hash area 
$(document).on('click', '.clear-search', function(){
	window.location.hash = '';
	$('#search').val('');
	search();
});