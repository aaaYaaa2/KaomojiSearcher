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