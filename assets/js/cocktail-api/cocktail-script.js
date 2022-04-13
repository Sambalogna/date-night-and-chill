var cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php?"

$("#cocktails").append().html(
    `<button id="cocktailsBtn">Test</button>`
);

function randomDrink() {
    fetch(cocktailURL)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log("Cocktail Data: ", data.drinks[0]);
            var randomDrink = data.drinks[0];

            $("#cocktails").append().html(
                `<div id="cocktail">
                <h4>${randomDrink.strDrink}</h4>
                <h5>${randomDrink.strAlcoholic}</h5>
                <h5><a href="https://www.youtube.com/results?search_query=how+to+make+${randomDrink.strDrink}+drink">How to make</a></h5>
                <img class="cocktailImg" width="35%" src= "${randomDrink.strDrinkThumb}"/> 
                <button onclick="randomDrink()">Test</button>
            </div>`);
        });
};

// adds click listener to execute movie generation
$("#cocktailsBtn").on("click", function (event) {
    event.preventDefault();

    randomDrink();
});

