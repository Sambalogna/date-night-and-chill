function getRandomSong() {
    var min = 10000;
var max = 10010000;

var trackID = Math.floor(Math.random()*(max - min + 1) + min);
// var trackID = 10010000;

var deezerOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
		'X-RapidAPI-Key': 'cdd9e2b86emsh9f93885252a153dp1deaafjsna193840b52c6'
	}
};

fetch(`https://deezerdevs-deezer.p.rapidapi.com/track/${trackID}`, deezerOptions)
	.then(response => response.json())
	.then(data => displaySong(data))
	.catch(err => console.error(err));
}


function displaySong(theData) {
    console.log(theData);

    var songTitle = theData.title;
    console.log(songTitle);

    var artistName = theData.artist["name"];
    console.log(artistName);

    var songLink = theData.link;
    console.log(songLink);

    var coverImage = theData.md5_image;
    console.log(coverImage);
}
   

getRandomSong();
