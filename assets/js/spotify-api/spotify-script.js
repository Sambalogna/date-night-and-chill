//Defining card structure for the song

$("#song").append().html(
  `
  <div class="container center">
      <div class="col">
          <div class="card">
              
              <div class="card-content cardStyle musicCard">
                  <span>THE PERFECT SONG!</span>
                  <div id="songImg" class="card-image"></div>
                  <div id="audioPlayer"></div>
                  <div id="songDetails"></div>
              </div>
              <div class="card-action" id="songBtnBox">
                  <a class="waves-effect waves-light btn" id="songBtn">New Song</a>
                  <span id="howToMake"></span>
                  <a class="waves-effect waves-light btn" id="saveSongBtn">Confirm choice</a>
              </div>
          </div>
      </div>
  </div>
  </div>
  `
);


function getRandomSong() {
  var min = 10000;
  var max = 10010000;

  var trackID = Math.floor(Math.random() * (max - min + 1) + min);
  // var trackID = 10010000;

  var deezerOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      "X-RapidAPI-Key": "cdd9e2b86emsh9f93885252a153dp1deaafjsna193840b52c6",
    },
  };

  fetch(
    `https://deezerdevs-deezer.p.rapidapi.com/track/${trackID}`,
    deezerOptions
  )
    .then((response) => response.json())
    .then((data) => {
      if (!data.preview || !data.album.cover) {
        getRandomSong();
      }
      else {
        displaySong(data);
      }
    })
    .catch((err) => console.error(err));
}

function displaySong(theData) {
  console.log(theData);



  //Append album cover image
  $("#songImg").append().html(
    `<img class="movieImg" width="15%" src="${theData.album.cover}?size=big" />`
  )

  //Append 30 second song preview
  $("#audioPlayer").append().html(
    `<div id="audioBar">
          <audio src = "${theData.preview}" controls></audio>
      </div>`
  )

  //Append Song title and artist
  $("#songDetails").append().html(
    `<div id= "titleSong">
        <h4>${theData.title}</h4>
        <h5>${theData.artist["name"]}</h5>
    </div>`
  )


  var songDisplayDiv = document.querySelector("#song");
  if (songDisplayDiv.style.display == "block") {
    $("#songBtn").css("pointerEvents", "auto");
  }

  // ------------------------------------------------

  //Saving to local storage
  
            var nameOfSong = theData.title;
            console.log("the title is " + nameOfSong);
            var pictureOfSong = theData.album.cover;
            var nameofArtist = theData.artist["name"];
            console.log("the artist is " + nameofArtist);

            var myLocalSongStore = {
                mySongName : nameOfSong,
                mySongPicture : pictureOfSong,
                mySongArtist: nameofArtist,

            }


            // var foodLocalStorage = JSON.stringify(myLocalFoodStore)
            localStorage.setItem("songStorage", JSON.stringify(myLocalSongStore));
            var useSongStorage = JSON.parse(localStorage.getItem("songStorage"))
            console.log(useSongStorage);
           

            $("#savedSong").append().html(
              `
              <div class="container center">
                  <div class="col">
                      <div class="card">
                          
                          <div class="card-content cardStyle musicCard">
                              <span>THE PERFECT SONG!</span>
                              <div id="savedSongImg" class="card-image"></div>
                              
                              <div id="savedSongName"></div>
                              <div id = "savedSongArtist"></div>
                          </div>
                          
                      </div>
                  </div>
              </div>
              </div>
              `
            );


                $("#savedSongImg").append().html(
                  `<img class="movieImg" width="15%" src="${theData.album.cover}?size=big" />`
                )

                $("#savedSongName").append().html(`<h4>${useSongStorage.mySongName}</h4>
                `)
                $("#savedSongArtist").append().html(`<h5>${useSongStorage.mySongArtist}</h5>
                `)
                


}


