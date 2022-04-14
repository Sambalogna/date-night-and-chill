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
    console.log("clickity");
    displayFoodBox();
})

function displayFoodBox() {
    $("#movies").css("display", "none")
    $("#dinner").css("display", "block");

}

