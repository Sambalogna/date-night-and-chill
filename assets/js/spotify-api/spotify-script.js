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

  // var songDiv = document.createElement("div");
  // songDiv.classList.add("musicSection");
  // songDiv.classList.add("cardStyle")

  // //Setting and appending song image
  // var coverImage = theData.album.cover;
  // var largeImage = `${coverImage}?size=big`;
  // console.log(largeImage);
  // var imgChild = document.createElement("img");
  // imgChild.setAttribute("src", largeImage);
  // songDiv.appendChild(imgChild);

  // var lineBreak = document.createElement("br");
  // songDiv.appendChild(lineBreak);

  //Setting and appending audio preview
  // var songPreview = theData.preview;
  // var audioPlayer = document.createElement("audio");
  // audioPlayer.setAttribute("src", songPreview);
  // audioPlayer.controls = true;
  // songDiv.appendChild(audioPlayer);

  // //Setting and appending song title
  // var songTitle = theData.title;
  // console.log(songTitle);
  // var titleChild = document.createElement("h6");
  // titleChild.innerHTML = songTitle;
  // songDiv.appendChild(titleChild);

  // //Setting and appending artist name
  // var artistName = theData.artist["name"];
  // console.log(artistName);
  // var artistChild = document.createElement("p");
  // artistChild.innerHTML = artistName;
  // songDiv.appendChild(artistChild);

  // //Setting and appending new song button
  // var newSongBtn = document.createElement("a");
  // newSongBtn.classList.add("btn");
  // newSongBtn.setAttribute("id", "songBtn");
  // newSongBtn.innerHTML = "NEW SONG";
  // songDiv.appendChild(newSongBtn);

  // //Setting and appending Confirm song button
  // var confirmSongBtn = document.createElement("a");
  // confirmSongBtn.classList.add("btn");
  // confirmSongBtn.setAttribute("id", "saveSongBtn");
  // confirmSongBtn.innerHTML = "CONFIRM CHOICE";
  // songDiv.appendChild(confirmSongBtn);

  // // var previewChild = document.createElement("div");
  // // previewChild.innerHTML = songPreview;
  // // songDiv.appendChild(previewChild);

  // var page = document.querySelector("#song");
  // page.appendChild(songDiv);

}


//Adding functionality to New song button


