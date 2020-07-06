console.log("talking");
/*
Here is a guide for the steps you could take:
*/
// 1. First select and store the elements you'll be working with
let trackInput = document.getElementById('trackInput');
let submitButton = document.getElementById('submitButton');
let inputOptions = document.getElementById('inputOptions');

console.log(trackInput);
console.log(submitButton);
// autocomplit 
url = `http://api.giphy.com/v1/gifs/search/tags?api_key=CtRkwRRCXZUwnsVMt8IrHQpZUX0cEdLg&q=`
//let usersApi = 'https://api.soundcloud.com/users/?client_id=86b6a66bb2d863f5d64dd8a91cd8de94&q=' + userSearchResults;
// 2. Create your `onSubmit` event for getting the user's search term




submitButton.addEventListener("click", searchTracks)
trackInput.addEventListener("input", searchSuggestions)




function searchTracks() {
  console.log("test");
  let searchResults = trackInput.value;

  fetch('https://api.soundcloud.com/tracks/?client_id=86b6a66bb2d863f5d64dd8a91cd8de94&q=' + searchResults)
    .then(function (response) {
      if (response.status != 200) {
        console.log('Looks like there was a problem. Status Code' + response.status);
        throw "";
      }

      return response.json()
    })
    .then(function (data) {
      let track = data;
      console.log(track);
      ////////////////////////////////////////////////////////////////////////
      let searchedFor = document.createElement('div');
      searchedFor.id = 'searchedFor';
      searchedFor.className = 'searchedFor';
      //   document.body.appendChild(searchedFor);
      document.getElementById('searched').appendChild(searchedFor);
      searchedFor.innerHTML = "Recent Searches" + ": " + searchResults;
      //////////////////////////////////////////////////////////////////////////
      var clientId = "/?client_id=86b6a66bb2d863f5d64dd8a91cd8de94";
      function renderTracks() {
        return `
              ${track.map(track =>
          `<div class="box">
              <div class="blankImage"></div>
              <div src="${track.stream_url}"></div>
              <button id="albumBtn" class="albumButton"><img id="${track.stream_url}${clientId}" src="${track.artwork_url}"></img></button>
              <div id="songTitle" class="title">${track.title}</div>
              </div>`
        )}
              `
      }
      let markup = `${renderTracks()}`;
      document.getElementById('bands').innerHTML = markup;

      var playThis = document.getElementsByClassName('albumButton');
      var playInDocument = document.getElementById('bands').addEventListener('click', function (event) {
        event.target = playThis;
        let playTrack = `<audio src="${event.target.id}" id="audio" controls="controls"></audio>`

        document.getElementById('playAudioHere').innerHTML = playTrack


      })


    })
    .catch(error => {
      console.log('error!');
      console.error(error);
    });

}



function searchSuggestions() {

  inputOptions.innerHTML = "";

  let searchResults = trackInput.value;
  fetch(`http://api.giphy.com/v1/gifs/search/tags?api_key=CtRkwRRCXZUwnsVMt8IrHQpZUX0cEdLg&q=${searchResults}`)
    .then(response => {
      if (response.status != 200) {
        console.log('Looks like there was a problem with autocomplit. Status Code' + response.status);
        throw "";
      }

      return response.json()
    }).then(data => {
      data.data.forEach(element => {
        const newOption = document.createElement("option")
        newOption.value = element.name
        inputOptions.appendChild(newOption)
      })
    })

}

