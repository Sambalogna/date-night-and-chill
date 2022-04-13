var min = 10000;
var max = 10010000;

// var trackID = Math.floor(Math.random()*(max - min + 1) + min);
var trackID = 10010000;

var options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
		'X-RapidAPI-Key': 'cdd9e2b86emsh9f93885252a153dp1deaafjsna193840b52c6'
	}
};

fetch(`https://deezerdevs-deezer.p.rapidapi.com/track/${trackID}`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
