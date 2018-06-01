$(document).ready(function(){

	$('.submitSnippet').on('click', function(){
		let snippetName = $('.snippetName').val();
		let snippetCode = $('.snippetCode').val();

		localStorage.setItem(snippetName, snippetCode);
		$('.snippetName').val('')
		$('.snippetCode').val('')
	});


	$('.searchButton').on('click', function(){

		let searchRequest = $('.snippetSearchText').val();

			if (localStorage[searchRequest]) {
				$('.snippetCodeResult').text(localStorage[searchRequest]);
			} else {
				$('.snippetCodeResult').text('Sorry this snippet you searched for does not exist. Maybe you should try writing it for us');
			}
	});


	$('.listAllButton').on('click',function(){
		var listOfAllSnippets = "";
		for (var i = 0; i < localStorage.length; i++){
			var snippetTitle = localStorage.key(i);
    		var snippetCode = localStorage.getItem(localStorage.key(i));
    		listOfAllSnippets+= (`This snippet is called ${snippetTitle}\n ${snippetCode}\n \n`)
		}

		$('.snippetCodeResult').text(listOfAllSnippets);

	});

	$('.deleteButton').on('click',function(){
		var snippetToBeRemoved = $('.deleteName').val();
		localStorage.removeItem(snippetToBeRemoved);

	});

});


