/*
  Here is a guide for the steps you could take:
*/

// 1. First select and store the elements you'll be working with



fetch('https://api.soundcloud.com/users/?client_id=86b6a66bb2d863f5d64dd8a91cd8de94&q=15')
  .then(
    function(response) {
      if (response.status != 200) {
        console.log('Looks like there was a problem. Status Code' + response.status);
        return;
      }

    response.json().then(function(data){
      let music = data.results;
      console.log(music);
  })});
// 2. Create your `onSubmit` event for getting the user's search term


// 3. Create your `fetch` request that is called after a submission


// 4. Create a way to append the fetch results to your page


// 5. Create a way to listen for a click that will play the song in the audio play
