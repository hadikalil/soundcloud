console.log("talking");
/*
Here is a guide for the steps you could take:
*/
// 1. First select and store the elements you'll be working with
let trackInput = document.getElementById('trackInput');
let submitButton = document.getElementById('submitButton');
submitButton.onclick = searchTracks;
console.log(trackInput);
console.log(submitButton);
//let usersApi = 'https://api.soundcloud.com/users/?client_id=86b6a66bb2d863f5d64dd8a91cd8de94&q=' + userSearchResults;
// 2. Create your `onSubmit` event for getting the user's search term



function searchTracks() {
  let searchResults = trackInput.value;
    // var fetchApi =
    //     'https://api.soundcloud.com/tracks/?client_id=86b6a66bb2d863f5d64dd8a91cd8de94&q=' +
    //     searchResults;
    // console.log(fetchApi);

    fetch('https://api.soundcloud.com/tracks/?client_id=86b6a66bb2d863f5d64dd8a91cd8de94&q=' + searchResults).then(function(response) {
        if (response.status != 200) {
            console.log('Looks like there was a problem. Status Code' + response.status);
            return;
        }

        response.json().then(function(data) {
            let track = data;
            console.log(track);


            function renderTracks() {
              return `
              ${track.map(track =>
              `<div class="box">
              <div class="blankImage"></div>
              <div><img src="${track.artwork_url}"></img></div>
              <div class="title"><p>${track.title}</p></div>
              </div>`
              )}
              `

                console.log(renderTracks());
            }

            let markup = `${renderTracks()}`;
            document.getElementById('bands').innerHTML = markup;

        })
    })
};
