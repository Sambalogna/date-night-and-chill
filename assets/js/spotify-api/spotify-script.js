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
        if(!data.preview || !data.album.cover) {
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

  var songDiv = document.createElement("div");
  songDiv.classList.add("musicSection");
  songDiv.classList.add("cardStyle")

  //Setting and appending song image
  var coverImage = theData.album.cover;
  var largeImage = `${coverImage}?size=big`;
  console.log(largeImage);
  var imgChild = document.createElement("img");
  imgChild.setAttribute("src", largeImage);
  songDiv.appendChild(imgChild);

  var lineBreak = document.createElement("br");
  songDiv.appendChild(lineBreak);

  //Setting and appending audio preview
  var songPreview = theData.preview;
  var audioPlayer = document.createElement("audio");
  audioPlayer.setAttribute("src", songPreview);
  audioPlayer.controls = true;
  songDiv.appendChild(audioPlayer);

  //Setting and appending song title
  var songTitle = theData.title;
  console.log(songTitle);
  var titleChild = document.createElement("h6");
  titleChild.innerHTML = songTitle;
  songDiv.appendChild(titleChild);

  //Setting and appending artist name
  var artistName = theData.artist["name"];
  console.log(artistName);
  var artistChild = document.createElement("p");
  artistChild.innerHTML = artistName;
  songDiv.appendChild(artistChild);

  //Setting and appending song link button
  var songLink = theData.link;
  console.log(songLink);
  var linkChild = document.createElement("a");
  linkChild.setAttribute("href", songLink);
  linkChild.innerHTML = "Listen";
  songDiv.appendChild(linkChild);

  // var previewChild = document.createElement("div");
  // previewChild.innerHTML = songPreview;
  // songDiv.appendChild(previewChild);

  // var page = document.querySelector("#firstPage");
  // page.appendChild(songDiv);
}

getRandomSong();
