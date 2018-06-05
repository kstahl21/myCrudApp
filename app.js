$(document).ready(() => {

	let namesOfSnippets = [];

	$('.submitSnippet').on('click', () => {
		let snippetName = $('.snippetName').val();
		namesOfSnippets.push(snippetName);
		let snippetCode = $('.snippetCode').val();
		localStorage.setItem(snippetName, snippetCode);
		$('.snippetName').val('')
		$('.snippetCode').val('')
	});


	$('.searchButton').on('click', () => {
		let searchRequest = $('.snippetSearchText').val();
			if (localStorage[searchRequest]) {
				$('.snippetCodeResult').text(localStorage[searchRequest]);
			} else {
				$('.snippetCodeResult').text('Sorry this snippet you searched for does not exist. Maybe you should try writing it for us');
			}
	});


	$('.listAllButton').on('click',() => {
		let listOfAllSnippets = "";
		for (let i = 0; i < localStorage.length; i++){
			let snippetTitle = localStorage.key(i);
    		let snippetCode = localStorage.getItem(localStorage.key(i));
    		listOfAllSnippets+= (`This snippet is called ${snippetTitle}\n ${snippetCode}\n \n`)
		}

		$('.listAllCode').text(listOfAllSnippets);

	});

	$('.deleteButton').on('click',() => {
		let snippetToBeRemoved = $('.deleteName').val();
		localStorage.removeItem(snippetToBeRemoved);

	});

});


