//console.log('test')
//console.log('test2')

$("#dinner").append().html(`
<div class="row">
    <div class="col s12 m7">
        <div class="card">
            <div id= "dinnerImage" class="card-image">
                
            </div>
            <div Id="dinnerInfo" class="card-content">
                
            </div>
            <div class="card-action">
                <a class="waves-effect waves-light btn" id="dinnerBtn" href="#dinner">New Food</a>
            </div>
        </div>
    </div>
</div>`
);


const helpers = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'yummly2.p.rapidapi.com',
		'X-RapidAPI-Key': '1be151836emsh1cafb68ffb3ae6ap1f1fa9jsn67c62ca573f9'
	}
};

var yummlyRapidApiURL =' https://yummly2.p.rapidapi.com/feeds/list?limit=1000&start=0'

function getFood() {
    //event.preventDefault();
    fetch(yummlyRapidApiURL, helpers)
    .then(response => {
      return response.json();
    })
    .then(response => {
      console.log(response)
      var randomNum = Math.floor(Math.random()*22)
      console.log(response.feed[randomNum].display.displayName)
      var image1 = response.feed[randomNum].display.images[0]
      $("#dinnerImage").append().html(`<img height="450px" width="200px" src="${image1}">
      <span class="card-title">${response.feed[randomNum].display.displayName}</span>
        `)
      $("#dinnerInfo").append().html(`<p>${response.feed[randomNum].display.displayName}</p>`)
      
    })
    .catch(error => {
        console.log(error)
    })
}

$("#dinnerBtn").on("click", function (event) {
    event.preventDefault();

    //getFood();
});

