var cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php?"

$("#cocktails").append().html(
    `
    <div class="row">
        <div class="col s12 m7">
            <div class="card">
                <div id="cocktailImg" class="card-image"></div>
                <div class="card-content">
                    <div id="cocktailInfo"></div>
                </div>
                <div class="card-action" id="cocktailBtnBox">
                    <a class="waves-effect waves-light btn" id="cocktailsBtn">New Drink</a>
                    <span id="howToMake"></span>
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
        });
};

// adds click listener to execute movie generation
$("#cocktailsBtn").on("click", function (event) {
    event.preventDefault();

    randomDrink();
});

