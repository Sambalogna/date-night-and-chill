//ads base card for food api input
//MATERIALIZE: card-panel hoverable for parent div of wave button: class = "card-panel hoverable"
$("#dinner").append().html(`
<div class="container center">
    <div class="col">
        <div class="card">
            <div id= "dinnerImage" class="card-image ">
                
            </div>

             <div Id="dinnerInfo" class="card-content cardStyle foodCard"> 
                <span>WHAT TO COOK?</span>
            </div>
            <div class="card-action ">
                <a class="waves-effect waves-light btn" id="dinnerBtn" href="#dinner">New Food</a>
                <a class="waves-effect waves-light btn" id="saveFoodBtn">Confirm choice</a>
            </div>
        </div>
    </div>
</div>`
);

//rapid api hosts yummly's api;
const helpers = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'yummly2.p.rapidapi.com',
        'X-RapidAPI-Key': '1be151836emsh1cafb68ffb3ae6ap1f1fa9jsn67c62ca573f9'
    }
};
var yummlyRapidApiURL = ' https://yummly2.p.rapidapi.com/feeds/list?limit=1000&start=0'
function getFood() {
    //event.preventDefault();
    fetch(yummlyRapidApiURL, helpers)
        .then(response => {
            return response.json();
        })
        .then(response => {
            //JSON response console log
            console.log(response)

            response.feed.splice(2, 1);



            //create a random number over the length of feed
            var randomNum = Math.floor(Math.random() * response.feed.length)

            //create image from random item in feed
            var image1 = response.feed[randomNum].display.images[0]
            //append random image
            //MATERIALIZE COOL button btn-floating pulse in <a tag>
            $("#dinnerImage").append().html(`<div>
      <img id="foodImage"  src="${image1}" width="10px" height="275px"></div>`)

            $("#dinnerInfo").append().html(`<h4>${response.feed[randomNum].display.displayName}</h4>
      <p><a class=""target="_blank"href="${response.feed[randomNum].display.source.sourceRecipeUrl}"> Click Here For TheRecipe </a>
      <a "target="_blank"href="${response.feed[randomNum].display.source.sourceRecipeUrl}"></a></p>`)

            //localStorage Obj;  fix names 
            //API storage
            var foodRecipeUrl = response.feed[randomNum].display.source.sourceRecipeUrl
            var foodName = response.feed[randomNum].display.displayName
            var foodImageObj = response.feed[randomNum].display.images[0];

            var myLocalFoodStore = {
                foodURL : foodRecipeUrl,
                foodMoniker : foodName,
                foodImage: foodImageObj
            }

            var foodLocalStorage = JSON.stringify(myLocalFoodStore)
            localStorage.setItem("FoodStorage", foodLocalStorage);
            
            var useFoodStorage = JSON.parse(localStorage.getItem("FoodStorage"))
            console.log(useFoodStorage.foodImage);
        //     $('#dinnerImage').append().html(`<div>
        //     <img id="foodImage"  src="${useFoodStorage.foodImage}" width="10px" height="275px"></div>`)
            

        })
        .catch(error => {
            console.log(error)
        })

}

$("#dinnerBtn").on("click", function (event) {
    event.preventDefault();

    getFood();

});


// bring food storage out 


// MATERIALIZE FOR CARDS ---SHADOW effect----
// <div class="col s12 m2">
// <p class="z-depth-5">z-depth-5</p>
// </div>
//for our names and company
//https://materializecss.com/footer.html
//<i class="material-icons">!</i> for inside <a> tags
    ///class="btn-floating pulse" for ^