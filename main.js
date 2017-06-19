console.log("talking");
/*
  Here is a guide for the steps you could take:
*/
// 1. First select and store the elements you'll be working with
let inputField = document.getElementById('trackInput');
let submit = document.getElementById('submitButton');

//let usersApi = 'https://api.soundcloud.com/users/?client_id=86b6a66bb2d863f5d64dd8a91cd8de94&q=' + userSearchResults;
// 2. Create your `onSubmit` event for getting the user's search term

submit.onclick = searchTracks;

function qualifyAndSearch(event) {
  // When the button is clicked, clean the input and send string to search().
  console.log("Initiate search...");
  let dirtyStrArr = inputField.value.split('');
  let cleanStr = "";
  for (let i = 0; i < dirtyStrArr.length; i++) {
    if (dirtyStrArr[i] === " ") {
      dirtyStrArr[i] = "_";
    }
    cleanStr += dirtyStrArr[i];
  }

  searchUsers(cleanStr);
  searchTracks(cleanStr);
}


	function searchTracks(searchResults) {
		let tracksApi ='https://api.soundcloud.com/tracks/?client_id=86b6a66bb2d863f5d64dd8a91cd8de94&q=' + searchResults;
    console.log(tracksApi);
		fetch(tracksApi).then(function(response) {
			if (response.status != 200) {
				console.log('Looks like there was a problem. Status Code' + response.status);
				return;
			}
			response.json().then(function(data) {
				let tracks = data.tracks;
				console.log(tracks);
				for (var i = 0; i < 15; i++) {
					let tracks = data.tracks[i];
					let markup =
						`<div class="tracks">
        <img rc=${data.tracks[i].title}></img>
        <p>${data.tracks[i].title}</p>
     </div>`
					document.getElementById('bands').innerHTML += markup;
				}
			})
		})
	};
