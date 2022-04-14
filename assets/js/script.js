//Display movie card
$("#startBtn").on("click", function (event) {
    event.preventDefault();
    displayMovieBox();
});

function displayMovieBox() {
    $("#firstPage").css("display", "none")
    $("footer").css("display", "none");
    $("#movies").css("display", "block")
}

//Display food card
$("#genres").on("change", function() {
    $("#movieBtn").css("pointerEvents", "auto");
})

$("#movieBtn").on("click", function() {
    $("#saveMovieBtn").css("pointerEvents", "auto");
})


$("#saveMovieBtn").on("click", function(event) {
    event.preventDefault();
    displayFoodBox();
})

function displayFoodBox() {
    $("#movies").css("display", "none")
    $("#dinner").css("display", "block");
    $("#dinnerBtn").css("pointerEvents", "auto");
}

//Display cocktails card
$("#dinnerBtn").on("click", function() {
    $("#saveFoodBtn").css("pointerEvents", "auto");
})

$("#saveFoodBtn").on("click", function(e) {
    e.preventDefault();
    displayCocktails();
})

function displayCocktails() {
    $("#dinner").css("display", "none");
    $("#cocktails").css("display", "block");
    $("#cocktailsBtn").css("pointerEvents", "auto");
}


