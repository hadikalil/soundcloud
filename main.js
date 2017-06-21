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



              let searchedFor = document.createElement('div');

              searchedFor.id = 'searchedFor';
              document.body.appendChild(searchedFor);
               document.getElementById('searched').appendChild(searchedFor);
              searchedFor.className = 'searchedFor';
              searchedFor.innerHTML += "showing results for" +": "+ searchResults;



            function renderTracks() {
              return `
              <audio class="trackToPlay"></audio>
              ${track.map(track =>
              `<div class="box">
              <div class="blankImage"></div>
              <div src="${track.stream_url}"></div>
              <button id="albumBtn" class="albumButton"><img src="${track.artwork_url}"></img>
              <div id="songTitle" class="title">${track.title}</div></button>
              </div>`
              )}
              `
              // let audioPlayer = document.createElement('audio');
              // let audioButton = document.getElementsByClassName('albumButton');
              // console.log(audioPlayer);
              // console.log(audioButton);
              // audioButton.addEventListener('click', function(){
              //   document.body.appendChild(audioPlayer);
              //   document.getElementById('player1').appendChild(audioPlayer);
              //
              // })



            }

            let markup = `${renderTracks()}`;
            document.getElementById('bands').innerHTML = markup;

        })
    })
};
