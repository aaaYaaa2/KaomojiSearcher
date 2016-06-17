/**
$('#search').keyup(function(){
	var searchField =  $('#search').val().trim().replace(' ','_'); // get value of the input, replace the '' to _ to match keys  
	var myExp = new RegExp(searchField, "i"); // regular expression for ignore the case 
	$.getJSON('kaomoji.json', function(data){
		var output = '<ul class="saerchresults">';
		Object.keys(data).forEach(function(key){
			var kaomoji = data[key];
			if(key.search(myExp)!==-1 || kaomoji['category'].search(myExp)!==-1){
				output+='<li id="' + key + '">' + kaomoji['icon'] + '&nbsp;&nbsp;&nbsp' + key +'</li>';
			}else{
				for(var i=0; i<kaomoji['keywords'].length; i++){
					if(kaomoji['keywords'][i].search(myExp)!==-1){
						output+='<li id="' + key + '">' + kaomoji['icon'] + '&nbsp;&nbsp;&nbsp' + key +'</li>';
					}
				}// prevent repeated print out value. 
			}
		});
		output+='</ul>';
		$('#result').html(output);
	});
});
*/
$('#search').on('keyup', function(){
	if(window.location.hash.length){
		search($('#search').val(window.location.hash.substr(1)).val().toLowerCase()); 
		// .val() get the value, .val(value) set the value 
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