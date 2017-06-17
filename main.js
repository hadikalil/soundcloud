console.log("talking");
/*
  Here is a guide for the steps you could take:
*/
// 1. First select and store the elements you'll be working with
let inputField = document.getElementById('trackInput');
let submit = document.getElementById('submitButton');
let tracksApi = 'https://api.soundcloud.com/tracks/?client_id=86b6a66bb2d863f5d64dd8a91cd8de94&q=';
let usersApi = 'https://api.soundcloud.com/users/?client_id=86b6a66bb2d863f5d64dd8a91cd8de94&q=';


    // 2. Create your `onSubmit` event for getting the user's search term

    submit.onclick = searchTracks;

    function searchTracks(e){

      fetch(tracksApi)
      .then(
    function(response) {
      if (response.status != 200) {
        console.log('Looks like there was a problem. Status Code' + response.status);
        return;
      }

    response.json().then(function(data){
      let tracks = data.results;
      console.log(tracks);

      for (var i = 0; i < 15; i++) {
    let tracks = data.results[i];

    let markup =
    `<div class="tracks">
        <img rc=${data.results[i].avatar_url}></img>
        <p>${data.results[i].username}</p>
     </div>`
     document.getElementById('profiles').innerHTML += markup;
}})})};
