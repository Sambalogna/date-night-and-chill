var cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php?"

fetch(cocktailURL)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        console.log("Cocktail Data: ", data.drinks[0]);
        var randomDrink = data.drinks[0];

        $("#cocktails").prepend().html(
            `<div id="cocktail">
                <h4>${randomDrink.strDrink}</h4>
                <h5>${randomDrink.strAlcoholic}</h5>
                <h5><a href="https://www.youtube.com/results?search_query=how+to+make+${randomDrink.strDrink}+drink">How to make</a></h5>
                <img class="cocktailImg" width="35%" src= "${randomDrink.strDrinkThumb}"/>
            </div>`);
    })