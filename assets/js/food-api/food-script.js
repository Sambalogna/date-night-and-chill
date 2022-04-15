//ads base card for food api input
//MATERIALIZE: card-panel hoverable for parent div of wave button: class = "card-panel hoverable"
$("#dinner").append().html(`
<div class="container center">
    <div class="col">
        <div class="card">
             <div id="dinnerDiv" class="card-content cardStyle foodCard"> 
                <span>WHAT TO COOK?</span>
                <div id= "dinnerImage" class="card-image "></div>
                <div id="dinnerInfo"></div>
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
		'X-RapidAPI-Key': '17cb0461bfmshd727cff5bed1717p1d31a4jsnf2516450dd83'
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
            <img id="foodImage"  src="${image1}""></div>`)

            $("#dinnerInfo").append().html(`<h4>${response.feed[randomNum].display.displayName}</h4>
            <p><a class=""target="_blank"href="${response.feed[randomNum].display.source.sourceRecipeUrl}"> Click Here For The Recipe </a>
            <a "target="_blank"href="${response.feed[randomNum].display.source.sourceRecipeUrl}"></a></p>`)

            //localStorage Obj;  fix names 
            //API storage
            var foodRecipeUrl = response.feed[randomNum].display.source.sourceRecipeUrl
            var foodName = response.feed[randomNum].display.displayName
            var foodImageObj = response.feed[randomNum].display.images[0];

            var myLocalFoodStore = {
                foodURL: foodRecipeUrl,
                foodMoniker: foodName,
                foodImage: foodImageObj,

            }

            var foodLocalStorage = JSON.stringify(myLocalFoodStore)
            localStorage.setItem("FoodStorage", foodLocalStorage);
            var useFoodStorage = JSON.parse(localStorage.getItem("FoodStorage"))
            // console.log(useFoodStorage);
            $("#savedDinner").append().html(`
                <div class="container center">
                    
                <div class="col">
                <div class="card">
                    
                    <div id="savedDinnerDiv" class="card-content cardStyle foodCard"> 
                    <span>WHAT TO COOK?</span>
                    <div id= "savedDinnerImage" class="card-image "></div>
                    <div id="savedDinnerInfo"></div>

                </div>
                            <div id= "savedCardAction" class="card-action ">
                                <a class="waves-effect waves-light btn" id="dinnerBtn" href="#dinner">New Food</a>
                                <a class="waves-effect waves-light btn" id="saveFoodBtn">Confirm choice</a>
                            </div>
                        </div>
                    </div>
                </div>`
            );
            $("#savedDinnerImage").append().html(`<div>
                <img id="savedFoodImage"  src="${useFoodStorage.foodImage}""></div>`)

            $("#savedDinnerInfo").append().html(`<h4>${useFoodStorage.foodMoniker}</h4>
                `)
            $("#savedCardAction").append().html(` <a class=""target="_blank"href="${useFoodStorage.foodURL}"> Click Here For The Recipe </a>`)



        })
        .catch(error => {
            console.log(error)
        })

}

$("#dinnerBtn").on("click", function (event) {
    event.preventDefault();
    getFood();

});




// MATERIALIZE FOR CARDS ---SHADOW effect----
// <div class="col s12 m2">
// <p class="z-depth-5">z-depth-5</p>
// </div>
//for our names and company
//https://materializecss.com/footer.html
//<i class="material-icons">!</i> for inside <a> tags
///class="btn-floating pulse" for ^


;
