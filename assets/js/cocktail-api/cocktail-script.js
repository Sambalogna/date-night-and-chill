var cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php?"

$("#cocktails").append().html(
    `
    <div class="container center">
        <div class="col">
            <div class="card">
                
                <div class="card-content cardStyle cocktailCard">
                    <span>GET MY DRINK!</span>
                    <div id="cocktailImg" class="card-image"></div>
                    <div id="cocktailInfo"></div>
                </div>
                <div class="card-action" id="cocktailBtnBox">
                    <a class="waves-effect waves-light btn" id="cocktailsBtn">New Drink</a>
                    <span id="howToMake"></span>
                    <a class="waves-effect waves-light btn" id="saveCocktailBtn">Confirm choice</a>
                </div>
            </div>
        </div>
    </div>
    </div>
    `
);

function randomDrink() {
    fetch(cocktailURL)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log("Cocktail Data: ", data.drinks[0]);
            var randomDrink = data.drinks[0];

            $("#cocktailInfo").append().html(
                `<div id="cocktail">
                    <h4>${randomDrink.strDrink}</h4>
                    <h5>${randomDrink.strAlcoholic}</h5>
                </div>`);
            $("#cocktailImg").append().html(
                `<img class="cocktailImg" width="35%" src= "${randomDrink.strDrinkThumb}"/>`
            )
            $("#howToMake").append().html(
                `<a class="waves-effect waves-light btn" href="https://www.youtube.com/results?search_query=how+to+make+${randomDrink.strDrink}+drink">How to make</a>`
            )
            //localStorage Obj;  fix names 
            //API storage

            var drinkName = randomDrink.strDrink
            var drinkAlcoholic = randomDrink.strAlcoholic;
            var drinkImg = randomDrink.strDrinkThumb
            var myLocalDrinkStore = {
                drinkMoniker: drinkName,
                drinkImage: drinkImg,
                drinkAlcohol: drinkAlcoholic
            }
            var drinkLocalStorage = JSON.stringify(myLocalDrinkStore)
            localStorage.setItem("DrinkStorage", drinkLocalStorage);
            var useDrinkStorage = JSON.parse(localStorage.getItem("DrinkStorage"))
            console.log(useDrinkStorage);
            $("#savedCocktails").append().html(`
                        <div class="container center">
                            <div class="col">
                                <div class="card">
                                    <div id= "savedDrinkImage" class="card-image ">
                                        
                                    </div>
        
                                    <div Id="savedDrinkInfo" class="card-content cardStyle cocktailCard"> 
                                        <span>WHAT TO COOK?</span>
                                    </div>
                                </div>
                            </div>
                        </div>`
            );
            $("#savedDrinkImage").append().html(`<div>
                        <img id="savedDrinkImage"  src="${useDrinkStorage.drinkImage}""></div>`)

            $("#savedDrinkInfo").append().html(`<h4>${useDrinkStorage.drinkMoniker}</h4><h5>${useDrinkStorage.drinkAlcohol}</h5>
                        `)
        });
};

// adds click listener to execute movie generation
$("#cocktailsBtn").on("click", function (event) {
    event.preventDefault();
    randomDrink();
});

