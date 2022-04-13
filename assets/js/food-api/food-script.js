//console.log('test')
//console.log('test2')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'yummly2.p.rapidapi.com',
		'X-RapidAPI-Key': '1be151836emsh1cafb68ffb3ae6ap1f1fa9jsn67c62ca573f9'
	}
};

var yummlyRapidApiURL =' https://yummly2.p.rapidapi.com/feeds/list?limit=1000&start=0'

function getFood() {
    fetch(yummlyRapidApiURL, options)
    .then(response => {
      return response.json();
    })
    .then(response => {
      console.log(response)
      var randomNum = Math.floor(Math.random()*22)
      console.log(response.feed[randomNum].display.displayName)
      var image1 = response.feed[randomNum].display.images[0]
      $("body").append().html(`<div id="dinner">
      <div class="row">
        <div class="col s12 m7">
            <div class="card">
            <div class="card-image">
            <img height="250px" width="50px" src="${image1}">
            <span class="card-title">Card Title</span>
            </div>
            <div class="card-content">
      <p>${response.feed[randomNum].display.displayName}</p>
    </div>
    <div class="card-action">
      <a href="#">This is a link</a>
    </div>
  </div>
</div>
</div>
      </div>`)
      
    })
    .catch(error => {
        console.log(error)
    })
}
getFood();
// card for information to go into. 
{/* <div class="row">
<div class="col s12 m7">
  <div class="card">
    <div class="card-image">
      <img src="images/sample-1.jpg">
      <span class="card-title">Card Title</span>
    </div>
    <div class="card-content">
      <p>I am a very simple card. I am good at containing small bits of information.
      I am convenient because I require little markup to use effectively.</p>
    </div>
    <div class="card-action">
      <a href="#">This is a link</a>
    </div>
  </div>
</div>
</div> */}